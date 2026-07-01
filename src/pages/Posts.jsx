import { Link } from "react-router";
export default function Posts({ posts }) {
  console.log(posts);
  const latestPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <section>
      <h2>글 목록</h2>
      {posts.length === 0 ? (
        <>
          <p>글이 없습니다.</p>
        </>
      ) : (
        <ul>
          {latestPosts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`posts/${post.id}`}>{post.title}</Link>
                <small>&#40;{post.createdAt}&#41;</small>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

// import { Link } from "react-router";

// export default function Posts({ posts }) {
//   return (
//     <section>
//       <h2>글 목록</h2>
//       {posts.map(post => {
//         return (
//           <li key={post.id}>
//             <Link to={`${post.id}`}>{post.title}</Link>
//             <small>{post.createdAt}</small>
//           </li>
//         );
//       })}
//     </section>
//   );
// }
