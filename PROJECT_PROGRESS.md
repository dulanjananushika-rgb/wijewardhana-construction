# Project Progress

## GitHub and Vercel deployment — current request

- **Status:** Source pushed to `main` in `https://github.com/dulanjananushika-rgb/wijewardhana-construction`. Vercel project `wijewardhana-construction` is linked to that GitHub repository for automatic deployments on push.
- **Architecture audit:** Existing App Router (`app/`), section components (`components/<section>/`), and editable content (`config/`) are retained. No approved site sections were redesigned for deployment setup.
- **Preparation:** Added `npm run check` and `npm run verify`, documented the structure and deployment defaults, and added cross-platform line-ending rules. No app runtime dependencies were added. Vercel's local project metadata and environment files are ignored by Git.
- **Checks:** `npm run lint`, `npm run typecheck`, and `npm run build` passed locally. Vercel's production build passed TypeScript and static prerender for `/`.
- **Deployment:** Production deployment reached `READY` at `https://wijewardhana-construction.vercel.app` (deployment `BaXvX9ycYbWQMQjQRAqqTfgRnkH1`). Authenticated `vercel curl` returned the site's Next.js HTML. The project currently has Vercel Authentication enabled for `vercel.app` domains, so outside visitors are redirected to sign-in. Automatic disabling was rejected by the approval reviewer because it exposes production; awaiting the user's explicit approval to disable protection for this project only.
- **Vercel MCP:** Official endpoint was added to Codex MCP configuration; its separate OAuth consent is still pending in the Codex browser tab. Vercel CLI deployment is independent and already succeeded.
- **Files changed in the deployment setup:** `.gitignore`, `README.md`, `package.json`, `.gitattributes`, and this progress log. The Vercel project link file is intentionally ignored.
- **Next action:** If approved, disable Vercel Authentication on this project, verify the public production URL, and record/push the final progress update. Otherwise leave production protected as configured.

## Project

Wijewardhana Construction — a premium, English-first construction company website for Sri Lanka, designed to grow in approved sections.

## Roadmap

Creative rebuild is following a separate approval sequence. The earlier phase list below is retained as project history.

1. Navigation + cinematic Hero with the selectable concept films
2. Scroll-driven 3D construction story using one consistent residence model
3. About and workmanship philosophy
4. Services (editable proposals until confirmed)
5. Customer process
6. Workmanship principles
7. Consultation/contact after details and submission target are configured
8. Footer and page polish

## Current implementation

