import ModelCard from './components/ModelCard.jsx';
import { models } from './data/models.js';

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">React Learning Project</p>

        <h1>Model Hardware Fit Explorer</h1>

        <p className="hero-summary">
          Compare transformer model architecture, sizing signals, and estimated
          hardware fit while learning React components, props, state, and
          data-driven UI patterns.
        </p>
      </section>

      <section className="content-section" aria-label="Model cards">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </section>
    </main>
  );
}

export default App;
