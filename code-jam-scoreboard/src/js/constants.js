export function getNumberFromString(str) {
  return parseInt(str, 10);
}

export function generateRandomColor() {
  let color = '#';

  for (let i = 0; i < 3; i += 1) {
    const colorComponent = Math.floor(Math.random() * 255);
    color += colorComponent.toString(16);
  }

  return color;
}
