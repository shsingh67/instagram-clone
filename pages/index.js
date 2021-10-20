import Head from "next/head";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
      </Head>
      <Modal />
      <Feed />
    </div>
  );
}
