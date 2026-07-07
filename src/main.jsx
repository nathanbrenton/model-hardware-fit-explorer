import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

function App() {
  return (
    <main className="app-shell">
      <h1>Model Hardware Fit Explorer</h1>
      <p>
        A beginner React project for comparing transformer model architecture,
        sizing signals, and estimated hardware fit.
      </p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
