# AiBEC International Website
# Project-Wide UI, Content, Design, and Quality Rules

**Document purpose:** This file is the mandatory rulebook for auditing, refining, and maintaining the existing AiBEC International website. Read and follow it before making changes. The project must be reviewed as a whole, including every page, section, component, route, responsive state, interaction, and user-facing string. Do not treat this as permission to redesign blindly or replace working code with a new template.

**Primary objective:** Make the website look and read like a deliberately designed, credible international educational consultancy website. Remove obvious AI-generated design habits, invented decorative labels, generic filler copy, and template-like interface patterns while preserving accurate AiBEC content, branding, and existing working functionality.

---

## 1. Non-Negotiable Rules

1. **Use Poppins as the only font family across the entire website.** Use appropriate Poppins weights for hierarchy, but do not mix in serif, display, handwriting, futuristic, or secondary typefaces. Use a sans-serif fallback only if Poppins fails to load.
2. **Do not use em dashes.** The character `—` must not appear in user-facing content, headings, labels, metadata, buttons, placeholders, tooltips, or generated UI copy. Prefer a period, comma, colon, parentheses, or a normal hyphen where grammatically appropriate. Also avoid en dashes in UI copy where a simple hyphen or rewritten sentence is clearer.
3. **Do not use emojis as interface icons or decorative elements.** Use a consistent real icon library, preferably the icon package already installed in the project. If none exists, use Lucide icons (`lucide-react` for React projects) unless the existing stack has a more suitable installed library. Do not introduce multiple competing icon packs.
4. **Do not use generic AI-looking round or oval cards.** Avoid pill-shaped cards, giant-radius panels, repeated floating cards, excessive capsules, and grids where every item is the same rounded rectangle. Prefer editorial columns, open layouts, fine rules, rectangular content regions, image-led compositions, and restrained borders.
5. **Do not add invented labels or decorative microcopy.** Every visible word must explain the organization, a service, an actual interaction, or useful navigation. Remove decorative metadata that merely tries to make the site look like an award-winning agency portfolio.
6. **Do not add invented facts.** Never manufacture client relationships, awards, statistics, certifications, testimonials, years of experience, event names, program dates, locations, guarantees, or claims of measured impact.
7. **Do not delete valid business content or working features in the name of visual simplification.** First audit, then make targeted improvements. Preserve forms, routes, integrations, contact methods, analytics, SEO behavior, and existing functionality unless a change is explicitly required.
8. **Do not claim work is complete without verifying it.** Run the available checks, inspect the rendered pages, test interactions, and report any remaining gaps honestly.
9. **Do not use fake buttons.** Every button, link, menu item, interactive row, or icon control must have a defined behavior and a valid destination or be clearly presented as unavailable until integrated.
10. **Do not create a wholesale rewrite just to impose a new design.** Inspect the current implementation and work within its established framework and architecture wherever practical.

---

## 2. Required Project-Wide Audit Before Editing

Before changing any code, inspect the repository and establish what is actually present. Do not assume the framework, component structure, routing, styling method, or backend.

### 2.1 Inspect the project structure

Review at least:

- Package and dependency manifests, lockfiles, scripts, and build configuration.
- Application entry points and routing.
- Every page and route.
- Shared layouts, headers, navigation, footers, and reusable components.
- Every section component on the homepage and any other public page.
- Styling files, design tokens, global CSS, utility classes, and responsive breakpoints.
- Text/content data files, constants, localization files, and CMS bindings.
- Forms, validation, submission handlers, integrations, and API calls.
- Images, logos, icons, fonts, SVGs, videos, and other public assets.
- SEO metadata, page titles, descriptions, Open Graph data, structured data, and favicons.
- Loading, error, empty, success, disabled, and confirmation states.
- Mobile navigation, dropdowns, accordions, carousels, lightboxes, modals, and floating contact controls.
- Accessibility attributes, keyboard interaction, focus handling, and reduced-motion behavior.
- Existing tests, linting, build checks, and browser testing setup.

Use the tools already available in the project. Do not add dependencies before checking whether equivalent functionality is already installed.

### 2.2 Create an audit inventory

Before implementation, make a private working checklist or an audit document that records:

- Every route and page.
- Every visible section in page order.
- The components responsible for each section.
- All user-facing text in each section.
- All CTAs and their current destinations or behaviors.
- Any suspicious, redundant, placeholder, invented, duplicated, or portfolio-style text.
- Any repeated visual pattern that creates a generic AI-generated appearance.
- Any mobile-only or desktop-only content.
- Any functional or accessibility defects.

Do not report the audit as complete until the whole inventory has been checked against the rendered website.

### 2.3 Establish a baseline

Before major changes:

- Determine how to start the app using the existing scripts.
- Run existing lint, type, test, and build commands when available.
- Record pre-existing errors separately from errors introduced by the changes.
- Capture or inspect the desktop and mobile experience if browser tooling is available.
- Test existing main navigation, CTAs, and forms so existing behavior is not lost.

If the project cannot run, first identify the cause. Do not conceal a broken baseline by silently replacing configuration or removing important functionality.

---

## 3. Mandatory Content Removal: Reference-Image Artifacts

