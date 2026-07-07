import styles from "./PostNew.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function PostNew({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  let navigate = useNavigate();
  // 등록 버튼 누르면 제출되면서 동작
  const handleSubmit = e => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    if (!trimmedTitle || !trimmedContent) {
      alert("제목과 내용 모두를 입력하세요.");
      return;
    }
    const newId = onCreate({ title: title, content: content });
    navigate(`/post/${newId}`);
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
