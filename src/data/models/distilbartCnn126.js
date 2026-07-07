export const distilbartCnn126 = {
  id: 'distilbart-cnn-12-6',
  name: 'DistilBART CNN 12-6',
  repo: 'sshleifer/distilbart-cnn-12-6',
  family: 'BART / DistilBART',
  task: 'Summarization',
  architectureType: 'Encoder-decoder',
  modelClass: 'BartForConditionalGeneration',
  license: 'Apache-2.0',

  hardwareFit: {
    category: 'Large',
    summary: 'GPU recommended for comfortable inference; CPU may work slowly for demos.',
  },

  sizing: {
    dModel: 1024,
    encoderLayers: 12,
    decoderLayers: 6,
    encoderAttentionHeads: 16,
    decoderAttentionHeads: 16,
    encoderFfnDim: 4096,
    decoderFfnDim: 4096,
    vocabSize: 50264,
    maxPositionEmbeddings: 1024,
    repoSize: '~4.1 GB',
    runtimeWeightSize: 'Not isolated yet',
  },

  encoder: {
    present: true,
    summary: 'Reads and represents the input document before summary generation.',
  },

  decoder: {
    present: true,
    summary: 'Generates the summary token by token using encoder context.',
  },
};