The uploaded reference screenshot contains design artifacts that must not appear in the finished AiBEC website. Search the whole project for these strings and remove them from visible content, hidden responsive content, components, reusable snippets, and content configuration. Check normalized and case-insensitive variants as well.

### 3.1 Remove this portfolio label

`PORTFOLIO FOLIO : 2026.EDITION`

This is not AiBEC business content. Remove it entirely. Do not replace it with invented portfolio metadata, edition labels, folio numbers, project serials, fake issue numbers, or made-up publication details.

### 3.2 Remove this decorative hero eyebrow

`GLOBAL EDUCATIONAL CONSULTANCY & INSTITUTIONAL STRATEGY`

This exact decorative label from the reference screenshot must be removed from the visible website. Do not reinsert it as a small eyebrow, tag, pretitle, floating caption, or badge. Do not replace it with a similar invented agency-style slogan merely to fill the space.

The page should feel balanced after removal. Rework alignment and spacing rather than inserting more unnecessary words.

### 3.3 Search variants

Search source, data, styles, and rendered text for variants such as:

- `PORTFOLIO FOLIO`
- `2026.EDITION`
- `GLOBAL EDUCATIONAL CONSULTANCY`
- `INSTITUTIONAL STRATEGY`
- Unintended combinations of `folio`, `edition`, `portfolio`, and fabricated version labels.

Remove only the unwanted visible content. Do not blindly delete legitimate code identifiers, internal filenames, or non-visible technical references without verifying context.

### 3.4 Other suspicious labels to audit

Look for labels with the same purpose-free portfolio aesthetic, including terms such as:

- `EST. 2026` or invented establishment dates.
- `VOL. 01`, `ISSUE 01`, `EDITION 01`, `PROJECT NO.`, or fake serial numbers.
- `CASE STUDY 001` when the page does not actually present a documented case study.
- `EXCELLENCE REDEFINED`, `THE FUTURE STARTS HERE`, or other generic replacement slogans added solely as decoration.
- `SCROLL TO EXPLORE` when it is unnecessary or obstructive.
- `AWARD-WINNING`, `WORLD-CLASS`, `NO. 1`, or similar claims unless accurate and explicitly supported by supplied content.
- Placeholder microcopy, development labels, build version labels, template notes, and unedited demo content.

Do not remove a valid supplied business statement merely because it contains a common phrase. Judge whether the specific text is accurate, useful, and appropriate to AiBEC.

---

## 4. Complete Copy Audit: Every Word Must Earn Its Place

Review all visible content, not just the hero. The audit must include desktop and mobile versions, accessible labels, menu contents, image captions, form messages, popups, notifications, metadata visible in previews, and content loaded after interaction.

For every line of text, ask:

1. Is this real AiBEC content or a verifiable interface label?
2. Does the visitor need it to understand the organization, service, navigation, or action?
3. Is it accurate and supported by the supplied business information?
4. Is the same information already stated nearby?
5. Does it sound like a generic AI slogan or template filler?
6. Is it written in natural, plain English?
7. Does it use an em dash, fake metric, meaningless label, or awkward capitalization?
8. Is the wording clear when read aloud?
9. Does the text fit the actual layout at desktop and mobile sizes?
10. If removed, would a visitor lose useful information? If not, remove it.

### 4.1 Preserve the organization’s actual message

The site must communicate, with clarity and without invented expansion, that AiBEC International works in educational consultancy, leadership training, public speaking, institutional improvement, AI and IoT business setups, branding, corporate training, student leadership, exchange programs, and personality development.

Keep the Chairman and Managing Director attribution for Mohammed Rifay where relevant. Do not invent a biography, qualifications, awards, or personal achievements beyond the approved supplied information.

### 4.2 Avoid generic AI-generated writing

Do not use empty or repetitive marketing formulas such as:

- “Unlock your full potential” repeated in multiple places.
- “In today's fast-paced world”.
- “Where innovation meets excellence”.
- “Empowering tomorrow's leaders today”.
- “Revolutionizing the future of education”.
- “Seamlessly bridging the gap”.
- “Transform your journey”.
- “A new era of possibilities”.
- “Discover the power of innovation”.
- “At the forefront of change” without specific evidence.
- “More than just a service”.
- “Your trusted partner in success” without adding meaningful information.

These examples are warning patterns, not a reason to delete accurate supplied copy automatically. Rewrite only where it improves clarity and preserves the true meaning.

### 4.3 No needless repetition

- Do not repeat the same slogan in the hero, About section, CTA, and footer.
- Do not duplicate paragraphs in multiple places.
- Do not repeat client names to create a looping wall unless the repeated motion is necessary, tasteful, and accessible. Prefer one accurate entry per institution.
- Do not repeat a section heading as a subtitle immediately underneath it.
- Do not put the same CTA label in multiple adjacent controls.
- Do not repeat contact details in every section when a clear contact area and footer are sufficient.

### 4.4 Grammar and typography

- Use consistent spelling, capitalization, and punctuation.
- Use normal sentence case for paragraphs and descriptive text.
- Reserve uppercase text for short navigation labels or deliberate, brief interface labels, not whole paragraphs.
- Avoid unnecessary exclamation marks.
- Do not use repeated periods or ellipses as a decorative writing habit.
- Never use an em dash character in website copy.
- Keep text readable rather than compressing it into long, letter-spaced uppercase lines.
- Do not rewrite supplied quotations without checking the original. Keep the supplied quotation attributed as provided.

