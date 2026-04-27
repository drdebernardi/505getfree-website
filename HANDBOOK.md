# 505 GET FREE — Website Handbook

A plain-English guide to working on the website. Keep this open while you work.

---

## The Big Picture

You have **three places** where the website lives. Understanding this is everything.

```
   ┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
   │  Claude Project  │   →     │   Your Computer  │   →     │     GitHub       │   →   Live Site
   │  (where we edit) │         │ (GitHub Desktop) │         │  (the cloud)     │       (GitHub Pages)
   └──────────────────┘         └──────────────────┘         └──────────────────┘
```

1. **Claude Project** — where you and I make edits. Fast, conversational, but the changes live ONLY here until you move them.
2. **Your Computer** — a folder on your desktop, managed by **GitHub Desktop**. This is the bridge.
3. **GitHub** — the official record of the site. Other people can look at it here, and this is what powers the live preview link.

**Rule of thumb:** changes flow LEFT → RIGHT. Edits happen with Claude, you move them to your computer, you push them to GitHub, GitHub publishes them.

---

## One-Time Setup (do this once)

### Step 1 — Install GitHub Desktop

1. Go to https://desktop.github.com
2. Download and install it
3. Sign in with your GitHub account (the same one as `drdebernardi`)

### Step 2 — Clone your repo to your computer

In GitHub Desktop:
1. **File → Clone Repository**
2. Pick `drdebernardi/505getfree-website` from the list
3. Choose where on your computer to save it (e.g. `~/Documents/GitHub/505getfree-website`)
4. Click **Clone**

You now have a folder on your computer that mirrors the GitHub repo. **This is your working folder from now on.** Forget the old "505getfree v2" folder on your desktop — that one is no longer the source of truth.

### Step 3 — Turn on GitHub Pages (the live preview)

1. Go to https://github.com/drdebernardi/505getfree-website
2. Click **Settings** (top right of the repo page)
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
5. Click **Save**
6. Wait ~1 minute. A green box appears at the top with your live URL, something like:
   `https://drdebernardi.github.io/505getfree-website/`

**This is the link you share with people to preview the site.** It updates automatically every time you push changes.

> **Note:** GitHub Pages doesn't work well with folders that have spaces. If your files are in a subfolder named `505getfree v2`, ask Claude to "move all the website files to the repo root." Then the live URL will work cleanly.

---

## The Daily Workflow

This is the routine you'll do every time we make changes.

### Working with Claude

1. Open this Claude project (the design workspace)
2. Talk to me. Ask me to make changes, add sections, fix things, etc.
3. I edit the files in the project. You can preview them right in the Claude pane.
4. When you're happy with a batch of changes, it's time to move them to GitHub.

### Moving changes from Claude → GitHub

There are two ways. Pick whichever feels easier.

#### Option A — Download a zip (simplest)

1. Ask me: **"give me a download of the project"**
2. I'll generate a download card. Click it.
3. You'll get a zip file. Unzip it.
4. Open your local repo folder (the one GitHub Desktop is watching).
5. **Replace the old files with the new ones.** Easiest way: select everything in the unzipped folder, drag into your repo folder, click "Replace" when prompted.
6. Open GitHub Desktop. It will show you a list of changed files in blue/green/red.
7. In the bottom-left, type a short description of what changed (e.g. "Add staff section"). This is your **commit message**.
8. Click **Commit to main**.
9. Click **Push origin** (top of the window).
10. Done. ~1 minute later, the live preview link reflects the changes.

#### Option B — Connect Claude to GitHub directly (faster, once you're comfortable)

Claude can push files to GitHub for you. Ask me to "push the latest changes to GitHub" and I'll handle steps 1–9 above. You only need to confirm in GitHub Desktop that things look right (or skip Desktop entirely).

> Use Option A while you're learning. Switch to Option B once you trust the workflow.

---

## Working in Multiple Places (Claude Design + Claude Cowork + GitHub)

You'll be working with the site through more than one tool. To stay sane, follow these rules.

### The Setup

Your **local repo folder** (the one GitHub Desktop manages) plays two roles:
1. It's your GitHub bridge (commit + push from here)
2. It's the folder Claude Cowork edits directly

So you have **one folder on your computer** that everything syncs through.

### The Three Editors

| Tool | What it edits | How changes get to GitHub |
|---|---|---|
| **Claude Design (this workspace)** | Files inside this project | Download zip → drop into your local folder → commit + push |
| **Claude Cowork** | Files in your local folder directly | GitHub Desktop sees changes → commit + push |
| **GitHub itself** | Files in the cloud | Already there. Pull down to your local folder when you start working |

### The Golden Rule

**Never edit the same file in two places without pushing in between.**

If I edit `about.html` in this design workspace, finish the loop — download, drop into your folder, commit, push — *before* you have Claude Cowork touch `about.html`. After the push, everything is back in sync and you can start fresh anywhere.

