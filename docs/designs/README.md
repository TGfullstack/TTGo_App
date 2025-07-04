# Designs

This folder is for structure and design work. Use this README as a log of updates made to your design. Link to your Figma work below and only add images to this folder when your design work is complete.

## 🧠 Core Layout Goals

* Clear navigation for Projects, Tasks, and Todos.
* Responsive, accessible UI with modal support.
* Persistent sidebar + top navbar.
* Dynamic main content area (list, kanban, form, detail).
* Authentication-aware UI (NextAuth).
* Smooth transitions (optional: Framer Motion).

## 🧩 Component Ideas

* 🧱 Sidebar

  * Logo (Taylor’D To Go)
  * Nav links: Dashboard / Projects / Tasks / Todos
  * Button: Create Task (opens modal)
  * Profile section (avatar, logout)

* 📌 Navbar

  * Search bar
  * Notification bell
  * Theme switcher
  * Avatar dropdown (Account Settings, Logout)

## 📝 Main Panels

* Dashboard: Overview of projects/tasks due soon, progress charts.
* Projects Page: Cards or table of projects with status indicators.
* Tasks Page: Kanban or list toggle, filters, drag-and-drop with dnd-kit.
* Task Modal: Create/edit form with project association, due date, priority.
* Project Details: Tabs for:
  * Overview
  * Tasks (filtered)
  * Team members
  * Activity log

## 🧰 Utility Pages

* **/settings:** Change password, manage OAuth providers
* **/activity**: Optional activity feed or audit log
* **/calendar**: Optional calendar view of tasks

## Typography

* h1

  Size: text-3xl
  Font: Archivo Black
* h2

  Size: text-2xl
  Font: Archivo Narrow
* h3

  Size: text-lg
  Font: Archivo Narrow
* p

  Size: text-base
  Font: Arial

## Icons

SVGs(Scalable Vector Graphics) in React:

* Use a library ('react-svg', 'react-inlinesvg')
* SVGR - import as components
* Regular ol image tag
* Copy-paste directly in a JSX component

* [Iconify](https://iconify.design)

* [Icon Set](https://icon-sets.iconify.design)

### Links

Add links to your design work here.

* [Color palette](https://colorkit.io/#15262D-#E5E9EB-7)

* [Style Tile](https://www.figma.com/design/UszHS5Gmgj79vfzNVbV6e4/StyleTile?node-id=0-1&t=izjgltb21p7FI1JI-1)

* [Design](https://www.figma.com/design/5pjXsmSR8dPAxnV8OwaInr/Wireframe?node-id=14-4316&t=GLxMCk5qSeT6Isiz-1)
* Additional Links...

### Log ...🚀

Follow this format for your log entries:  

Date: [ 09-29-24 ]
Update: [ Add color palette generator link url ]  

Date: [ 09-29-24 ]
Update: [ Add color palette to figma style tile - added color palette ]  

Date: [ 09-29-24 ]
Update: [ Add fonts to figma style tile - worked on Typefaces]  

Date: [ 09-29-24 ]
Update: [ Add color palette generator link url ]  

Date: [ 9-30-24 ]
Update: [ Brand Logo added to style-tile ]  

Date: [ 9-30-24 ]
Update: [ Improvements made to Home Layout - Static Pages ]  
