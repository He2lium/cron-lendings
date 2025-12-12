export const cropTextAtMiddle = (text: string, startChars: number, endChars: number) => {
  // Ensure the input is a string
  if (typeof text !== 'string') {
    return String(text); // Convert to string or handle error as preferred
  }

  const ellipsis = '...';
  const minLengthToCrop = startChars + endChars + ellipsis.length;

  // If the text is already short enough, return it as is
  if (text.length <= minLengthToCrop) {
    return text;
  }

  // Ensure startChars and endChars are not negative
  if (startChars < 0) startChars = 0;
  if (endChars < 0) endChars = 0;

  const start = text.substring(0, startChars);
  const end = text.substring(text.length - endChars);

  return `${start}${ellipsis}${end}`;
};
