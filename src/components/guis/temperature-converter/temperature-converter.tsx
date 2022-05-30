import { FC } from "react"

import Flex from "src/shared/flex"
import Heading from "src/shared/heading"
import Label from "src/shared/label"
import Input from "src/shared/input"

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
        <Flex direction="column">
          <Label htmlFor="celsius">Celsius</Label>
          <Input id="celsius" />
        </Flex>

        <Flex direction="column">
          <Label htmlFor="fahrenheit">Fahrenheit</Label>
          <Input id="fahrenheit" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default TemperatureConverter
