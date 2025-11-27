# Schema Analysis & Integration Plan (Updated)

## Executive Summary
Based on the architectural advice from your PocketBase expert, we are adopting the **"Registry Method"**. This separates **Logistics** (Public Events) from **Governance** (Internal Meetings) to ensure data privacy and structural clarity.

**Core Architectural Changes:**
1.  **New Master Collection:** `Events` (Handles all public/private logistics, replacing the need to query `Meetings` for the website).
2.  **Renaming:** `Activities` -> `ActivityLog` (Purely for history/RSVP tracking).
3.  **New Collection:** `Articles` (For the blog/news section).

---

## 1. Events (The Master Collection)
**Status:** **NEW** (Replaces the idea of modifying `Meetings`)
**Purpose:** The single source of truth for the Website Calendar, Member Portal, and RSVP system.
**Relationship:** Can optionally link to a `Meeting` (for minutes/agenda) or `Campaign`.

| Field Name | Type | Required? | Description / Settings |
| :--- | :--- | :--- | :--- |
| **title** | Text | **Yes** | Public marketing name (e.g., "Community Potluck"). |
| **slug** | Text | **Yes** | Unique URL slug. |
| **visibility** | Select | **Yes** | Options: `["Public", "Members Only", "Private"]`. **Crucial for frontend logic.** |
| **status** | Select | **Yes** | Options: `["Scheduled", "Cancelled", "Tentative"]`. |
| **startDateTime** | Date | **Yes** | |
| **endDateTime** | Date | No | |
| **location** | Text | No | e.g., "Stockton Library" or "Zoom". |
| **description** | Editor | No | Rich text with parking info, etc. |
| **image** | File | No | Event flyer/banner. |
| **relatedMeetingId** | Relation | No | Link to `Meetings` collection (Governance). |
| **campaignId** | Relation | No | Link to `Campaigns` collection. |

**Frontend Logic:**
*   **Public Calendar:** Query `Events` where `visibility = 'Public'`.
*   **Member Portal:** Query `Events` where `visibility = 'Public' || visibility = 'Members Only'`.
*   **RSVP:** Create a record in `ActivityLog` linking `User` + `Event.id`.

---

## 2. Articles (Voices)
**Status:** **NEW**
**Purpose:** Headless CMS for news, op-eds, and press releases.

| Field Name | Type | Required? | Description / Settings |
| :--- | :--- | :--- | :--- |
| **title** | Text | **Yes** | Headline. |
| **slug** | Text | **Yes** | Unique URL slug. Regex: `^[a-z0-9-]+$` |
| **excerpt** | Text | No | Short summary (150-200 chars) for card previews. |
| **featuredImage** | File | No | Main banner image. |
| **content** | Editor | **Yes** | Full HTML body text. |
| **author** | Relation | No | Link to `People` collection. |
| **guestAuthor** | Text | No | Fallback text for non-member authors. |
| **category** | Select | **Yes** | Options: `["Org Statement", "Member Op-Ed", "Press Release", "Educational"]`. |
| **tags** | Relation | No | Link to `Tags` collection (Multiple). |
| **status** | Select | **Yes** | Options: `["Draft", "Published", "Archived"]`. |
| **publishedAt** | Date | No | Schedule posts. Frontend shows only if `publishedAt <= NOW`. |

---

## 3. ActivityLog (Renamed from `Activities`)
**Status:** � Rename & Update
**Purpose:** A historical ledger of *who* did *what*.
**Action:**
1.  Rename `Activities` collection to `ActivityLog`.
2.  Ensure `entityId` can store the ID of an `Event` (or use a Polymorphic Relation if preferred).

---

## 4. Campaigns
**Status:** 🟢 Exists (`Campaigns`)
**Action:** Minor additions to support the design.

| Field Name | Type | Action |
| :--- | :--- | :--- |
| **slug** | Text | **Add Field.** Required for pretty URLs. |
| **icon** | File | **Add Field.** Required for the card design. |
| **tagline** | Text | **Add Field.** (Optional) Short phrase for the UI. |

---

## Summary of Instructions for Database Person

1.  **Rename** `Activities` collection to `ActivityLog`.
2.  **Create** `Events` collection with the schema defined in Section 1 (Visibility logic is key).
3.  **Create** `Articles` collection with the schema defined in Section 2.
4.  **Update** `Campaigns` collection: Add `slug` (Text) and `icon` (File).
5.  **Migration:** Move any future planned meetings from the `Meetings` table into the new `Events` table and link them back via `relatedMeetingId`.
