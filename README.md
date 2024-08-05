# Quantum Bot Core

Quantum Bot Core is a robust Firebase-powered solution designed to efficiently manage user interactions and securely store conversations for chatbot applications. This project uses Firebase's real-time database capabilities and features to ensure seamless operation and data security. Please refer to [this link](https://pitch.com/v/quantumbot-core-hzk37b)

## API Documentation

For detailed documentation on using the endpoints, refer to [Quantum Bot Core API Documentation](https://us-central1-quantumbotcore-d095e.cloudfunctions.net/swagger).
You can store messages using the API endpoint: [https://us-central1-quantum-bot-core-72974.cloudfunctions.net](https://us-central1-quantumbotcore-d095e.cloudfunctions.net)

## Getting Started
To get the project up and running locally or on Firebase, follow these steps:

### Setting up the IDE

- Node.js (Version 18.20.3 or higher)
- npm (Version 10.7.0 or higher)
- Firebase CLI (install with `npm install -g firebase-tools`)

### Installation Steps
1. **Clone the Project:**

```bash
  git clone https://github.com/prachikane/quantumbot.git
  cd quantumbot
```


2. **Create a Firebase Project:**
- Navigate to [Firebase Console](https://console.firebase.google.com)
- Create a new project named `quantumbot`
- Disable Google Analytics for this project

3. **Set Firebase Project ID:**
- Find your Project ID (`quantum-bot-core-72974`for example) in Firebase Console. Usually in the Project setting, field Project ID.
- Update `.firebaserc` with your Project ID

4. **Set up Firebase Web App:**
- Go to Project Settings -> Your Project -> Web App
- Register a new web app and copy the Firebase config (`firebaseConfig`) to `src/firebase_config.js`

5. **Create Firestore Database:**
- Go to Firestore Database -> Create Database -> Start in test mode

6. **Set up Authentication:**
- Go to Authentication -> Get Started -> Enable Email/Password Sign-in method

7. **Upgrade Billing Plan:**
- Go to Project Settings -> Billing -> Upgrade to Blaze plan (set budget to $0)

8. **Install Dependencies:**
- Install Firebase CLI and Node dependencies:
  ```
  npm install -g firebase-tools
  npm install firebase
  ```
  
9. **Firebase Init:**
 - Go to the terminal and run the command firebase init and select the project you created.
   ```
   firebase init
   cd functions
   npm install
   ```
   
10. **Login to Firebase CLI:**
 ```
 firebase login
 ```

11. **Deploy Functions:**
 - Deploy only functions:
   ```
   firebase deploy --only functions
   ```

## How to use
- After deployment, your Firebase project will be ready to manage user interactions and store chatbot conversations securely. Refer to API documentation to know how to use the endpoints.
- Now go to Postman and create a request for every function you created with the API that you get after deploying the functions to your firebase project.
- Create a header in the headers section with content-type as application/json.
- Then go to body section and send the data to the api using the raw json format.
- That is a short video of a usage demonstration. [link](https://www.loom.com/share/b0c362154c704724b059ab6e9cbfdbd6?sid=bc5f0e5e-e2f0-4ee8-8675-4c8a7565d1a9)
