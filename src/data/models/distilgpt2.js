export const distilgpt2 = {
  id: 'distilgpt2',
  name: 'DistilGPT2',
  repo: 'distilbert/distilgpt2',
  family: 'GPT-2 / DistilGPT2',
  task: 'Text generation',
  architectureType: 'Decoder-only',
  modelClass: 'GPT2LMHeadModel',
  license: 'Apache-2.0',

  hardwareFit: {
    category: 'Small',
    summary: 'CPU-friendly for short text generation demos, though generation can feel slower because output is produced token by token.',
  },

  sizing: {
    dModel: 768,
    encoderLayers: 0,
    decoderLayers: 6,
    encoderAttentionHeads: 0,
    decoderAttentionHeads: 12,
    encoderFfnDim: 0,
    decoderFfnDim: 3072,
    vocabSize: 50257,
    maxPositionEmbeddings: 1024,
    repoSize: '~353 MB',
    runtimeWeightSize: '~353 MB',
  },

  encoder: {
    present: false,
    summary: 'Not used by decoder-only language models. The model does not first encode a separate source sequence.',
  },

  decoder: {
    present: true,
    summary: 'Predicts the next token from previous tokens, producing text one token at a time.',
  },
};
