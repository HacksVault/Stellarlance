# Stellerlance

This project is a fully autonomous decentralized freelancers hiring platform with agentic automation, now powered by the Stellar blockchain for payments and account creation.

## Environment Variables

- `STELLAR_PRIVATE_KEY`: The secret key for the Stellar account used to send payments and create accounts.


## Blockchain Integration

- Payments and account creation are handled via Stellar using a Python agent (`send_stellar_work_done.py`).
- The backend API calls this script to perform blockchain actions.

## CryptoTasks

```bash

Login to Groq and create your own free Api key to run the agent llm
GROQ_API_KEY=yours
```

⚠️In order to use agent in local environment you need your own api key

### installing

```bash 
npm install
npm run dev
```
### backend

```bash
python -m uvicorn src.app.agent.agent:app --reload
```
