export const gemma4E4bQ4Km = {
  id: 'gemma-4-e4b-q4-k-m',
  name: 'Gemma 4 E4B Q4_K_M',
  repo: 'bartowski/google_gemma-4-E4B-it-GGUF',
  family: 'Gemma / GGUF',
  task: 'Instruction-tuned text generation',
  architectureType: 'Decoder-only',
  modelClass: 'GGUF local LLM',
  license: 'Gemma terms',

  hardwareFit: {
    category: 'Large',
    summary:
      'Quantized Gemma-family GGUF model. Smaller than the 12B GGUF example, but still requires local LLM runtime planning for RAM, VRAM, context length, and loader settings.',
  },

  sizing: {
    dModel: 'Not listed in GGUF repo summary',
    encoderLayers: 0,
    decoderLayers: 'Not listed in GGUF repo summary',
    encoderAttentionHeads: 0,
    decoderAttentionHeads: 'Not listed in GGUF repo summary',
    encoderFfnDim: 0,
    decoderFfnDim: 'Not listed in GGUF repo summary',
    vocabSize: 'Not listed in GGUF repo summary',
    maxPositionEmbeddings: 'Not listed in GGUF repo summary',
    parameterCount: 'E4B',
    repoSize: '5.41 GB',
    runtimeWeightSize: '5.41 GB',
  },

  runtime: {
    format: 'GGUF',
    quantization: 'Q4_K_M',
    quantizationBits: '4-bit',
    fileName: 'gemma-4-E4B-it-Q4_K_M.gguf',
    contextWindow: 'Not listed in GGUF repo summary',
    loaders: ['llama.cpp', 'LM Studio', 'Ollama', 'Jan'],
    notes:
      'This entry uses the Q4_K_M GGUF file size from the model listing. Runtime requirements will vary based on loader, context length, CPU/GPU offload, and KV cache settings.',
  },

  encoder: {
    present: false,
    summary:
      'Not used by decoder-only local LLMs. The model generates from prior context rather than encoding a separate source sequence.',
  },

  decoder: {
    present: true,
    summary:
      'Generates instruction-following text token by token using a decoder-only local LLM runtime.',
  },
};
