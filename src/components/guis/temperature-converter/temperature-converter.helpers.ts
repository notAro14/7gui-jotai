export const toCelsius = (fahrenheitValue: number) =>
  (fahrenheitValue - 32) * (5 / 9)
export const toFahrenheit = (celsiusValue: number) =>
  celsiusValue * (9 / 5) + 32
export const isStringValidNumber = (str: string) => {
  const num = Number(str)
  return !(Number.isNaN(num) || str.length === 0)
}
