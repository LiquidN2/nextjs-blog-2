export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const isValidEmail = (email: string) => {
  const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return emailPattern.test(email);
};