### 4.5 Do not put internal design commentary into the website

The public site must never display statements such as:

- `Premium UI`.
- `Modern design`.
- `AI-powered experience` unless this is an actual offering and supported by business details.
- `Scroll animation`.
- `Interactive section`.
- `3D experience`.
- `Add image here`.
- `Replace this text`.
- `Coming soon` unless an actual planned feature must be disclosed.
- Any instructions intended for developers, designers, or the AI coding agent.

Design requirements belong in this rulebook and source comments, not in the public page content.

---

## 5. Typography Rule: Poppins Only

Use **Poppins throughout the entire interface**. This is mandatory.

Applies to:

- H1 through H6 headings.
- Paragraphs and captions.
- Navigation and dropdowns.
- Buttons and links.
- Forms and validation messages.
- Tooltips and notifications.
- Footer content.
- Modal dialogs and accordions.
- Gallery captions.
- Logo-adjacent text unless the logo is a supplied image/vector with its own artwork.
- Responsive variants and dynamically injected content.

Implementation rules:

1. Inspect the current font setup first.
2. Reuse any existing Poppins font files or import already configured in the project.
3. If Poppins is not present, add it using the project's established font-loading strategy. Avoid duplicate font imports.
4. Declare Poppins centrally in the main design tokens or global stylesheet.
5. Remove conflicting font-family declarations from components, inline styles, page-level styles, and third-party-looking overrides where safe.
6. Use a coherent set of weights, generally 400, 500, 600, and 700 as needed. Do not use a different font to create contrast.
7. Avoid synthetic heavy bolding and avoid excessively thin text on low-contrast backgrounds.
8. Make headings expressive through size, weight, line-height, and spacing rather than switching to a serif font.
9. Check that Poppins loads correctly across all routes and production build conditions.
10. Include a reasonable sans-serif fallback only after Poppins.

Do not use Cormorant Garamond, Playfair Display, DM Serif Display, Times New Roman, or any other contrasting font. Even if a reference design uses a serif, Poppins takes precedence for this project.

---

## 6. Visual Design Rules: Avoid Generic AI UI

The design must be deliberate, restrained, readable, and suitable for an established educational consultancy. Visual polish comes from alignment, composition, typography, photography, contrast, and purposeful movement, not from piling on trendy effects.

### 6.1 Cards and containers

Avoid:

- Large rounded cards everywhere.
- Oval or pill-shaped content containers.
- A repeated grid of six identical floating cards.
- Nested cards inside other cards without a functional reason.
- Excessive box shadows.
- Glassmorphism panels on every section.
- Blurred translucent cards used only to look futuristic.
- Bright gradient cards.
- Giant rounded backgrounds behind ordinary paragraphs.
- Pricing-card layouts for services that are not priced packages.

Prefer:

- Open editorial layouts.
- Clear columns and rows.
- Fine horizontal rules.
- Thin borders with low visual weight.
- Rectangular image treatments.
- Asymmetric but balanced compositions.
- Space between content groups.
- Simple sections with a clear hierarchy.
- Minimal borders and restrained corner radii.

A card is acceptable when it provides a genuine functional grouping, such as a form panel or distinct interactive module. Do not apply a blanket rule that all containers must be cards.

### 6.2 Buttons and pills

- Use clear rectangular buttons.
- Prefer square corners or a subtle radius, generally 0 to 4 pixels unless the established brand system has a documented reason otherwise.
- Do not use giant pill buttons.
- Avoid redundant button decoration, oversized arrow circles, animated blobs, and decorative badges.
- Use one primary style, one secondary style, and a clear text-link style.
- Keep button dimensions and text alignment consistent.
- Provide visible hover, focus, active, disabled, and loading states where relevant.
- Do not style every link like a button.

### 6.3 Icons

- Use authentic vector icons from one consistent icon set.
- Prefer the project's installed icon pack. If none exists, use Lucide icons.
- Use icons only when they improve identification or usability.
- Keep icon stroke weight, scale, and visual style consistent.
- Align icons optically with adjacent text.
- Use proper semantic labels for icon-only controls.
- Do not use emojis, emoji substitutes, or random Unicode symbols as interface icons.
- Do not use icons as decoration beside every heading.
- Do not make up logo marks for partner organizations.
- Do not use an unrelated Unicode arrow in one place and a different icon style elsewhere. Use the chosen icon family consistently.

### 6.4 Colors and gradients

- Inspect the existing AiBEC logo and current color system before changing brand colors.
- Preserve recognizable logo colors.
- Use a small palette with clear text, background, border, and action roles.
- Do not add a different accent color in each section.
- Avoid purple-blue gradients, neon glows, rainbow gradients, and random gradient overlays.
- Do not put gradients on every heading or CTA.
- Use shadows only to establish genuine depth or separation.
- Maintain accessible text contrast.

### 6.5 Decorative elements

Do not add random circles, dots, grids, plus signs, crosshairs, orbit lines, glowing particles, faux technical labels, oversized quotation marks, decorative counters, or abstract blobs merely to fill empty space.

