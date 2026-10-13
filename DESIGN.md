# Design plan

Landing page for **Messenger for Telegram**: a native macOS app (AppKit, macOS 26+, Apple Silicon) that turns Telegram into Messenger 2009.

- **Audience:** people who grew up on MSN/WLM and now live in Telegram, on a Mac.
- **Primary job:** get them to download the latest release, and tell them honestly what works yet and how to open an unnotarized app.

## Color

| Name | Hex | Role |
|---|---|---|
| Aero sky | `#2C6FBF` | Desktop wallpaper base, primary button |
| Mist | `#DDEBF8` | Glass frame tint, quiet section backgrounds |
| Instruction blue | `#1F3F8F` | Headings (Win7's "main instruction" blue, a little deeper) |
| Paper | `#FFFFFF` | Window bodies and the page below the hero |
| Available | `#3BB54A` | Presence orb, "works" marker |
| Busy / Away / Offline | `#D8372B` / `#EF9A1A` / `#9AA6B2` | The other orbs; Offline marks "not yet" |

There's no dark mode. WLM didn't have one and the app forces the light appearance, so the page commits to that.

## Type

**Selawik**, Microsoft's open-source (OFL) Segoe UI substitute. It's the same face the app ships as its fallback. One family is used in four weights:
- Semilight for display text, as in WLM's own big display names
- Regular for body text
- Semibold for group headers and buttons

The type scale is Bringhurst's classic one: 13, 15, 17, 21, 28, 40, 56, 72 px. Body is 17/1.55, and lines are kept under ~70 characters.

## Layout

```
┌──────────────────── desktop (full-bleed Aero sky) ────────────────────┐
│  ┌ Messenger ──────────────□×┐                                         │
│  │ [frame] Robin (Available)▾│    Your Telegram chats,                 │
│  │ <Share a quick message>   │    in Messenger.                        │
│  │ [Search contacts      ]   │    lede…                                │
│  │ ▾ Favorites (2/3)         │    [Download for Mac] [Send a nudge]    │
│  │   ● Mum                   │    Version 0.9, macOS 26, Apple Silicon │
│  │ ▾ Available (4/9)  …      │                       ┌──────────────┐  │
│  └───────────────────────────┘                       │ toast: X has │  │
│                                                      │ just signed in│ │
└──────────────────────────────────────────────────────└──────────────┘─┘
  What works today: README checklist rendered as contact-list groups
    ▾ Messages (8/12)   ● Replies   ● Reactions   ○ Typing indicators …
  Messenger, down to the details (nudges, ink, scenes, toasts, frames)
  Install (a real sequence, so numbered): download → drag → Open Anyway → sign in
  Footer: source/releases, not affiliated with Microsoft or Telegram
```

Content is left-aligned throughout. Only the toast and the window are "objects"; everything else is plain flowing text on white.

## Principles

1. **The page is a desktop and the app behaves on it.** The hero is a working HTML recreation of the contact list. The status menu recolours the display-picture frame, and "Send a nudge" shakes the window. That is where the page spends its boldness.
2. **One orchestrated moment:** the "has just signed in" toast slides up in the corner once on load. Nothing else animates by itself.
3. **Structure carries information.** Group headers like `Messages (8/12)` count shipped features. A green orb means it works and a grey one means not yet. No decorative cards.
4. **No Microsoft bitmaps.** Every piece of chrome, every orb and every icon is drawn in CSS/SVG. The app keeps extracted WLM art out of git, and this page follows the same rule.
5. **Write like WLM's own UI:** sentence case, plain verbs, honest about what's missing.

## Review against the brief (what I changed)

- **Hero.** My first idea was a headline with a screenshot card on a gradient, which is the default SaaS split. I changed it to a full-bleed *desktop* with a live window and a corner toast, which only makes sense for this subject.
- **Features.** The first draft used a 3×3 grid of icon cards (the card kit). Now they're contact-list groups with presence orbs, so the README's done/not-done state reads at a glance.
- **Font.** Inter or a geometric sans was the reflex. I picked Selawik because it is literally the app's typeface.
- **Accent.** I didn't add one. The status orbs already supply colour, and they mean something.

## Notes for later passes

- No screenshots of the real app yet. If they get added, they'll show extracted WLM art, so decide on that first.
- Pass 1 (2026-10-13), after looking at screenshots: the hero window grew to 360px with a taller list, the toast widened so "signed in." fits on one line, mobile got a lighter sky behind the headline for contrast, and inline legend orbs got spacing.
