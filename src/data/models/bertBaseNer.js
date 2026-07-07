export const bertBaseNer = {
  id: 'bert-base-ner',
  name: 'BERT Base NER',
  repo: 'dslim/bert-base-NER',
  family: 'BERT',
  task: 'Named entity recognition',
  architectureType: 'Encoder-only',
  modelClass: 'BertForTokenClassification',
  license: 'MIT',

  hardwareFit: {
    category: 'Medium',
    summary: 'CPU-usable BERT-base-sized encoder model. Heavier than DistilBERT because it has 12 layers instead of 6.',
  },

  sizing: {
    hiddenWidth: {
      value: 768,
      sourceField: 'hidden_size',
    },
    dModel: 768,
    encoderLayers: 12,
    decoderLayers: 0,
    encoderAttentionHeads: 12,
    decoderAttentionHeads: 0,
    encoderFfnDim: 3072,
    decoderFfnDim: 0,
    vocabSize: 28996,
    maxPositionEmbeddings: 512,
    repoSize: '~2.2 GB',
    runtimeWeightSize: '~433 MB',
  },

  encoder: {
    present: true,
    summary: 'Reads the input tokens and produces contextual token representations for entity labeling.',
  },

  decoder: {
    present: false,
    summary: 'Not used by encoder-only token classification models. The model labels tokens instead of generating new text.',
  },
};
