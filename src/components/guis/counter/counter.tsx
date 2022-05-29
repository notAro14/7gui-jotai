import { FC } from "react"
import { useAtom } from "jotai"

import Button from "src/shared/button"
import Label from "src/shared/label"
import Input from "src/shared/input"
import Flex from "src/shared/flex"
import Heading from "src/shared/heading"

import {
  countAtom,
  incrementByOneAtom,
  decrementByOneAtom,
} from "./counter.atom"

const CounterInput = () => {
  const [count] = useAtom(countAtom)
  return (
    <Flex direction="column">
      <Label htmlFor="count">Counter value</Label>
      <Input value={count} id="count" readOnly type="number" />
    </Flex>
  )
}

const IncrementTrigger = () => {
  const [, increment] = useAtom(incrementByOneAtom)
  return (
    <Button fullWidth onClick={() => increment()}>
      Increment
    </Button>
  )
}

const DecrementTrigger = () => {
  const [, decrement] = useAtom(decrementByOneAtom)
  return (
    <Button
      fullWidth
      onClick={() => decrement()}
      css={{
        "backgroundColor": "$red9",
        "&:hover": {
          backgroundColor: "$red10",
          cursor: "pointer",
        },
      }}
    >
      Decrement
    </Button>
  )
}

const Counter: FC = () => {
  return (
    <Flex
      as="article"
      direction="column"
      gap="5"
      css={{
        border: "1px solid $hi-text",
        borderRadius: "$md",
        padding: "$base",
        width: "fit-content",
      }}
    >
      <Heading as="h2">Task 1 - Counter</Heading>
      <Flex
        direction="column"
        gap="4"
        css={{
          maxWidth: 250,
        }}
      >
        <CounterInput />
        <IncrementTrigger />
        <DecrementTrigger />
      </Flex>
    </Flex>
  )
}

export default Counter
