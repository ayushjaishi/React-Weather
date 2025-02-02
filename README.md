<<<<<<< HEAD
![image](https://github.com/user-attachments/assets/19ccad1e-7eaa-48b7-a7fb-65f3d4779990)


# Weather-dashboard-React
 # Weather Dashboard in React - Project Setup and Usage (Using Vite)
Project Description
The Weather Dashboard is a web application built using React and Vite that allows users to search for and view weather information for any city. The app fetches real-time weather data from a weather API (e.g., OpenWeatherMap API) and displays it in a user-friendly interface. Key features include:

Search for weather by city name.

Display current weather conditions (temperature, humidity, wind speed, etc.).

Show a 5-day weather forecast.

Responsive design for optimal viewing on all devic
# Open your terminal and run the following command to create a new React project using Vite:
npm create vite@latest weather-dashboard
# Navigate to the project directory:
cd weather-dashboard
# Install the required dependencies:
npm install
# Install additional dependencies for the project:
npm install axios react-icons
# After setup, your project structure should look like this:
weather-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SearchInput.jsx
│   │   ├── ErrorDisplay.jsx
│   │   ├── WeatherDisplay.jsx
|   ├──Context
│   │   ├──WeatherContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
├── .env
├── index.html
├── package.json
├── vite.config.js

#Build the project:
npm run dev
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 5fb2166 (Initial commit)
