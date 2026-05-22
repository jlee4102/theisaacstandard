$ErrorActionPreference = 'Stop'
$taskName = 'TheIsaacStandard-WeeklyReviews'
$scriptPath = 'C:\Users\JLee4\OneDrive\Desktop\theisaacstandard\automation\weekly-reviews.ps1'

if (-not (Test-Path $scriptPath)) { Write-Error "Cannot find $scriptPath"; exit 1 }

schtasks /delete /tn $taskName /f 2>$null

$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$scriptPath`""
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Sunday -At 9:07AM
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -RunOnlyIfNetworkAvailable -MultipleInstances IgnoreNew

Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Description 'Weekly autonomous draft batch for The Isaac Standard.' -Force | Out-Null

Write-Host "Registered: $taskName (fires Sundays at 9:07 AM)"
Write-Host "Verify:   schtasks /query /tn $taskName"
Write-Host "Test now: schtasks /run /tn $taskName"
Write-Host "Remove:   schtasks /delete /tn $taskName /f"