Decorative elements are acceptable only when they have a clear relationship to the brand and improve composition. Empty space does not need to be filled.

### 6.6 Layout and spacing

- Establish a consistent spacing scale.
- Align section content to a shared grid where appropriate.
- Ensure the logo, navigation, headline, body text, CTAs, images, and section boundaries align intentionally.
- Avoid arbitrary offsets that only work at one viewport size.
- Do not create excessive empty gaps to imitate a portfolio design if this pushes useful content below the fold without purpose.
- Do not compress everything into tight cards to make a page look busy.
- Keep paragraph measure comfortable and avoid very long text lines.
- Never let text collide with grid lines, images, or other content.

---

## 7. Hero Section Rules

Use the existing approved AiBEC message and make the hero clear. The hero must immediately tell visitors what the organization does and give them a useful next step.

### 7.1 Required hero content

Primary headline:

`Transforming The Global Learning Ecosystem`

Approved supporting quotation:

`The future belongs to those who are aware of their dreams!`

Approved supporting description:

`AiBEC empowers individuals and institutions to achieve their highest potential.`

Leadership attribution, where used:

`Mohammed Rifay, Chairman & MD`

Primary actions:

- `Our Services`
- `Get in Touch`

Use the approved content accurately. Small editorial changes to punctuation or capitalization are permitted if they preserve meaning, but do not invent another slogan.

### 7.2 Remove screenshot-only labels

The hero must not show either of the following:

- `PORTFOLIO FOLIO : 2026.EDITION`
- `GLOBAL EDUCATIONAL CONSULTANCY & INSTITUTIONAL STRATEGY`

Do not replace them with similarly meaningless labels.

### 7.3 Hero composition

- Make the principal headline the clear focal point.
- Provide readable line breaks and responsive type sizing.
- Do not stretch text across the full viewport when it becomes difficult to read.
- Keep supporting text and actions visually connected to the headline.
- Use actual brand assets, genuine photographs, or purpose-built visuals.
- Do not use fabricated people, fake school logos, or unrelated stock images implying specific AiBEC activities.
- Do not overlay excessive UI labels on top of the hero image.
- Avoid decorative elements behind text that harm contrast.
- The hero must remain usable if animation or WebGL is disabled.

### 7.4 Hero spacing after text removal

After removing the unwanted reference-image labels:

- Rebalance the top spacing and columns.
- Keep the content optically aligned.
- Do not leave an empty area that appears to be a missing component.
- Do not add new copy simply to occupy the previous label's position.
- Use spacing, alignment, and image composition to repair the layout.

---

## 8. AiBEC Content Inventory and Preservation Rules

The following approved content areas must be represented wherever they are part of the existing website. Do not silently omit a section during the audit or redesign.

### 8.1 About Mohammed Rifay

Approved description:

`A visionary educationist, entrepreneur, and leadership coach, Mohammed Rifay has been at the forefront of empowering individuals and institutions across multiple domains. His journey reflects resilience, innovation, and a passion for uplifting education and business sectors globally.`

Preserve his role as Chairman and Managing Director. Use a real supplied portrait if one exists. Do not generate a fake portrait and imply that it is him.

### 8.2 About AiBEC International

Approved description:

`AiBEC International is a pioneering Educational Consultancy committed to transforming the learning ecosystem through world-class training, strategic consultancy, and global collaborations. We work with schools, universities, corporates, and organizations worldwide to foster excellence.`

Keep the focus on the stated services and audiences. Do not add unsupported claims about market position, locations, or client volume.

### 8.3 Mission

`To transform the global learning ecosystem with world-class training and strategic consultancy, empowering individuals and institutions to realize their full potential and drive positive change.`

### 8.4 Vision

`To be a globally recognized leader in educational and corporate development, fostering innovation, leadership, and a culture of continuous improvement across communities worldwide.`

Mission and vision can be laid out elegantly, but do not replace them with vague one-line slogans.

### 8.5 Core services

Keep all six services and their descriptions:

1. **Leadership Training:** Developing the next generation of leaders with impactful coaching and pedagogical leadership programs.
2. **Public Speaking:** Master the art of communication with expert coaching in public speaking, anchoring, and presentation skills.
3. **Educational Consulting:** Comprehensive consultancy for schools and institutions, from curriculum development to quality inspection.
4. **AI & IoT Business Setups:** Integrating cutting-edge AI and IoT solutions to modernize educational and business operations for the future.
5. **Branding Solutions:** Strategic corporate branding, business growth strategies, and brand promotion to elevate market presence.
6. **Corporate Training:** Customized training programs covering HR, marketing, sales, and business development to boost corporate efficiency.

Small grammar refinements are acceptable where necessary. Preserve the service meaning. Do not combine distinct services into one item or create unsupported new offerings.

### 8.6 School Turnaround

Retain the section introduction:

**Institutional Growth & Revival**

**School Turnaround Strategies**

`Practical interventions to stabilize struggling schools, support teaching staff, and build a culture where students take genuine pride in their education.`

The six programs must all remain discoverable, with their descriptions and key focus areas:

#### 01. School Audit
Descriptor: `Diagnostics & Evaluation`

Description:

`We carry out a direct, ground-level assessment of the school. Our team reviews classroom teaching, administrative workflows, compliance files, and student retention numbers. At the end of the audit, management receives a frank report with prioritized action steps to plug operational leaks and lift academic performance.`

