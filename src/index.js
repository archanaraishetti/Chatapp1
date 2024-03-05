import { createRoot } from 'react-dom';
import App from './App'; // Assuming you have a component named App defined in App.js or App.jsx

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element");
}

const root = createRoot(rootElement);

root.render(<App />);
