## v0.4.0 - 2026-01-02

- Added profile image (Darth Revan from KOTOR Remake) to navbar icon next to name.
- Fixed light mode text color issues - text is now readable with proper contrast in both themes.
- Implemented theme-aware CSS variables for foreground colors (text and borders).
- Added CSS utility layer overrides to make white text colors adapt to light mode.
- Profile image displays as circular avatar with border and shadow effects.
- Improved visual consistency across dark and light themes.

## v0.3.1 - 2026-01-02

- Fixed navbar overflow and scrollbar issues on smaller screens.
- Removed horizontal scrollbar by eliminating overflow-x-auto from navigation.
- Made navbar fully responsive with flex-wrap for multi-line layout when needed.
- Optimized spacing and sizing for mobile devices (smaller logo, tighter gaps).
- All navigation items now visible without scrolling.

## v0.3.0 - 2026-01-02

- Added Calendly scheduling integration to Hero and Footer sections.
- Users can now easily schedule meetings via the "Schedule" button powered by https://calendly.com/gbiagomba.
- Enhanced contact options with calendar icon and seamless scheduling experience.

## v0.2.2 - 2025-12-31

- Restored original projects: Tron (GitHub - Unix/Linux security audit tool), Anubis (Rust malware analysis), and Odin (custom security automation).
- Total of 15 curated projects: 11 GitHub repositories + 4 professional/internal projects.
- Comprehensive security toolkit showcase from web app testing to malware analysis.

## v0.2.1 - 2025-12-31

- Expanded Projects section to showcase top 10 GitHub repositories (up from 6).
- Added 4 new security tools: Naughty_Tarbawlz (EDR testing), Nmap_Scripts (reconnaissance automation), superficial-duck (Windows privilege escalation checks), and Binspector (binary IOC analysis).
- Total of 12 curated projects: 10 GitHub repositories sorted by popularity + 2 professional non-repository projects.

## v0.2.0 - 2025-12-31

- Enhanced Projects section with live GitHub repository integration featuring clickable links and star counts.
- Showcasing top 6 GitHub repositories by popularity: Sherlock (86 stars), Security-Tools (21 stars), GraveDigger (5 stars), Terminus (3 stars), Hephaestus (3 stars), and OWASP-Janus (2 stars).
- Added ExternalLink icons and Star badges to Projects component for better visual indication of GitHub projects.
- Extended Resume type definition to support optional `url` and `stars` fields for project metadata.

## v0.1.2 - 2025-12-30

- Fixed GitHub Actions workflows to use Node.js 20 instead of invalid "lts" specifier.
- Fixed TypeScript configuration to exclude test files from production build.
- Added resume PDF file to public directory.

## v0.1.1 - 2025-12-30

- Added LinkedIn profile URL to resume contact links.

## v0.1.0 - 2025-12-29

- Scaffolded React + TypeScript + Vite project with TailwindCSS and Framer Motion.
- Implemented data-driven resume content and neo-futurist security UI components.
- Added accessibility features, theme toggle, and sticky navigation.
- Configured tests, linting, formatting, and CI for GitHub Pages deployment.
- Added Dockerfile, Makefile, install scripts, and documentation.

