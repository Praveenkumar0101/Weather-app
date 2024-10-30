# Weather-app

host Link: https://weather-app-zeta-seven-47.vercel.app/

# Weather Dashboard Application

This Weather Dashboard is a React application that allows users to search for current weather and a 5-day forecast of any city, toggle temperature units (Celsius/Fahrenheit), and save favorite locations.

## Features
- **Current Weather**: Displays temperature, humidity, and wind speed of the searched city.
- **5-Day Forecast**: Shows daily forecast conditions.
- **Favorites**: Allows users to add favorite cities for quick access.
- **Unit Toggle**: Switches between Celsius and Fahrenheit.

## Technologies Used
- **React**: Frontend framework
- **Axios**: For making HTTP requests to the OpenWeatherMap API
- **JSON Server**: Local mock server for saving favorite cities
- **dateformat**: Library for formatting dates

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download and install](https://nodejs.org/)
- **npm** (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Praveenkumar0101/weather-app.git
   cd weather-app

  > Obtaining an OpenWeatherMap API Key

  Go to OpenWeatherMap and sign up (or log in).
  Navigate to API Keys in your profile and create a new key.
  Copy the API key provided.

>Configuration
In the project directory, open App.js.

Locate the following line:

javascript
Copy code
const apiKey = 'your_api_key_here';


Here’s a README.md file template for your project:

markdown
Copy code
# Weather Dashboard Application

This Weather Dashboard is a React application that allows users to search for current weather and a 5-day forecast of any city, toggle temperature units (Celsius/Fahrenheit), and save favorite locations.

## Features
- **Current Weather**: Displays temperature, humidity, and wind speed of the searched city.
- **5-Day Forecast**: Shows daily forecast conditions.
- **Favorites**: Allows users to add favorite cities for quick access.
- **Unit Toggle**: Switches between Celsius and Fahrenheit.

## Technologies Used
- **React**: Frontend framework
- **Axios**: For making HTTP requests to the OpenWeatherMap API
- **JSON Server**: Local mock server for saving favorite cities
- **dateformat**: Library for formatting dates

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download and install](https://nodejs.org/)
- **npm** (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
Install the dependencies:

bash
Copy code
npm install
Obtaining an OpenWeatherMap API Key
Go to OpenWeatherMap and sign up (or log in).
Navigate to API Keys in your profile and create a new key.
Copy the API key provided.
Configuration
In the project directory, open App.js.

Locate the following line:

javascript
Copy code
const apiKey = 'your_api_key_here';
Replace 'your_api_key_here' with your actual OpenWeatherMap API key:

javascript
Copy code
const apiKey = 'your_actual_api_key';

Running the Application
Start the React Application:
npm start
