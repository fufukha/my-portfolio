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
        href='https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&family=Source+Code+Pro:wght@500;700;900&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <title>{title}</title>
    </Head>
  )
}

export default Meta
