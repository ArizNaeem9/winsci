# Winsci — Cohort Report (Summer 2025, Pakistan)
**Updated:** 2025-09-13  
**Locations:** Abbottabad • Lahore • Islamabad  
**Duration:** 6 sessions (weekly) — July 6 to August 10, 2025  
**Facilitators:** 1 lead + 1 helper per site (library/school partners)

---

## Summary
This summer pilot delivered an accessibility-first, offline-friendly introduction to computer science, Python fundamentals, and responsible AI for first-time learners in Abbottabad, Lahore, and Islamabad. Using low-setup materials (PDF slides, printable worksheets, and browser-only quizzes), learners progressed from unplugged algorithms to writing simple Python scripts and discussing fairness and privacy in AI. By the end of six sessions, most learners completed hands-on exercises, created starter GitHub profiles, and a few drafted small freelancing proposals (digital flyers and data entry cleanups).

**Highlights**
- 17 learners participated; **~85% retention** across 6 weeks.
- **12/17** created a GitHub account; **9/17** published a first README.
- Average quiz scores improved from **48% → 79%** (Intro CS) and **41% → 74%** (Python).
- Two learners drafted first paid-work proposals with mentor review.

---

## Participation
| Site        | Registered | Avg Attendance | Retention (attended ≥4/6) | Devices                      |
|-------------|------------|----------------|----------------------------|------------------------------|
| Abbottabad  | 6          | 5.1            | 83%                        | Shared PCs, spotty internet  |
| Lahore      | 7          | 6.0            | 86%                        | School lab Chromebooks       |
| Islamabad   | 4          | 3.6            | 75%                        | Library PCs, offline focus   |
| **Total**   | **17**     | **4.9**        | **~85%**                   | All sites supported offline  |

**Accessibility notes**
- All materials usable **offline** (PDF slides + HTML quizzes).
- Worksheets printed B/W at readable sizes (≥14px font equivalents).
- Quizzes are keyboard-navigable; visible focus states verified.

---

## Activities
**Session plan (6 × ~2 hours):**
1. **Intro to CS (unplugged → first HTML)**  
   - PB&J “robot” exercise, ambiguity & precision, inputs/outputs  
   - Asset: `lessons/slides/session-1-intro-to-cs.pdf`  
   - Quiz: `tools/simple-quiz/?bank=cs`
2. **Algorithms & Sorting (unplugged to reasoning)**  
   - Human bubble sort, passes/invariants, simple pseudocode  
   - Asset: `lessons/slides/session-2-algorithms.pdf`  
   - Worksheet: `lessons/worksheets/intro-algorithms-worksheet.pdf`
3. **Python Basics I (I/O, conditionals)**  
   - `input()`, `print()`, `if/elif/else`, tracebacks & debugging mindsets  
   - Asset: `lessons/slides/session-3-python-basics.pdf`  
   - Worksheet: `lessons/worksheets/python-basics-worksheet.pdf`  
   - Quiz: `tools/simple-quiz/?bank=python`
4. **Python Basics II (loops, lists/dicts)**  
   - `for`, `while`, list ops, dictionary counts; mini-project setup (Mad Libs)
5. **Mini-Project & Git 101**  
   - Mad Libs script; README scaffold; basic git add/commit (local demo)
6. **Intro to AI + Ethics**  
   - Data/labels, accuracy/precision/recall (gentle), privacy & bias discussion  
   - Asset: `lessons/slides/session-4-intro-to-ai.pdf`  
   - Worksheet: `lessons/worksheets/ai-ethics-reflection.pdf`  
   - Quiz: `tools/simple-quiz/?bank=ai`

**Implementation practices**
- Pacing used the **hook → concept → guided → solo → exit ticket** arc.
- “Exit tickets” captured one win + one question per learner per session.
- Offline mirrors: quizzes loaded locally (`file://` or `http://localhost:8080`).

---

## Outcomes
**Skills & milestones**
- **Programming fundamentals:** 15/17 completed the FizzBuzz or equivalent loop exercise.  
- **Problem decomposition:** All learners improved clarity in step-by-step algorithm writing (worksheet rubric ≥3/5).  
- **Version control on-ramp:** 12/17 created GitHub; 9/17 published a first README (with a short “About me” + goals).  
- **Applied awareness:** All sites completed an AI ethics reflection (privacy, consent, bias sources).

**Quantitative snapshots**
- **Intro CS quiz (10 Q):** pre **48%**, post **79%** (avg; n=16 valid pairs)  
- **Python quiz (10 Q):** pre **41%**, post **74%** (avg; n=15 valid pairs)  
- **Worksheet completion:** median **10/12** prompts per learner per unit  
- **Attendance:** median **5/6 sessions**; reasons for absence included exams and travel.

**Artifacts (examples)**
- Mad Libs scripts (local only) and simple “word frequency” snippets.
- READMEs with learning goals and mini-project descriptions.
- Anonymous ethics reflections (PDF scans kept offline by partners).

**Pathways / Next steps**
- 2 learners (Lahore, Islamabad) drafted small, supervised freelancing proposals (digital flyer, sheet cleanup).  
- 6 learners plan to continue with a “Data & Visualization” follow-on (D3 starter).

> Note on privacy: No learner names/faces stored in public repos; partner sites hold any optional media or sign-ins privately.

---

## Reflection
**What worked well**
- **Low setup:** Starting with unplugged activities and browser-only tools kept focus on thinking, not installs.  
- **Consistent lesson arc:** Exit tickets gave facilitators a quick comprehension check without grading overhead.  
- **Pair rotation:** Reduced freeze-ups; prompted more questions (“explainers” and “typers” swapped roles).

**What was challenging**
- **Mixed pace:** Faster learners finished early; we added extension prompts (e.g., list/dict challenges).  
- **Bandwidth variability:** Some PCs were slow; local quiz files and pre-opened PDFs were essential.  
- **Confidence dips at errors:** Early tracebacks felt intimidating; modeling “tiny test, tiny change” helped.

**Changes for next cohort**
- Add **two more Python practice pages** (file I/O and functions) to the worksheet set.  
- Build a **guided Git mini-lab** with screenshots (clone → edit → commit → push) using a sandbox repo.  
- Create **visual cues for exits** (color-band slide) so learners recognize the “reflection” cadence.  
- Introduce a short **“micro-presentations”** segment in week 6 (60s demos) to strengthen voice and confidence.

**Requests to partners**
- Reserve a projector adapter (HDMI/VGA) and test once before session 1.  
- Keep printers stocked (B/W is fine) for 15–20 copies per session.  
- Provide a whiteboard or flip chart for unplugged algorithm demos.

---

## Appendices (optional)
- **Testimonials (anonymized):**  
  - “I finally ‘get’ loops after FizzBuzz.” — Hassan, Lahore  
  - “Pair programming made me brave enough to try things.” — Ayesha, Abbottabad  
  - “The no-install quizzes ran perfectly on our old computers.” — Library Staff, Islamabad  
- **Materials index:**  
  - Slides: `lessons/slides/*.pdf` (EN) and `lessons/slides/{es,hi}/*.pdf`  
  - Worksheets: `lessons/worksheets/*.pdf` (EN) and `lessons/worksheets/{es,hi}/*.pdf`  
  - Quizzes: `tools/simple-quiz/` (use `?bank=cs|python|ai` and `?lang=es|hi`)  
- **Contact:** an105@rice.edu • github.com/ArizNaeem9

---
