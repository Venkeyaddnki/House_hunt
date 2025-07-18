# 🏡 HouseHunt: Finding Your Perfect Rental Home

HouseHunt is a full-featured rental property management system built using React and localStorage. It enables renters to browse and book homes, owners to list and manage properties, and admins to monitor and approve users.

## 🚀 Demo

🎥 View the working demo here:  
🔗 https://drive.google.com/drive/folders/1oq6c_-OUOA9mehLLo9rq79qva31LJf7S?usp=sharing

https://github.com/user-attachments/assets/95b53d98-23a2-402c-a28f-c95314cf6280

## 👥 User Roles & Features

### 👤 Renter
- Register/Login
- View and filter properties
- Click "Get Info" to see property/owner details
- Submit booking form
- View booking history with status

### 🧑‍💼 Owner
- Register and wait for admin approval
- Add, view, and manage properties
- Handle booking requests (approve/reject)

### 🛡️ Admin
- Approve/disapprove owner registrations
- View and monitor users, bookings, and properties

---

🛠️ How to Run the Project

1. Clone the repository

git clone https://github.com/yourusername/househunt.git
cd househunt

2. Setup Backend

cd backend
npm install

Create a .env file inside the backend folder and add this:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Then start the backend server:

npm start

3. Setup Frontend

Open a new terminal window and run:

cd frontend
npm install
npm start

The frontend will run on http://localhost:3000
The backend will run on http://localhost:5000
