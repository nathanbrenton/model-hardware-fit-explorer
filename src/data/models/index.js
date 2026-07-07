import { bartLargeMnli } from './bartLargeMnli.js';
import { bertBaseNer } from './bertBaseNer.js';
import { cwcMistralNemo12bQ4Km } from './cwcMistralNemo12bQ4Km.js';
import { distilbartCnn126 } from './distilbartCnn126.js';
import { distilbertBaseUncased } from './distilbertBaseUncased.js';
import { distilbertSst2 } from './distilbertSst2.js';
import { distilgpt2 } from './distilgpt2.js';
import { gemma4E4bQ4Km } from './gemma4E4bQ4Km.js';
import { opusMtFrEn } from './opusMtFrEn.js';
import { robertaBaseSquad2 } from './robertaBaseSquad2.js';

export const models = [
  distilbartCnn126,
  distilbertSst2,
  distilgpt2,
  opusMtFrEn,
  distilbertBaseUncased,
  bertBaseNer,
  robertaBaseSquad2,
  bartLargeMnli,
  gemma4E4bQ4Km,
  cwcMistralNemo12bQ4Km,
];
