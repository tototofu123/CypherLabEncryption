export type AlgorithmType = 'substitution' | 'polyalphabetic' | 'machine' | 'block' | 'hash' | 'kdf';
export type Category = 'Ancient' | '20th Century' | 'Modern';

export interface CipherMethod {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  era: string;
  category: Category;
  securityScore: number;
  icon: string;
  colorClass: string;
  tags: string[];
  vulnerability?: string;
  vulnerabilityIcon?: string;
  route: string;
  algoType: AlgorithmType;
}

export interface NavItem {
  label: string;
  path: string;
  isActive?: boolean;
}