export const bartLargeMnli = {
  id: 'bart-large-mnli',
  name: 'BART Large MNLI',
  repo: 'facebook/bart-large-mnli',
  family: 'BART',
  task: 'Zero-shot classification',
  architectureType: 'Encoder-decoder',
  modelClass: 'BartForSequenceClassification',
  license: 'MIT',

  hardwareFit: {
    category: 'Large',
    summary: 'Heavy encoder-decoder model with 24 total layers and a large runtime weight file. CPU inference may work, but GPU is preferred for responsive demos.',
  },

  sizing: {
    dModel: 1024,
    encoderLayers: 12,
    decoderLayers: 12,
    encoderAttentionHeads: 16,
    decoderAttentionHeads: 16,
    encoderFfnDim: 4096,
    decoderFfnDim: 4096,
    vocabSize: 50265,
    maxPositionEmbeddings: 1024,
    repoSize: '~6.9 GB',
    runtimeWeightSize: '~1.63 GB',
  },

  encoder: {
    present: true,
    summary: 'Reads the premise and hypothesis-style text representation used for natural language inference.',
  },

  decoder: {
    present: true,
    summary: 'Part of the BART encoder-decoder architecture. This model uses BART for sequence classification rather than open-ended generation.',
  },
};
