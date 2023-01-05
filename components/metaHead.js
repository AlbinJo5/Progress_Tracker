import Head from 'next/head'
import { useRouter } from 'next/router'

export default function MetaHead({ pageMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Progress Tacker',
    description: 'Progress tracker for your projects',
    type: 'website',
    
    ...pageMeta
  }
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:sitename" content={"Packult"} />
      {
        meta.date && <meta property="article:published_time" content={meta.date} />
      }
    </Head>
  )
}