Focus areas:
- Full review of syllabus completion and teaching quality.
- Audit of school fee collection and administrative bottlenecks.
- Confidential interviews with teachers, parents, and administrative staff.

#### 02. School Consulting
Descriptor: `Strategic Advisory`

Description:

`Fixing an underperforming institution takes structured guidance. We sit with trustees and principals to rebuild the school calendar, fix fee policies, strengthen admissions drives, and establish clear accountability metrics for department heads.`

Focus areas:
- Strategic roadmaps for student admissions and parent trust.
- Department-level accountability frameworks for principals.
- Financial planning and fee structure optimization.

#### 03. Teacher Training
Descriptor: `Pedagogical Workshops`

Description:

`Teachers face real hurdles with classroom discipline, mixed learning speeds, and outdated lesson delivery. We deliver intensive in-person sessions on project-based learning, active questioning methods, and time management so teachers stay energetic and classes remain productive.`

Focus areas:
- Activity-based and project-based learning methods.
- Practical classroom discipline without confrontation.
- Better lesson planning and balanced student assessments.

#### 04. Student Leadership Program
Descriptor: `Council & Prefect Training`

Description:

`Student leaders should do more than wear badges. We train prefects, sports captains, and house leaders in real responsibility: morning assembly decorum, playground supervision, peer mediation, and organizing school events with teamwork and dignity.`

Focus areas:
- Roles, duties, and code of conduct for student council members.
- Event organizing, public protocol, and crowd management.
- Peer mediation techniques to resolve minor conflicts early.

#### 05. Student Exchange Program
Descriptor: `Global & Inter-School Exposure`

Description:

`Sending students beyond their familiar campus opens their minds. We coordinate travel, partner school tie-ups, and collaborative workshops with respected institutions across India and abroad, giving young learners direct exposure to different cultures and learning styles.`

Focus areas:
- Institutional partnerships with accredited host schools.
- Collaborative science fairs, cultural days, and language circles.
- Fully structured safety protocols and faculty chaperoning.

#### 06. Personality Development Program
Descriptor: `Confidence & Communication`

Description:

`Many students know their subjects but freeze when asked to speak on stage or introduce themselves in public. This module develops clear voice projection, body posture, everyday manners, and basic debate skills so students express themselves with calm confidence.`

Focus areas:
- Practical public speaking and mic handling practice.
- Everyday etiquette, dining manners, and personal presentation.
- Techniques to manage nervousness and speak clearly under pressure.

Do not hide any of the six program descriptions or their focus areas behind inaccessible interactions. Desktop tabs or selectable lists are acceptable if they remain discoverable and understandable. On mobile, provide a clear accordion or vertical list.

### 8.7 Turnaround call to action

Heading:

`Need a structured turnaround plan for your institution?`

Description:

`Schedule a private consultation with Mohammed Rifay and the AiBEC advisory team to evaluate your school's current operations.`

Actions:
- `Request Consultation`
- `View Client Schools`

Link these actions to real destinations or working page sections.

### 8.8 Gallery

Heading: `Moments of Impact`

Supporting text: `A glimpse into our journey of inspiring change.`

The existing labels `Gallery Moment 1` through `Gallery Moment 8` are placeholder captions, not ideal public-facing final captions. Use genuine supplied photographs and accurate captions where available. If no caption information exists, use the gallery images without fabricated event names or descriptions. Do not describe a stock image as a documented AiBEC activity.

### 8.9 Client names

Preserve these names, using official logo assets only when supplied or verified:

- Presidency Group (Bengaluru)
- Al Million Group Qatar
- Good Shepherd International (Ooty)
- Next Builders
- Red Crescent UAE
- Loyola College (Chennai)
- UN WFP
- Baniyas Spikes Group

Show each organization once in a static list or grid unless a genuinely useful, accessible animation requires repetition. Do not invent additional institutions or imply a more specific engagement than the supplied information supports.

### 8.10 Registration CTA

Heading:

`Ready to Begin Your Transformation?`

Supporting text:

`Join our upcoming workshops and consultancy programs. Secure your spot to unlock your potential.`

Button:

`Register & Confirm Your Slot`

Use a genuine registration URL or working registration form if available. Never imply that a registration is complete unless the backend confirms it. Do not add fake deadlines, countdowns, remaining-slot counters, or event dates.

### 8.11 Contact details

Preserve:

- Phone: `+91 8867039777`
- Email: `AiBECinternational@gmail.com`

Use working `tel:` and `mailto:` links. Do not invent an office address, alternate number, or social account.

### 8.12 Footer

Preserve the organization name, supplied description, quick links, supplied contact details, and copyright statement:

`© 2026 AiBEC International. All rights reserved.`

Preserve the existing credit:

`A CRAFT BY MIRZA`

The credit should remain understated and should not overpower the organization identity.

---

## 9. Lists, Dots, and Content Presentation

Avoid generic AI-generated dot-bullet layouts when they are being used as a default design decoration.

### 9.1 Marketing and service sections

When content contains a small number of service features or focus areas, choose the presentation based on the content:

