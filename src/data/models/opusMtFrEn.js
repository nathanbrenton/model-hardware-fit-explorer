export const opusMtFrEn = {
  id: 'opus-mt-fr-en',
  name: 'OPUS-MT French to English',
  repo: 'Helsinki-NLP/opus-mt-fr-en',
  family: 'MarianMT / OPUS-MT',
  task: 'Translation',
  architectureType: 'Encoder-decoder',
  modelClass: 'MarianMTModel',
  license: 'Apache-2.0',

  hardwareFit: {
    category: 'Medium',
    summary: 'Moderate CPU-friendly encoder-decoder model. Translation is generation-based, so GPU helps, but basic offline CPU demos should be practical.',
  },

  sizing: {
    hiddenWidth: {
      value: 512,
      sourceField: 'd_model',
    },
    dModel: 512,
    encoderLayers: 6,
    decoderLayers: 6,
    encoderAttentionHeads: 8,
    decoderAttentionHeads: 8,
    encoderFfnDim: 2048,
    decoderFfnDim: 2048,
    vocabSize: 59514,
    maxPositionEmbeddings: 512,
    repoSize: '~304 MB',
    runtimeWeightSize: '~301 MB',
  },

  encoder: {
    present: true,
    summary: 'Reads the French source text and produces representations for translation.',
  },

  decoder: {
    present: true,
    summary: 'Generates the English translation token by token using encoder context.',
  },
};
