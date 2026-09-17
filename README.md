# Aarhasi Group — Multi-Version Client Review Portal

This repository contains the multi-version review build for two related corporate entities:
1. **Aarhasi Global** (India entity) — B2B Technology Distribution & Apple Authorized DPP Partner (Multi-page: Home, About, Solutions, Leadership, Contact, 404).
2. **Aarhasi World Trading FZCO** (Dubai entity) — Global Consumer Electronics Trade, Re-Export & Financing Engine (Single-page architecture).

All six versions are self-contained, independently browsable static websites with zero npm dependencies, build steps, or external image requests.

---

## 🌐 Version Directory & Live URLs

When published to GitHub Pages at `https://snehanathani.github.io/aarhasi/`, each version is accessible at its own dedicated subdirectory path:

| Entity | Version | Design System / Direction | URL Path |
|---|---|---|---|
| **Review Hub** | — | **Version Picker Landing Page** | `/index.html` |
| **Aarhasi Global (India)** | **Version 1** | **Modern Tech Enterprise** (Original Preserved) | `/v1-aarhasi-global/` |
| **Aarhasi Global (India)** | **Version 2** | **Executive Editorial & Institutional Heritage** | `/v2-aarhasi-global/` |
| **Aarhasi Global (India)** | **Version 3** | **Nordic Industrial & High-Precision Distribution** | `/v3-aarhasi-global/` |
| **Aarhasi World (Dubai)** | **Version 1** | **Dubai Trade Engine** (Original Preserved) | `/v1-aarhasi-world/` |
| **Aarhasi World (Dubai)** | **Version 2** | **Gulf Sovereign & High-Finance Trade** | `/v2-aarhasi-world/` |
| **Aarhasi World (Dubai)** | **Version 3** | **Hyper-Logistics & Cross-Border Velocity** | `/v3-aarhasi-world/` |

---

## 🚀 How to Enable GitHub Pages

To host this repository on GitHub Pages:

