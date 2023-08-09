import store from '@/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {getLayout(

          <Component {...pageProps} />

        )}

      </Provider>
    </SessionProvider>
  )

  // return getLayout(

  //     <Provider store={store}>
  //       <SessionProvider session={session}>
  //       <Component {...pageProps} />
  //       </SessionProvider>
  //     </Provider>

  // )
}