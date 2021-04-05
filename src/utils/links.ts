export const link = (path: string): string =>
  process.env.NODE_ENV === 'production' ? `/${path}` : `http://localhost:3001/${path}`;
