/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SK8L_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: any;
  export default component;
}

declare module '@primer/octicons';
