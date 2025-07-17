# EmotivAI: AI-Driven Mental Wellness Platform

EmotivAI is a cutting-edge mental health application designed to provide empathetic AI-driven therapy, mood analysis, and interactive mindfulness tools. Built with a modern tech stack, it ensures a seamless, secure, and responsive experience for users seeking mental wellness support.

## 🌈 Overview

EmotivAI empowers users with personalized mental health support through AI-powered conversations, real-time emotional analysis, and engaging therapeutic activities. With a focus on accessibility and user privacy, it offers a professional-grade platform for mental well-being.

## ✨ Core Features

- **Empathetic AI Conversations**: Context-sensitive therapy sessions powered by Google Gemini AI.
- **Real-Time Emotional Monitoring**: Detects stress and emotional shifts for proactive support.
- **Mindfulness Activities**: Interactive tools like breathing exercises and virtual nature experiences.
- **Mood Insights**: AI-driven analytics to track and visualize mental health progress.
- **Secure User System**: Robust authentication and session handling with NextAuth.js.
- **Accessible Design**: Responsive UI with dark/light mode and accessibility compliance.
- **Progress Dashboard**: Visualize mental health trends and activity history.

## 🛠 Technology Stack

- **Frontend**:
  - Next.js 14 (App Router, Server-Side Rendering)
  - TypeScript
  - Tailwind CSS
  - Framer Motion (Animations)
  - Radix UI (Accessible UI Components)
- **Backend**:
  - Node.js
  - Express
  - MongoDB (NoSQL Database)
  - Inngest (Serverless Workflow Engine)
  - EchoAPI (API Testing & Debugging)
- **AI**:
  - Google Gemini AI (Conversational & Sentiment Analysis)
- **Authentication**:
  - NextAuth.js

## ⚙️ Setup Instructions

### Requirements

- Node.js (v18+)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Google Gemini AI API key
- Inngest API key
- EchoAPI key
- Discord for community support

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/emotivai.git
   cd emotivai
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**: Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000 in your browser.

## 📁 Project Layout

```
├── app/                  # Next.js app router (pages, layouts, APIs)
├── components/           # Reusable React components
├── lib/                 # Utility functions and helpers
├── models/              # MongoDB schemas and models
├── pages/api/           # Backend API routes
├── public/              # Static assets (images, fonts)
├── styles/              # Tailwind CSS and global styles
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 📲 How to Use

- **AI Therapy**: Engage in real-time, empathetic conversations with the AI therapist.
- **Mood Tracking**: Log and analyze your emotional state with AI insights.
- **Mindfulness Tools**: Explore interactive activities like guided breathing or virtual zen gardens.
- **Emotional Monitoring**: Receive alerts for detected stress or emotional changes.
- **User Management**: Securely register, log in, and manage sessions.

## 🚀 Deployment Guide

1. **Backend Deployment**:

   - Host the Node.js backend on platforms like Render, Heroku, or AWS.
   - Ensure MongoDB and environment variables are properly configured.

2. **Frontend Deployment**:

   - Deploy the Next.js app to Vercel or Netlify.
   - Set up environment variables in the hosting platform.

3. **Optimization**:

   - Leverage Next.js image optimization and caching.
   - Use Inngest for serverless workflows and EchoAPI for API reliability.
