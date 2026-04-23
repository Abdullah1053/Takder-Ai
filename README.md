# Takder‑Ai: Your Intelligent Knowledge Architect

**Takder‑Ai** is a sophisticated, AI-driven searchable knowledge base designed to transform static documents into dynamic, interactive assets. By leveraging cutting-edge Retrieval-Augmented Generation (RAG), Takder‑Ai allows users to upload PDFs and notes, creating an indexed repository that can be queried in natural language to extract precise, context-aware insights.

---

## 🏛️ Architecture Overview

The application follows a robust **RAG (Retrieval-Augmented Generation)** pipeline to ensure accuracy and groundedness in every response:

1.  **Ingestion:** Files (PDFs, Markdown, Text) are uploaded and processed.
2.  **Preprocessing & Chunking:** Documents are split into semantic chunks to preserve context while fitting model constraints.
3.  **Embedding:** Each chunk is converted into a high-dimensional vector using Google Gemini's embedding models.
4.  **Vector Store:** Vectors are stored in a specialized database (PostgreSQL with `pgvector` or similar) for lightning-fast similarity searching.
5.  **Retrieval:** When a query is asked, the system retrieves the most relevant document fragments based on vector similarity.
6.  **Generation:** The retrieved context + the original query are fed into **Google Gemini Flash** to generate a grounded, source-cited response.

---

## 💻 Tech Stack Breakdown

### Frontend & Framework
- **Next.js** (React-based hybrid framework for speed and scalability)
- **Tailwind CSS** (Utility-first styling for a polished, modern interface)
- **Lucide React** (Clean, consistent iconography)
- **Motion** (Smooth, fluid UI transitions and micro-interactions)

### AI & Logic
- **LangChain** (The orchestration layer for RAG pipelines and LLM workflows)
- **Google Gemini Flash** (High-performance large language model for generation)
- **Google GenAI SDK** (Native integration for embeddings and multi-modal analysis)

### Infrastructure
- **PostgreSQL / pgvector** (Relational data + vector operations)
- **Vite/Express** (Development environment and server-side logic)

---

## 🗓️ The 21-Day Roadmap

### **Week 01: The Core**
- **Architecture Setup:** Project initialization with Next.js & PostgreSQL schema design.
- **Ingestion Engine:** Implementation of the multi-format file ingestion logic (PDF/Notes).
- **Embedding Pipeline:** Integration of Google GenAI for vectorization of document chunks.

### **Week 02: Intelligence**
- **Gemini Integration:** Orchestrating LangChain with Google Gemini 1.5 Flash for RAG.
- **Chat Interface UI:** Developing the interactive natural language query interface.
- **Vector Refinement:** Optimizing similarity search and retrieval accuracy.

### **Week 03: Stability**
- **Security & Access:** Implementation of the authentication layer and role-based access.
- **Edge Optimizations:** Latency reduction and context window performance tuning.
- **Production Ready:** Full-scale testing, audit, and production deployment on Vercel/Cloud Run.

---

## 🔑 Environment Variables

To run Takder‑Ai, you need to configure the following keys in your `.env` file:

```env
# AI & LLM
GEMINI_API_KEY="your_google_gemini_api_key_here"

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/takder_ai"

# Application
APP_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 🚀 Setup Instructions

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm/yarn** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/takder-ai.git
cd takder-ai
npm install
```

### 3. Database Setup
Ensure PostgreSQL is running with the `pgvector` extension enabled.
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

### 4. Running the App
Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

> *"Turning data into dialogue."* — **The Takder‑Ai Team**
