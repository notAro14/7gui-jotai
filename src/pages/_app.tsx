// PACKAGES
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"
import NextLink from "next/link"
// TYPES
import type { AppType } from "next/dist/shared/lib/utils"
import type { AppPropsWithLayout } from "src/types"
// CSS
import "src/styles/reset.css"
// COMPONENTS
import * as Layout from "src/shared/layouts"
import Flex from "src/shared/flex"
import Link from "src/shared/link"

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return (
        <Layout.Global as="section">
          <Flex as="main" direction="column">
            {page}
            <NextLink passHref href="/">
              <Link>Go Back To Home</Link>
            </NextLink>
          </Flex>
        </Layout.Global>
      )
    })

  const [queryClient] = useState(() => new QueryClient())

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}) as AppType

export default MyApp