- **Hero:** Approved by the user. Blue Hour is the initial film; Daylight is selectable second. The visible disclosure now reads “ARCHITECTURAL CONCEPT FILM,” at the user's request, while the copy still makes clear these are concept visuals and not completed company work.
- **Stage 2 — Construction story:** Approved by the user. The same two-storey tropical residence assembles through planning, foundation, concrete frame, walls, roof, finishes, and final landscape in a scroll-driven procedural 3D concept model.
- **Stage 3 — About and workmanship philosophy:** Approved by the user. Added an editorial company introduction using the supplied details: K.A.T. Santha Wijewardhana, 25 years building homes, and Kurunegala.
- **Stage 4 — Services:** Approved by the user. The service categories remain editable proposals in `config/services.ts` until confirmed.
- **Stage 5 — Customer process:** Approved by the user. Consultation, Planning, Foundation, Structure, Finishing and Handover are presented as a suggested journey pending company confirmation.
- **Stage 6 — Workmanship principles:** Approved by the user. Three editable, proposed principles are presented without claims about certifications, project outcomes, or company guarantees.
- **Stage 7 — Consultation/contact:** Approved by the user. The validated enquiry form opens WhatsApp with a prefilled message for the visitor to review and send.
- **Stage 8 — Footer and page polish:** Implemented for user review. Added a responsive footer with working in-page navigation and configured contact links, descriptive page/Open Graph metadata, a keyboard skip link, fixed-header anchor offsets, and a tablet navigation breakpoint to prevent crowded links. Existing approved sections were not redesigned.
- **Stage 8 feedback refinement:** Reordered the navigation to follow the page and added the missing “The build” link to the construction-story anchor. The finished Hero film no longer displays a centered Replay overlay. Added a fixed lower-right WhatsApp contact link while scrolling; it hides when the Contact section is in view. Raised the compact-nav breakpoint to 1000px to keep the seven-item navigation from crowding tablet widths.
- **Motion refinement (user request):** Added one shared IntersectionObserver reveal layer for About, Services, Process, Principles, Contact, and Footer content. Reveals use a restrained fade and short vertical movement, with small list staggers. The Hero's existing film entrance and the construction story's scroll-driven model remain separate. No animation dependency was added; reduced-motion users see content without scroll reveals.
- **Floating Contact refinement (user feedback):** Reduced the fixed WhatsApp shortcut to a compact “LET’S TALK” control with a small circular arrow and restrained accent line. The phone number remains in the accessible label and the WhatsApp target.
- **Floating Contact / navbar refinement (latest user feedback):** Replaced the text shortcut with a small circular WhatsApp icon button. Removed the redundant “View the film” navbar CTA; the Hero still has its film selector and scroll cue.
- **Contact integration:** The existing Hero's primary CTA now opens the configured WhatsApp contact, and its contact note reflects the supplied number. This small dependency update makes the previously disabled action work; Hero art direction and media remain unchanged.
- **Navigation:** About and Services anchors have section-aware active states in the existing navbar. No other navigation redesign was made.
- **Files changed for Stage 8:** `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `components/site-navbar.tsx`, `components/site-footer.tsx`, `components/site-footer.module.css`, `components/hero/hero-media.tsx`, `components/floating-contact.tsx`, `components/floating-contact.module.css`, `components/scroll-motion.tsx`, About/Services/Process/Workmanship/Contact section components, and `PROJECT_PROGRESS.md`.
- **Checks:** `npm run lint`, `npm run typecheck`, `npm run build`, and `git diff --check` pass. The production build required host access because sandboxed Windows SWC cannot resolve the workspace path.
- **Preview:** Run `npm run dev`, then open `http://127.0.0.1:3000/`. Browser accessibility inspection confirms the footer links and contact values. A screenshot interface was unavailable for visual inspection of desktop/mobile rendering; inspect at 390px, 768px, and 1440px during review.
- **Next proposed stage:** No additional phase is proposed in the current approved roadmap. Dedicated routes or CMS/admin work remain optional and require a separate request.

## Creative rebuild — Stage 0 video analysis

