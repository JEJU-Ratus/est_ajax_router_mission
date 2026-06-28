import { useParams, Link } from "react-router";
export default function PostDetail({ posts }) {
  let { id } = useParams();
  console.log(posts);
  let _post = posts.find(post => post.id === Number(id));
  console.log(_post);
  return (
    <section>
      <h2>{_post.title}</h2>
      <small>{_post.createdAt}</small>
      <p>{_post.content}</p>
      <Link to="edit">수정하기</Link>
      <button type="button">삭제하기</button>
    </section>
  );
}
