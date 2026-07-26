The Geekom A6 is a palm-sized mini PC that delivers genuine desktop performance thanks to an AMD Ryzen 7 6800H and Radeon 680M graphics. It handles office work, light 1080p gaming, and 4K media playback without breaking a sweat. At around $500–$600, it undercuts similarly specced Intel NUCs and Mac minis, but you'll need to supply your own RAM and storage. If you want a tiny, quiet, capable machine for productivity and casual gaming, the A6 is a strong contender.

The Geekom A6 is a compact mini PC built around AMD's Ryzen 7 6800H processor and integrated Radeon 680M graphics. It's aimed at home office workers, students, and light gamers who want a small footprint without sacrificing performance. The A6 competes directly with Intel NUC 13 Pro, Asus PN64, and Apple Mac Mini M2, but at a lower price point. Geekom positions it as a 'productivity powerhouse,' and after a week of daily use, I mostly agree.

At $549 (barebones) or $649 with 32GB RAM and 512GB SSD, the A6 sits in a sweet spot between budget mini PCs and premium NUCs. It supports up to 64GB of DDR5 RAM, dual NVMe SSDs, and Wi-Fi 6E. The unit I tested came with 32GB of Crucial DDR5 and a 1TB WD Black SN770. Setup was straightforward: add RAM and SSD, install Windows 11, and you're up and running in about 15 minutes.

The Ryzen 7 6800H is a 45W laptop-class chip, but in the A6's well-ventilated chassis, it sustains boost clocks impressively. In Cinebench R23 multi-core, the A6 scored 12,847 — within 5% of a desktop Ryzen 5 5600X. Single-core hit 1,512, which is competitive with Intel's 12th-gen mobile chips. For office tasks (Word, Excel, 20+ Chrome tabs), the A6 never stuttered. Video transcoding in HandBrake (4K to 1080p H.265) completed in 4 minutes 12 seconds — about 30 seconds slower than an Intel NUC 13 Pro with Core i7-1360P.

The real star is the Radeon 680M integrated graphics. It's roughly on par with an NVIDIA GeForce GTX 1050 Ti or AMD's own RX 6400. In 1080p gaming, I saw 45–60 fps in Rocket League (high settings), 35–50 fps in Fortnite (medium), and 25–35 fps in Cyberpunk 2077 (low, FSR on). That's not a gaming rig, but it's more than capable for esports and older titles. The A6 also drives two 4K displays at 60 Hz via HDMI 2.0 — perfect for a dual-monitor productivity setup.

The A6's chassis is all metal (aluminum top, steel bottom), with a brushed finish that resists fingerprints. The top panel has a subtle hexagonal vent pattern that looks good and aids airflow. The unit feels dense and well-made — no creaks or sharp edges. At 1.3 lbs, it's easy to mount behind a monitor using the included VESA bracket.

Thermally, the A6 is impressive. Under a sustained Cinebench loop, the CPU peaked at 85°C, and the fan noise was a steady 38 dBA at 1 foot — audible but not intrusive. Idle fan is silent (sub-20 dBA). The system never throttled during my testing; clock speeds stayed above 4.0 GHz on all cores. The only caveat: the bottom panel gets warm (around 45°C) under load, so don't place it on a soft surface that blocks airflow.

Geekom packed the A6 with a generous array of ports. The front has two USB-A 3.2 Gen 2 (10 Gbps), one USB-C 3.2 Gen 2 (10 Gbps, no Thunderbolt), and a headphone jack. The rear adds two HDMI 2.0, another USB-C 3.2 Gen 2, one USB-A 3.2 Gen 2, one USB-A 2.0 (for keyboard/mouse), and a 2.5GbE Ethernet port. The 2.5GbE is a nice touch for NAS users or anyone with a fast home network.

The lack of Thunderbolt 4 is the biggest omission — you can't connect a Thunderbolt dock or eGPU. The USB-C ports support DisplayPort Alt Mode, so you can drive a third display via USB-C to HDMI/DP adapter, but that's limited to 4K 60 Hz. For most users, the two HDMI ports plus one USB-C display output (three total) is sufficient. Wi-Fi 6E performance was solid: I measured 800 Mbps throughput on a 1 Gbps fiber connection at 15 feet from the router.