### Start-of-Session Routine

Whichever editor you open first, **pull the latest from GitHub** before doing anything:

- **Claude Cowork:** open GitHub Desktop → click **Fetch origin** → if it says "Pull," click that too. Now your folder matches GitHub.
- **Claude Design (this workspace):** ask me *"pull the latest from GitHub"* and I'll re-import the current files so I'm not working from a stale version.

### End-of-Session Routine

Before you close out, **push everything to GitHub**:

- If you worked in Claude Cowork: open GitHub Desktop, write a commit message, **Commit to main**, **Push origin**. Done.
- If you worked here in Claude Design: ask me for a download, drop into your folder, then push from GitHub Desktop.

### Why This Works

GitHub is the **single source of truth**. Every tool reaches into GitHub and out of GitHub. As long as you sync (pull at the start, push at the end), no version of any file gets lost.

### When in Doubt

Ask yourself two questions:
1. *Did I pull the latest before starting?*
2. *Did I push everything before switching tools?*

If yes to both, you're fine.

---

## Sharing the Site With Other People

Once GitHub Pages is on, you have a live URL:

`https://drdebernardi.github.io/505getfree-website/`

- Send it to anyone. They click and see the site.
- Works on phones, tablets, computers.
- Updates automatically when you push new changes.
- **It's not the final domain** (e.g. 505getfree.org). It's a free preview link. Later, when the site is ready to launch, you'll point your real domain at it — that's a separate step we'll do when you're ready.

If someone wants to look at the **code** (not the rendered site), share the repo URL instead:
`https://github.com/drdebernardi/505getfree-website`

---

## Common Tasks — How to Ask Claude

You don't need to learn HTML. Just ask in plain English. Examples:

- *"Add a staff section to the About page with three placeholder cards."*
- *"Replace placeholder #1 with this person — name, title, bio, photo attached."*
- *"Change the homepage hotline number color to a softer blue."*
- *"The mobile menu is broken on the resources page — fix it."*
- *"Add a new page called Volunteer."*
- *"Make the donate page form actually send to my email."*

For photos and assets: just **drag and drop** them into the chat. I'll save them in the right folder and reference them in the HTML.

---

## What's Where (file map)

```
505getfree-website/
├── index.html           ← homepage
├── about.html           ← about + staff + partners
├── donate.html          ← donation page
├── get-help.html        ← "I need help" page
├── get-listed.html      ← directory signup
├── news.html            ← news + media
├── reporting.html       ← report a tip
├── resources.html       ← resource directory
├── signage.html         ← mandatory signage info
├── css/
│   ├── style.css        ← original site stylesheet
│   └── spa.css          ← redesign stylesheet
├── js/
│   ├── chrome.js        ← navigation behavior
│   ├── feed.js          ← community feed
│   ├── main.js          ← homepage scripts
│   ├── posts.js         ← news/posts data
│   └── resources.js     ← resource directory data
└── images/
    ├── logo-main.png    ← hummingbird logo
    └── (favicons, etc.)
```

When you want photos for staff, drop them and I'll create `images/staff/` and put them there.

---

## When Something Goes Wrong

- **The live preview link doesn't show my changes.** Wait 2 minutes. GitHub Pages takes a moment to rebuild. If it's been longer than 5 minutes, check that you actually clicked **Push origin** in GitHub Desktop.
- **I see weird files in GitHub Desktop I don't recognize (.DS_Store, etc.)** Tell GitHub Desktop to ignore them — Repository → Repository Settings → Ignored Files. Or just commit them; they're harmless.
- **GitHub Desktop says "merge conflict."** Don't panic. Take a screenshot and ask me. This happens when the same file was changed in two places and we need to pick which version wins.
- **I broke something.** Every commit is saved forever. We can always roll back. Tell me what you remember about when it last worked, and I'll restore it.

---

## A Quick Glossary

- **Repo / Repository** — your project folder on GitHub (the whole site).
- **Commit** — a saved snapshot of changes, with a short description ("Added staff bios").
- **Push** — upload your commits from your computer to GitHub.
- **Pull** — download changes from GitHub to your computer (only matters if you edit from multiple places).
- **Branch** — a parallel version of the site. You'll mostly stay on `main` and not worry about this.
- **GitHub Pages** — the free service that turns your repo into a viewable website at a URL.

---

## Your Next Few Steps

1. ☐ Install GitHub Desktop and clone the repo
2. ☐ Turn on GitHub Pages, get your live URL
3. ☐ Send me staff names, titles, bios, and photos so I can finish the staff section
4. ☐ Walk through the site page by page with me — flag anything that needs to change
5. ☐ When the site is ready, talk about pointing a real domain at it

---

*Questions? Just ask. There's no such thing as a dumb question — I'd rather you ask twice than guess.*
