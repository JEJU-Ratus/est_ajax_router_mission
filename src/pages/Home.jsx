import { Link } from "react-router";
export default function Home({ posts }) {
  console.log(posts);
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
  return (
    <section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      <h3>최신 글</h3>
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
