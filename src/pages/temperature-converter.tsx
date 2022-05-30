import type { NextPage } from "next"
import Head from "next/head"

import Heading from "src/shared/heading"
import TemperatureConverter from "src/components/guis/temperature-converter"

const TemperatureConverterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Task 2 - Temperature Converter</title>
      </Head>
      <Heading as="h1" css={{ mb: "$base" }}>
        Task 2
      </Heading>
      <TemperatureConverter />
    </>
  )
}

export default TemperatureConverterPage