- **Status:** Approved by the user (“ok”); visual review of the supplied contact sheets and the proposed direction passed to Stage 1. No website code or original video file was changed during Stage 0.
- **Files and metadata:** `1010(1).mp4` and `1010.mp4` are available at the user-provided `D:\video` paths. Both are 15.07 seconds, 1920×1080, 16:9, 30fps, and have an audio track. `ffprobe`/`ffmpeg` were not installed, so this metadata was read from the MP4 container. The originals remain untouched.
- **Visual review scope:** Reviewed user-supplied contact sheets sampled at 0.5, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5, and 14.2 seconds. Full-motion continuity and audio have not been reviewed. The first filename-to-contact-sheet mapping was an assumption and was reversed after the Hero preview exposed the mismatch: `1010.mp4` matches Video 1 (daylight); `1010(1).mp4` matches Video 2 (blue-hour).
- **Video 1 (`1010.mp4`) observations:** A bright tropical site progresses from early concrete/foundation work through a reinforced-concrete frame and enclosure to a finished two-storey residence. The final concept has a pale plaster exterior, broad flat roof, timber slat accent, glass balcony/windows, palms, and a planted lawn. The 12.5-second frame is the recommended hero poster: the finished residence is stable in the sample and the warm light/greenery feels welcoming. Sampled construction-to-finish transition may change façade and landscape abruptly; do not claim real project continuity.
- **Video 2 (`1010(1).mp4`) observations:** Opens on a close concrete/ground surface, moves to columns and beams in warm sunset, then an enclosed structure and a completed two-storey residence at blue hour with warm interior lighting. The final concept reads darker and more material-heavy, with broad overhangs, stone/wood accents, large glazing, palms, and a landscaped foreground. The 14.2-second frame is the recommended ending/reveal poster. A thin dark horizontal line appears above the roof in the 10.5-second sample; avoid that still and verify the adjacent motion before using that interval.
- **Video roles proposal:** Use Video 1 (`1010.mp4`) only for the completed-home Hero reveal (poster at 12.5 seconds; use the final reveal excerpt, not a looping construction morph). Use Video 2 (`1010(1).mp4`) for the separate construction-story section, with its own AI-concept disclosure. The façades are visibly different enough that the two videos must not be stitched together or described as one house/project. Both are AI-generated visual concepts, never completed Wijewardhana Construction work.
- **Creative direction proposal:** “Tropical light, built form”: an architecture-editorial experience with mineral white/limestone, charcoal ink, muted palm green, restrained clay, and the footage’s warm interior light. Avoid the existing dark-and-gold template language. Keep the Hero film wide enough to preserve the full house and put the headline in open sky/negative space rather than across the façade. On mobile, preserve the full 16:9 house framing and place concise copy beneath or beside the film; do not force a portrait crop that cuts off the residence.
- **Motion proposal:** A brief, muted Hero reveal that settles on the completed home; pause offscreen and use the still poster for reduced-motion. For the construction film, use normal controlled playback with time-coded stage labels first; prototype scroll-linked scrubbing only if it seeks reliably on mobile. Do not pin or hijack scroll.
- **Section roadmap proposal:** (1) Navigation + video Hero, (2) construction story using Video 2, (3) About/craft approach without invented company facts, (4) Services as an editorial list and marked proposals until confirmed, (5) customer process, (6) workmanship principles/Why Us, (7) consultation/contact after details and a real submission destination are configured, (8) footer/polish. Defer a separate concept gallery for now because the two AI concept videos already carry the visual story and a gallery would repeat them.
- **Next step at the end of Stage 0:** User approved Stage 1. The file-to-contact-sheet mapping was checked in the browser preview and corrected during Stage 1. Stage 2 construction storytelling remains separately gated.

## Creative rebuild — Stage 1 navigation + video Hero

