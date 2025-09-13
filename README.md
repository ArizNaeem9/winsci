🌱 Winsci — Coding & Digital Literacy for Everyone








Winsci is an open, accessibility-first curriculum for coding & digital literacy.
It ships turnkey lesson plans, printable worksheets, and no-install browser quizzes that run even on low-spec devices (hello, library Chromebooks 👋).

Impact snapshot: Piloted across 3 cities, supported 15+ learners in turning new skills into paid starter work.

🧭 Table of Contents

Why Winsci?

What’s Inside

Quickstart (Try in 30 Seconds)

Repo Structure

Curriculum Modules

Lesson Design (Template)

Workshop Flow

Accessibility & Inclusion

Outcomes & Evidence

Privacy & Safety

Contributing

Roadmap

FAQ

License

Credits & Contact

💡 Why Winsci?

Realistic entry points: Bite-sized lessons that build confidence quickly.

Runs anywhere: Slides (PDF), worksheets (printable), quizzes (HTML/JS) — works offline.

Teacher-friendly: Copy-paste lesson plans with time boxes and materials.

Learner-first: Clear objectives, short demos, and immediate practice.

📦 What’s Inside

Curriculum: sequenced modules for Intro to CS, Python, and a gentle Intro to AI.

Lessons: slide decks & worksheets you can print on any school printer.

Tools: browser-based mini-quizzes and notebook demos (no setup required).

Guides: accessibility notes + “how to run this in a new school/club.”

Outcomes: simple, anonymized metrics templates to document impact.

⚡ Quickstart (Try in 30 Seconds)

Open a quiz locally (no install):

Navigate to tools/simple-quiz/ and double-click index.html.

Run a tiny local server (optional but nicer URLs):

# Option A: Python (preinstalled on many machines)
python -m http.server 8080

# Option B: Node
npx http-server .


Then visit http://localhost:8080/tools/simple-quiz/.

Tip: For workshops, keep both the slide PDF and the quiz open in tabs.

🗂 Repo Structure
winsci/
├─ curriculum/
│  ├─ module-01-intro-to-cs/
│  ├─ module-02-python-basics/
│  └─ module-03-intro-to-ai/
├─ lessons/
│  ├─ slides/            # export your decks here as PDF
│  └─ worksheets/        # printable materials
├─ tools/
│  ├─ simple-quiz/       # no-install browser quiz (HTML/JS)
│  └─ notebook-demos/    # optional .ipynb demos
├─ outcomes/
│  ├─ metrics.md         # anonymized impact snapshot
│  └─ testimonials.md    # quotes (no PII)
└─ docs/
   ├─ accessibility.md
   └─ implementation-guide.md

📚 Curriculum Modules
Module 1 — Intro to CS

Objectives: Understand algorithms, inputs/outputs, and problem decomposition.

Activities: Paper algorithms (“make a PB&J sandwich”), unplugged sorting, first HTML page.

Outcomes: Students articulate what an algorithm is and debug simple steps.

Module 2 — Python Basics

Objectives: Variables, types, conditionals, loops, and lists/dicts.

Activities: REPL puzzles, micro-projects (Mad Libs, number guesser), pair programming.

Outcomes: Students write a small script and explain how control flow works.

Module 3 — Intro to AI (gentle)

Objectives: What a model is, data/labels, simple evaluation, ethics & bias.

Activities: Label a tiny dataset, discuss fairness, try a prepared notebook demo.

Outcomes: Students describe data → model → evaluation and identify common pitfalls.

Add your own modules (web basics, data viz, scratch to Python, Git 101, etc.). Keep each module 2–4 sessions for consistent wins.

✏️ Lesson Design (Template)

Each lesson follows a consistent, low-stress arc:

Hook (5 min) – A quick question, demo, or story.

Concept (10–15 min) – One core idea with examples.

Guided Practice (15–20 min) – Solve together; call on different approaches.

Solo/Pair Practice (15–25 min) – Worksheet or mini-project; circulate & coach.

Share & Reflect (5–10 min) – One win and one “stuck point” from learners.

Exit Ticket (2 min) – One question the next lesson will answer.

Materials block (on each lesson page):

Slides: lessons/slides/<lesson>.pdf

Worksheet: lessons/worksheets/<lesson>.pdf

Quiz/demo: tools/simple-quiz/index.html#lesson=<id>

🧑‍🏫 Workshop Flow

Room setup: Board/markers, projector, printed worksheets in stacks of 10.

Roles: 1 facilitator, 1 helper for ~12–18 learners.

Devices: Works on Chromebooks; share pairs if devices are limited.

Rhythm: 2-hour sessions, weekly, 6 weeks (flexible).

Norms: Ask questions early; wrong answers are part of learning; celebrate small wins.

♿ Accessibility & Inclusion

Readable: ≥14px base font, high contrast, minimal jargon.

Keyboard-friendly: All quizzes navigable without a mouse.

Bandwidth-light: PDFs + local HTML keep things snappy on slow Wi-Fi.

Multiple pathways: Slides for visual, worksheets for written, demos for hands-on.

See docs/accessibility.md
 for checklists.

📈 Outcomes & Evidence

Use outcomes/metrics.md to log impact without collecting PII:

Learner count and attendance bands (e.g., 1–5, 6–10…).

Skills unlocked (e.g., “wrote first script,” “completed mini-project”).

Next steps (e.g., GitHub account created, first PR, small freelance task tried).

Story beats (anonymous): “What surprised you today?” / “What will you try next?”

If you publish a blog post or school report, link it here!

🔒 Privacy & Safety

No names or faces in public repos without explicit permission.

Photos/screenshots should not include student info.

Keep any roster or sign-in sheets offline and private.

🤝 Contributing

All help welcome — teachers, students, designers, translators!

Good first issues: typos in slides, new quiz questions, worksheet clarifications.

Bigger contributions: new modules, accessibility reviews, localizations.

Open a PR with a short demo (gif or screenshot) if you’re adding interactive content.

Style tips:

Keep lessons short & focused.

Prefer plain language over jargon.

Ship runnable examples (no complex setup).

🗺️ Roadmap

 More quiz banks per module (10–15 Qs each).

 “No-install” Python via web interpreters for exercises.

 Starter freelancing guide (how to price, write proposals, safety tips).

 Spanish & Hindi localizations for core materials.

 “Teachers’ lounge” docs: pacing guides, common pitfalls.

❓ FAQ

Do I need to install anything?
No. Open the slide PDFs and the HTML quiz in any modern browser. Optional notebooks are bonus.

Can I use this at my school/library?
Yes. It’s free under the MIT License for code and permissive terms for materials.

What if Wi-Fi is flaky?
Keep everything local (PDFs + HTML). It just works.

Can learners without laptops participate?
Yes. Pairing works well. Many activities are unplugged or worksheet-based.

📜 License

Code: MIT (see LICENSE).

Educational content: If you split content out later, consider a Creative Commons license (e.g., CC BY 4.0) and note it in the repo.

🙌 Credits & Contact

Created by Ariz Naeem (CS @ Rice).
Questions or collab ideas? an105@rice.edu
 · LinkedIn
 · GitHub

If you run Winsci in your city, please share a quick note in outcomes/ — it helps improve the curriculum for everyone.
