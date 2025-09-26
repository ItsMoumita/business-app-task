# 🌿 ScapeSync

### 🚀 Live Demo  
🔗 [https://scape-sync-five.vercel.app/](https://scape-sync-five.vercel.app/)

---

## ✨ Features
- 🎨 Pixel-perfect UI from Figma (Landing + Auth pages)  
- 📱 Fully responsive (mobile, tablet, desktop)  
- ♿ Accessible & semantic design  
- 🔐 Authentication Flow:
  - Register → redirect to Login
  - Login → redirect to Home
  - Forgot Password → Reset → Success
- ⚡ Integrated with real APIs (Login, Register, Forgot Password, Reset, Logout, User Detail)  
- 🛡️ Client-side validation + error handling  
- 🌈 Smooth animations & modern hover effects  
- ☁️ Deployed on **Vercel**  

---

## 🛠 Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)  
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  

---

## 📡 API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/register`       | Register new user |
| POST   | `/api/login`          | User login |
| POST   | `/api/forgot-password`| Request password reset token |
| POST   | `/api/reset-password` | Reset password |
| POST   | `/api/logout`         | Logout user |
| GET    | `/api/user-detail`    | Get logged-in user details |

---

## ⚙️ Getting Started

```bash
# 1️⃣ Clone Repository
git clone https://github.com/your-username/scape-sync.git
cd scape-sync

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Run Locally
npm run dev

# 4️⃣ Build for Production
npm run build
