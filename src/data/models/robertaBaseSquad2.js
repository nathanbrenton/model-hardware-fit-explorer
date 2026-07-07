export const robertaBaseSquad2 = {
  id: 'roberta-base-squad2',
  name: 'RoBERTa Base SQuAD2',
  repo: 'deepset/roberta-base-squad2',
  family: 'RoBERTa',
  task: 'Question answering',
  architectureType: 'Encoder-only',
  modelClass: 'RobertaForQuestionAnswering',
  license: 'CC-BY-4.0',

  hardwareFit: {
    category: 'Medium',
    summary: 'CPU-usable RoBERTa-base-sized encoder model. Similar hardware class to BERT-base NER and heavier than DistilBERT.',
  },

  sizing: {
    dModel: 768,
    encoderLayers: 12,
    decoderLayers: 0,
    encoderAttentionHeads: 12,
    decoderAttentionHeads: 0,
    encoderFfnDim: 3072,
    decoderFfnDim: 0,
    vocabSize: 50265,
    maxPositionEmbeddings: 514,
    repoSize: '~2.5 GB',
    runtimeWeightSize: '~496 MB',
  },

  encoder: {
    present: true,
    summary: 'Reads the question and context passage, then produces token representations used to extract an answer span.',
  },

  decoder: {
    present: false,
    summary: 'Not used by extractive question-answering models. The model selects a span from the provided context instead of generating an answer freely.',
  },
};
