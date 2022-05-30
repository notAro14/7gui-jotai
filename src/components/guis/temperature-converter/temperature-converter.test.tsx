import { screen, render as _render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "jotai"

import TemperatrueConverter from "./temperature-converter"
import { FRACTION_DIGITS } from "./temperature-converter.constants"

const render = () => {
  _render(
    <Provider>
      <TemperatrueConverter />
    </Provider>
  )
}

test("5degC converts to 41degF", async () => {
  const userEvt = userEvent.setup()
  const celsius = 5
  const fahrenheit = 41

  render()

  const celsiusInput = screen.getByLabelText(/celsius/i)
  const fahrenheitInput = screen.getByLabelText(/fahrenheit/i)

  userEvt.clear(celsiusInput)
  await userEvt.type(celsiusInput, celsius.toFixed(FRACTION_DIGITS))

  expect(fahrenheitInput).toHaveValue(fahrenheit.toFixed(FRACTION_DIGITS))
})

test("41degF converts to 5degC", async () => {
  const userEvt = userEvent.setup()
  const celsius = 5
  const fahrenheit = 41

  render()

  const fahrenheitInput = screen.getByLabelText(/fahrenheit/i)
  const celsiusInput = screen.getByLabelText(/celsius/i)

  userEvt.clear(fahrenheitInput)
  await userEvt.type(fahrenheitInput, fahrenheit.toFixed(FRACTION_DIGITS))

  expect(celsiusInput).toHaveValue(celsius.toFixed(FRACTION_DIGITS))
})

test("Invalid number doesn't convert", async () => {
  const userEvt = userEvent.setup()
  const invalidCelsiusValue = "Foo"

  render()

  const fahrenheitInput = screen.getByLabelText(/fahrenheit/i)
  const fahrenheitInputValueBefore = fahrenheitInput.getAttribute("value")
  const celsiusInput = screen.getByLabelText(/celsius/i)

  userEvt.clear(celsiusInput)
  await userEvt.type(celsiusInput, invalidCelsiusValue)

  expect(fahrenheitInput).toHaveValue(fahrenheitInputValueBefore)
})
