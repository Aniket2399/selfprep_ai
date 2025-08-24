Self-Prep: AI-Powered Mock Interview Platform
Practice interviews in a realistic, voice-interactive environment powered by Vapi AI voice agents. Receive personalized feedback on confidence, technical knowledge, and communication skills.

Build this project step by step and explore how AI can enhance interview preparation workflows.

📋 Table of Contents

🤖 Introduction

⚙️ Tech Stack

🔋 Features

🤸 Quick Start

🔗 Assets

🚀 More

🤖 Introduction

Built with Next.js for frontend and backend logic, Firebase for authentication and data storage, styled with TailwindCSS, and integrated with Vapi AI, Self-Prep allows users to practice personalized mock interviews.

The platform uses voice interaction for a realistic experience, dynamically generates questions based on user preferences, and provides detailed feedback on performance.

If you encounter issues or need help, join our Discord community where learners and developers collaborate on AI-powered projects.

⚙️ Tech Stack

Next.js – Frontend and backend logic

Firebase – Authentication and data storage

Tailwind CSS – Styling and responsive design

Vapi AI – Voice-based AI interactions

shadcn/ui – UI components

Zod – Validation

🔋 Features

Voice-Based Interview: Conduct mock interviews using Vapi AI for real-time conversation.

Dynamic Question Generation: AI selects role- and level-specific questions.

Feedback Reports: Evaluate confidence, technical knowledge, communication, and problem-solving.

Customizable Preferences: Choose role, interview type, experience level, and number of questions.

Modern UI/UX: Clean, responsive, and user-friendly interface.

Dashboard: Track interview history, progress, and performance analytics.

Future Scope: Resume parsing, personalized learning paths, mock panel interviews, and job platform integration.

🤸 Quick Start
Prerequisites

Git

Node.js

npm (Node Package Manager)

Clone the Repository
git clone https://github.com/your-username/self-prep.git
cd self-prep

Install Dependencies
npm install

Set Up Environment Variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=


Replace the placeholders with your Firebase and Vapi AI credentials.

Run the Project
npm run dev


Open http://localhost:3000
 in your browser to start using Self-Prep.

🔗 Assets

All public assets used in the project (logos, images, audio files) are located in the /public directory.

🚀 More

Advance your skills by exploring AI integration in web apps. This project can be upgraded in the future to a Next-Gen Adaptive AI Interview Agent with sentiment analysis, benchmarking, and recruiter dashboards.

Enjoy building and experimenting!
