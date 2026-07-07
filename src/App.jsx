import { useState } from 'react';

import CompactModelList from './components/CompactModelList.jsx';
import HardwareFitLegend from './components/HardwareFitLegend.jsx';
import ModelCard from './components/ModelCard.jsx';
import ModelSelector from './components/ModelSelector.jsx';
import ModelSummary from './components/ModelSummary.jsx';
import ViewToggle from './components/ViewToggle.jsx';
import { models } from './data/models/index.js';

function App() {
  const [selectedModelId, setSelectedModelId] = useState(models[0].id);
  const [viewMode, setViewMode] = useState('detail');

  const selectedModel = models.find((model) => model.id === selectedModelId);

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

      <ModelSummary models={models} />

      <HardwareFitLegend />

      <ViewToggle viewMode={viewMode} onChangeView={setViewMode} />

      {viewMode === 'detail' && (
        <section className="master-detail-layout">
          <ModelSelector
            models={models}
            selectedModelId={selectedModelId}
            onSelectModel={setSelectedModelId}
          />

          <div className="selected-model-panel">
            <ModelCard model={selectedModel} />
          </div>
        </section>
      )}

      {viewMode === 'cards' && (
        <section className="model-grid" aria-label="All model cards">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </section>
      )}

      {viewMode === 'compact' && (
        <CompactModelList
          models={models}
          selectedModelId={selectedModelId}
          onSelectModel={setSelectedModelId}
        />
      )}
    </main>
  );
}

export default App;
