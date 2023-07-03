import Head from 'next/head';
import styles from '../styles/Home.module.css';
import main from '../styles/Main.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HapiSTAX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={main.logo}>
          <span className={main.hapi}>Hapi</span>
          <span className={main.stax}>STAX</span>
        </h1>        
        <div className={main.info}>
          <h2 className={main.info}>ROBIN KING</h2>
          <span>. </span>
          <h2>WEB DESIGN & DEVELOPMENT</h2>
          <span>.</span>
          <h3>BASED IN HARPENDEN <span>, </span> HERTS&nbsp;.</h3>
        </div>

      <p className={main.info}>staxhappy<span className={main.at}>@</span>gmail.com</p>     
    </header>

    <main>
      <div className={main.portfolio}>

      <div className={main['portfolio-entry']}>
          <h4>elizabethcoventry.com</h4>
          <Image
            src='/images/ec_website.png'
            width={600}
            height={319}
          />
          <p>TECH STACK </p>
          <p>FRONTEND: NEXT JS / REACT / AWS AMPLIFY</p>
          <p>BACKEND: AWS API GATEWAY / AWS LAMBDA / AWS DYNAMO DB</p>
          <p>STATUS: IN DEVELOPMENT</p>
        </div>

        <div className={main['portfolio-entry']}>
          <h4>around-britain.uk</h4>
          <Image
            src='/images/ab_website.png'
            width={600}
            height={319}
          />          <p>TECH STACK </p>
          <p>FRONTEND: NEXT JS / REACT / AWS AMPLIFY</p>
          <p>BACKEND: AWS API GATEWAY / AWS LAMBDA / AWS DYNAMO DB</p>
          <p>STATUS: IN DEVELOPMENT</p>
        </div>

      </div>      
    </main>

    <footer>
      &copy; 2023 Robin King
    </footer>

      {/* <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
