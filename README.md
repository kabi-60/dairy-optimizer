# 🥛 Dairy Optimizer

A comprehensive dairy farm management system designed to optimize operations, track livestock, monitor production, and maximize profitability for modern dairy farmers.

## ✨ Features

- **💰 Financial Tracking** - Expense management, revenue tracking, and profitability analysis
- **📈 Data Visualization** - Interactive charts and reports
- **📋 Inventory Management** - Feed, supplies, and equipment tracking
- **📊 Production Analytics** - Monitor milk production, quality metrics, and trends
- **📱 Real-time Dashboard** - Live updates and key performance indicators
- **🔐 Secure Authentication** - User management with Clerk authentication
- **🎯 Goal Tracking** - Set and monitor farm objectives

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JWT** - JSON Web Tokens for secure sessions
- **bcrypt** - Password hashing

### Additional Libraries
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Elegant notifications
- **React Confetti** - Celebration animations
- **React CountUp** - Animated counters

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   \`\`\`bas
   git clone https://github.com/kabi-60/dairy-optimizer.git
   cd dairy-optimizer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   Create a `.env` file in the root directory:
   \`\`\`env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
  
   # JWT
   JWT_SECRET=your_jwt_secret
   
   # Server
   PORT=3000
   NODE_ENV=development
   \`\`\`

4. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Build for production**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`
