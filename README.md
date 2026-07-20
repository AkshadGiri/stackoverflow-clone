# StackOverflow Clone

A full-stack clone of StackOverflow built with a Node.js/Express/MongoDB backend and a Next.js frontend. Users can sign up, log in, ask questions, post answers, and upvote/downvote questions.

**Live demo:**
- Frontend: https://stackoverflow-clone-48yq.vercel.app
- Backend API: https://stackoverflow-clone-c44wqa7gl-aksgiri19-gmailcoms-projects.vercel.app

---

## Tech Stack

**Backend (`server/`)**
- Node.js + Express 5
- MongoDB with Mongoose
- JWT-based authentication
- bcryptjs for password hashing

**Frontend (`stack/`)**
- Next.js (Pages Router) + TypeScript
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- Axios for API requests
- React Context for auth state
- react-toastify for notifications

---

## Features

- User signup & login with JWT authentication
- Ask questions with title, body, and tags
- Answer questions
- Upvote / downvote questions
- View all users and individual user profiles
- Edit user profile (name, about, tags)
- Persistent login via localStorage

---

## Project Structure

```
stackoverflow-clone/
├── server/                 # Express + MongoDB API
│   ├── controller/         # Route handlers (business logic)
│   ├── middleware/         # JWT auth middleware
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express route definitions
│   ├── api/index.js        # Vercel serverless entry point
│   ├── index.js            # Local dev entry point
│   └── vercel.json
│
└── stack/                  # Next.js frontend
    ├── src/
    │   ├── components/      # Navbar, Sidebar, QuestionDetail, ui/ (shadcn)
    │   ├── lib/              # AuthContext, axios instance
    │   ├── layout/
    │   └── pages/            # File-based routes (/, /ask, /auth, /signup, /users, /questions/[id])
    └── public/
```

---

## Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- A MongoDB database — [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier works well

### 1. Clone the repo
```bash
git clone https://github.com/AkshadGiri/stackoverflow-clone.git
cd stackoverflow-clone
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run it:
```bash
npm start
```
The API will be live at `http://localhost:5000`.

### 3. Set up the frontend
```bash
cd ../stack
npm install
```

Create a `.env.local` file inside `stack/`:
```
BACKEND_URL=http://localhost:5000
```

Run it:
```bash
npm run dev
```
The app will be live at `http://localhost:3000`.

---

## API Endpoints

### Auth (`/user`)
| Method | Endpoint | Description | Auth required |
|---|---|---|---|
| POST | `/user/signup` | Register a new user | No |
| POST | `/user/login` | Log in | No |
| GET | `/user/getalluser` | Get all users | No |
| PATCH | `/user/update/:id` | Update a user's profile | Yes |

### Questions (`/question`)
| Method | Endpoint | Description | Auth required |
|---|---|---|---|
| POST | `/question/ask` | Post a new question | Yes |
| GET | `/question/getallquestion` | Get all questions | No |
| DELETE | `/question/delete/:id` | Delete a question | Yes |
| PATCH | `/question/vote/:id` | Upvote/downvote a question | Yes |

### Answers (`/answer`)
| Method | Endpoint | Description | Auth required |
|---|---|---|---|
| POST | `/answer/postanswer/:id` | Post an answer to a question | Yes |
| DELETE | `/answer/delete/:id` | Delete an answer | Yes |

Protected routes require an `Authorization: Bearer <token>` header, where the token is returned on signup/login.

---

## Deployment

Both `server` and `stack` are deployed separately on **Vercel** as two independent projects from the same repository, each with its **Root Directory** set to `server` or `stack` respectively.

**Backend environment variables (Vercel):**
- `MONGODB_URL`
- `JWT_SECRET`

**Frontend environment variables (Vercel):**
- `BACKEND_URL` — set to the deployed backend's URL

---

## License

This project is for educational purposes.
