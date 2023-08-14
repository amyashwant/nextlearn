import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Blog = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("blog/title-3");
  };

  return (
    <>
      {/* <h1>blog</h1> */}
      <h1>
        <Link href="blog/title-1" replace>
          Title 1
        </Link>
      </h1>
      <h1>
        <Link href="blog/title-2">Title 2</Link>
      </h1>
      <button onClick={clickHandler}>
        {/* <Link href="blog/title-3">Title 3</Link> */}
        Title 3
      </button>
      <h1>
        <Link href="blog/title-4">Title 4</Link>
      </h1>
      <h1>
        <Link href="blog/title-5">Title 5</Link>
      </h1>
    </>
  );
};

export default Blog;
