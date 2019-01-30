export const textTrimmer = (text, length) => (text.length > length ? `${text.substring(0, length).trim()}...` : text);
