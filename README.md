Made during ETHSilesia 2026 hackathon

# ParkChain

## Inspiration
Ever found yourself losing time and patience looking for a parking space? Or maybe you own a spot that sits empty half the day while you're at work? 
These everyday frustrations inspired us to build ParkChain - a seamless bridge connecting drivers in need of a spot with owners looking to generate passive income.

## What it does
ParkChain is a decentralized peer-to-peer parking marketplace. It empowers drivers to quickly find and rent available parking spaces in their desired location. It also provides a convenient platform for parking spot owners to list their unused spaces for both long- and short-term rental, allowing them to set a custom price and earn money effortlessly.

## How we built it
We developed a mobile-first experience using **React Native**, focusing on Android deployment. Our robust backend is powered by **TypeScript**. To make the platform even smarter, we implemented an intelligent pricing engine that suggests optimal hourly rates based on real-time factors like geolocation, time of day, and even nearby local events!

## How to run it 
To run ParkChain locally, you will need to set up both the backend server and the frontend mobile application. 

Prerequisites: 
- Node.js installed 
- npm or yarn 
- Expo Go app installed on your physical Android device, or Android Studio installed and configured with an Android Emulator. 

1. Clone the repository
<pre>
git clone https://github.com/6Parking/ParkChain.git
cd ParkChain
</pre>

2. Backend setup  

Open a terminal, navigate to the backend directory, and install the required dependencies: 
<pre>
cd backend
npm install 
</pre>  
Create a .env file in the root of backend folder and populate it with your database and API keys:  
<pre>
DATABASE_URL="your_database_url_here"
GEMINI_API_KEY="your_gemini_api_key_here"
JWT_SECRET="UNcVDtd72uZGgZNT4TJt"
</pre>

Initialize Prisma (generate client and push schema to your database): 
<pre>
npx prisma generate 
npx prisma db push 
</pre>

Start the backend development server: 
<pre>
npm run dev
</pre>

3. Frontend setup 

Open a new terminal window (leave the backend running), navigate to the frontend directory, and install  its dependencies: 
<pre>
cd frontend\mobile
npm install
</pre>

Create a .env file in the root of the frontend folder and add the backend API URL: 
<pre>
EXPO_PUBLIC_API_URL=http://127.0.0.1:3000/api
</pre>

(Note: If you are running the backend locally on a different IP, update the address above to match your local machine's IPv4 address). 

Start the Expo development server: 
<pre>
npx expo start 
</pre>

4. Launching the App 

Once the Expo server is running, you will see a QR code in your terminal. Physical Device: Open the Expo Go app on your Android phone and scan the QR code. Emulator: Press 'a' in the terminal to automatically launch the app in your running Android Emulator. 

## Challenges we ran into
We initially struggled with a chaotic Git environment, losing precious time resolving merge conflicts. Beyond the code, we had to brainstorm complex real-world edge cases—specifically the legal and operational challenges of reservation breaches, such as what happens when a driver overstays their booked timeframe.

## What we learned
Communication is everything. We gained proficiency in dynamic task allocation and the art of continuous synchronization—frequently updating each other on file modifications and commits to streamline our workflow. Most importantly, we learned to look beyond the code and view our project through a business lens, rigorously defining market needs and user requirements.

## What's next (potential)
We want to scale up! Our next milestone is expanding to B2B by onboarding larger entities, such as housing cooperatives, for bulk space management. We are also planning an exciting **IoT integration**, which will allow owners to securely grant renters temporary, smartphone-based access to open smart gates and barriers directly through the app.

## Our Team

* Adam Grzyśka
* Szymon Jakubiec
* Jan Kalla
* Mirosław Michalik
* Jakub Schimpel
* Michał Soboszek

