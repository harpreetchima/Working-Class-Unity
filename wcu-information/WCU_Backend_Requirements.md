# WCU Website - Backend & Database Requirements

## Overview
This document outlines the database schema and backend requirements for the Working Class Unity (WCU) website. The site is built with Nuxt 3 and will use PocketBase as the backend. The goal is to support dynamic content for Events, Articles (Voices), Campaigns, and Membership management.

## 1. Collections Schema

### A. Users (System Collection)
Extends the default PocketBase `users` collection.
*   **Purpose**: Manage members, admins, and content authors.
*   **Fields**:
    *   `name` (Text): Full name.
    *   `avatar` (File): Profile picture.
    *   `email` (Email): Contact email.
    *   `bio` (Text): Short bio for authors.
    *   `membership_tier` (Select): Options: `["Standard", "Solidarity", "None"]`.
    *   `membership_status` (Select): Options: `["Good Standing", "Grace Period", "Lapsed", "Non-Member"]`.
    *   `roles` (JSON/Select): Array of roles e.g., `["Member", "Steering Committee", "Admin"]`.
    *   `join_date` (DateTime): When they joined WCU.

### B. Events (`events`)
*   **Purpose**: Power the Calendar page and "Upcoming Events" section on the homepage.
*   **Fields**:
    *   `title` (Text): Event name (e.g., "General Meeting").
    *   `slug` (Text, Unique): URL-friendly identifier.
    *   `description` (Rich Text/HTML): Full details.
    *   `start_time` (DateTime): Date and time the event starts.
    *   `end_time` (DateTime): Date and time the event ends (optional).
    *   `location` (Text): Physical address or "Zoom".
    *   `link` (URL): Registration or meeting link.
    *   `type` (Select): Options: `["General Meeting", "Workshop", "Action", "Social", "Committee Meeting"]`.
    *   `is_featured` (Bool): If true, shows up on the Homepage summary.
    *   `image` (File): Event flyer or banner.

### C. Articles (`articles`)
*   **Purpose**: Power the "Voices of the Working Class" blog/news section.
*   **Fields**:
    *   `title` (Text): Headline.
    *   `slug` (Text, Unique): URL slug for the page (e.g., `rent-control-now`).
    *   `excerpt` (Text): Short summary for cards (approx 150 chars).
    *   `content` (Rich Text/HTML): The main body of the article.
    *   `image` (File): Featured image.
    *   `type` (Select): Options: `["Org Article", "Press Release", "Member Article", "Guest Article"]`.
    *   `author` (Relation -> `users`): Link to the WCU member who wrote it.
    *   `guest_author_name` (Text): Fallback if author is not a system user.
    *   `status` (Select): Options: `["Draft", "Published", "Archived"]`.
    *   `published_at` (DateTime): Date to display on the article.

### D. Campaigns (`campaigns`)
*   **Purpose**: Power the "Campaigns" page and "Focus Campaigns" section.
*   **Fields**:
    *   `title` (Text): Campaign name (e.g., "Tenant Union").
    *   `slug` (Text, Unique): URL slug.
    *   `tagline` (Text): Short phrase (e.g., "Housing Justice").
    *   `description` (Rich Text/HTML): Full campaign details/manifesto.
    *   `status` (Select): Options: `["Active", "Upcoming", "Completed", "Paused"]`.
    *   `type` (Select): Options: `["Focus Campaign", "Side Quest"]`.
    *   `icon` (File/Text): SVG icon or image for the card.
    *   `members_involved_count` (Number): Manual counter for "42+ members involved" display.
    *   `external_link` (URL): Link to a separate petition or action page (optional).
    *   `resources_link` (URL): Link to "Get Resources" or "Read Full Plan".

## 2. API & Access Rules (ACL)

*   **Public Access (Read-Only)**:
    *   `events`: List/View all future events.
    *   `articles`: List/View all `Published` articles.
    *   `campaigns`: List/View all `Active` or `Upcoming` campaigns.
*   **Member Access**:
    *   `users`: Users can view their own profile (`id = @request.auth.id`).
    *   `articles`: Members can create `Draft` articles (optional, if we want member submissions).
*   **Admin/Steering Committee**:
    *   Full CRUD access to all collections.

## 3. Frontend Integration Points

### Homepage (`index.vue`)
*   **Query**: Fetch latest 3 `articles` where `status = 'Published'` sort by `-published_at`.
*   **Query**: Fetch next 3 `events` where `start_time > NOW` sort by `start_time`.
*   **Query**: Fetch all `campaigns` where `type = 'Focus Campaign'` and `status = 'Active'`.

### Calendar (`calendar.vue`)
*   **Query**: Fetch all `events` where `start_time > NOW` (or range based on month view).

### Voices (`voices/index.vue`)
*   **Query**: Fetch paginated `articles` with filter support by `type`.

### Join (`join.vue`)
*   *Note*: Currently static. In the future, this will need a POST endpoint to create a user or initiate a Stripe checkout session.

## 4. Special Considerations
*   **Images**: Enable image optimization/resizing in PocketBase settings if available, as the design relies on high-quality visuals.
*   **Rich Text**: The frontend will need to render HTML from the `description` and `content` fields. Ensure the PocketBase editor sanitizes output or we handle it on the frontend.
