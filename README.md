# ByteBell — Event Congestion Control

A prototype for the "Event-Driven Congestion (Planned & Unplanned)" theme — forecasting how political rallies, festivals, sports fixtures, construction, and sudden incidents affect road traffic, and turning that forecast into a concrete response plan.

## The problem

Event impact on traffic isn't quantified in advance, resource deployment is experience-driven, and there's no system that learns from how past events actually played out.

## How it works

- Every road class (highway, street, residential) has a baseline flow level under normal conditions, based on average predicted demand from a model trained on historical traffic data (`model.py`).
- When an event is logged, a severity score is calculated by weighing that baseline against the event's cause, priority, and whether there was advance notice.
- The score drives a response plan: recommended personnel count, barricade points, and a diversion route.
- For closed-out events, the tool shows how the actual clearance time compared to what was expected.

## What's in this repo

- `index.html` — page structure and markup
- `styles.css` — all visual styling
- `script.js` — map rendering, severity scoring, recommendation logic, and the language switcher
- `model.py` — the baseline demand model
- `train.csv` / `test.csv` — the training data used for the baseline model

## Running it

No installation or build steps required.

1. Download `index.html`, `styles.css`, and `script.js` and keep all three in the same folder.
2. Open `index.html` in any modern browser.
3. Click a marker on the map to see its congestion forecast and response plan. Use the filter chips top-left to switch between unplanned, planned, and resolved events. Use the language switcher top-right for English, Hindi, or Kannada.

Or use the live demo link in the submission, served through GitHub Pages from this repo.

## Status

This is a working prototype built for a hackathon submission. The 12 events shown on the map are representative scenarios, not a live feed. The "expected clearance time" shown on closed events is calculated from a fixed formula at the time it's displayed — it doesn't yet store outcomes to improve future predictions, which is the next planned step.

## Tech

Single-page HTML/CSS/JavaScript, no build tools or external dependencies beyond system fonts. All scoring and recommendation logic runs client-side, in the browser.
