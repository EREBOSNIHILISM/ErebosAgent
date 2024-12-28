export class ResponseHistory {
  private history: Map<string, Set<string>> = new Map();
  private maxHistorySize = 10;

  constructor() {
    this.history.set('concepts', new Set());
    this.history.set('quotes', new Set());
    this.history.set('applications', new Set());
  }

  private getUnusedElement<T>(array: T[], category: string): T {
    const historySet = this.history.get(category) || new Set();
    const unused = array.filter(item => !historySet.has(String(item)));
    
    if (unused.length === 0) {
      historySet.clear();
      return array[Math.floor(Math.random() * array.length)];
    }
    
    const selected = unused[Math.floor(Math.random() * unused.length)];
    historySet.add(String(selected));
    
    if (historySet.size > this.maxHistorySize) {
      const firstItem = Array.from(historySet)[0];
      historySet.delete(firstItem);
    }
    
    return selected;
  }

  getUniqueConcept(concepts: string[]): string {
    return this.getUnusedElement(concepts, 'concepts');
  }

  getUniqueQuote(quotes: string[]): string {
    return this.getUnusedElement(quotes, 'quotes');
  }

  getUniqueApplication(applications: string[]): string {
    return this.getUnusedElement(applications, 'applications');
  }
}

export const responseHistory = new ResponseHistory();