import Head from 'next/head'
import cheerio from 'cheerio'

// export const config = { amp: true }

export default function Home({title, infobox, navbox}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          
          <table className="infobox" dangerouslySetInnerHTML={{__html: infobox}} />
            
        </div>

        {/* <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          
          <table className="navbox" dangerouslySetInnerHTML={{__html: navbox}} />
            
        </div> */}

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://semantics.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Semantics
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps({params}) {

  const res = await fetch(`https://wiki.metad.workers.dev/wiki/${params.topic}`)
  
  const $ = cheerio.load(await res.text())
  const title = $('#firstHeading').text()
  const infobox = $('table.infobox').html()  //.replaceAll('href="/wiki/','href="/')
  const navbox = $('div.navbox').html()
  console.log(title)

  return {
    props: {
      title,
      infobox,
      navbox,
    },
    revalidate: 86400
  }
}

export async function getStaticPaths() {
  return {
    paths: [ ],
    fallback: 'blocking'
  }
}