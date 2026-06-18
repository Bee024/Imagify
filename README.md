# Imagify — AI Text-to-Image Generator


## Overview

Imagify is a full-stack SaaS web app that lets users generate high-quality images from text prompts using the [ClipDrop AI API](https://clipdrop.co/apis). It features JWT-based user authentication, a credit-based usage system, and Razorpay payment integration for purchasing credit packs.

---

## Features

- **Text-to-Image Generation** — Describe any scene and receive an AI-generated image in seconds
- **User Authentication** — Register and log in with secure JWT auth; passwords are hashed with bcrypt
- **Credit System** — New users start with 5 free credits; 1 credit is consumed per image generated
- **Credit Purchase** — Buy credit packs via Razorpay (Basic, Advanced, Business tiers)
- **Download Images** — Download any generated image directly from the result page
- **Responsive UI** — Fully responsive layout with smooth Framer Motion animations

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router DOM v7 | Client-side routing |
| Axios | HTTP requests |
| React Toastify | Toast notifications |

### Backend

| Technology | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Token (JWT) | Authentication |
| bcrypt | Password hashing |
| Razorpay SDK | Payment processing |
| ClipDrop API | AI image generation |
| dotenv | Environment config |

---

## Project Structure

```
Text-to-image/
├── client/                        # React frontend (Vite)
│   ├── public/
│   └── src/
│       ├── assets/                # Images, SVGs, and static data (plans, steps, testimonials)
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Login.jsx          # Auth modal (login & register)
│       │   ├── Header.jsx
│       │   ├── Steps.jsx
│       │   ├── Description.jsx
│       │   ├── Testimonials.jsx
│       │   ├── GenerateBtn.jsx
│       │   └── Footer.jsx
│       ├── context/
│       │   └── AppContext.jsx     # Global state — user, token, credits
│       ├── pages/
│       │   ├── Home.jsx           # Landing page
│       │   ├── Result.jsx         # Image generation page
│       │   └── BuyCredit.jsx      # Pricing & purchase page
│       ├── App.jsx
│       └── main.jsx
│
└── server/                        # Express backend
    ├── config/
    │   └── mongodb.js             # MongoDB connection
    ├── controllers/
    │   ├── userControllers.js     # Register, login, credits, Razorpay payment
    │   └── imageController.js     # Image generation via ClipDrop API
    ├── middlewares/
    │   └── auth.js                # JWT verification middleware
    ├── models/
    │   ├── userModel.js           # User schema (name, email, password, creditBalance)
    │   └── transactionModel.js    # Payment transaction schema
    ├── routes/
    │   ├── userRoutes.js
    │   └── imageRoutes.js
    └── server.js
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account or local MongoDB instance
- A [ClipDrop API key](https://clipdrop.co/apis)
- A [Razorpay account](https://razorpay.com) (for payment features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/Text-to-image.git
   cd Text-to-image
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create the following `.env` files before running the app.

#### `server/.env`

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
PORT=4000
```

#### `client/.env`

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Running the App

**Backend** (from the `server/` directory):

```bash
# Development — auto-restarts on file changes
npm run server

# Production
npm start
```

**Frontend** (from the `client/` directory):

```bash
npm run dev
```

The client runs on `http://localhost:5173` and communicates with the backend at `http://localhost:4000`.

---

## API Reference

All routes are prefixed with `/api`. Protected routes require a JWT token passed as `token` in the request headers.

### User Routes — `/api/user`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/register` | No | Register a new user. Returns a JWT token. |
| `POST` | `/login` | No | Log in an existing user. Returns a JWT token. |
| `GET` | `/credits` | Yes | Get the authenticated user's credit balance. |
| `POST` | `/pay-razor` | Yes | Create a Razorpay order for a credit plan. |

**Register / Login — request body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Image Routes — `/api/image`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/generate-image` | Yes | Generate an image from a text prompt. Deducts 1 credit. |

**Request body:**

```json
{
  "prompt": "A futuristic city at sunset with cinematic lighting"
}
```

**Success response:**

```json
{
  "success": true,
  "message": "Image Generated",
  "creditBalance": 4,
  "resultImage": "data:image/png;base64,..."
}
```

> **Auth header:** Pass the JWT token as `token` in the request headers.
> ```
> token: <your_jwt_token>
> ```

---

## Credit Plans

| Plan | Credits | Price |
|---|---|---|
| Basic | 100 | $10 |
| Advanced | 500 | $50 |
| Business | 5,000 | $250 |

> New users receive **5 free credits** on registration.

---

## Roadmap

- [ ] Razorpay webhook — verify payment and automatically top up credits after a successful transaction
- [ ] Protected routes on the frontend — redirect unauthenticated users trying to access `/result`
- [ ] Image history — let users view and re-download previously generated images
- [ ] User profile page


