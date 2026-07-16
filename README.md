# AI First CRM Assignment

## Overview

AI First CRM is a healthcare customer relationship management (CRM) application that helps users log Healthcare Professional (HCP) interactions. The application integrates AI using LangGraph and Groq LLM to automatically summarize interactions, generate follow-up actions, provide CRM insights, and populate the CRM form.

---

## Features

- HCP CRUD Operations
- Interaction CRUD Operations
- AI-powered interaction analysis
- Automatic CRM form population
- AI-generated interaction summary
- AI-generated follow-up recommendations
- AI-generated CRM insights
- FastAPI Backend
- React + Vite Frontend
- LangGraph Workflow
- Groq LLM Integration

---

## Tech Stack

### Frontend

- React
- Vite
- Axios
- Tailwind CSS

### Backend

- FastAPI
- SQLAlchemy
- SQLite
- LangGraph
- LangChain
- Groq API
- Pydantic

---

## Project Structure

```
crm-hcp-ai/
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Backend Setup

Navigate to backend

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger API Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run Frontend

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## AI Workflow (LangGraph)

The AI Assistant uses LangGraph to process HCP interactions.

Workflow:

```
Interaction Notes
        ↓
Generate Summary
        ↓
Generate Follow-up
        ↓
Generate CRM Insights
        ↓
Populate CRM Form
```

---

## API Endpoints

### HCP

```
GET     /hcp
POST    /hcp
GET     /hcp/{id}
PUT     /hcp/{id}
DELETE  /hcp/{id}
```

### Interaction

```
GET     /interaction
POST    /interaction
GET     /interaction/{id}
PUT     /interaction/{id}
DELETE  /interaction/{id}
```

### AI

```
POST /ai/chat
```

---

## Example AI Input

```
Met Dr. John Smith today.

Discussed Product-X efficacy.

Doctor responded positively.

Requested brochure.

Follow-up next Tuesday.
```

The AI automatically:

- Generates Summary
- Generates Follow-up Actions
- Generates CRM Insights
- Auto-populates the CRM form

---

## Demo Features

- Log HCP Interaction
- AI Chat Assistant
- AI Summary Generation
- AI Follow-up Recommendation
- CRM Insights
- Automatic Form Population
- CRUD Operations

---

## Author

Shiva Prasad
