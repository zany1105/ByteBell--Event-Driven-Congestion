# ASTRAM--Event-Driven-Congestion
A prototype for the "Event-Driven Congestion (Planned & Unplanned)" theme - forecasting how political rallies, festivals, sports fixtures, construction and sudden incidents affect road traffic and turning that forecast into a concrete response plan.

## The problem

Event impact on traffic isn't quantified in advance, resource deployment is experience-driven and there's no system that learns from how past events actually played out.

## How it works

- Every road class (highway, street, residential) has a baseline flow level under normal conditions, based on average predicted demand from a Round 1 model trained on historical traffic data.
- When an event is logged, a severity score is calculated by weighing that baseline against the event's cause, priority and whether there was advance notice.
- The score drives a response plan: recommended personnel count, barricade points and a diversion route.
- For closed-out events, the tool shows how the actual clearance time compared to what was expected.

## What's in this repo

- `index.html` — the working prototype (open directly in a browser, no build step needed)
- `model.py` — the baseline demand model from Round 1
- `train.csv` / `test.csv` — the training data used for the baseline model

## Status

This is a working prototype built for a hackathon submission. The 12 events shown on the map are representative scenarios, not a live feed. The interface supports English, Hindi and Kannada.

## Tech

Single-page HTML/CSS/JavaScript, no build tools or external dependencies beyond system fonts. The severity scoring and recommendation logic run entirely client-side.
