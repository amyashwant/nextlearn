import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const BlogSlug = () => {
  const router = useRouter();
  return (
    <>
      <div>this is the {router.query.blog_slug}</div>
      <h1>
        <Link href="title-1/images/1" replace>
          Image 1
        </Link>
      </h1>
      <h1>
        <Link href="title-2/images/2">Image 2</Link>
      </h1>
    </>
  );
};

export default BlogSlug;
