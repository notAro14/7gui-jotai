// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/shared/heading"
import Counter from "src/components/guis/counter"

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>7 GUIs in Jotai</title>
      </Head>

      <main>
        <Heading as="h1" css={{ mb: "$base" }}>
          7 GUIs in Jotai
        </Heading>
        <Counter />
      </main>
    </>
  )
}

export default IndexPage
