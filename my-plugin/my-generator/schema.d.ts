import { AllTypes } from "./type-constants";

export interface MyGeneratorGeneratorSchema {
  name: string;
  scope: 'web' | 'mobile' | 'shared';
  domain: 'cats' | 'dogs' | 'birds' | 'all';
  type: 'all' | AllTypes;
  codeowners?: string;
}