- Use compact lists when people genuinely need to scan discrete points.
- Use numbered rows when sequence, hierarchy, or a program number is meaningful.
- Use a definition list or clear label-value layout for short attributes.
- Use open editorial rows for service directories.
- Use an accessible accordion when long material needs to be organized on mobile.
- Use plain prose when the content reads better as a coherent paragraph.

Do not replace every bullet with a decorative icon. Do not prefix every sentence with a circle, check mark, sparkle, arrow, or emoji.

### 9.2 Never use decorative Unicode bullets as icons

Do not use `•`, `●`, `◦`, stars, sparkle symbols, or emoji glyphs as ornamental UI decorations. Use CSS borders, spacing, real vector icons where useful, or semantic list markers when they genuinely improve readability.

Semantic unordered lists are allowed where they are the clearest accessible presentation. The prohibition is against using dots as a lazy visual pattern or fake icon system, not against legitimate HTML list structure.

### 9.3 Numeric markers

Use 01, 02, 03 only when they provide a useful reference or structure, such as the six turnaround programs. Do not scatter fabricated section numbers and editorial serial codes throughout unrelated sections.

---

## 10. Photography, Logos, and Assets

- Audit the current assets before replacing anything.
- Preserve the actual AiBEC logo and use the best available resolution.
- Do not recreate the logo using ordinary text if the genuine asset exists.
- Do not stretch, distort, recolor, or crop a logo in a way that damages its identity.
- Use authentic school, leadership, meeting, training, or gallery images supplied by the organization.
- Do not use fake client logos.
- Do not present generic stock photography as proof of an actual AiBEC event, partnership, workshop, or result.
- Do not generate a fake image of Mohammed Rifay and present it as a real portrait.
- If an image is missing, use a clearly replaceable neutral placeholder in development. Do not expose placeholder instructions on the public site.
- Use image dimensions and `object-fit` deliberately.
- Reserve image layout space to prevent content shifting.
- Add meaningful alt text for informational images. Use empty alt text for purely decorative images.
- Never write keyword-stuffed alt text.
- Keep gallery cropping consistent enough to feel curated, without forcing all images into identical proportions.

---

## 11. Motion and Animation Rules

Motion should make the site feel considered and responsive, not like a collection of AI-generated effects.

### 11.1 Allowed motion

- Short opacity and transform reveals.
- Restrained image masks.
- Slight image parallax when it does not interfere with reading.
- Subtle navigation-state transitions.
- Small hover transitions on links and service rows.
- Controlled accordion and lightbox transitions.
- A purposeful, lightweight Three.js moment if the existing implementation and performance budget support it.

### 11.2 Disallowed motion habits

- Every paragraph flying into the viewport independently.
- Excessive scroll-triggered animation on each tiny element.
- Large bouncing elements.
- Random floating shapes.
- Continuous rotating objects without meaning.
- Fake cursor-following decorations everywhere.
- Scroll-jacking or forced scrolling.
- Long intro sequences that block access to the page.
- Scroll animations that hide text until an animation completes.
- Horizontal page movement that prevents normal mobile scrolling.
- Repeated animation that causes distracting visual noise.
- Motion that makes the layout jump or causes cumulative layout shift.

### 11.3 Performance and accessibility

- Respect `prefers-reduced-motion`.
- Ensure content is still visible when animation is disabled or JavaScript fails.
- Use transform and opacity where possible.
- Avoid expensive layout-affecting animation.
- Do not make WebGL necessary to navigate or understand the page.
- If Three.js exists, verify cleanup of geometries, materials, textures, event listeners, and animation frames.
- Reduce 3D complexity on mobile and lower-powered devices.
- Avoid loading large animation libraries for one tiny effect if existing CSS can do it well.

---

## 12. Responsive Design Audit

Test the actual website at representative viewport widths, including at least:

- Small mobile: approximately 320 to 375 CSS pixels.
- Common mobile: approximately 390 to 430 CSS pixels.
- Tablet: approximately 768 CSS pixels.
- Small laptop: approximately 1024 CSS pixels.
- Desktop: approximately 1280 to 1440 CSS pixels.
- Wide desktop: approximately 1600 CSS pixels or greater.

At every size, check:

- Navigation wrapping, menu opening and closing, and CTA visibility.
- Headline wrapping and line breaks.
- Content column alignment.
- Image cropping and aspect ratios.
- Form widths and control sizes.
- Service-row wrapping.
- Turnaround program descriptions and focus lists.
- Client names and logos.
- Gallery arrangement.
- Footer columns and legal text.
- Fixed and floating actions.
- Horizontal overflow.
- Overlapping or clipped text.
- Touch target sizes.
- Header height and sticky offsets.
- Scroll-linked effects when the screen is small.

Mobile is a deliberate layout, not a smaller screenshot of desktop.

Remove hover-only behavior from mobile-critical interactions. Ensure every section remains legible and usable on touch screens.

---

## 13. Functional Audit: Everything That Looks Interactive Must Work

Inspect and test every visible control.

### 13.1 Navigation

- Logo returns to the intended homepage or top-of-page location.
- Every navigation item goes to the correct route or anchor.
- Anchor scrolling accounts for sticky headers.
- Active states are accurate if implemented.
- Mobile menu opens and closes correctly.
- Escape closes the menu where appropriate.
- Keyboard focus is managed correctly.
- The menu cannot remain accidentally open after navigation.
- Links do not point to placeholder `#` destinations unless they are intentional same-page anchors.

