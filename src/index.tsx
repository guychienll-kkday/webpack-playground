import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';

const topic = 'chill chill frontend @ rezio';

const getWelcomeWording = (topic: string) => {
  return `Hello ${topic}`;
};

const App = () => {
  return <h1 className="welcome-heading">{getWelcomeWording(topic)}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
