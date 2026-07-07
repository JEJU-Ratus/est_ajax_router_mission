import { useParams, Link } from "react-router";
export default function PostDetail({ posts }) {
  const { id } = useParams();
  console.log(posts);
  const _post = posts.find(post => post.id === Number(id));
  console.log(_post);
  return (
    <>
      <h2>{_post.title}</h2>
      <small>{_post.createdAt}</small>
      <p>{_post.content}</p>
      <div className="controls">
        <Link to={`post/edit/${_post.id}`}>수정하기</Link>
        <button type="button">삭제하기</button>
      </div>
    </>
  );
}
