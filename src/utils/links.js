export const link = (path) =>
  process.env.NODE_ENV === 'production' ? `/${path}` : `http://localhost:3001/${path}`;