The A6 is user-upgradable: two SO-DIMM slots (DDR5) and two M.2 2280 slots (PCIe 4.0). Access is via four Phillips screws on the bottom panel — no prying required. The included Crucial RAM and WD Black SSD performed well, but you can swap them out easily. I tested with a Samsung 990 Pro and saw sequential reads of 7,000 MB/s — the A6 fully supports PCIe 4.0 speeds.

The BIOS is basic but functional. You can adjust power limits (TDP from 35W to 54W), enable virtualization (for WSL or Docker), and set fan curves. There's no undervolting support, which is a shame for those wanting to reduce heat/noise. The BIOS also lacks a 'boot from USB' priority override — you have to press F7 during POST to select a boot device. It's workable but less polished than what you'd find on an ASUS or Intel board.

The A6 ships with Windows 11 Pro (no bloatware beyond the usual Microsoft apps). Geekom includes a driver update utility that works well — it found and installed the latest AMD chipset and graphics drivers in one click. The unit also supports Linux (Ubuntu 22.04 LTS worked out of the box, including Wi-Fi and audio).

Geekom offers a 3-year warranty on the A6, which is longer than most mini PC manufacturers (Intel NUCs have 1 year, ASUS PN series has 2 years). Support is email-based, with a 24–48 hour response time. I tested the support channel with a question about RAM compatibility and got a helpful reply in 22 hours. That's better than average for this price bracket.

{'title': 'No Thunderbolt 4', 'body': "The USB-C ports are limited to 10 Gbps and don't support Thunderbolt docks or eGPUs. If you need high-speed external storage or a single-cable dock setup, look at Intel NUC 13 Pro or ASUS PN64."}

{'title': 'RAM and Storage Not Included (Barebones)', 'body': 'The $549 barebones model requires you to buy and install DDR5 SO-DIMMs and an M.2 SSD. This adds $80–$150 to the effective cost. The pre-configured model ($649) is a better deal for most.'}

{'title': 'Fan Noise Under Sustained Load', 'body': "While idle is silent, a long render or gaming session pushes fan noise to 38 dBA — noticeable in a quiet room. It's not loud, but it's not silent either."}

{'title': 'No SD Card Reader', 'body': "Photographers and videographers will miss the built-in SD card slot. You'll need an external USB reader."}

{'title': 'BIOS Lacks Advanced Tuning', 'body': 'No undervolting, no per-core overclocking, no boot order priority in the main menu. Enthusiasts will find it limiting.'}

The Geekom A6's main rivals are the Intel NUC 13 Pro (Core i7-1360P, $750 barebones), the ASUS PN64 (Core i7-12700H, $680 barebones), and the Apple Mac Mini M2 ($599 with 8GB RAM, 256GB SSD). The NUC 13 Pro offers Thunderbolt 4 and slightly faster single-core performance, but costs $200 more. The PN64 has similar port selection but uses older DDR4 RAM and is louder under load. The Mac Mini M2 is faster in single-core and has better GPU performance for creative apps, but you can't upgrade RAM or storage after purchase, and it lacks Windows compatibility.

The A6's price inflection point is around $600. At that price, you get a mini PC that's faster than the Mac Mini M2 in multi-core tasks, more upgradable than any NUC, and quieter than the ASUS PN64. If you need Thunderbolt or macOS, the NUC or Mac Mini are better choices. If you want the best value for a compact Windows machine that can handle light gaming, the A6 is the winner.

The Geekom A6 is a well-built, capable mini PC that delivers excellent performance for its size and price. The Ryzen 7 6800H and Radeon 680M combo handles productivity and light gaming with ease, and the port selection is generous. The lack of Thunderbolt 4 and the barebones model's extra cost are the main drawbacks. If you're in the market for a compact Windows machine that doesn't compromise on performance, the A6 earns a strong recommendation. Rating: 4.2/5.