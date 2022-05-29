// PACKAGES
import Head from "next/head"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/shared/heading"
import Button from "src/shared/button"
import Label from "src/shared/label"
import Input from "src/shared/input"
import Flex from "src/shared/flex"

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
            <Flex direction="column">
              <Label htmlFor="count">Counter value</Label>
              <Input value={0} id="count" readOnly type="number" />
            </Flex>
            <Button fullWidth>Count</Button>
          </Flex>
        </Flex>
      </main>
    </>
  )
}

export default IndexPage
