import Head from "next/head";
import MainPageContainer from "components/MainPage/MainPageContainer/MainPageContainer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageContainer />
    </div>
  );
}
