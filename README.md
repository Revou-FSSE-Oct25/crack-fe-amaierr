# LMS Frontend

Frontend application for the Learning Management System (LMS) platform.  
This project provides an interactive learning experience for students and instructors with course management, curriculum tracking, assignments, and progress monitoring.

## Preview

[LMS Frontend Deployment Link](https://lms-fe-rho-nine.vercel.app)

[Figma design reference](https://www.figma.com/make/uGKR8LKnSAMjEvfPvQlm8t/Learning-Management-System--Community-?p=f)

### Instructor Dashboard
![instructor dashboard](documentation/instructor%20dashboard.png)

### Student Dashboard
![instructor dashboard](documentation/student%20dashboard.png)

---

# Features

## Student Features

- Browse available courses
- Enroll in courses
- View course curriculum
- Track learning progress
- Access assignments and learning materials
- Watch course content
- Responsive learning dashboard

## Instructor Features

- Create and manage courses
- Add curriculum and course sections
- Upload learning materials
- Monitor enrolled students
- Manage assignments
- Track course activity

## Authentication

- User login & registration
- Protected routes
- Role-based access

## UI/UX

- Responsive design
- Modern dashboard layout
- Interactive tabs and course navigation
- Mobile-friendly interface

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Additional Libraries

- Axios
- React Hook Form
- Zustand / Context API
- Shadcn UI (if used)

---

# Project Structure

```bash
src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── styles/
└── types/
```

---

# Installation

**Clone the repository:**
```bash
git clone https://github.com/amaierr/LMS-fe.git
```

**Move into the project directory:**
```bash
cd LMS-fe
```

**Install dependencies:**
```bash
npm install
```

**Run the development server:**
```bash
npm run dev
```

**Open in browser:**
```bash
http://localhost:3000
```

---

# Environment Variables

Create a .env.local file in the root directory.

**Example:**

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

# API Integration

This frontend connects to the LMS backend API for:

- Authentication
- Course management
- Enrollment
- Assignments
- User management

Backend Repository:

[LMS Backend Repository](https://github.com/amaierr/LMS-be)

---

# Future Improvements
- Video streaming integration
- Real-time notifications
- Quiz system
- Certificate generation
- Discussion forum
- Dark mode support