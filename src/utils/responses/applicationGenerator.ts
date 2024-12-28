import { practicalApplications } from './practicalApplications';
import { responseHistory } from '../responseHistory';

type ApplicationCategory = keyof typeof practicalApplications;

export const getRandomApplication = (category: ApplicationCategory): string => {
  return responseHistory.getUniqueApplication(practicalApplications[category]);
};