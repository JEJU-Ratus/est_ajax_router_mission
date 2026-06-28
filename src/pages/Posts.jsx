import { Link } from "react-router";

export default function Posts({ posts }) {
  return (
    <section>
      <h2>글 목록</h2>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
            <small>{post.createdAt}</small>
          </li>
        );
      })}
    </section>
  );
}
