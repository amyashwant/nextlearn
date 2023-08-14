import React from "react";

const Post = ({ posts }) => {
  //   console.log(data);
  return (
    <>
      <div>{posts.title}</div>
      <div>{posts.id}</div>
      <div>{posts.body}</div>
      {/* {console.log("dfasdf")} */}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  // console.log(posts)
  const path = posts.map((post, i) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context)
  const { params } = context;
  // console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
