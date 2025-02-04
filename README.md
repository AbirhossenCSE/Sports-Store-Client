# Sports Equipment Store

## Live Website
[Click Here](https://auth-moha-milon-88362.web.app)

## Overview
The **Sports Equipment Store** is an e-commerce platform where users can browse, purchase, and review sports accessories. The website includes features like user authentication, product management, and dynamic sorting, providing a seamless shopping experience.

---

## Features
### 🔹 **Frontend Features** (Built with React.js, Vite, and Tailwind CSS)
- **User Authentication** (Login, Logout, Register) using Firebase Authentication.
- **Role-Based Dashboard** for Admin and Users.
- **Product Listing** with sorting and filtering options (Sort by Price and Rating).
- **Dynamic Product Details** page with a "View Details" button.
- **Responsive Design** for all screen sizes.
- **Interactive Animations** using **Lottie React** and **React Awesome Reveal**.
- **Tooltips & Modals** using **React Tooltip** and Tailwind CSS.
- **Navbar and Footer** with quick links.

---

### 🔹 **Backend Features** (Built with Node.js, Express.js, and MongoDB)
- **User Authentication & Authorization** with JWT for secure access control.
- **Database Integration** with MongoDB to store products and user data.
- **CRUD Operations** (Create, Read, Update, Delete) for managing products.
- **Role Management** (Admin can add/edit/delete products, users can purchase and review products).
- **API Endpoints** for fetching product lists, user details, and order management.
- **Secure Payment Processing** (If implemented).

---

## Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS, Firebase, React Router
- **Backend:** Node.js, Express.js, MongoDB, Firebase Authentication
- **Other Libraries:** Lottie React, React Awesome Reveal, React Tooltip


## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbirhossenCSE/Sports-Store-Client.git
   cd Sports-Store-Client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Backend Setup:**
   - Navigate to the backend folder: `cd backend`
   - Install backend dependencies: `npm install`
   - Start the backend server: `npm run start`

## Dependencies
```json
{
  "express": "^4.21.1",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15",
  "react-icons": "^5.4.0",
  "react-paginate": "^8.2.0",
  "react-query": "^3.39.3",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^7.1.1",
  "react-slick": "^0.30.3",
  "slick-carousel": "^1.8.1",
  "sort-by": "^1.2.0",
  "stripe": "^17.5.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```

## Backend Setup
Ensure you have Node.js installed.

1. **Create a `.env` file** and add:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   ```

2. **Run the backend server:**
   ```sh
   node server.js
   ```