export const distilbertBaseUncased = {
  id: 'distilbert-base-uncased',
  name: 'DistilBERT Base Uncased',
  repo: 'distilbert/distilbert-base-uncased',
  family: 'DistilBERT',
  task: 'Fill mask',
  architectureType: 'Encoder-only',
  modelClass: 'DistilBertForMaskedLM',
  license: 'Apache-2.0',

  hardwareFit: {
    category: 'Small',
    summary: 'CPU-friendly base encoder model. Same width as BERT-base, but lighter because it has 6 layers instead of 12.',
  },

  sizing: {
    dModel: 768,
    encoderLayers: 6,
    decoderLayers: 0,
    encoderAttentionHeads: 12,
    decoderAttentionHeads: 0,
    encoderFfnDim: 3072,
    decoderFfnDim: 0,
    vocabSize: 30522,
    maxPositionEmbeddings: 512,
    repoSize: '~1.5 GB',
    runtimeWeightSize: '~256 MB',
  },

  encoder: {
    present: true,
    summary: 'Reads masked input text and builds contextual token representations for predicting the masked token.',
  },

  decoder: {
    present: false,
    summary: 'Not used by encoder-only masked language models. The model predicts masked tokens rather than generating text autoregressively.',
  },
};