- **Status:** Approved by the user. A later user request sets Blue Hour as the initial film and Daylight second in the selector.
- **Audit findings:** The prior Hero was an empty render-source placeholder with disabled consultation/process actions. Its dark/brass shell and decorative grid did not match the supplied warm tropical films. The existing responsive navbar and keyboard-close behavior were preserved while its presentation was aligned with the new light editorial direction.
- **Visual direction:** Warm mineral-paper canvas, ink typography, restrained clay accents, and one wide 16:9 film surface. The Hero uses an editorial left copy / right film composition at desktop and copy-above-film at narrow widths. The AI concept disclosure remains visible beside the image caption.
- **Video use:** Browser preview showed the first Hero source was a blue-hour house, contradicting the supplied daylight Hero contact sheet. The mapping has been corrected and confirmed against the rendered final frame: the Hero now loads `1010.mp4` starting at 12.05 seconds and settles at the final frame; its poster is the matching Video 1 contact-sheet crop. `1010(1).mp4` is copied and configured as the candidate for Stage 2 only; it is not yet rendered by the page. Full-motion continuity and audio remain unreviewed.
- **Files changed:** `components/hero/cinematic-hero.tsx`, `components/hero/hero-media.tsx`, `components/hero/hero.module.css`, `components/site-navbar.tsx`, `app/globals.css`, `config/hero.ts`, `PROJECT_PROGRESS.md`.
- **Media added:** `public/media/wijewardhana-hero-concept.mp4` (copy of `D:\video\1010.mp4`), `public/media/wijewardhana-hero-poster.webp` (derived from supplied Video 1 contact sheet), `public/media/wijewardhana-construction-concept.mp4` (copy of `D:\video\1010(1).mp4`, reserved), and `public/media/wijewardhana-construction-poster.webp` (derived from supplied Video 2 contact sheet, reserved). Original source files were left untouched.
- **Interaction/accessibility:** Hero film is muted, inline, starts at the selected reveal, and does not loop endlessly. The replay control restarts that segment. Reduced-motion preference keeps the poster still; copy remains semantic HTML. The consultation action remains disabled because no real contact method is configured. Header film navigation and the Overview/Residence links target existing anchors.
- **Checks:** Final `npm run lint`, `npm run typecheck`, and `npm run build` pass. Windows SWC required host path access for build; sandboxed attempts failed before compilation when SWC could not canonicalize the workspace path.
- **Visual review:** Captured and inspected actual rendered browser screenshots at 1440×900, 1920×1080, 768×960, and 390×844. `document.scrollWidth` matched viewport width at all four sizes. The HTML video loaded (`readyState: 4`), played the final reveal segment, and settled paused at its end. The final refinement removed letterbox edges and improved the deferred CTA contrast. For a fresh local preview, run `npm run dev` and open `http://127.0.0.1:3000/`. Full motion continuity, audio content, and intermediate construction morphs have not been reviewed.
- **Known limits:** Both videos are still the user's AI-generated concept visuals. Video 2 is staged but not yet presented on-page. MP4 files have been kept in their original 1080p form; delivery bandwidth/streaming suitability should be reviewed before public deployment.
- **Hero playback refinement (user feedback):** The bundled Hero film is present and uses H.264/AAC (`avc1`/`mp4a`). The player now starts at the opening frame, uses the video element's own poster rather than layering an image over the video, enables muted inline autoplay when motion is allowed, and exposes Play/Retry/Replay controls for blocked autoplay or reduced-motion preferences. Removed late seeking from initial playback. Added `allowedDevOrigins: ["127.0.0.1"]` after the dev log showed that HMR requests from the browser's loopback host were blocked. `npm run lint`, `npm run typecheck`, and `npm run build` pass. Browser visual/playback verification could not be repeated in this turn because the browser tool rejected access to the local preview URL.
- **Hero art-direction revision (user feedback):** Replaced the desktop copy-left/film-right boxed composition with a full-bleed cinematic film stage and tighter editorial headline layering; the film keeps the complete 16:9 crop on tablet/mobile, where copy returns to a warm-paper reading surface. The existing navbar, wording, configured media, honest concept label, playback controls, and contact-detail constraint remain. No other page section was touched. `npm run lint`, `npm run typecheck`, and `npm run build` pass. The current browser tool refused to inspect the local preview, so rendered desktop/mobile composition still needs direct review in the open browser.
- **Both Hero films (user request):** Added a two-choice film selector in the Hero so both supplied clips can be played on demand. Blue Hour loads first and Daylight is second. Each choice has its own title, alt text, and `ARCHITECTURAL CONCEPT FILM` disclosure. The separate residence concepts are not described as one project.

### Stage 2 construction story

- **Status:** Implemented for review as a scroll-driven 3D concept model, replacing the video-player/chapter layout at the user's request.
- **Experience:** Seven scroll chapters from planning and footing through concrete structure, walls, roof, finishes, and landscape. A single lazy-loaded React Three Fiber scene progressively reveals modular components; the editorial text remains available independently of WebGL. The scene uses responsive camera framing, limited DPR, demand rendering, shadows, a static SVG fallback, and reduced-motion handling. It does not hijack scroll.
- **House concept:** A consistent two-storey tropical residence with a deep flat roof, concrete frame, masonry, plaster finish, dark-framed glazing, timber screens, balcony, stone accent, and restrained tropical planting. All geometry is locally authored; no external model, image, or 3D asset was added.
- **Content guardrail:** Visible Hero labels use “ARCHITECTURAL CONCEPT FILM.” The model is labelled “ARCHITECTURAL CONCEPT MODEL” and described as a digital study, not a Wijewardhana Construction project.
- **Checks:** `npm run lint`, `npm run typecheck`, `npm run build`, and `git diff --check` pass. Browser accessibility inspection confirms the new section, stage copy, progress indicator, and static fallback are in the rendered tree. A screenshot interface was unavailable, so desktop/mobile 3D visual composition and WebGL playback were not visually verified in this turn.
- **Files changed:** `app/page.tsx`, `config/hero.ts`, `config/construction-story.ts`, `components/construction-story/construction-story.tsx`, `components/construction-story/construction-story.module.css`, `components/construction-story/construction-scene.tsx`, `components/construction-story/house-model.tsx`, `components/construction-story/building-elements.tsx`, and `PROJECT_PROGRESS.md`.

