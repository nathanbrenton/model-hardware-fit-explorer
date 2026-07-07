export const cwcMistralNemo12bQ4Km = {
  id: 'cwc-mistral-nemo-12b-q4-k-m',
  name: 'CWC Mistral Nemo 12B Q4_K_M',
  repo: 'CWClabs/CWC-Mistral-Nemo-12B-V2-q4_k_m',
  family: 'Mistral Nemo / GGUF',
  task: 'Conversational text generation',
  architectureType: 'Decoder-only',
  modelClass: 'GGUF local LLM',
  license: 'MIT',

  hardwareFit: {
    category: 'Very Large',
    summary:
      'Quantized 12B GGUF model. This belongs in local LLM hardware-planning territory rather than lightweight CPU demo territory.',
  },

  sizing: {
    dModel: 'Not listed on model card',
    encoderLayers: 0,
    decoderLayers: 'Not listed on model card',
    encoderAttentionHeads: 0,
    decoderAttentionHeads: 'Not listed on model card',
    encoderFfnDim: 0,
    decoderFfnDim: 'Not listed on model card',
    vocabSize: 'Not listed on model card',
    maxPositionEmbeddings: 8192,
    parameterCount: '12B',
    repoSize: '7.48 GB',
    runtimeWeightSize: '7.48 GB',
  },

  runtime: {
    format: 'GGUF',
    quantization: 'Q4_K_M',
    quantizationBits: '4-bit',
    fileName:
      'CWC-Mistral-Nemo-12B-v2-GGUF-q4_k_m-health-nutrition-natural-medicine.gguf',
    contextWindow: 8192,
    loaders: ['llama.cpp', 'llama-cpp-python', 'LM Studio', 'Ollama', 'Docker Model Runner'],
    notes:
      'GGUF runtime planning depends on model file size, quantization, context length, KV cache, CPU/GPU offload, and the loader being used.',
  },

  encoder: {
    present: false,
    summary:
      'Not used by decoder-only local LLMs. The model does not encode a separate source sequence before generation.',
  },

  decoder: {
    present: true,
    summary:
      'Generates conversational text token by token using prior context and a decoder-only transformer architecture.',
  },
};
