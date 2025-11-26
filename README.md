![Hero Section](/public/hero.png "AIMAGINE Landing Page - Showcasing the main features and value proposition")
![Project Status](https://img.shields.io/badge/Status-80%25%20Complete-yellow) ![License](https://img.shields.io/badge/License-MIT-blue) ![Next.js](https://img.shields.io/badge/Next.js-15.5.6-000000) ![React](https://img.shields.io/badge/React-19.1.0-61DAFB)![Mongoose](https://img.shields.io/badge/Mongoose-8.20.0-61DAFB)![cloudinary](https://img.shields.io/badge/Cloudinary-6.17.5-61DAFB)

## AIMAGINE | AI-Powered Image Manipulation Suite

AIMAGINE is a cutting-edge SaaS platform that leverages artificial intelligence to provide professional-grade image manipulation tools. Our suite goes beyond basic and advanced transformations while ensuring quality preservation and professional results.

#### _Key Features_

- **AI-Powered Transformations** - Advanced image manipulation
- **Quality Restore** - Restore image quality and provide hight quality
- **User-Friendly Interface** - Intuitive dashboard and tools
- **Secure Authentication** - Powered by Clerk for seamless user management
- **Payment Integration** - Stripe-powered subscription model
- **Design** - TailwindCSS-powered component styles

### Tech Stack

| Technology        | Version | Purpose                               |
| ----------------- | ------- | ------------------------------------- |
| **Next.js**       | ^15.5.6 | Full-stack React framework            |
| **React**         | ^19.1.0 | Latest React with concurrent features |
| **Clerk/NextJS**  | ^6.35.2 | Authentication & Authorization        |
| **MongoDB**       | Latest  | Primary database                      |
| **Mongoose**      | ^8.20.0 | MongoDB object modeling               |
| **Stripe**        | ^20.0.0 | Payment processing & subscriptions    |
| **Cloudinary**    | ^6.17.5 | AI image transformations & CDN        |
| **Framer Motion** | ^12.2.2 | Smooth animations & transitions       |
| **Reactour**      | ^3.8.0  | Interactive feature tours             |

### Architecture & Implementation

#### Technical Challenge: Multi-Service Data Synchronization

The most significant technical challenge was implementing robust synchronization between user data across multiple external services. This involved:

- **Webhook Integration**: Developed secure webhook handlers for Clerk (authentication) and Stripe (payments)
- **Real-time Data Flow**: Ensured payment statuses and authentication states were accurately reflected in MongoDB
- **Security Measures**: Implemented signature verification and validation for all incoming webhooks

---

### Getting Started

#### Prerequisites

- Node.js 18+
- MongoDB instance
- Clerk account
- Stripe account
- Cloudinary account

#### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/devjubayr/aimagine.git
    cd aimagine
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Environment Setup** <br>
    Create a .env.local file with:

         ```
        NEXT_SERVER_URL=https://codi-chubbiest-densimetrically.ngrok-free.dev
        MONGODB_URI=mongodb+srv://user:pass@cluster0.idxkyye.mongodb.net/?appName=Cluster0

        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_pk
        CLERK_SECRET_KEY=sk_test

        NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
        NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

        CLERK_WEBHOOK_SIGNING_SECRET=clerk_webhook_secret


        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=cldname
        CLOUDINARY_API_KEY=cld_key
        CLOUDINARY_API_SECRET=cldsecret

        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test
        STRIPE_SECRET_KEY=sk_test
        STRIPE_WEBHOOK_SECRET=whsec
         ```

4.  **Run development server**

    ```bash
    npm run dev
    ```

---

### Project Structure

```
aimagine/
|---app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   └── sign-up/
│   │       └── [[...sign-up]]/
│   ├── (root)/
│   │   ├── about/
│   │   ├── contact/
│   │   └── plans/
│   ├── api/
│   │   └── webhooks/
│   │       ├── clerk/
│   │       └── stripe/
│   ├── dashboard/
│   │   ├── credits/
│   │   ├── profile/
│   │   └── transformations/
│   │       ├── [id]/
│   │       │   └── update/
│   │       └── add/
│   │           └── [type]/
├── components/
│   ├── landing-page/
│   ├── shared/
│   └── ui/
└── utils
├── actions/
├── constants/
├── hooks/
├── lib/
├── models/
├── providers/
├── public/

```

---

### User Guide

Quick Start Tutorial:

1. **Create Account:** Sign up for a new account to receive 5 free credits for testing.

2. **Access Dashboard:** Navigate to the dashboard to view all available transformation tools.

3. **Upload Image:** Click the upload and select an image from your device or external sites.

4. **Configure Transformation**. Fill in the transformation parameters and additional fields as needed.

5. **Process & Download**. Click "Transformation" to process your image, then download or save the result.

**Working...**

- <del> Personalized AI Assistant
- <del> Custom Image Generation by Ratio/Size

---

### Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

Fork the repository

1. Create your feature branch (git checkout -b feature)
2. Commit your changes (git commit -m 'feat: Add some feature')
3. Push to the branch (git push origin feature)
4. Open a Pull Request

---

---

👥 Authors - [devjubayr](devjubayr)

<div align="center">
⭐ Star us on GitHub if you find this project helpful!

</div>
