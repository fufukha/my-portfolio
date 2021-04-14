import Head from 'next/head'

type MetaProps = {
  title?: string
  keywords?: string
  description?: string
}

const Meta = ({
  title = 'Kamile Portfolio',
  keywords = 'resume, hire, web development, programming',
  description = "Learn about Kamile's journey in Fron-End development",
}: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto+Mono:wght@500;700&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
    </Head>
  )
}

export default Meta
