import {useRouter} from 'next/router'


function Posts({ posts }) {

  const router = useRouter();

  const {blogId} = router.query;

  return (
    <>
      <div>Posts page {blogId}</div>

     
    </>
  );
}



export default Posts;
