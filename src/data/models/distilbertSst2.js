export const distilbertSst2 = {
  id: 'distilbert-sst2',
  name: 'DistilBERT SST-2',
  repo: 'distilbert/distilbert-base-uncased-finetuned-sst-2-english',
  family: 'DistilBERT',
  task: 'Sentiment analysis',
  architectureType: 'Encoder-only',
  modelClass: 'DistilBertForSequenceClassification',
  license: 'Apache-2.0',

  hardwareFit: {
    category: 'Small',
    summary: 'CPU-friendly text classification model; much lighter than BERT-base because it has 6 layers instead of 12.',
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
    repoSize: '~2.68 GB',
    runtimeWeightSize: '~268 MB',
  },

  encoder: {
    present: true,
    summary: 'Reads the input text and produces contextual token representations for classification.',
  },

  decoder: {
    present: false,
    summary: 'Not used by encoder-only classification models. The model predicts a label from the encoded representation instead of generating text token by token.',
  },
};
