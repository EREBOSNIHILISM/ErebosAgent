import { responseHistory } from './responseHistory';
import { getRandomConcept } from './responses/conceptGenerator';
import { getRandomQuote } from './responses/quoteGenerator';
import { getRandomApplication } from './responses/applicationGenerator';

const generatePhilosophicalResponse = (topic: string): string => {
  const quote = getRandomQuote();
  const concept = getRandomConcept('core');
  return `${concept}\n\nAs we contemplate this: ${quote}`;
};

const generateCreativeResponse = (): string => {
  const artAdvice = getRandomApplication('artCreation');
  const creativeConcept = getRandomConcept('creativity');
  return `${creativeConcept}\n\nPractical suggestion: ${artAdvice}`;
};

const generateExistentialResponse = (): string => {
  const existenceConcept = getRandomConcept('existence');
  const dailyPractice = getRandomApplication('dailyLife');
  return `${existenceConcept}\n\nIn practice: ${dailyPractice}`;
};

export const generateResponse = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowercaseMessage = message.toLowerCase();

  if (lowercaseMessage.includes('meaning') || lowercaseMessage.includes('truth') || 
      lowercaseMessage.includes('philosophy')) {
    return generatePhilosophicalResponse(lowercaseMessage);
  }

  if (lowercaseMessage.includes('art') || lowercaseMessage.includes('create') || 
      lowercaseMessage.includes('beauty')) {
    return generateCreativeResponse();
  }

  if (lowercaseMessage.includes('existence') || lowercaseMessage.includes('life') || 
      lowercaseMessage.includes('void') || lowercaseMessage.includes('nihilism')) {
    return generateExistentialResponse();
  }

  const concept = getRandomConcept('core');
  const philosophy = getRandomApplication('philosophy');
  return `${concept}\n\n${philosophy}`;
};