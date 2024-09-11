# Amazon Clone

A fully functional Amazon clone built with Next.js, MongoDB, Tailwind CSS, Stripe for payments, and NextAuth for authentication. This project demonstrates the integration of various modern web technologies to create a responsive and scalable e-commerce platform.

## Features

- **Next.js**: Server-side rendering, API routes, and dynamic routing.
- **MongoDB**: Database for storing product details, user information, and orders.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Stripe**: Secure payment processing integration.
- **NextAuth**: Authentication and authorization with Google login.
- **Responsive Design**: Fully responsive and mobile-friendly layout.

## Screenshots

![image](https://github.com/user-attachments/assets/1bd23d1c-3119-43da-9b29-c0af90dc8f33)
![image](https://github.com/user-attachments/assets/f3a45c13-5a3e-4524-a7a2-22990a1c6228)


## Demo

[https://amazon-next-js-lyart.vercel.app/](https://amazon-clone-next-js-ecru.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (MongoDB Atlas)
- Stripe account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SyedHuzaifa417/Amazon-Clone-Next.js.git
   cd Amazon-Clone-Next.js
   
2. **Install dependencies:**

   ```bash
    npm install

3. **Set up environment variables:**

   Create a .env.local file in the root of the project and add the following environment variables:  

    ```bash
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-nextauth-secret
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    AUTH_TRUST_HOST=true
    password=your Mongodb password

4. **Run the development server:**

   ```bash
   npm run dev

  The app will be available at http://localhost:3000.


## Usage

- **Product Browsing:** View products by category, search for items, and filter results.
- **Authentication:** Sign in with Google using NextAuth.
- **Shopping Cart:** Add items to the cart and proceed to checkout.
- **Stripe Payments:** Secure payment processing via Stripe.
- **Order History:** View past orders and order details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


## Acknowledgments

- Thanks to the creators of Next.js, MongoDB, Tailwind CSS, Stripe, and NextAuth for the powerful tools and frameworks.
- Inspired by the original Amazon platform.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
