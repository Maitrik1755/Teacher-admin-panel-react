# Teacher Admin Panel (React)

A simple Teacher Admin Panel built with React. It includes Login/Register with role selection, teacher-only access to the dashboard, and localStorage-based persistence. The admin dashboard contains Subjects and Students sections and a profile dropdown with logout.

> ⚠️ Note: Authentication is implemented using localStorage for learning/demo purposes.

---

## Features

### Auth (localStorage)
- Register with **role selection** (Teacher / Student)
- Login with email + password + role check
- **Teacher-only redirect** to Admin Dashboard
- Stores logged-in user session in localStorage
- Logout clears session

### Admin Dashboard
- Yellow themed top navbar
- Profile icon button (top-right)
- Profile card shows:
  - Full name
  - Email
  - Role
  - Logout button
- Subjects and Students UI cards (Bootstrap)

### Routing
- React Router DOM pages:
  - `/` (Login)
  - `/register` (Register)
  - `/admin` (Teacher dashboard)
- Nested routes implemented for Contact page (Instagram/Facebook/LinkedIn/WhatsApp)

### State Management Practice
- Context API practice (basic)
- Redux Toolkit practice (counter example with increment/decrement actions)

---

## Tech Stack

- **React**
- **React Router DOM**
- **Bootstrap**
- **Redux Toolkit** (practice counter module)
- **localStorage** for persistence (demo)

---

