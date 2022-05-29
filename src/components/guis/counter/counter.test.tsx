import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "jotai"

import Counter from "./counter"

const COUNTER_INIT_VALUE = 0

const renderCounter = () => {
  render(
    <Provider>
      <Counter />
    </Provider>
  )
}

test("Counter renders with a default value", async () => {
  renderCounter()
  expect(screen.getByLabelText(/counter value/i)).toHaveValue(
    COUNTER_INIT_VALUE
  )
})

test("Counter increments by one", async () => {
  const userEvt = userEvent.setup()
  renderCounter()
  await userEvt.click(screen.getByRole("button", { name: /increment/i }))
  expect(screen.getByLabelText(/counter value/i)).toHaveValue(
    COUNTER_INIT_VALUE + 1
  )
})

test("Counter decrements by one", async () => {
  const userEvt = userEvent.setup()
  renderCounter()
  const btn = screen.getByRole("button", { name: /decrement/i })
  await userEvt.click(btn)
  expect(screen.getByLabelText(/counter value/i)).toHaveValue(
    COUNTER_INIT_VALUE - 1
  )
})
