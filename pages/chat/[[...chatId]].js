import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[20%_1fr]">
        <div>sidebar</div>
        <div className="bg-gray-700 flex flex-col">
        <div className="flex-1">chat window</div>
        <footer className="bg-gray-800 p-10">Footer</footer>
        </div>
      </div>
    </>
  );
}
 