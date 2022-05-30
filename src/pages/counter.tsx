import type { NextPage } from "next"
import Head from "next/head"

import Heading from "src/shared/heading"
import Counter from "src/components/guis/counter"

const CounterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Task 1 - Counter</title>
      </Head>
      <Heading as="h1" css={{ mb: "$base" }}>
        Task 1
      </Heading>
      <Counter />
    </>
  )
}

export default CounterPage
