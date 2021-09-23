import {useRouter} from 'next/router'



function Blog({ posts }) {
    
  return (
    <ul>
      {/* {posts.map((post) => (
        <li>{post.id}</li>
      ))} */}

      blog
    </ul>
  );
}

export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
  return {
    props: {
      posts: 'hi',
    },
  };
}

export default Blog;
