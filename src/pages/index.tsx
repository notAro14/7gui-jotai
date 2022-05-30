// PACKAGES
import Head from "next/head"
import NextLink from "next/link"
// TYPES & CONSTANTS
import type { NextPageWithLayout } from "src/types"
// COMPONENTS
import Heading from "src/shared/heading"
import Flex from "src/shared/flex"
import * as Layout from "src/shared/layouts"
import Link from "src/shared/link"

const TASK_GUI_LINKS = [
  {
    href: "/counter",
    label: "Task 1 - Counter",
  },
  {
    href: "/temperature-converter",
    label: "Task 2 - Temperature Converter",
  },
  {
    href: "/flight-booker",
    label: "Task 3 - Flight Booker",
  },
]

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>7 GUIs in Jotai</title>
      </Head>

      <Heading as="h1" css={{ mb: "$base" }}>
        7 GUIs in Jotai
      </Heading>
      <Flex as="nav" direction="column">
        {TASK_GUI_LINKS.map(({ href, label }) => (
          <NextLink key={href} href={href} passHref>
            <Link>{label}</Link>
          </NextLink>
        ))}
      </Flex>
    </>
  )
}

IndexPage.getLayout = (page) => {
  return (
    <Layout.Global as="section">
      <main>{page}</main>
    </Layout.Global>
  )
}

export default IndexPage
