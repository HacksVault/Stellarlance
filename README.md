# Stellerlance

This project is a freelancing platform with agentic automation, now powered by the Stellar blockchain for payments and account creation.

## Environment Variables

- `STELLAR_PRIVATE_KEY`: The secret key for the Stellar account used to send payments and create accounts.

## Blockchain Integration

- Payments and account creation are handled via Stellar using a Python agent (`send_stellar_work_done.py`).
- The backend API calls this script to perform blockchain actions.

## CryptoTasks

```bash
NEXT_PUBLIC_SUPABASE_URL=yours
NEXT_PUBLIC_SUPABASE_ANON_KEY=yours
GROQ_API_KEY=yours
```

### installing

```bash 
npm install
npm run dev
```
### backend

```bash
python -m uvicorn src.app.agent.agent:app --reload
```
