# HireLoop Client 🚀

A modern recruitment platform built on Next.js, React, and MongoDB, featuring a
highly-interactive recruiter dashboard and secure authentication.

---

## 🎨 Design & Tech Stack

HireLoop is designed with a premium, sleek aesthetic and uses a modern stack:

- **Framework**: Next.js 16 (App Router) & React 19
- **Styling**: Tailwind CSS v4 & Vanilla CSS
- **Component Library**: HeroUI (formerly NextUI)
- **Authentication**: Better Auth with MongoDB adapter
- **Database**: MongoDB (via official Driver)
- **Icons & Feedback**: Lucide React, Gravity UI Icons, React Hot Toast

---

## ✨ Features

- **Recruiter Dashboard**: Manage company details and job postings.
- **Job Board Management**: Full CRUD-like capability for recruiter-centric job
  posts.
- **Dynamic Job Forms**: Form-level validation, interactive toggles
  (remote/on-site), and status updates.
- **Beautiful UI Components**: Premium dark-mode tables, responsive navigation,
  custom badges, and smooth transitions.
- **Secure Authentication**: Integration with Better Auth for safe session
  handling and recruiter login flows.

---

## 📁 Key Directory Structure

```text
src/
├── app/                  # Next.js App Router
│   ├── (main)/           # Home and authentication routes
│   ├── api/              # Backend routes (auth endpoints)
│   └── dashboard/        # Recruiter portals & job management
├── components/           # Reusable UI components
├── lib/                  # Shared utilities
│   ├── api/              # API Client (Jobs endpoints, etc.)
│   └── auth-client.js    # Better Auth client config
```

---

## ⚙️ Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/)
installed.

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Installation

Install dependencies using `pnpm`:

```bash
pnpm install
```

### 4. Running Locally

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the
application.

---

## 🛠️ Build and Production

To build the project for production:

```bash
pnpm run build
```

To run the production build locally:

```bash
pnpm run start
```
