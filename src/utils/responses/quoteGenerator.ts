import { philosophicalQuotes } from './philosophicalQuotes';
import { responseHistory } from '../responseHistory';

export const getRandomQuote = (): string => {
  return responseHistory.getUniqueQuote(philosophicalQuotes);
};