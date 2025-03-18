🚀 README for exchaero  
📌 Project Overview  
The Currency Exchange App is a responsive web application that allows users to:  
✅ View real-time exchange rates using the Exchange API by Fawaz Ahmed.  
✅ Convert currencies by selecting a base and target currency.  
✅ Visualize historical exchange rate trends using bar charts.  
✅ Navigate through multiple sections (Home, Historical Data, About Us, Contact Us) using React Router.  
✅ Seamlessly switch between mobile and desktop views with a fully responsive UI.  

This project follows best practices for performance optimization, state management, and API integration.  

📌 Tech Stack Used  
- React.js – Frontend framework  
- React Router – For navigation  
- Tailwind CSS – For modern styling  
- Axios – For API requests  
- Recharts – For data visualization (historical exchange rates)  
- Context API – For global state management  

📌 Installation & Setup  
🔧 Prerequisites  
Ensure you have the following installed:  
Node.js (v16 or later) – Download from nodejs.org  
npm or yarn (npm is included with Node.js)  

🚀 Running the App Locally  
1️⃣ Clone the repository:  
git clone https://github.com/your-username/exhaero.git
cd exhaero

2️⃣ Install dependencies:  
npm install
or  
yarn install

3️⃣ Start the development server:  
npm run dev
or  
yarn dev

4️⃣ Open the app in your browser:  
By default, it runs at http://localhost:5173 (Vite).  

📌 Features  
✔️ Real-Time Exchange Rates – Fetches live currency data via API.  
✔️ Currency Converter – Users can select a base and target currency to see conversions.  
✔️ Historical Exchange Rate Charts – Displays exchange trends using bar charts.  
✔️ Search & Filtering – Allows users to filter currencies for easy selection.  
✔️ Error Handling – Displays meaningful messages if the API fails.  
✔️ Optimized Performance – Uses lazy loading (React.lazy), memoization (useMemo), and minimized re-renders.  
✔️ Mobile-First & Responsive UI – Works seamlessly across all devices.  

📌 Project Structure  
/src
│── /components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── CurrencyConverter.jsx
│   ├── ExchangeRates.jsx
│   ├── HistoricalData.jsx
│   ├── TrustedBy.jsx
│   ├── Reviews.jsx
│── /context
│   ├── CurrencyContext.jsx
│── /pages
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── ContactUs.jsx
│   ├── HistoricalData.jsx
│── /assets
│── App.jsx
│── main.jsx
│── index.css
│── vite.config.js

This structure keeps the app modular and easy to maintain.  
📌 API Usage  
This app uses the Exchange API by Fawaz Ahmed:  
- Base URL:  
  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/
- Fetch all currencies:  
  /currencies.json
- Fetch specific exchange rates:  
  /currencies/{baseCurrency}.json
Example: Get exchange rates for USD:  
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

📌 Deployment  
To deploy the project:  
1️⃣ Build the project:  
npm run build
or  
yarn build
2️⃣ Deploy on Netlify/Vercel:  
- Push to GitHub  
- Connect to Netlify/Vercel  
- Deploy 🚀  

📌 Additional Notes  
📌 This project follows best coding practices:  
- Uses React Hooks (useState, useEffect, useCallback, useMemo) efficiently  
- Lazy loads components for better performance  
- Uses Context API to manage global state (currencies)  
- Styled with Tailwind CSS for a clean UI  

📌 Contribution Guidelines  
Want to improve this project? Feel free to contribute!  
1️⃣ Fork the repo  
2️⃣ Create a new branch:  
git checkout -b feature-name
3️⃣ Make changes & commit:  
git commit -m "Added new feature: ..."
4️⃣ Push changes:  
git push origin feature-name
5️⃣ Create a Pull Request  

📌 License  
📝 This project is MIT licensed – you can use & modify it freely.  

🚀 Thanks for checking out EXchaero! Feel free to reach out if you have any questions. 😊
