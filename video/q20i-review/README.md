# Q20i Video Production Guide

All assets for the YouTube long-form review + Shorts cut. Built to match the published written review.

## What's in this folder

| File | Purpose |
|---|---|
| `01-script-longform.md` | 8:54 script for the main YouTube video — read it aloud and tweak to your voice |
| `02-script-shorts.md` | 60-second vertical Shorts cut |
| `03-youtube-metadata.md` | Title options, description, tags, pinned comment, chapter markers |
| `slides/*.svg` | 6 branded text cards used as visual cuts during the video |
| `thumbnail.svg` | YouTube thumbnail (1280×720) — convert to PNG before upload |

## Production workflow — total time ~3-4 hours first time, ~2 hours after

### 1. Record voiceover (~45 min)

- Open `01-script-longform.md`
- **Read aloud once** before recording — change anything that doesn't sound like you talking
- Record into your **phone voice memo app** (iPhone Voice Memos or Android equivalent) — they're better than you'd think
- Recording tips:
  - Pillow or blanket around you to deaden room reflections
  - Phone ~6-8 inches from your mouth
  - Mouth offset slightly (so you don't pop the P's)
  - Don't read in monotone — vary pacing and emphasis like normal conversation
  - One pass per section; redo any section that doesn't feel natural
- AirDrop / send the file to your computer

### 2. Convert slides + thumbnail to PNG (~2 min)

Run from the repo root:
```powershell
& 'C:\Users\JLee4\OneDrive\Desktop\theisaacstandard\automation\svg-to-png.ps1'
```

This will *not* render the video slides by default (they're in `video/q20i-review/slides/`, not `public/brand/`). Either:

**Option A — temporary copy into the brand pipeline:**
```powershell
Copy-Item video\q20i-review\slides\*.svg public\brand\
Copy-Item video\q20i-review\thumbnail.svg public\brand\
& '.\automation\svg-to-png.ps1'
# Then move the PNGs back:
Move-Item public\brand\png\01-title.png video\q20i-review\slides\
# (repeat for each slide and thumbnail)
```

**Option B — drag-drop each SVG into [cloudconvert.com/svg-to-png](https://cloudconvert.com/svg-to-png)**, set output width to `1920` for slides and `1280` for thumbnail. Faster for one-offs.

### 3. Gather B-roll assets

You'll need:
- **Product photos** of the Q20i — use Soundcore's manufacturer images (already in the written review). Right-click → save the JPGs.
- **Lifestyle B-roll** — search [pexels.com](https://www.pexels.com) or [pixabay.com](https://pixabay.com) for free stock video: "headphones travel," "commute airport," "café laptop," "USB-C charging," "Bluetooth pairing"
- **Your own phone footage** if you have the Q20i — even a 5-second handheld shot of them on a desk adds enormous authenticity
- **Reference images** of competitors mentioned (1More SonoFlow, Sony WH-CH720N) — same approach

### 4. Edit in CapCut (free, recommended)

Download: https://www.capcut.com/

Workflow:
1. Drop your voiceover onto the timeline first — that sets the timing for everything
2. Drop slide PNGs at the section transitions per the script's `[B-roll cue]` markers
3. Layer B-roll over the gaps
4. Add fade-in/out (3-5 frames) on every visual transition
5. Audio:
   - Background music — search "lo-fi instrumental" royalty-free, drop it at 8-12% volume
   - Duck the music down during important verbal moments (-3 dB) using auto-ducking
6. Export 1920×1080, H.264, "High quality" preset

### 5. Cut the Shorts version (~20 min)

In a new CapCut project:
1. Start with the same voiceover, but only use the segments matching `02-script-shorts.md` (re-record this script — it's tighter than the long-form, you can't just splice clips)
2. 9:16 aspect ratio (1080×1920)
3. Big text overlays per the script's `[TEXT OVERLAY]` cues
4. Fast cuts every 2-3 seconds — Shorts pacing is much faster than long-form
5. Export

### 6. Upload to YouTube

1. **Long-form:** Upload at 1920×1080. Paste title + description + tags from `03-youtube-metadata.md`. Add chapters (already formatted in the description). Add thumbnail PNG. Pin the first comment.
2. **Shorts:** Upload as vertical 9:16. Use #Shorts in description. Title = "Anker Q20i — 3 Things Nobody Tells You #Shorts" (or similar from your title options). Link to the long-form in the description.

### 7. Cross-post the Shorts

The same 60-second vertical file works on:
- **TikTok** (drop URL, end on rating only)
- **Instagram Reels** (link in bio)
- **X / Twitter** (just upload)
- **LinkedIn** (if it fits your audience — probably skip for a consumer-tech channel)

## What good looks like

If this is your first video, the goal is **not "perfect."** It's "shipped, honest, and findable." MKBHD's first video was shot on a webcam.

What you need:
- Audio is clear (the single most important thing — viewers forgive bad video, never bad audio)
- Brand visuals are consistent (we have that wired)
- The script reads like a real person, not AI (record it in your voice — done)
- You hit the 8-minute mark for mid-roll ads (script targets 8:54)
- Thumbnail is high-contrast and curiosity-led (we have that)

What you don't need yet:
- A real microphone (phone voice memo is fine)
- A camera (this is faceless / slideshow style)
- A studio (your bedroom with a blanket works)
- A logo animation (the brand intro card holds on screen for 3 seconds — that's intentional minimalism)

Upload it. Iterate from there.
