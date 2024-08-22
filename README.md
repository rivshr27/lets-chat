# Let's Chat

A real-time chat application developed as a fun side project.

## Overview

This application enables real-time communication between users through various chat rooms. It includes features such as user authentication, profile customization, emoji integration, and more.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Authentication**: Firebase
- **Backend**: Node/Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io

## Features

- **User Authentication**: Users can register and log in via email and password.
- **Profile Management**: Users can update their avatar and display name.
- **Random Avatars**: Avatars can be generated using the [DiceBear API](https://avatars.dicebear.com/docs/http-api).
- **Chat Rooms**: Users can create rooms to chat with others.
- **Online Status**: Users can see the online status of other users.
- **Search Functionality**: Users can search through chat rooms and messages.
- **Real-Time Chatting**: Messages are delivered instantly using Socket.io.
- **Emoji Picker**: An integrated emoji picker is available.
- **Dark Mode**: Users can enable dark mode for a better user experience.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

2. **Install dependencies**:
   - Navigate to the `frontend` directory and install the dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Navigate to the `server` directory and install the dependencies:
     ```bash
     cd server
     npm install
     ```

3. **Set up Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Go to the project settings or service accounts section.
   - Click on "Generate new private key" and save the downloaded JSON file as `serviceAccountKey.json`.
   - Place the downloaded `serviceAccountKey.json` file in the `server/config` directory.

4. **Set up Environment Variables**:
   - In the `frontend` directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file with your Firebase configuration details.
   - In the root directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file, such as `PORT` and `MONGO_URI`.

### Running the Application

1. **Run the server**:
   ```bash
   cd server
   npm run start
2. **Run the Client**:
   ```bash
   cd frontend
   npm start

This command will start the React development server and open the chat application in your default web browser at http://localhost:3000.

3.**Access the application:**

Open your web browser and navigate to http://localhost:3000.

You should now see the chat application's homepage, where you can log in, create chat rooms, and start messaging in real-time.
**Security Note:**
Ensure that the serviceAccountKey.json file and any other sensitive information (such as environment variables) are kept secure and are not committed to version control. Consider using tools like .gitignore to exclude sensitive files from your repository.

Conclusion
This real-time chat application demonstrates the integration of modern web technologies like React, TailwindCSS, Firebase, Node.js, MongoDB, and Socket.io to create a dynamic and user-friendly chat experience. It serves as a great example of how to build a fully functional, real-time chat application.


