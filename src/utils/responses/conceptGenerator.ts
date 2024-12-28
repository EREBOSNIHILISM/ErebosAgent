import { aestheticNihilismConcepts } from './aestheticNihilismConcepts';
import { responseHistory } from '../responseHistory';

type ConceptCategory = keyof typeof aestheticNihilismConcepts;

export const getRandomConcept = (category: ConceptCategory): string => {
  return responseHistory.getUniqueConcept(aestheticNihilismConcepts[category]);
};