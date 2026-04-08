/// <reference types="vite/client" />

declare module '*.vue' {
  // During migration, treat unmigrated Vue imports as 'any'
  // to prevent strict template slot/prop errors.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: any;
  export default component;
}

declare module '@primer/octicons';
declare module '@/components/Sk8lCronjobClient.js';
