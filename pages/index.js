import React from "react";
import Link from "next/link";
const index = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      home page
      <ul>
        {posts.map((post, i) => {
          return (
            <li key={post.id}>
              <Link href={`post/${post.id}`}> {post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  // console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
