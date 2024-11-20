import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
        />
        <link rel="icon" href={``} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
