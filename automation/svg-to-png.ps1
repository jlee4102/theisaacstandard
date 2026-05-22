# svg-to-png.ps1
# Converts every SVG in public/brand/ to a PNG using Microsoft Edge
# headless mode (no Node, no ImageMagick, no cloud services).
# Output goes to public/brand/png/.
#
# Requires Microsoft Edge (pre-installed on Windows 10/11).

$ErrorActionPreference = 'Continue'

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$srcDir = Join-Path $repoRoot 'public\brand'
$outDir = Join-Path $repoRoot 'public\brand\png'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory $outDir -Force | Out-Null }

$edgeCandidates = @(
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe"
)
$edge = $edgeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) {
    Write-Error "Microsoft Edge not found at standard paths. Install from microsoft.com/edge."
    exit 1
}
Write-Host "Using Edge: $edge"

$exportSizes = @{
    'mark.svg'              = @{ width = 512;  height = 512  }
    'mark-light.svg'        = @{ width = 512;  height = 512  }
    'lockup-horizontal.svg' = @{ width = 960;  height = 192  }
    'og-image.svg'          = @{ width = 1200; height = 630  }
    'youtube-banner.svg'    = @{ width = 2560; height = 1440 }
    'twitter-banner.svg'    = @{ width = 1500; height = 500  }
    'web-banner.svg'        = @{ width = 1920; height = 480  }
    'video-intro.svg'       = @{ width = 1920; height = 1080 }
    'q20i-x-card.svg'       = @{ width = 1600; height = 900  }
}

$wrapperTemplate = @'
<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,900;1,400;1,500;1,600;1,900&family=Spline+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=block" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:__WIDTH__px;height:__HEIGHT__px;background:transparent;overflow:hidden}
  svg{width:100%;height:100%;display:block}
</style>
</head><body>
__SVG__
</body></html>
'@

$tempDir = Join-Path $env:TEMP 'isaac-svg-render'
if (-not (Test-Path $tempDir)) { New-Item -ItemType Directory $tempDir -Force | Out-Null }

foreach ($file in Get-ChildItem $srcDir -Filter '*.svg') {
    $name = $file.Name
    $stem = [System.IO.Path]::GetFileNameWithoutExtension($name)
    $size = $exportSizes[$name]
    if (-not $size) {
        Write-Host "Skipping $name (no export size defined)" -ForegroundColor Yellow
        continue
    }

    # Read explicitly as UTF-8 (PS 5.1 -Raw default is system codepage = mojibake)
    $svgContent = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $html = $wrapperTemplate `
        -replace '__WIDTH__', $size.width `
        -replace '__HEIGHT__', $size.height `
        -replace '__SVG__', $svgContent

    $wrapperPath = Join-Path $tempDir "$stem.html"
    # UTF-8 without BOM so the inline SVG's UTF-8 characters render correctly
    [System.IO.File]::WriteAllText($wrapperPath, $html, [System.Text.UTF8Encoding]::new($false))

    $outPath = Join-Path $outDir "$stem.png"
    $fileUri = (New-Object System.Uri($wrapperPath)).AbsoluteUri

    Write-Host ("Rendering {0} -> {1}.png ({2}x{3})..." -f $name, $stem, $size.width, $size.height)

    & $edge `
        --headless=new `
        --disable-gpu `
        --hide-scrollbars `
        --no-sandbox `
        --default-background-color=00000000 `
        --virtual-time-budget=8000 `
        --window-size="$($size.width),$($size.height)" `
        --screenshot="$outPath" `
        $fileUri 2>$null | Out-Null

    if (Test-Path $outPath) {
        $kb = [math]::Round((Get-Item $outPath).Length / 1KB, 1)
        Write-Host ("  OK  {0}.png ({1} KB)" -f $stem, $kb) -ForegroundColor Green
    } else {
        Write-Host ("  FAIL {0}" -f $name) -ForegroundColor Red
    }
}

Write-Host ""
Write-Host ("Done. PNGs in: " + $outDir)
Write-Host ""
Write-Host "If text appears in fallback fonts (Georgia, not Fraunces):"
Write-Host "  Re-run the script. Google Fonts can be slow on first request."
Write-Host "  Or raise --virtual-time-budget above 8000."
