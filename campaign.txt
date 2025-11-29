# Campaign Page Implementation: Goals, Iterations, and Technical Summary

This document outlines the development process, requirements evolution, and technical implementation of the `/campaigns` page for the Working Class Unity (WCU) website.

## 1. Project Objectives

The primary goal was to create a centralized listing page for all WCU organizational activities, specifically distinguishing between major "Focus Campaigns" and smaller "Side Quests."

### Core Requirements:
*   **Categorization:** distinct sections for "Focus Campaigns" (org-wide, high priority) and "Side Quests" (often committee-specific).
*   **Status Tracking:** Visual indicators for "Active," "Paused," and "Completed" states.
*   **Committee Attribution:** Labeling Side Quests by their owning committee (Membership, Education, Treasurer).
*   **Event Integration:** Displaying next 2-3 upcoming events directly on the campaign card.
*   **Filtering:** Users must be able to filter by campaign type or by committee.

## 2. Evolution of Design (The "Back-and-Forth")

The design and functionality evolved through an iterative process to better match the organization's needs.

### Iteration 1: Initial Concept
*   *Idea:* A blog-style homepage layout. Focus campaigns active at the top, side quests at the bottom.
*   *Clarification:* Established that Focus Campaigns are *always* org-wide (no committee label needed), while Side Quests can be specific to Education, Membership, or Treasurer committees.

### Iteration 2: Layout & Sorting Refinement
*   *Change:* Shifted from a potential multi-column grid to a strict **single-column layout**.
*   *Requirement:* Focus Campaigns must be stacked at the top in their own section.
*   *Requirement:* Side Quests and "Former Campaigns" (completed items) grouped below.
*   *Sorting Logic:* Automatic sorting rule defined: **Active > Paused > Completed**. Within active, sorted by creation date.
*   *Visuals:* Request for "mini event cards" rather than a simple text list.

### Iteration 3: Visual Polish & Assets
*   *Feedback:* User provided a reference image showing the "Focus Campaign" / "Side Quest" banner style.
*   *Correction:* The type banner (ribbon) needed to be positioned on the **top-right** corner of the card image (initially implemented on the left).
*   *Assets:* User provided real photography for specific campaigns ("Tenet Union", "Cease Fire", "Medicare for All") to replace generic placeholders.

## 3. Technical Implementation

### Data Architecture (`app/data/campaigns.ts`)
*   Created a TypeScript-based registry to serve as the single source of truth.
*   Defined interfaces for `Campaign` and `Event`.
*   Populated with mock data reflecting current WCU activities (e.g., Tenet Union Work, Know Your Rights) and historical ones.

### Component Strategy
1.  **`CampaignCard.vue`**:
    *   **Layout:** Single-column card design.
    *   **Image:** Fixed 4:3 aspect ratio with `object-cover` to handle various image sizes uniformly. Includes fallback logic for missing images.
    *   **Badges:** 
        *   *Status:* Colored badges (Green/Success for Active, Yellow/Warning for Paused, Gray/Neutral for Completed).
        *   *Ribbon:* CSS-styled ribbon banner absolute-positioned to the top-right corner.
    *   **Events:** Iterates through the campaign's events array to render `EventCard` components.

2.  **`EventCard.vue`**:
    *   Compact, clickable card displaying Date, Time, Title, and Location.

3.  **`CampaignFilter.vue`**:
    *   Implemented using DaisyUI filter inputs (styled as pills/buttons).
    *   Emits selection changes to the parent page to filter the dataset.

### Page Logic (`app/pages/campaigns/index.vue`)
*   **State Management:** Tracks the currently selected filter.
*   **Computed Properties:** 
    *   Filters the master list based on the selected committee or type.
    *   Splits the result into two groups: `focusCampaigns` and `sideQuests`.
    *   Applies the sorting logic (Active first) to both groups dynamically.

### Asset Management
*   Created `public/images/campaigns/` directory.
*   Renamed and moved user-provided raw image files to web-friendly formats (e.g., `tenet-union.jpg`).
*   Updated data registry to point to these local assets.

### Internationalization (i18n)
*   Extended `en.json`, `es.json`, and `pa.json` to include keys for all campaign titles, descriptions, and UI elements (badges, buttons, headers).

## 4. Final Output
The result is a responsive, single-column campaign hub that prioritizes active work, clearly distinguishes campaign types via visual ribbons, and handles both real imagery and data-heavy event listings gracefully.