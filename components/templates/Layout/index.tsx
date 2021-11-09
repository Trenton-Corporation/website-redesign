import Head from "next/head";

import Header from "components/organisms/Header";

export default function Layout(props: { title?: string }): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {props.title ||
            "Trenton Corporation | High-Quality Anticorrosion Materials"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
      <footer></footer>
    </>
  );
}
