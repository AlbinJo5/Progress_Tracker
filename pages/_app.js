import '../styles/globals.scss'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>
}

export default MyApp
