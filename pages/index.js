import Meta from "@components/Meta";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Meta
        pageMeta={{
          title: "",
          description: "",
        }}
      />
      <div className="container mx-auto min-h-screen max-w-4xl bg-gray-800 p-20 text-gray-100">
        <main className="mx-auto flex flex-col items-center justify-center text-lg">
          <h1 className="mb-8 text-4xl font-semibold ">
            Next.js Tailwind Starter
          </h1>
          <p className="mb-8 text-xl">This starter comes with:</p>
          <ul className="space-y-4">
            <li>Next.js</li>
            <li>Next SEO</li>
            <li>Tailwind</li>
            <li>Tailwind Typography</li>
            <li>Prettier Plugin Tailwind</li>
          </ul>
        </main>
      </div>
    </>
  );
}
