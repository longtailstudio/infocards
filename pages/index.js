import Head from 'next/head'
import cheerio from 'cheerio'

export default function Home({infobox}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>


        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          

          {/* <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a> */}

            <table className="infobox" dangerouslySetInnerHTML={{__html: infobox}} />
            
          

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://semantics.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Semantics.  
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {

  return {
    props: {
      infobox: '',
    },
    revalidate: 86400
  }
}
