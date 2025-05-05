export interface Config {
  env: 'local' | 'pro';
  baseUrl: string; // window.origin /api/*
  debug: boolean;
  featurePlanets: boolean;
  feature2: boolean;
  feature3: boolean;
}
