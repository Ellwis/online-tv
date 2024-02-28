import { Html, Main, NextScript, Head } from 'next/document'
import Link from 'next/link';
import Script from 'next/script';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Link href={'/ayas.png'} /> */}
        <title>International online tv</title>
        <meta
          name="description"
          content="تماشای آنلاین انیمیشن ، فیلم ، سریال ، و مسابقات ورزشی"
        />
        {/* <link rel='icon' href='/ayas.png' sizes='any' type='image'/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
