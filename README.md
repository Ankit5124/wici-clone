# WiCi Website Clone

A page-for-page rebuild of the [WiCi](https://wici.ai) marketing site (wireless GPU and local AI hardware), written from scratch in React and TypeScript.

I built this to practise two things at once: recreating a polished, animation-heavy production site, and running AI coding agents as a small team that I direct, review and correct.

**Live demo:** _add the Vercel URL here after deploying_

> This is an unofficial clone made for learning. I am not affiliated with WiCi. The brand, copy, images and videos belong to their owners and are used here only to reproduce the look of the original.

## What's in it

Ten routes, each split into its own bundle:

| Route | Page |
| --- | --- |
| `/` | Home: hero film, manifesto, systems accordion, demo films, benchmarks, press quotes |
| `/wici-one` | Product page for the wireless GPU, with editions and a comparison table |
| `/wici-infer` | Local AI engine: benchmarks, specs, FAQ, sticky sub-navigation |
| `/technology` | How it works |
| `/research` | Research areas and publications |
| `/solutions/local-ai` | Solution page |
| `/solutions/creative-production` | Solution page |
| `/solutions/physical-intelligence` | Solution page (robotics) |
| `/solutions/virtual-reality` | Solution page |
| `/solutions/smart-home` | Solution page with a query simulator |

The piece I'd point a reviewer to first is [`src/components/wici/Turntable.tsx`](src/components/wici/Turntable.tsx). It plays a 200-frame image sequence on a canvas as a rotating product shot, and lets you drag to spin it. It:

- starts downloading frames only when the section is within one screen of the viewport
- pauses whenever it scrolls out of view
- skips over any frame that failed to load instead of flashing a blank
- shows a still image until the first frame is ready
- stays still for visitors who have reduced motion turned on

## Stack

- React 19 and TypeScript
- Vite 8
- TanStack Router with file-based routes, automatic code splitting and preload on hover
- Tailwind CSS 4
- Motion for animation, Lucide for icons
- Zustand, TanStack Query, Table and Virtual (used by the two older kiosk screens, see below)

## How I worked with AI on this

I did not type every line by hand, and I'm not going to pretend I did. The code was written with AI coding agents (Claude Code). My job was the part an agent can't do for itself:

- **Breaking the work down.** I split the site into pages and sections and gave agents one bounded piece at a time, with the original page as the reference. Small tasks are easy to check; "clone this site" is not.
- **Setting the rules up front.** One folder per page, one component per section, shared tokens for colour and type. That is why the tree under `src/components` reads the same way everywhere.
- **Reviewing everything.** I compared each section against the original in the browser at several screen sizes, and sent it back with specific notes when spacing, type or motion was off.
- **Debugging.** When something broke I reproduced it first, narrowed it down, and then gave the agent the evidence rather than a vague "it's broken". Most fixes went faster once the agent was told exactly where to look.
- **Saying no.** Agents like to add things. I cut features, dependencies and abstractions that the page didn't need.
- **Owning the result.** I read the code before it was committed. If it's in this repo, I can explain it.

## Run it locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`. `npm run preview` serves that build.

## Deploying to Vercel

Import the repo in Vercel and keep the detected Vite settings (build command `npm run build`, output `dist`). The included `vercel.json` sends every path to `index.html`, so opening or refreshing a deep link such as `/wici-one` works.

## A note on the repo name

The repo is called `bharat-kiosk` because it started life as a government-services kiosk prototype. Two screens from that are still here, `/services` and `/applications`, along with their store and mock data. They are not linked from the WiCi navigation.

## Project layout

```
src/
  routes/        one file per page (TanStack file-based routing)
  components/
    wici/        home page sections, navigation, footer, turntable
    wici-one/    product page sections
    wici-infer/  inference page sections
    wici-research/
    solutions/   the five solution pages
  styles/        page-specific CSS
  store/, data/  state and mock data for the kiosk screens
public/          images, videos and the turntable frames
```
