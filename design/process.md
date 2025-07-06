# 🎨 Talkey 2.0 – Design Process Documentation

This document captures the full design journey of **Talkey 2.0**, a no-code voice and chat automation platform for businesses. From UX research to wireframes and final mockups, this process ensures our development is user-centered, clean, and scalable.

---

## 📍 1. Design Objectives

- Make complex AI automation feel simple and approachable.
- Cater to non-technical users (e.g. small business owners).
- Deliver a clean UI that works across devices.
- Prioritize clarity, accessibility, and ease of use.

---

## 🔍 2. UX Research Summary

We explored similar platforms to draw inspiration and identify user experience gaps:

| Platform     | Observations |
|--------------|--------------|
| **Chpter**   | Great commerce flow, but no voice interface or true AI |
| **Vapi AI**  | Strong voice functionality but lacks a visual no-code builder |
| **Voiceflow**| Best-in-class assistant flow builder UX |
| **Zapier**   | Inspires our builder logic layout (drag-and-drop workflows) |

> Key takeaway: Users want multi-channel automation without needing developers.

---

## 🧭 3. Information Architecture & User Flow

```
1. Sign Up / Login
2. Onboarding (Business type → Use case → Auto assistant setup)
3. Dashboard Overview
4. Assistant Flow Builder
5. Channel Configuration (WhatsApp, Web, Instagram, Voice)
6. Product / Payment Setup
7. Analytics & Conversation Logs
8. Account & Team Settings
```

---

## 🪟 4. Wireframes (Low-Fidelity Layouts)

> Stored in: `design/wireframes/`

Screens included:
- `login-wireframe.png`
- `onboarding-wireframe.png`
- `dashboard-wireframe.png`
- `assistant-builder-wireframe.png`
- `channels-setup-wireframe.png`
- `products-wireframe.png`

We started with grayscale boxes to focus on layout and flow rather than visual design.

---

## 🧱 5. UI Kit (Components System)

We designed reusable components in Figma to speed up frontend development:

- 🟦 Primary Button (Rounded, Shadow)
- 🔲 Card (White BG, 16px radius)
- 🟨 Input Field (With label + helper text)
- 🟪 Sidebar Navigation
- 🟧 Toggle + Status Chips
- 🟩 Modal/Dialog Windows
- 🔵 Table Rows + Icons

Typography: **Inter** (Regular, Medium, Bold)  
Base Font Sizes: 14px, 16px, 20px  
Colors:
- Primary Blue: `#0057FF`
- Accent Green: `#00C28C`
- Soft Gray: `#F7F9FC`
- Text Dark: `#1A1A1A`

---

## 🖼️ 6. High-Fidelity Screens (Figma)

Final designs include color, spacing, layout, and states (hover, loading, empty).

Screens completed:
- Login & Register
- Business Onboarding (3 steps)
- Main Dashboard (Cards layout)
- Assistant Builder (Visual editor)
- Channels Configuration
- Products Page
- Analytics Page
- Conversation History

> 🔗 **Figma Link**: [View Project on Figma](https://figma.com/file/YOUR-FIGMA-LINK)

---

## 🧠 7. Design Decisions

| Area           | Decision |
|----------------|----------|
| Navigation     | Sidebar layout for clarity and scalability |
| Builder UX     | Linear block stacking for MVP, drag-drop for future |
| Assistant Tone | Friendly, human-like (e.g., Ava, Sam, Zuri voice presets) |
| Responsive     | All screens mobile-ready, FAB used on small screens |
| Color System   | Semantic (Primary, Success, Warning, Disabled) |

---

## 🔄 8. Next Steps (Pre-Development)

- ✅ Final review with stakeholders
- ⏳ Export and organize assets (SVGs, icons, JSON UI configs)
- ☑️ Define component props for devs (via Storybook or in README)
- ☑️ Create Figma → Code workflow documentation
- ☑️ Start coding frontend structure (React + Tailwind)

---

## 📁 Directory Structure

```
design/
├── process.md                  # This document
├── wireframes/
│   ├── login-wireframe.png
│   ├── builder-wireframe.png
├── mockups/
│   ├── dashboard-ui.png
│   ├── assistant-builder-ui.png
├── ui-kit/
│   ├── components.png
│   ├── buttons.png
```

---

## 💬 Questions or Contributions?

If you have feedback or want to propose UI changes, open a GitHub issue or submit a design pull request.

---

**Created by:** Richard Reuben  
**Design Tool:** [Figma](https://figma.com)  
**Date:** July 2025