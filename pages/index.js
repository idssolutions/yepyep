import Head from "next/head";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>yepyeplabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-4 font-heading text-9xl leading-tight">Welcome, head to your client dashboard, by clicking below:</h1>
      <Link className="font-bold text-green-600 hover:text-green-700" href="/dashboard">Client Dashboard</Link>
    </>
        );
}
