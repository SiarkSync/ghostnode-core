# 🧠 GhostNode System Overview (`ghostnode.md`)

## 📛 Project Name: GhostNode

GhostNode is a private, modular, AI-operated operating system that evolves itself over time. It is controlled by a mobile interface and powered by OpenAI's Codex model. All actions, changes, and decisions must be approved by the human operator.

---

## ✅ Purpose
To create a centralized system that:
- Accepts natural language commands via mobile app
- Routes requests to Codex and other AI agents
- Builds and maintains itself through code generation
- Automatically logs actions, performance, and changes
- Offers full control to the user (manual approval layer)

---

## 🧱 System Architecture (Confirmed)

| Layer | Tech | Description |
|-------|------|-------------|
| Codex AI | OpenAI API (`gpt-4o-code-preview`) | Generates code, API logic, and agent behaviors |
| Backend | Node.js + Express (Replit) | Routes commands to agents and handles responses |
| Mobile Interface | React Native + Expo Go | Private UI to submit prompts and view responses |
| Versioning | GitHub | All code and changes are committed here |
| Hosting | Replit | Hosts and runs backend live via webhook auto-pull |
| Logging | Fibery (via REST API) | Logs prompts, responses, agent decisions, feedback, metrics |

---

## 📲 Mobile App
- Built in React Native with Expo
- Deployed to personal iPhone via Expo Go (no App Store needed)
- Primary functions:
  - Submit prompts
  - View responses
  - Approve or reject Codex/agent changes

---

## 🤖 AI Agents

| Agent | Role |
|-------|------|
| Option AI | Command router and prompt gateway |
| Codex | Code generation, file writing, logic development |
| Meta-Agent | Suggests system-wide improvements weekly |
| System Analyst | Audits activity monthly and post-proposal |
| Web Thinker | Pulls supporting research (future integration) |

---

## 🧾 Logging and Evaluation
- All prompts, actions, and decisions logged to Fibery
- Codex logs outputs and commit hashes
- Rejections tagged with reason (user selected or written)
- Weekly and monthly summaries by System Analyst

---

## 🧠 Agent Run Cadence

| Agent | Frequency |
|-------|-----------|
| Meta-Agent | Weekly (manual override available) |
| System Analyst | Monthly and after each accepted proposal |

---

## ✅ Confirmed Tools

- [ ] GitHub repo: `ghostnode-core`
- [ ] Replit project: `ghostnode-backend`
- [ ] OpenAI account with API access
- [ ] Fibery workspace + token
- [ ] Expo CLI + Expo Go mobile app

---

## 🧱 Folder Structure (To Be Created)
```
ghostnode-core/
├── server/         ← Backend API code
├── mobile/         ← React Native app (built by Codex)
├── agents/         ← AI agent logic (modular)
├── docs/           ← Logs, specs, build notes
├── .env.example    ← Key references
├── README.md       ← This file
```

---

## ✅ Day 1 Target
System is considered ready when:
- A prompt can be sent from the app
- It reaches the backend
- Codex returns a response
- Response is logged in Fibery
- All logic is managed in GitHub and Replit

- Testing pull
