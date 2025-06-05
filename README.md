# Evolved Mentality

**Evolved Mentality** is a youth empowerment platform built to help young people, especially men. The platform provides access to motivation, skill development, and mentorship.

## 🌐 Live Demo
project published at www.evolvedmentality.co.za but we are still in the testing phase, therefore form submissions wont work.
---

## 🛠 Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) – animations
- [Lucide React](https://lucide.dev/) – icons
- [Font Awesome](https://fontawesome.com/)
- React Router DOM – page routing

### Backend (API folder)
- [FastAPI](https://fastapi.tiangolo.com/) – Python API
- Requirements listed in `API/requirements.txt`

---

## 📂 Project Structure
evolved-mentality/
│
├── public/ # Static assets (e.g., logo)
├── src/
│ ├── components/ # Reusable components (Navbar, Hero, JoinForm, etc.)
│ ├── pages/ # Page-level components (About, Events, Mentorship)
│ └── index.css # Global Tailwind + custom styles
│
├── API/ # Backend Python API
│ ├── main.py # FastAPI entry point
│ └── requirements.txt # Python dependencies
│
├── package.json # Frontend dependencies & scripts
├── vite.config.js # Vite configuration
└── README.md # This file

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- Python 3.9+

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
Backend (API) Setup
```bash
Copy
Edit
# Navigate to API folder
cd API

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Run FastAPI backend
uvicorn main:app --reload
```
# 📸 Screenshots
![image](https://github.com/user-attachments/assets/6ddf1ffd-df01-41a6-898b-f403d198959e)
![image](https://github.com/user-attachments/assets/3439fecf-c3eb-4d5e-8c4a-9bf27247dca8)
![image](https://github.com/user-attachments/assets/e46f99f1-5a66-4c1c-95c7-313bf747ccbf)

## 💡 Features
Animated UI with Framer Motion

Join form for onboarding participants

Mentorship program details

WhatsApp integration

Email contact button

Responsive design

Backend-ready for API integrations




