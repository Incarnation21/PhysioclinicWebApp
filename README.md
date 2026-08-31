<h1 align="center">
  🏥 PhysioClinic Web App
</h1>

<p align="center">
  <b>A full-stack clinic management & patient booking platform — built for a real operational physiotherapy clinic</b><br/>
  <i>React · TypeScript · Firebase · Tailwind CSS · Framer Motion</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-12.x-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-EF0084?style=for-the-badge&logo=framer&logoColor=white"/>
</p>

---

## 🌟 What is this?

A **production-ready, full-stack web application** for a physiotherapy clinic that handles everything from patient-facing appointment booking to a secure admin dashboard — all in one seamless, responsive experience.

> Built as a real-world project for an **actual operational clinic** — not a tutorial clone.

---

## ✨ Key Features

### 🧑‍⚕️ Patient-Facing
| Feature | Details |
|---|---|
| **Smart Appointment Booking** | Multi-step form with client-side validation (Zod + React Hook Form) |
| **Session Type Selection** | Clinic visit · Home visit (Doc.Door) — URL-query-aware routing |
| **Services Showcase** | Sports rehab, orthopaedic, post-op, post-natal & neurological physiotherapy |
| **WhatsApp CTA** | Floating WhatsApp button for instant clinic contact |
| **FAQ & Contact Pages** | Fully animated sections with smooth UX |

### 🔐 Admin Panel
| Feature | Details |
|---|---|
| **Secure Auth** | Firebase Authentication with protected routes |
| **Appointment Management** | View, filter & update status (Pending / Confirmed / Completed / Cancelled) |
| **Staff Assignment** | Assign physiotherapist to each appointment inline |
| **WhatsApp Confirmations** | One-click auto-formatted WhatsApp message dispatched to patient |
| **Contact Inbox** | All contact form submissions in a clean tabbed dashboard |
| **Real-time Firestore** | Live data sync, sorted by latest first |

### ⚙️ Technical Highlights
- 🔥 **Firebase Firestore** for real-time NoSQL database with security rules
- 🔐 **Firebase Auth** for admin authentication with route guards
- 📱 **Fully Responsive** — mobile-first design with Tailwind CSS
- 🎞️ **Framer Motion** animations for polished page transitions
- 🧩 **shadcn/ui + Radix UI** — accessible, headless component system
- 📊 **Recharts** for data visualization in the dashboard
- 📧 **Nodemailer + Express** for server-side email notifications
- 🗓️ **react-day-picker + date-fns** for smart date selection
- ✅ **Zod + React Hook Form** — type-safe, validated forms
- 🔄 **TanStack Query v5** for async server state management

---

## 🗂️ Project Structure

```
src/
├── pages/
│   ├── Index.tsx           # Landing page — hero, testimonials, CTA
│   ├── Services.tsx        # Service categories with conditions list
│   ├── BookSession.tsx     # Appointment booking (clinic / home visit)
│   ├── DocDoor.tsx         # Home-visit physiotherapy info page
│   ├── AdminDashboard.tsx  # Protected admin panel (appointments + inbox)
│   ├── AdminLogin.tsx      # Firebase Auth login page
│   ├── About.tsx           # Doctor & clinic info
│   ├── FAQs.tsx            # Accordion FAQ section
│   └── Contact.tsx         # Contact form → Firestore
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Footer.tsx          # Site footer with links
│   ├── AppointmentForm.tsx # Reusable appointment form
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   └── ui/                 # shadcn/ui component library
├── config/
│   └── firebase.ts         # Firebase SDK initialisation
└── hooks/                  # Custom React hooks
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18.x` and npm
- A Firebase project (Firestore + Authentication enabled)

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/physioclinic-webapp.git
cd physioclinic-webapp

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.production.example .env.local
# Fill in your Firebase config keys in .env.local

# 4. Start the dev server
npm run dev
```

### Environment Variables

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 with SWC |
| **Styling** | Tailwind CSS + tailwindcss-animate |
| **UI Components** | shadcn/ui + Radix UI |
| **Animations** | Framer Motion |
| **Routing** | React Router v6 (Hash Router) |
| **Forms & Validation** | React Hook Form + Zod |
| **State Management** | TanStack Query v5 |
| **Database** | Firebase Firestore |
| **Authentication** | Firebase Auth |
| **Charts** | Recharts |
| **Backend** | Express.js + Nodemailer |
| **Date Handling** | date-fns + react-day-picker |

---

## 📱 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, services overview, testimonials |
| `/services` | Services | Full service categories with conditions |
| `/book-session` | Book Appointment | Multi-mode validated booking form |
| `/doc-door` | Doc.Door | Home-visit physiotherapy info |
| `/about` | About | Doctor & clinic background |
| `/faqs` | FAQs | Animated accordion FAQ |
| `/contact` | Contact | Inquiry form → Firestore |
| `/admin` | Admin Login | Firebase-protected login |
| `/admin/dashboard` | Admin Dashboard | Appointment & message manager |

---

## 🔒 Security Practices

- Firestore security rules enforce role-based read/write access
- Admin routes guarded by Firebase Auth state observer
- All form inputs sanitized and validated before any Firestore write
- API keys managed via environment variables — never hardcoded
- `.env` files excluded via `.gitignore`

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────┐
│          React SPA (Vite + SWC)         │
│  ┌───────────────┐  ┌─────────────────┐ │
│  │ Patient Pages │  │   Admin Panel   │ │
│  │  (Public)     │  │  (Auth-Gated)   │ │
│  └───────┬───────┘  └────────┬────────┘ │
│          │    TanStack Query │          │
└──────────┼───────────────────┼──────────┘
           │                   │
    ┌──────▼───────────────────▼──────┐
    │           Firebase              │
    │  ┌──────────┐  ┌─────────────┐  │
    │  │   Auth   │  │  Firestore  │  │
    │  └──────────┘  └─────────────┘  │
    └─────────────────────────────────┘
           │
    ┌──────▼──────────────┐
    │  Express + Nodemailer│
    │  (Email Notifications)│
    └─────────────────────┘
```

---

## 👨‍💻 About this Project

This is a **real-world freelance/client project** built for an operational physiotherapy clinic in Patna, Bihar. It solves genuine business problems — reducing manual phone bookings, giving the doctor a clean dashboard to manage patients, and automating appointment confirmation messages via WhatsApp.

---

## 📄 License

This project is private and built for a specific client. Not licensed for public reuse.
