import { useParams, Link, useNavigate } from "react-router";
export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  let navigate = useNavigate();

  console.log(posts);
  const _post = posts.find(post => post.id === Number(id));
  if (!_post) {
    return (
      <>
        <h2>에러</h2>
        <p>존재하지 않는 게시물입니다.</p>
        <Link to="/">홈으로 이동</Link>
      </>
    );
  }
  console.log(_post);
  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요?")) {
      onDelete(_post.id);
      navigate("/posts");
    }
  };
  return (
    <>
      <h2>{_post.title}</h2>
      <small>{_post.createdAt}</small>
      <p>{_post.content}</p>
      <div className="controls">
        <Link to={`post/edit/${_post.id}`}>수정하기</Link>
        <button type="button" onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </>
  );
}