## Next proposed stage

The current roadmap is implemented through Stage 8. Optional expansion routes or CMS/admin work are not started without a separate request.

## Completed phases

### Phase 0 — Project foundation

- **Status:** Approved.
- **Repository state at start:** Fresh Git repository with no source files or existing implementation.
- **Architecture:** Next.js 16.4 App Router, React 19.3, TypeScript, Tailwind CSS 4.3, ESLint flat config with TypeScript ESLint.
- **Visual decisions:** Ink-dark architectural shell, paper and muted steel tones, restrained brass accent, technical grid/plan motif, Space Grotesk display and Manrope body typography.
- **Content decisions:** Company name and country only; contact details remain null in `config/company.ts`. No project, client, achievement, or certification claims are published.
- **Files:** `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `config/company.ts`, `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore`, `AGENTS.md` (generated by Next.js dev), and `README.md`.
- **Checks:** `npm run lint`, `npm run typecheck`, and `npm run build` pass. `npm install` reports 0 vulnerabilities.
- **Preview:** Local Next.js preview is running at `http://127.0.0.1:3000`. The available in-app browser was 448px wide; compact/mobile layout was visually inspected. A 1440px desktop viewport was not available for visual inspection.
- **Implementation note:** The initial `eslint-config-next` dependency brought an unpatched advisory in its lint-only transitive tree. It was replaced with TypeScript ESLint; the resulting install audit is clean.

## Known issues / assumptions

- Email and street address are still unset. The owner name, 25 years building homes, Kurunegala location, and phone/WhatsApp were supplied and are now in `config/company.ts`.
- The foundation shell uses a small CSS/inline-SVG brand motif; it is not the approved final brand identity.
- Desktop visual inspection at 1440px remains unverified; the in-app preview surface is approximately 300px wide.
- Testimonials, credentials, and genuine project photographs have not been provided. The supplied experience statement is “25 years building homes”; no exact start year is inferred.
- The homepage includes one procedural architectural concept visualization, clearly labelled as a concept; it does not depict a completed Wijewardhana Construction project.

### Phase 1 — Premium navbar

- **Status:** Approved.
- **Scope delivered:** Fixed transparent-to-solid navbar, refined brand lockup, current Overview nav state, project CTA, mobile menu, Escape-to-close keyboard behavior, focus-visible states, and narrow-screen layout adjustments.
- **Navigation decision:** Only the existing Overview anchor is linked. The project CTA currently goes to that same usable in-page destination. Future destinations and a consultation channel will be connected after their sections and confirmed contact details exist.
- **Files changed:** `components/site-navbar.tsx`, `app/page.tsx`, `app/globals.css`, `PROJECT_PROGRESS.md`.
- **Checks:** `npm run lint`, `npm run typecheck`, and `npm run build` pass. Dependency audit remains clean from Phase 0.
- **Preview:** `http://127.0.0.1:3000`. Mobile menu expansion, Escape close, and narrow layout were visually checked. Full desktop viewport inspection remains unavailable in the in-app browser.

### Phase 2 — Hero visual design

