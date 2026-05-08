export type ProjectStatus = 'production' | 'poc' | 'experimental' | 'archived';

export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tech: string[];
  status: ProjectStatus;
  featured: boolean;
  github?: string;
  website?: string;
  app?: string;
  demo?: string;
  download?: string;
  overview: string;
  architecture: string[];
  keyFeatures: string[];
  techDetails: string[];
  highlights: string[];
  challenges?: string[];
  deploymentNotes?: string;
}

export const projects: ProjectData[] = [
  // ── FEATURED PROJECTS ──────────────────────────────────────────────────────
  {
    slug: 'market-minder',
    title: 'Market Minder',
    summary:
      'Production-grade campaign management and analytics platform built for scalable outreach workflows, AI-assisted personalization, and reporting automation.',
    category: 'Platform',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Azure Tables', 'Gemini API'],
    status: 'production',
    featured: true,
    website: 'https://marketminder.ai/',
    app: 'https://marketminderai.compunnel.com/',
    overview:
      'A full-scale campaign management and analytics platform designed to handle real-world email outreach workflows. The system supports campaign creation, audience management, execution, and reporting, with a strong focus on scalability and production reliability.',
    architecture: [
      'Campaign and audience group management system backed by a PostgreSQL relational database',
      'RBAC (Role-Based Access Control) with database-backed permission models governing user access across all operations',
      'LinkedIn data enrichment pipeline via Proxycurl API with multi-threading, rate limiting, retry logic, and queue-based worker management',
      'Automated personalized email generation pipeline — initially built on Mistral, transitioned to Gemini based on quality and cost tradeoffs',
      'Mailchimp event ingestion pipeline capturing opens, clicks, and bounces, with analytics stored in Azure Table storage for scalable querying',
      'End-to-end reporting pipeline: raw CSV data → analytics computation → HTML report generation → PDF export via WeasyPrint',
    ],
    keyFeatures: [
      'Campaign creation, scheduling, and lifecycle management with audience segmentation',
      'Granular RBAC with database-backed roles and permissions',
      'LinkedIn profile enrichment via Proxycurl with resilient multi-threaded queue workers',
      'AI-driven personalized email content generation using Gemini API',
      'Mailchimp event tracking and analytics aggregation via Azure Table storage',
      'Automated HTML and PDF report generation pipeline',
    ],
    techDetails: [
      'Python',
      'Flask',
      'PostgreSQL',
      'Azure Table Storage',
      'Mailchimp API',
      'Proxycurl API',
      'Gemini API',
      'WeasyPrint',
      'Threading',
      'Queue-based workers',
    ],
    highlights: [
      'Production-grade modular backend architecture with clear separation between campaign logic, enrichment pipelines, and reporting',
      'AI personalization pipeline evolved from Mistral to Gemini, demonstrating real-world LLM migration decision-making in a live system',
      'Designed to handle external API rate limits and transient failures gracefully through queue workers, retries, and backoff strategies',
      'Combines traditional relational data management (PostgreSQL) with cloud-native event storage (Azure Tables) for different data access patterns',
    ],
    challenges: [
      'Managing rate limits and reliability constraints across multiple external APIs (Proxycurl, Mailchimp, Gemini) simultaneously in a production workload',
      'Transitioning the AI email generation pipeline from Mistral to Gemini mid-production with minimal disruption to existing workflows',
      'Designing the RBAC model to be flexible enough for evolving permission requirements without restructuring the database schema repeatedly',
    ],
    deploymentNotes:
      'Production deployment. Live at marketminder.ai with app environment at marketminderai.compunnel.com.',
  },
  {
    slug: 'whatsapp-ai-agent',
    title: 'WhatsApp AI Agent',
    summary:
      'Conversational AI assistant prototype for real estate workflows with contextual responses, lead qualification, and multi-turn interactions.',
    category: 'AI / Automation',
    tech: ['Python', 'Gemini API', 'Meta WhatsApp API', 'AWS EC2'],
    status: 'poc',
    featured: true,
    overview:
      'A proof-of-concept conversational AI agent built for real estate workflows. Designed to handle inbound user queries over WhatsApp, provide contextual property-related responses, qualify leads, and maintain natural multi-turn conversation flow — simulating a capable human-like assistant.',
    architecture: [
      'Meta WhatsApp Business API webhooks receive inbound messages and dispatch outbound responses',
      'Gemini API processes each user message with a context-aware prompt pipeline that includes conversation history',
      'Multi-turn conversation state is maintained server-side per session, enabling coherent dialogue across multiple exchanges',
      'Lead qualification logic evaluates intent signals in the conversation to filter and route high-intent prospects',
      'Persona-driven system prompt shapes response tone and domain focus for real estate use cases',
      'Deployed on AWS EC2 as a persistent Python service handling incoming webhook traffic',
    ],
    keyFeatures: [
      'Automated handling of inbound property queries via WhatsApp',
      'Context-aware responses using maintained conversation history per session',
      'Lead qualification and intent scoring based on conversational signals',
      'Multi-turn dialogue with persona-driven response style',
      'Persistent deployment on AWS EC2 for live testing',
    ],
    techDetails: [
      'Python',
      'Gemini API',
      'Meta WhatsApp Business Webhooks',
      'AWS EC2',
      'Prompt Engineering',
      'Session State Management',
    ],
    highlights: [
      'Demonstrates end-to-end AI agent deployment on a real messaging platform (WhatsApp) rather than a demo UI',
      'Prompt engineering strategy was central to shaping conversational quality and domain focus, with iterative refinement during testing',
      'Multi-turn context management was implemented without a vector database — relying on structured prompt construction and session state',
      'Validated conversational AI viability for a real-world real estate use case in an active POC deployment',
    ],
    challenges: [
      'Managing conversation context length within Gemini API token limits while preserving coherent multi-turn dialogue',
      'Distinguishing genuine property interest from casual inquiry within constrained natural language signals',
      'Handling Meta webhook verification and reliability requirements for a stable POC deployment',
    ],
    deploymentNotes:
      'Currently inactive and private. Built as a working prototype to validate conversational AI use cases in real estate. Deployed on AWS EC2 during the POC phase.',
  },
  {
    slug: 'smuggydiscordbot',
    title: 'SmuggyDiscordBot',
    summary:
      'High-performance Discord bot built in Go with AI-powered commands, per-guild configuration, and service-based deployment.',
    category: 'Automation',
    tech: ['Go', 'DiscordGo', 'Gemini API', 'Linux'],
    status: 'experimental',
    featured: true,
    github: 'https://github.com/Smugcurve13/smuggydiscordbot',
    overview:
      'A modular Discord bot developed in Go for personal and controlled-group usage, focusing on performance, concurrency, and structured command handling. The system integrates AI-driven features while maintaining a lightweight and efficient runtime suitable for persistent deployment.',
    architecture: [
      'DiscordGo library handles WebSocket connection management, event dispatch, and slash command interaction processing',
      'Go routines handle concurrent command execution, ensuring independent requests do not block each other under load',
      'Gemini API integration processes AI command inputs through a structured prompt pipeline with per-guild API key isolation',
      'Guild configuration system stores per-server settings (API keys, enabled features) in a structured persistent store',
      'Command routing layer maps incoming interaction payloads to registered handlers, keeping each command self-contained',
      'Deployed as a systemd service on Linux for persistent, restart-on-failure operation with minimal resource overhead',
    ],
    keyFeatures: [
      'Gemini API integration for AI-driven command responses',
      'Per-guild API key storage and isolated configuration system',
      'Concurrent command execution using Go routines',
      'Planned per-user cooldown system for rate control',
      'Deployment as a persistent Linux service via systemd',
    ],
    techDetails: ['Go', 'DiscordGo', 'Gemini API', 'systemd', 'Linux'],
    highlights: [
      "Go's concurrency model via goroutines allows multiple guild commands to execute simultaneously without blocking — a meaningful advantage over single-threaded bot runtimes",
      'Per-guild API key management isolates AI configuration per server, preventing shared credential exposure across guild boundaries',
      'Lightweight compiled binary deployment means the bot runs with negligible memory and CPU overhead as a persistent service',
      'Emphasis on performance and concurrency over heavy abstractions keeps the codebase lean and predictable under real usage patterns',
    ],
    challenges: [
      'Managing Gemini API rate limits across concurrent guild requests without a centralised throttling layer introducing bottlenecks',
      'Designing per-guild configuration storage that is both persistent and fast to access during high-frequency command handling',
      'Structuring the command routing layer in Go to remain extensible without adding heavy framework dependencies',
    ],
    deploymentNotes:
      'Not publicly deployed as a shared bot. Designed for controlled environments. Compiled Go binary runs as a systemd service on a Linux host. Requires a Discord application token and per-guild Gemini API keys.',
  },
  {
    slug: 'smuggyconverter',
    title: 'SmuggyConverter',
    summary:
      'Desktop media conversion application supporting YouTube playlists and Spotify-linked downloads with platform-aware handling strategies.',
    category: 'Desktop Application',
    tech: ['Python', 'yt-dlp', 'Desktop Packaging'],
    status: 'production',
    featured: true,
    github: 'https://github.com/Smugcurve13/smuggy-converter-win-app',
    download: 'https://github.com/Smugcurve13/smuggy-converter-win-app/releases',
    overview:
      'A desktop application for downloading and converting YouTube playlists and Spotify-linked content into MP3 format. Built with a focus on usability and resilient handling of platform-level restrictions, distributed as a standalone Windows executable requiring no Python installation.',
    architecture: [
      'yt-dlp serves as the core download and conversion engine, supporting YouTube and a wide range of video platforms',
      'Spotify integration resolves track metadata from Spotify links and maps them to YouTube search results for download',
      'Platform restriction handling uses request strategies and client-spoofing techniques to mitigate bot detection',
      'Application packaged as a standalone Windows executable using PyInstaller, requiring no Python runtime on the target machine',
      'Desktop-first UX with a simple interface for URL input, playlist selection, and output directory configuration',
    ],
    keyFeatures: [
      'Playlist-level YouTube download and MP3 conversion via yt-dlp',
      'Spotify link support with YouTube search-based resolution',
      'Client spoofing and request strategies for platform restriction handling',
      'Standalone Windows executable — no Python installation required',
      'Simple desktop UI accessible to non-technical users',
    ],
    techDetails: ['Python', 'yt-dlp', 'PyInstaller', 'Spotify API / Metadata', 'Windows executable packaging'],
    highlights: [
      'Distributed as a standalone .exe — lowers the barrier to use significantly compared to CLI-only tools',
      'Spotify integration addresses a common real-world workflow of converting Spotify playlists to locally stored MP3s',
      'Bot detection handling reflects genuine engineering work to maintain functionality under evolving platform restrictions',
      "yt-dlp's broad platform support means the application works beyond YouTube without additional integration effort",
    ],
    challenges: [
      "YouTube's evolving bot detection mechanisms require periodic updates to request strategies and client identifiers to maintain download reliability",
      'Spotify does not provide audio directly — Spotify-to-YouTube resolution introduces potential metadata mismatches requiring fuzzy matching logic',
      'Packaging a Python application with yt-dlp into a standalone executable requires careful management of binary dependencies and bundle size',
    ],
    deploymentNotes:
      'Distributed via GitHub Releases as a Windows executable. Users download and run directly — no installation or Python environment required.',
  },
  {
    slug: 'factory-dashboard-ai-agent',
    title: 'Factory Dashboard AI Agent',
    summary:
      'Industrial AI assistant prototype focused on translating operational dashboard data into conversational insights and monitoring workflows.',
    category: 'AI / Automation',
    tech: ['Python', 'Gemini API'],
    status: 'poc',
    featured: true,
    overview:
      'A proof-of-concept AI agent designed for factory and industrial dashboard environments. The focus is on translating complex operational data — metrics, status indicators, and alerts — into accessible conversational insights that non-technical operators can query and understand.',
    architecture: [
      'Gemini API serves as the reasoning layer, processing structured operational data through engineered prompt pipelines',
      'Prompt engineering strategy encodes domain context (factory operations, dashboard terminology) into system prompts for accurate responses',
      'Context-aware query handling maps operator questions to relevant data subsets, reducing noise in AI responses',
      'Conversation flow design allows sequential queries to refine or drill down into operational data',
      'Exploration of AI-assisted monitoring patterns — triggering summaries or alerts based on data state rather than operator-initiated queries',
    ],
    keyFeatures: [
      'Conversational interface for querying operational dashboard data',
      'Prompt-engineered agent with factory domain context baked into the system',
      'Context-aware response generation for multi-step operational queries',
      'Exploration of proactive monitoring — AI-generated summaries from data state',
    ],
    techDetails: ['Python', 'Gemini API', 'Prompt Engineering', 'Structured context management'],
    highlights: [
      'Demonstrates that sophisticated AI agent behaviour is achievable primarily through prompt engineering without complex retrieval or fine-tuning infrastructure',
      'Domain specificity was achieved by encoding factory operational vocabulary and expected query patterns directly into the system prompt',
      'Explored the boundary between reactive (query-response) and proactive (monitoring-driven) AI agent patterns in an industrial context',
    ],
    challenges: [
      'Ensuring AI responses remain grounded in actual operational data rather than generating plausible-sounding but inaccurate insights',
      'Structuring prompts to handle varied operator query styles while maintaining consistent operational context throughout the conversation',
    ],
    deploymentNotes:
      'Concept-stage system. Built to explore AI agent design patterns and prompt engineering strategies for industrial monitoring use cases. Not deployed in production.',
  },

  // ── ARCHIVED / LOWER PRIORITY PROJECTS ────────────────────────────────────
  {
    slug: 'wiz-control',
    title: 'wiz-control-by-SC13',
    summary: 'Python toolkit for controlling Wiz smart lights locally over UDP — no cloud required.',
    category: 'IoT',
    tech: ['Python', 'IoT', 'UDP'],
    status: 'archived',
    featured: false,
    github: 'https://github.com/Smugcurve13/wiz-control-by-SC13',
    overview:
      'wiz-control-by-SC13 is a Python project for controlling Wiz smart lighting devices on a local network. It communicates directly with Wiz bulbs over UDP using the Wiz JSON protocol, enabling programmatic control of brightness, colour, and power state without routing traffic through the cloud.',
    architecture: [
      'Python script sends structured JSON payloads to Wiz bulb IP addresses via UDP on port 38899',
      'Wiz protocol commands are encoded as JSON (e.g. setPilot, getPilot) — no cloud dependency',
      'Devices are addressed directly by local IP; optional subnet scan discovers connected bulbs',
      'Response handling parses acknowledgement packets to confirm state changes',
    ],
    keyFeatures: [
      'Toggle lights on/off',
      'Set brightness level (0–100%)',
      'Control colour temperature (warm to cool white)',
      'Set full RGB colour values',
      'Local-only communication — no internet connection required',
    ],
    techDetails: ['Python 3', 'UDP sockets (socket module)', 'JSON payload encoding', 'Local network (LAN)'],
    highlights: [
      'Bypasses the official Wiz cloud API entirely — commands resolve in milliseconds vs. hundreds of milliseconds through the cloud.',
      'No heavy dependencies. Pure Python stdlib networking means it can be embedded in any automation pipeline or run on a Raspberry Pi.',
      'Protocol was reverse-engineered from Wiz app UDP traffic, enabling full local control without API keys.',
    ],
    challenges: [
      'Wiz does not publish its local UDP protocol officially, requiring packet capture and analysis to map command structures.',
      'Devices must be on the same LAN subnet; NAT or VLAN separation will block communication.',
    ],
    deploymentNotes:
      'Requires Python 3.x. No external packages. Devices must be on the same local network. Pass the bulb IP address as a command-line argument or configure it directly in the script.',
  },
  {
    slug: 'bluetooth-controller',
    title: 'bluetooth-controller-turn-on-steam-bigpicture',
    summary: 'Automation script that launches Steam Big Picture the moment an Xbox controller connects via Bluetooth.',
    category: 'Automation',
    tech: ['Python', 'Automation', 'Windows'],
    status: 'archived',
    featured: false,
    github: 'https://github.com/Smugcurve13/bluetooth-controller-turn-on-steam-bigpicture',
    overview:
      'A Windows automation script that runs silently in the background and monitors Bluetooth device connection events. When it detects an Xbox controller pairing, it immediately launches Steam in Big Picture mode — turning a TV-connected PC into a seamless console-like experience without any manual intervention.',
    architecture: [
      'Python process runs as a persistent background task, registered via Windows Task Scheduler',
      'Uses Windows Management Instrumentation (WMI) event subscriptions to listen for device plug/unplug events',
      'Device name/class filtering targets Xbox-compatible controllers specifically to avoid false triggers',
      'On match, subprocess invokes Steam with the -bigpicture command-line flag',
    ],
    keyFeatures: [
      'Event-driven detection of Xbox controller Bluetooth connections',
      'Zero manual steps — sits in the background and reacts automatically',
      'Configurable device name matching for different controller models',
      'Minimal CPU and memory footprint as an idle background process',
    ],
    techDetails: ['Python 3', 'WMI (Windows Management Instrumentation)', 'pywin32', 'subprocess', 'Windows Task Scheduler'],
    highlights: [
      'Uses WMI event subscriptions rather than polling, keeping CPU usage negligible even when running continuously.',
      'Solves a genuine quality-of-life friction point for PC setups connected to living room TVs.',
      'The core pattern — filter a device event → trigger an application — is reusable for any Bluetooth device automation scenario.',
    ],
    deploymentNotes:
      'Windows-only. Requires Python 3.x and pywin32 / wmi packages. Register as a Task Scheduler task on startup for automatic background execution. Run with administrator privileges if WMI access requires it.',
  },
  {
    slug: 'yt-downloader-gui',
    title: 'yt-downloader-gui',
    summary: 'Desktop GUI for downloading YouTube videos with format and quality selection.',
    category: 'Desktop Application',
    tech: ['TypeScript', 'GUI', 'Electron'],
    status: 'archived',
    featured: false,
    github: 'https://github.com/Smugcurve13/yt-downloader-gui',
    overview:
      'A cross-platform desktop application that wraps YouTube video downloading in a clean graphical interface. Users paste a URL, select format (video or audio-only) and quality, then start the download — all without touching a command line. Built in TypeScript to pair cleanly with the yt-downloader-api backend.',
    architecture: [
      'Electron (or equivalent desktop framework) hosts a TypeScript frontend rendered in a browser window',
      'Frontend communicates with the yt-downloader-api backend over localhost HTTP',
      'Download progress updates are polled from the API or streamed via server-sent events',
      'Output directory is configurable by the user via a native file picker dialog',
    ],
    keyFeatures: [
      'Paste any YouTube URL and fetch available formats and quality options',
      'Choose video quality (1080p, 720p, 480p, etc.) or extract audio only (MP3/OPUS)',
      'Real-time download progress indicator',
      'Output directory selection with persistent preference',
    ],
    techDetails: ['TypeScript', 'Electron', 'HTML/CSS', 'REST (HTTP client)', 'Node.js'],
    highlights: [
      'Clean separation of concerns: the GUI owns user interaction; the API owns the download engine. Either can be replaced independently.',
      'TypeScript throughout enforces type safety across IPC messages and API response shapes.',
      'Minimal, single-purpose interface — no feature bloat, just the controls needed to download a video.',
    ],
  },
  {
    slug: 'yt-downloader-api',
    title: 'yt-downloader-api',
    summary: 'REST API backend for fetching YouTube video metadata and managing downloads via yt-dlp.',
    category: 'Web Development',
    tech: ['Python', 'API', 'yt-dlp'],
    status: 'archived',
    featured: false,
    github: 'https://github.com/Smugcurve13/yt-downloader-api',
    overview:
      'A lightweight Python REST API that acts as the download engine for YouTube video workflows. It accepts video URLs, queries yt-dlp for available formats, triggers downloads in the selected format, and exposes progress state — all over a clean HTTP interface any client can consume.',
    architecture: [
      'Python REST API built with Flask or FastAPI, served locally on a configurable port',
      'yt-dlp is invoked as a library (not subprocess) for format listing and download management',
      'Download tasks run in background threads; progress is tracked in server-side state',
      'Endpoints: POST /download (start), GET /formats (list), GET /status/:id (poll progress)',
    ],
    keyFeatures: [
      'Fetch all available video formats and qualities for a given URL',
      'Trigger a download with a specified format/quality selection',
      'Poll download progress per task ID',
      'Configurable output directory on the server',
    ],
    techDetails: ['Python 3', 'Flask / FastAPI', 'yt-dlp', 'Threading', 'REST / JSON'],
    highlights: [
      'yt-dlp supports hundreds of video platforms beyond YouTube — the API inherits that breadth for free.',
      'Decoupling the download engine into an API means any client (GUI, CLI, browser extension) can drive downloads without duplicating yt-dlp integration.',
      'Fully self-hosted: all data stays on the user\'s machine, with no third-party services involved.',
    ],
    deploymentNotes:
      'Requires Python 3.x, yt-dlp, and Flask or FastAPI. Install dependencies with pip, then run `python app.py`. Bind to localhost for local use or a LAN IP to serve multiple devices.',
  },
  {
    slug: 'price-to-performance',
    title: 'price-to-performance-to-percentage',
    summary: 'Python tool that ranks PC components by price-to-performance ratio to cut through marketing noise.',
    category: 'Data Analysis',
    tech: ['Python', 'Data Analysis'],
    status: 'archived',
    featured: false,
    github: 'https://github.com/Smugcurve13/price-to-performance-to-percentage',
    overview:
      'A Python program that takes a list of PC components with benchmark scores and retail prices, then computes and ranks them by value for money. It reduces hardware purchasing decisions to a single objective metric, cutting through spec-sheet marketing and review bias.',
    architecture: [
      'Reads component data (name, benchmark score, price) from a structured input — CSV or hardcoded list',
      'Computes price-to-performance ratio: (benchmark_score / price) × 100 for each entry',
      'Sorts results descending by ratio and prints a ranked table to stdout',
      'Easily extended to pull live benchmark data from public datasets or APIs',
    ],
    keyFeatures: [
      'Calculate price-to-performance percentage for any component category (CPU, GPU, RAM)',
      'Rank components from best to worst value with a single run',
      'Side-by-side comparison across multiple components in the same category',
      'Simple CLI output — no GUI overhead, runs anywhere Python is available',
    ],
    techDetails: ['Python 3', 'CSV parsing', 'CLI output formatting', 'Basic statistical sorting'],
    highlights: [
      'Strips subjectivity from hardware decisions — rankings are derived purely from benchmark numbers and price.',
      'The ratio formula is simple enough to audit and trust, yet surfacing it in ranked form saves hours of spreadsheet work.',
      'Directly informed real purchase decisions, making it one of the most practically useful projects in this portfolio.',
    ],
  },
  {
    slug: 'portfolio-website',
    title: 'portfolio-website',
    summary: 'This portfolio — built with React 19, TypeScript, Tailwind CSS, and Vite.',
    category: 'Web Development',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    status: 'production',
    featured: false,
    github: 'https://github.com/Smugcurve13/portfolio-website',
    demo: 'https://sambhavsoni.is-a.dev',
    overview:
      'The site you are viewing right now. A personal portfolio built entirely with React 19 and TypeScript, styled with Tailwind CSS, and bundled with Vite. Designed for fast load times, a clean dark aesthetic, responsive layouts, and a structured two-level project browsing experience.',
    architecture: [
      'Single-page application (SPA) with React 19 and TypeScript for full type safety',
      'React Router v7 handles client-side routing — home page (/) and individual project detail pages (/projects/:slug)',
      'Tailwind CSS provides utility-first styling; no external UI component library',
      'Vite for fast HMR in development and an optimised, tree-shaken production build',
      'Centralised project data file (src/data/projects.ts) feeds both the summary cards and the detail pages',
    ],
    keyFeatures: [
      'Responsive design across all screen sizes — mobile, tablet, desktop',
      'Animated loading screen on first visit in a session',
      'Project cards (summary) and dedicated detail pages (deep dive) via route-based navigation',
      'Smooth scroll-to-section navigation from any route back to the home page',
      'Contact section with direct email and social links',
    ],
    techDetails: ['React 19', 'TypeScript 5', 'Tailwind CSS 3', 'Vite 7', 'React Router v7', 'Lucide React (icons)'],
    highlights: [
      'Zero external UI libraries — every component is hand-crafted with Tailwind, keeping the bundle lean and the design fully custom.',
      'Two-level project structure (cards → detail pages) demonstrates structured technical writing alongside the code itself.',
      'Deployed at a custom .is-a.dev subdomain via GitHub Pages with no hosting cost.',
    ],
    deploymentNotes:
      'Run `npm run dev` for local development. `npm run build` outputs a static bundle to dist/ ready for GitHub Pages, Netlify, or any static host. Ensure the host is configured to serve index.html for all routes (SPA fallback).',
  },
];