1. **Commit and Push** all files to your GitHub repository (e.g. `main` branch).
2. Ensure the `.nojekyll` file at the repository root is included in your commit (this prevents GitHub's Jekyll engine from ignoring underscore or dot-prefixed assets).
3. In GitHub, navigate to your repository:
   - Click **Settings** (gear icon in the top repository menu).
   - In the left sidebar under *Code and automation*, click **Pages**.
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` (or your default branch) and choose `/ (root)` as the folder.
     - Click **Save**.
4. GitHub Actions will trigger a deployment workflow. Within 1–2 minutes, your review site will be live at:
   ```
   https://snehanathani.github.io/aarhasi/
   ```

---

## ⚖️ Corporate Structure Notice: Two Separate Legal Entities

> **Important Legal Context:**
> **Aarhasi Global Pvt Ltd** (India) and **Aarhasi World Trading FZCO** (Dubai) are separate legal entities operating under different regulatory regimes, jurisdictions, and tax environments.
>
> - **Aarhasi Global** is registered in India, holds Apple Authorized DPP status in Gujarat, and serves domestic B2B enterprise procurement and wholesale distribution.
> - **Aarhasi World Trading FZCO** is registered in the Dubai Free Zone, UAE, and operates as an international re-export, trading, and cross-border trade finance arm.
>
> They are intended to end up on **two completely independent production domains**:
> - India: `https://www.aarhasiglobal.com`
> - Dubai: `https://www.aarhasiworld.com`

---

## 🎨 Design Direction Summary

### Aarhasi Global (India Entity)
- **Version 1 (Modern Tech Enterprise):**
  - **Typography:** Space Grotesk (geometric sans headings) + Inter (neutral body).
  - **Color Palette:** Deep Indigo (`#3B4FE0`), Ink Slate (`#0B0D12`), Clean White (`#FFFFFF`).
  - **Character:** Authoritative corporate tech, soft card drop shadows, clean metric pills.
- **Version 2 (Executive Editorial & Institutional Heritage):**
  - **Typography:** Fraunces (editorial display serif) + Plus Jakarta Sans (warm legibility body).
  - **Color Palette:** Imperial Midnight Navy (`#0A1220`), Warm Alabaster Cream (`#FAF9F5`), Polished Brass (`#B8862E`).
  - **Character:** High-prestige institutional look, sharp architectural corners (0px radius), fine 1px brass hairline dividers, pull-quotes, and ledger-style capability rows.
- **Version 3 (Nordic Industrial & High-Precision Distribution):**
  - **Typography:** Syne (bold geometric display sans) + DM Sans + Space Mono telemetry data.
  - **Color Palette:** Carbon Obsidian (`#090A0D`), Pure Technical White (`#FFFFFF`), Cadmium Electric Orange (`#FF5400`).
  - **Character:** Command center telemetry, bento modular cards, solid tactile drop-shadows (`box-shadow: 3px 3px 0px #090A0D`), live DPP channel status tags.

### Aarhasi World Trading FZCO (Dubai Entity)
- **Version 1 (Dubai Trade Engine):**
  - **Typography:** Space Grotesk + Inter.
  - **Color Palette:** Emerald Green (`#16A87C`), Deep Charcoal (`#0B0D12`), Pure White.
  - **Character:** Dynamic trade corridors, radial ambient hero glow, multi-currency trade financing.
- **Version 2 (Gulf Sovereign & High-Finance Trade):**
  - **Typography:** Cinzel (monumental Roman display serif) + Fraunces + Plus Jakarta Sans.
  - **Color Palette:** Royal Onyx (`#080A0E`), Champagne Sand (`#FAF8F4`), Burnished Gold (`#D4AF37`).
  - **Character:** DIFC / Sovereign wealth aesthetic, gold gradient headers, currency exchange matrix, gold-bordered prestige vaults.
- **Version 3 (Hyper-Logistics & Cross-Border Velocity):**
  - **Typography:** Sora (aerospace-grade geometric sans) + DM Sans + Space Mono.
  - **Color Palette:** Deep Oceanic Abyssal Blue (`#040914`), Neon Electric Cyan (`#00E5FF`), Ultramarine (`#0066FF`).
  - **Character:** Multi-modal Jebel Ali sea / Dubai South air transit telemetry, glowing cyan hover states, rapid 24-48h re-export chips.

---

## 🛠️ Client Asset Swap Guide (Moving From Draft to Final Brand)

Once the client provides approved brand assets and verified corporate information, swap them according to this checklist:

### 1. Logo Mark & Favicon
- Currently uses an SVG geometric "A" glyph placeholder.
- **To update:**
  - Replace the `<a href="index.html" class="logo"><svg>...</svg></a>` block in each HTML header.
  - Replace the `<link rel="icon" href="data:image/svg+xml,...">` favicon tag in each `<head>` with the approved SVG or `.ico` file path.

### 2. Legal Identity & Addresses
- Search and update pending data flags across all HTML files and `content.config.js`:
  - **India Entity:** Registered entity name (e.g. *Aarhasi Global Private Limited*), CIN, GSTIN, and registered office addresses in Ahmedabad and Rajkot.
  - **Dubai Entity:** License number, Dubai Free Zone registration authority, and registered office suite.

### 3. Contact Numbers, Email & WhatsApp Float
- In `contact.html` (India) and `index.html` (Dubai):
  - Replace placeholder email addresses (`procurement@aarhasiglobal.com`, `ramesh@aarhasiworld.com`) with active corporate inboxes.
  - Insert verified corporate telephone numbers.
  - If enabling the WhatsApp Business floating button, wire the verified number into `https://wa.me/<country_code><number>`.

### 4. Leadership Photography
- The sites intentionally use original geometric and typographic monograms (`VJ`, `KJ`, `RS`, `ND`) instead of generic stock imagery.
- To use executive headshots: commit high-resolution `.webp` or `.jpg` photos to an `assets/leadership/` folder and replace the monogram containers with `<img src="assets/leadership/vikramsinh.webp" alt="Vikramsinh H. Jadeja">`.

---

## 🚀 Moving From Client Review to Production

When the client approves a final design version and is ready to deploy to live production domains:

### Step 1: Remove Crawler Blocking
In all public pages of the chosen version:
- Change:
  ```html
  <meta name="robots" content="noindex, nofollow">
  ```
  To:
  ```html
  <meta name="robots" content="index, follow">
  ```
- Update `robots.txt` from:
  ```
  User-agent: *
  Disallow: /
  ```
  To:
  ```
  User-agent: *
  Allow: /
  Disallow: /404.html

  Sitemap: https://www.aarhasiglobal.com/sitemap.xml
  ```

### Step 2: Update Canonical & Open Graph URLs
- Change canonical tags `<link rel="canonical" href="...">` and Open Graph URLs (`og:url`) to the production domains (`https://www.aarhasiglobal.com/` and `https://www.aarhasiworld.com/`).

### Step 3: Wire `submitLead()` to Live Backend / CRM
- In `contact.html`, locate the `sendToBackend(lead)` function near the bottom:
  ```javascript
  async function sendToBackend(lead) {
    // Replace console.log with your live CRM, Webhook (Make/Zapier), or API endpoint:
    const response = await fetch('https://api.aarhasiglobal.com/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
    return { ok: response.ok };
  }
  ```
- The upstream form handler already collects form values, UTM attribution, referrer, timestamp, and pushes a `quote_request` event to `dataLayer`.

### Step 4: Connect Custom Domain (CNAME)
1. Add a `CNAME` file in the root of the repository containing the custom domain name (e.g. `www.aarhasiglobal.com`).
2. In your DNS manager (Cloudflare, GoDaddy, Namecheap, etc.):
   - Add a `CNAME` record: `www` pointing to `snehanathani.github.io`.
   - Add `A` records for the apex domain pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. In GitHub Settings -> Pages -> **Custom domain**, enter your domain and check **Enforce HTTPS**.

---

## 🔒 Verification & Quality Assurance Summary

Prior to delivery, the following automated and visual audits were executed:

- [x] **Subdirectory Path Resolution:** All 292 internal navigation links and assets resolve strictly to relative paths (`href="index.html"`, `href="about.html"`, etc.) with zero 404 errors.
- [x] **Crawler Disallow Guard:** Verified that every page in all six version folders contains `<meta name="robots" content="noindex, nofollow">` and every folder has a `robots.txt` file configured to `Disallow: /`.
- [x] **Form Abstraction:** Verified that `submitLead()` executes with complete field validation, captured UTM tracking, and simulated CRM delivery success state in `contact.html`.
- [x] **Visual Inspections:** Headless browser screenshots captured and verified across desktop (1440px) and mobile (390px) to ensure no horizontal overflow, unreadable text, or broken layouts.
- [x] **Zero External Images:** Built with pure inline SVGs, CSS gradients, and committed assets only.
- [x] **Data Integrity:** 100% of facts, figures (₹320 Cr, 6,000+ partners, 63+ years experience), and deliberate pending confirmation notices preserved without modification.