- **Status:** Previous media-integration implementation is superseded by the new video-first Stage 0 plan; current Hero is not approved as visually complete. The user has now supplied two AI-generated concept videos, but neither has been integrated pending Stage 1 approval.
- **Audit of the current Hero before this revision:** `cinematic-hero.tsx` loaded an R3F scene built from `house-model.tsx` primitive geometry and a custom SVG illustration as its fallback. Both created an artificial-looking substitute for an architectural visualization. The source also had CSS blueprint polygons that implied a house drawing. No approved `.blend`, architectural render, poster, MP4, or WebM asset was present in the repository. This confirms that the desired natural, realistic Sri Lankan luxury home visual cannot responsibly be shown yet.
- **Implemented in this revision:** Removed the procedural Three.js house and the house-shaped SVG fallback from Hero rendering. Added reusable `HeroMedia`, accepting local MP4/WebM sources, a poster, meaningful alt text, and focal positioning. It retains the poster under video, uses inline muted playback when allowed, and pauses for `prefers-reduced-motion`. Added a deliberate dark visual-source placeholder that clearly states the Blender render is pending and does not depict an invented house. The existing headline, layout, CTAs, scroll cue, navbar, and other approved work remain in place. No facts or assets were fabricated and no packages were added.
- **Hero render delivery required:** Provide one approved Blender Cycles exterior render of the intended modern Sri Lankan luxury residence: three-quarter front view, stable camera/framing that leaves useful crop room for mobile, neutral daylight or warm late-afternoon architectural light, and final materials/landscape. Deliver a 1920×1080 minimum sRGB poster at `public/media/wijewardhana-home-poster.webp` (or `.jpg`/`.png`) and a matching self-hosted cinematic loop at `public/media/wijewardhana-home.webm` (VP9) and/or `public/media/wijewardhana-home.mp4` (H.264). Keep the same camera, grade, house design, and first frame across formats; include the licensed/owned `.blend` project, linked textures, and asset-use confirmation so future visuals can remain coherent. The file paths are proposed integration targets, not files that currently exist.
- **Future Phase 3 asset/sequence plan only — not implemented:** Animate construction states inside that same Blender project and keep the final residence identical to the hero design. Render one ordered, consistently framed image sequence from a locked camera, with matching resolution/color management and deterministic filenames (for example `frame_0001.webp` onward); include the matching scene/project and state definitions for 00–06. On approval of Phase 3, use GSAP ScrollTrigger to map scroll progress onto a canvas sequence with responsive sizing, reduced-motion/static poster behavior, and no scroll hijacking. No stage renders, sequence player, GSAP package, or Phase 3 code has been created.
- **Files changed in this revision:** `components/hero/cinematic-hero.tsx`, `components/hero/hero-media.tsx` (new), `components/hero/hero.module.css`, `components/hero/hero-scene.tsx` (removed), `components/hero/house-model.tsx` (removed), `config/hero.ts`, and `PROJECT_PROGRESS.md`. `components/site-navbar.tsx`, `app/page.tsx`, and all non-Hero sections were not changed.
- **Checks:** `npm run lint`, `npm run typecheck`, and `npm run build` all pass after the final placeholder refinement.
- **Preview:** Local preview remains `http://127.0.0.1:3000`. The in-app browser was visually reviewed at 390×844, 768×960, 1440×900, and 1920×1080. No horizontal document overflow was measured at any of those widths. Placeholder, title, CTA layout, and navbar were checked; the 3D/render quality remains unverified because no source render exists.
- **Known limitations:** The Hero is in an honest media-integration/placeholder state rather than its final architectural-art direction. The placeholder is not an architectural visualization. Phase 2 needs the real render assets and visual review before approval.
- **Latest Hero adjustment:** The supplied Blue Hour film is now the initial/default selection and appears first in the selector; Daylight appears second. Both clips remain separately labelled AI-generated concept visualizations. No other section was changed.

## Prior roadmap notes

The old Three.js/Blender asset workflow in the phase history above is superseded by the approved video-first creative rebuild. Future motion work should use the supplied films; a same-model canvas sequence is not currently in scope or implemented.
