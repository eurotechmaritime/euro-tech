export function processData(data) {
  const result = [];
  for (const [key, value] of Object.entries(data)) {
    result.push({ name: key, data: value });
  }
  return result;
}

export function generateUniqueNumber() {
  const min = 1000000000; // Minimum value
  const max = 9999999999; // Maximum value
  const uniqueNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return uniqueNumber;
}
