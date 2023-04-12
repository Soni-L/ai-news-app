import Head from "next/head";
import useLocalStorageStringArray from "@/hooks/useLocalStorageStringArray";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useLocalStorageStringArray('tags');

  const fetchNewsArticles = async () => {
    // try {
    //   const response = await fetch("http://127.0.0.1:4000/news");
    //   const jsonData = await response.json();
    //   setArticles(jsonData?.articles);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {articles?.map((article: any) => (
            <div style={{ padding: '10px', boxShadow: '1px 1px', borderRadius: '8px' }}>
              <h3 key={article?.publishedAt}>{article?.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
