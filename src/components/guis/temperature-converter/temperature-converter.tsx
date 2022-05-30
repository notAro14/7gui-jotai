import { FC } from "react"

import Flex from "src/shared/flex"
import Heading from "src/shared/heading"

const TemperatureConverter: FC = () => {
  return (
    <Flex as="article">
      <Heading as="h2">Temperature converter</Heading>
    </Flex>
  )
}

export default TemperatureConverter
