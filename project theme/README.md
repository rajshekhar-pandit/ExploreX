# ExploreX - Outdoor Adventure Booking Platform

ExploreX is a full-stack MERN application for browsing outdoor adventure activities, managing products, adding activities to a cart, placing orders, and handling admin-side users, products, orders, and contact messages.

<p align="center">
  <img src="frontend/public/assets/images/banner-bg.jpg" alt="ExploreX adventure banner" width="100%" />
</p>

## Preview

<p align="center">
  <img src="frontend/public/assets/images/advnt1.jpg" alt="Adventure activity" width="31%" />
  <img src="frontend/public/assets/images/advnt2.jpg" alt="Outdoor exploration" width="31%" />
  <img src="frontend/public/assets/images/advnt3.jpg" alt="Adventure experience" width="31%" />
</p>

<p align="center">
  <img src="frontend/public/assets/images/a1.jpg" alt="ExploreX activity one" width="31%" />
  <img src="frontend/public/assets/images/a2.jpg" alt="ExploreX activity two" width="31%" />
  <img src="frontend/public/assets/images/about.jpg" alt="About ExploreX" width="31%" />
</p>

## Features

- User signup, login, profile data, and JWT-based authentication.
- Admin login with dashboard counters for users, products, orders, and contact messages.
- Product and adventure listing with uploaded images.
- Product create, edit, view, delete, and admin table views.
- Cart management with quantity updates and item removal.
- Checkout and order creation.
- User order history and admin order management.
- Contact form storage and admin contact-message APIs.
- Static image serving from the backend through `/images`.
- Health-check endpoint for local development and deployment checks.
- Environment-based backend URL for the React frontend.
- Render-ready backend startup using `process.env.PORT`.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React, Create React App, React Router, Axios |
| Styling | Bootstrap assets, custom CSS, Font Awesome assets |
| Backend | Node.js, Express.js, ES modules |
| Database | MongoDB with Mongoose |
| Authentication | JSON Web Token, bcrypt |
| Uploads | express-fileupload |
| Payments | Stripe |
| Deployment | Render backend, Vercel frontend |

## Project Structure

```text
project theme/
  backend/
    connection/
    controller/
    model/
    public/images/
    routes/
    utilis/
    server.js
    package.json
  frontend/
    public/assets/
    src/components/
    src/Context/
    src/App.js
    package.json
```

## Local Setup

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Configure backend environment

Create `backend/.env` with these variable names:

```env
PORT=3333
MONGOURI=your_mongodb_connection_string
JWTSECRETKEY=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
```

Do not commit `.env`. It contains private values.

### 3. Start the backend

```bash
npm start
```

Backend runs locally at:

```text
http://localhost:3333
```

Health check:

```text
http://localhost:3333/
```

### 4. Install frontend dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 5. Configure frontend environment

Create `frontend/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:3333
```

### 6. Start the frontend

```bash
npm start
```

Frontend runs locally at:

```text
http://localhost:3000
```

## Backend API

### Health

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Backend health check |

### Users

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/user/signUp` | Register a user |
| POST | `/user/login` | User login |
| POST | `/user/adminLogin` | Admin login |
| GET | `/user/getAllUser` | Get users for admin |
| GET | `/user/getSingleUser/:id` | Get one user |
| PUT | `/user/editUserDetail/:id` | Update user |
| DELETE | `/user/deleteSingleUser/:id` | Delete user |
| GET | `/user/countForDashboard` | Dashboard counts |
| GET | `/user/allUserDataToAdmin/:id` | Admin view of one user's data |

### Contact

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/contactUs/createContactUs` | Create contact message |
| GET | `/contactUs/getAllContactUs` | Get all contact messages |
| GET | `/contactUs/singleGetContactUs/:id` | Get one contact message |
| DELETE | `/contactUs/deleteSingleContactUs/:id` | Delete contact message |

### Products

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/productCreate` | Create product |
| GET | `/productGet` | Get all products |
| GET | `/productGetSingle/:id` | Get one product |
| PUT | `/productUpdateGetSingle/:id` | Update product |
| DELETE | `/productDeleteSingle/:id` | Delete product |

### Cart

Protected routes require:

```text
Authorization: Bearer <token>
```

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/addToCart` | Add item to cart |
| GET | `/getAllCart` | Get current user's cart |
| PUT | `/updateStatusInCart` | Update cart status |
| PUT | `/updateCart/:id` | Update cart quantity |
| DELETE | `/deleteCart` | Clear current user's cart |
| DELETE | `/deleteSingleCartItem/:id` | Delete one cart item |

### Orders

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/paymentSubmit` | Create Stripe payment intent |
| POST | `/orderCreate` | Create order |
| GET | `/orderGetAll` | Get current user's orders |
| GET | `/orderGetAllForAdmin` | Get all orders for admin |
| GET | `/singleOrderGet/:id` | Get one user order |
| GET | `/singleOrderGetForAdmin/:id` | Get one order for admin |
| DELETE | `/orderDelete/:id` | Delete order |

## Static Images

The backend serves uploaded files from:

```text
backend/public/images
```

Available publicly under:

```text
http://localhost:3333/images
```

Examples:

```text
http://localhost:3333/images/productImages/<filename>
http://localhost:3333/images/userImage/<filename>
```

## Deployment

### Render Backend

Use these settings:

| Setting | Value |
| --- | --- |
| Language | Node |
| Root Directory | `project theme/backend` |
| Build Command | `npm install` |
| Start Command | `npm start` |

Add these environment variable names in Render:

```text
MONGOURI
JWTSECRETKEY
STRIPE_SECRET_KEY
FRONTEND_URL
BACKEND_URL
```

Render provides `PORT` automatically. Do not hard-code the production port.

### Vercel Frontend

Use these settings:

| Setting | Value |
| --- | --- |
| Framework | Create React App |
| Root Directory | `project theme/frontend` |
| Build Command | `npm run build` |
| Output Directory | `build` |

After Render gives you the backend URL, set this Vercel environment variable:

```env
REACT_APP_BACKEND_URL=https://your-render-backend-url.onrender.com
```

Also set the same frontend production URL in Render as:

```env
FRONTEND_URL=https://your-vercel-frontend-url.vercel.app
```

## Useful Scripts

### Backend

```bash
npm start
npm run dev
npm run test-db
```

### Frontend

```bash
npm start
npm run build
npm test
```

## Notes

- Keep `.env` files private.
- Keep API endpoint names stable because the frontend uses them through `frontend/src/components/routing/index.js`.
- If MongoDB connection fails locally, verify the `MONGOURI` value, Atlas network access, and internet/DNS connectivity.
- If images do not load in production, set `BACKEND_URL` on Render to the public backend URL.
