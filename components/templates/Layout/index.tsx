import Head from "next/head";

import Header from "components/organisms/Header";

export default function Layout(props: {
  title?: string;
  children?: React.ReactChild | React.ReactChild[];
}): JSX.Element {
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
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
