export const useSanitizer = (string) => {
  return string.replace(/\([^()]*\)/g, "");
};
