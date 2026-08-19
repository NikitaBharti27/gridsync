# Project Decisions — GridSync

**Project:** GridSync (Visual Grid Planner)  
**Built With:** React, Tailwind CSS, React Icons (UI Exploration via Stitch)

---

### 1. Why This Data Strategy?

* **What I did:** Separated all initial image assets, metadata (resolution, tags, color palettes), and feature content into `src/data/mockData.js`, and managed the dynamic grid state locally using React's `useState`.
* **Alternative I rejected:** Hardcoding image URLs and metadata directly inside JSX components, or setting up a mock backend server.
* **Why:** Hardcoding data in JSX mixes content with presentation, makes JSX repetitive, and makes updating the dataset difficult. Conversely, introducing a backend server or complex global state was unnecessary because the prototype does not require authentication, multi-user access, or server-side persistence.
* **Takeaway:** I chose the simplest client-side approach that kept the data separate from presentation while avoiding backend complexity that the current prototype did not require.

---

### 2. Time-Limit Trade-off

* **Trade-off I made:** I prioritized delivering a reliable, interactive 3×3 grid experience and responsive UI over implementing full drag-and-drop functionality.
* **Why:** Building a complete drag-and-drop system from scratch or configuring heavy libraries under the time constraint would have introduced significant interaction edge cases. Instead, implementing an instant Shuffle button and click-to-inspect layout delivered the core visual-planning experience while keeping debugging time low.
* **What I'd build with a full week:**
  1. **Drag-and-Drop:** Allow users to manually drag and rearrange photos directly within the 3×3 grid.
  2. **Image Upload & Color Extraction:** Let users upload their own photos and automatically extract dominant hex palettes using HTML Canvas.
  3. **Draft Persistence & Export:** Save grid layouts to `localStorage` and export the final feed layout as an image for Instagram.

---

### 3. AI Tools & What I Personally Verified

* **Where I used AI & Design Tools:**
  * Used **Stitch** for UI exploration and initial visual/layout direction.
  * Used **AI assistance** for design ideation, initial phone mockup layout scaffolding, and sample-content discovery.

* **What I personally verified and customized:**
  * **Component Architecture:** Structured and wrote the modular React components (`Navbar`, `HeroSection`, `InteractiveDemo`, `PhoneMockup`, `AssetInspector`, `BentoFeatures`, `FeatureCard`).
  * **State & Interaction Logic:** Implemented React `useState` flows for photo selection, shuffle reordering, gridline toggling, and state reset.
  * **UI Integration & Styling:** Connected the phone mockup to the side inspector panel, applied Tailwind CSS styling, and ensured responsive layout behavior across mobile and desktop.
  * **Icons & Polish:** Integrated `react-icons/io5`, added hover micro-interactions and selection outlines, and verified the interactive behavior.

> *AI helped accelerate exploration and scaffolding, but the final architecture, implementation, integration, interaction logic, styling, and verification were personally reviewed and customized.*