### 13.2 CTAs

Check:

- Register Now.
- Our Services.
- Get in Touch.
- Request Consultation.
- View Client Schools.
- Register & Confirm Your Slot.
- Phone and email links.

Each must have a real destination or a real interaction. Do not fabricate a booking confirmation.

### 13.3 Accordions, tabs, and galleries

- Accordions open and close using pointer and keyboard.
- `aria-expanded` and control relationships are correct.
- Content is not clipped when expanded.
- Tabs, if used, expose the currently selected tab and retain access to all programs.
- Gallery lightbox can be opened and closed.
- Keyboard navigation and Escape behavior work in overlays.
- Focus is restored appropriately when overlays close.
- Carousels, if used, have clear controls and do not autoplay in a distracting way.

### 13.4 Forms

Audit all fields and submission states.

- Labels are visible and associated with their controls.
- Required fields are clearly identified.
- Validation messages explain how to correct the field.
- Invalid email and phone formats are handled appropriately.
- A loading state prevents accidental duplicate submissions where needed.
- Success is shown only after confirmed backend success.
- Failure is shown when submission fails.
- Field values are retained when appropriate after errors.
- Keyboard navigation is logical.
- The form works at mobile widths.
- Submission does not silently fail.

If no backend is configured, document that limitation and provide a proper integration point. Do not simulate a real send with an unconditional success alert.

### 13.5 Runtime quality

- Fix console errors introduced by changes.
- Fix failed asset and font requests.
- Fix broken imports and invalid React keys where encountered.
- Fix accessibility warnings relevant to the changed interface.
- Ensure all interactive elements have meaningful names.
- Check the browser console and network panel if the available tools support them.

---

## 14. Accessibility Requirements

- Use semantic HTML elements for headings, navigation, main content, sections, lists, buttons, and forms.
- Maintain a logical H1, H2, H3 hierarchy.
- Provide visible focus styles.
- Preserve keyboard access to all functions.
- Use buttons for actions and anchors for navigation.
- Do not use a clickable `div` when a native interactive element is suitable.
- Provide text alternatives for meaningful images.
- Do not put important content in images without equivalent text.
- Keep contrast sufficient for normal and large text.
- Do not rely on color alone to show state.
- Give icon-only controls accessible names.
- Ensure dialogs and lightboxes have appropriate labeling and focus handling.
- Respect reduced-motion preferences.
- Use native form labels and appropriate autocomplete attributes where suitable.
- Keep hit areas large enough for touch interaction.

---

## 15. SEO and Metadata Audit

Audit every route for:

- Accurate page title.
- Accurate meta description.
- Canonical URL where appropriate and already supported by the project.
- Open Graph title, description, and image.
- Favicon and logo usage.
- Correct heading hierarchy.
- Descriptive internal links.
- Broken routes and broken external links.
- Unintended placeholder text in metadata.
- Fake portfolio labels or invented claims in social share previews.
- Accurate organization naming and contact data.

Do not add structured data claims that are not supported by the actual website. Do not invent review ratings, addresses, service areas, or organization credentials.

A technical metadata field can contain information not visible on the page, so inspect it separately instead of assuming that cleaning the rendered page is enough.

---

## 16. Code Quality and Change Safety

- Follow the current framework and project conventions.
- Preserve existing working services and integrations.
- Use existing reusable components when they are sound.
- Consolidate duplicated design tokens and repeated styles when safe.
- Avoid writing an entire application in a single component.
- Avoid unnecessary dependency additions.
- Avoid broad configuration changes unrelated to the task.
- Do not delete assets until all references have been checked.
- Do not replace correct content with placeholder data.
- Do not change environment variables, credentials, backend schemas, or production endpoints without explicit need.
- Do not expose secrets in code or logs.
- Avoid suppressing warnings instead of fixing their cause.
- Avoid `!important` as a quick fix unless there is a specific, documented reason.
- Avoid duplicate click handlers and nested interactive controls.
- Ensure components have sensible names and clear responsibilities.
- Keep styling consistent with the project's established approach.

Before making any structural change, identify which pages or components depend on the code being changed. After changing shared components, recheck every affected route.

---

## 17. Forbidden Design and Content Patterns Checklist

Before approving any section, verify that it does not contain the following unless there is a clear, documented, user-centered reason:

- Em dashes in visible copy.
- Emojis used as icons.
- Multiple competing icon styles.
- Non-Poppins typefaces.
- Repeated oversized rounded cards.
- Oval content containers.
- Giant pill-shaped buttons.
- Gradient text used only for trendiness.
- Purple-blue AI gradients.
- Glassmorphism as a default treatment.
- Random floating decorative shapes.
- Fake technical readouts.
- Fake edition or folio labels.
- Unnecessary uppercase metadata.
- Placeholder captions presented as real content.
- Fabricated testimonials or client achievements.
- Repetitive generic slogans.
- Artificial urgency and false scarcity.
- Dot glyphs used as fake icons.
- The same layout repeated in every section.
- Excessive parallax and scroll-jacking.
- Hover-only content that cannot be reached on mobile.
- Dead buttons and dummy links.
- Form success messages without confirmed submission.
- Decorative elements that compete with content.
- Content that has been hidden rather than properly organized.

