import {SessionProvider} from "next-auth/react"
import {Component, ComponentProps} from "react"

type Props = {
  Component: any,
  pageProps: ComponentProps<any>
}

export const App:React.FC<Props> = ({
  Component,
  pageProps: { session, ...pageProps}
}:Props) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}

export default App