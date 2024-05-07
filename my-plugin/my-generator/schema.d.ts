export interface MyGeneratorGeneratorSchema {
  name: string;
  scope: 'web' | 'mobile' | 'shared';
  domain: 'cats' | 'dogs' | 'birds' | 'all';
  type: 'data-access' | 'feature' | 'util' | 'model' | 'ui';
}
