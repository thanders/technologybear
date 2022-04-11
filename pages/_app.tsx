
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import 'tailwindcss/tailwind.css'
import {MdxComponentsProvider} from '../context/mdxContext';

function MyApp({ Component, pageProps }: AppProps) {
  return <MdxComponentsProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
  body {
    background: #E7EBF0;
  }
`}</style>
  </MdxComponentsProvider>
}

export default MyApp
