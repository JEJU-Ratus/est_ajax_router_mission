import styles from "./PostNew.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function PostEdit({ posts, onUpdate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();

  console.log(posts);
  const _post = posts.find(post => post.id === Number(id));

  useEffect(() => {
    if (!_post) return;
    // eslint-disable-next-line
    setTitle(_post.title);
    setContent(_post.content);
  }, [_post]);

  if (!_post) {
    return (
      <>
        <h2>에러</h2>
        <p>존재하지 않는 게시물입니다.</p>
        <Link to="/">홈으로 이동</Link>
      </>
    );
  }

  // 등록 버튼 누르면 제출되면서 동작
  const handleSubmit = e => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (!trimmedTitle || !trimmedContent) {
      alert("제목과 내용 모두를 입력하세요.");
      return;
    }
    onUpdate(Number(id), { title: title, content: content });
    navigate(`/post/${id}`);
  };
  return (
    <>
      <h2>글 작성</h2>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="내용"
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button>등록</button>
      </form>
    </>
  );
}
