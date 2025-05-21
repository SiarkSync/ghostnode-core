# GhostNode

**GhostNode** is a modular, self-evolving AI operating system powered by OpenAI Codex, Replit, Fibery, and GitHub. It is designed for private use and controlled through a mobile app.

## Project Structure
- `server/`: Node.js backend
- `mobile/`: React Native mobile app
- `agents/`: Modular AI agent logic
- `docs/`: Design notes, logs, or summaries

## Tech Stack
- Node.js (backend)
- OpenAI API (Codex model)
- React Native + Expo (mobile)
- Fibery (logs + dashboards)
- GitHub + Replit (code pipeline)

## Goal
Build a system that accepts prompts via app → routes them to Codex → pushes to GitHub → pulls into Replit → logs to Fibery → loops back for human approval and further action.

➡️ Full system documentation in [`ghostnode.md`](./ghostnode.md)

Testing webhook for auto changes
