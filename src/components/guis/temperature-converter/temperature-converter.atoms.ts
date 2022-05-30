import { atom } from "jotai"

import {
  isStringValidNumber,
  toCelsius,
  toFahrenheit,
} from "./temperature-converter.helpers"
import {
  INITIAL_CELSIUS_TEMP,
  FRACTION_DIGITS,
} from "./temperature-converter.constants"

const baseCelsiusAtom = atom(INITIAL_CELSIUS_TEMP.toFixed(FRACTION_DIGITS))
const baseFahrenheitAtom = atom(
  toFahrenheit(INITIAL_CELSIUS_TEMP).toFixed(FRACTION_DIGITS)
)

export const celsiusAtom = atom(
  (get) => get(baseCelsiusAtom),
  (_get, set, newCelsiusTemp: string) => {
    set(baseCelsiusAtom, newCelsiusTemp)
    if (isStringValidNumber(newCelsiusTemp)) {
      const newFahrenheitTemp = toFahrenheit(Number(newCelsiusTemp)).toFixed(
        FRACTION_DIGITS
      )
      set(baseFahrenheitAtom, newFahrenheitTemp)
    }
  }
)
export const fahrenheitAtom = atom(
  (get) => get(baseFahrenheitAtom),
  (_get, set, newFahrenheitTemp: string) => {
    set(baseFahrenheitAtom, newFahrenheitTemp)
    if (isStringValidNumber(newFahrenheitTemp)) {
      const newCelsiusTemp = toCelsius(Number(newFahrenheitTemp)).toFixed(
        FRACTION_DIGITS
      )
      set(baseCelsiusAtom, newCelsiusTemp)
    }
  }
)
