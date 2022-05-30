import { FC } from "react"
import { useAtom } from "jotai"

import Flex from "src/shared/flex"
import Heading from "src/shared/heading"
import Label from "src/shared/label"
import Input from "src/shared/input"
import { celsiusAtom, fahrenheitAtom } from "./temperature-converter.atoms"

const CelsiusInput = () => {
  const [celsius, setCelsius] = useAtom(celsiusAtom)
  return (
    <Flex direction="column">
      <Label htmlFor="celsius">Celsius</Label>
      <Input
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        id="celsius"
      />
    </Flex>
  )
}

const FahrenheitInput = () => {
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom)
  return (
    <Flex direction="column">
      <Label htmlFor="fahrenheit">Fahrenheit</Label>
      <Input
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
        id="fahrenheit"
      />
    </Flex>
  )
}

const TemperatureConverter: FC = () => {
  return (
    <Flex
      css={{
        marginBottom: "$base",
        border: "1px solid $hi-text",
        borderRadius: "$md",
        padding: "$base",
      }}
      as="article"
      direction="column"
      gap={5}
    >
      <Heading as="h2">Temperature converter</Heading>
      <Flex direction="column" gap={5}>
        <CelsiusInput />
        <FahrenheitInput />
      </Flex>
    </Flex>
  )
}

export default TemperatureConverter