---

## 18. Required Search and Verification Pass

After edits, search the entire repository for forbidden or suspicious visible strings. Search source files and configuration as appropriate, then verify the rendered UI as well.

Minimum search targets:

- The exact two unwanted screenshot labels.
- The em dash character `—` in content, components, and copy configuration.
- Emoji characters or known emoji icon usage in the UI.
- Font declarations that do not use Poppins, excluding third-party assets where an override is not appropriate.
- `border-radius` and utility classes that create pill or excessive card shapes.
- Placeholder terms such as `Lorem ipsum`, `TODO`, `FIXME`, `Replace this`, `Your text here`, `Example title`, `Coming soon`, and `Click here` in rendered or production-intended content.
- Duplicate client names in data and rendered sections.
- Empty links, `href="#"`, inert buttons, and placeholder submit handlers.
- Console output, broken images, missing fonts, and failed imports.

The search result alone is not the audit. Inspect each match in context. Do not blindly remove harmless internal identifiers or technical text that is not user-facing.

Where a result is intentionally retained, be able to explain why it belongs in the project.

---

## 19. Completion Criteria

The task is complete only when every applicable item below has been checked.

### Content

- [ ] Every page and section has been inventoried.
- [ ] Every piece of visible copy has been reviewed.
- [ ] The exact `PORTFOLIO FOLIO : 2026.EDITION` label is removed from the public experience.
- [ ] The exact `GLOBAL EDUCATIONAL CONSULTANCY & INSTITUTIONAL STRATEGY` label is removed from the public experience.
- [ ] Unwanted portfolio-style metadata and template leftovers are removed.
- [ ] The em dash character is absent from user-facing copy.
- [ ] Generic repeated AI-style slogans have been removed or rewritten where appropriate.
- [ ] The approved AiBEC content and all six core services remain represented.
- [ ] All six turnaround programs and their focus areas remain accessible.
- [ ] All supplied institution names are preserved without accidental duplicates.
- [ ] Contact information and footer details remain accurate.
- [ ] No unsupported claims or fabricated content have been introduced.

### Design

- [ ] Poppins is the only site typeface.
- [ ] Real vector icons are used instead of emojis.
- [ ] Generic round-oval card layouts have been removed or justified by a real interaction need.
- [ ] Buttons are rectangular or subtly rounded, not giant pills.
- [ ] Repeated decorative dot bullets have been removed where they serve no semantic purpose.
- [ ] The visual hierarchy is clear and consistent.
- [ ] The layout feels designed for AiBEC rather than copied from a generic AI template.
- [ ] Images and logos are genuine, supplied, or clearly treated as placeholders.
- [ ] Mobile and desktop layouts have been checked separately.

### Functionality

- [ ] Navigation and anchors work.
- [ ] Registration actions have a valid destination or a clearly identified integration requirement.
- [ ] Consultation actions work.
- [ ] Phone and email links work.
- [ ] Accordions, tabs, and gallery interactions work if present.
- [ ] Forms have real validation and honest submission states.
- [ ] Keyboard navigation and focus states work.
- [ ] Reduced-motion preferences are respected.
- [ ] No new broken imports, runtime errors, or failed assets remain.

### Quality verification

- [ ] The available lint, test, and build checks have been run.
- [ ] Desktop layout has been inspected in a browser when tooling is available.
- [ ] Mobile layout has been inspected in a browser when tooling is available.
- [ ] No unintended horizontal overflow remains.
- [ ] Shared components have been checked on all routes that use them.
- [ ] Pre-existing issues and newly fixed issues are clearly distinguished in the final report.

---

## 20. Required Final Report From the Coding Agent

When the audit and implementation are complete, provide a concise but specific report containing:

1. **Files inspected:** List the important pages, components, style files, assets, and configuration files reviewed.
2. **Sections audited:** List every page section checked.
3. **Content removed or corrected:** Include the unwanted screenshot labels and any other actual template leftovers found.
4. **Design changes:** Explain changes to typography, icons, cards, buttons, spacing, responsive behavior, and animation.
5. **Functional tests:** Identify navigation, CTAs, forms, accordions, gallery, and other interactions tested.
6. **Validation results:** Give the actual build, lint, test, and browser verification outcomes. Do not say a check passed if it was not run.
7. **Remaining issues:** List anything that still needs a real asset, URL, backend, or manual verification.

Do not simply state “done,” “fully optimized,” or “everything works.” Every claim in the report must be supported by the checks that were actually performed.

---

## Final Instruction

Treat this document as a persistent project rulebook. Read it before each substantial UI or content task. Audit before editing, make targeted changes, and verify afterward.

The finished AiBEC International website must be clean, credible, human, readable, responsive, and purpose-built. Use Poppins consistently. Use real icons. Keep legitimate AiBEC content. Remove the unwanted folio and hero eyebrow labels. Avoid em dashes, emojis, generic round-oval cards, decorative dot patterns, meaningless microcopy, invented claims, and AI-template aesthetics.

**The standard is not to add more effects. The standard is to remove what does not belong, make every remaining element intentional, and leave the existing website more accurate, more usable, and more refined.**
