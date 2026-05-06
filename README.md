# Outfitters Clone (React + Django)

## Overview

This is a full-stack eCommerce project built using:

* React (Frontend)
* Django (Backend API)

---

## Features

* Product listing
* Product detail page (dynamic routing)
* Backend API integration
* Simple UI for learning full-stack flow

---

## Tech Stack

* React (Vite)
* React Router
* Django
* REST API

---

## Project Structure

```
project/
│
├── frontend/   # React app
├── backend/    # Django API
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-link>
cd project
```

---

### 2. Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## API Endpoints

* GET `/api/products/`
* GET `/api/products/:id/`

---

## Notes

* Make sure backend is running before frontend
* CORS must be enabled in Django

---

## Future Improvements

* Authentication (Login/Signup)
* Cart functionality
* Payment integration
* Admin dashboard

---

## Author

Your Name
