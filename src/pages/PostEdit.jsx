import "../App.css";
import { useParams } from "react-router";
export default function PostEdit({ posts }) {
  let { id } = useParams();
  const _post = posts.find(post => post.id === Number(id));
  console.log(_post);
  return (
    <section>
      <h2>글 수정</h2>
      <div>
        <input type="text" placeholder="제목" value={_post.title} className="inputTitle" />
      </div>
      <div>{/* <textarea name="" id=""></textarea> */}</div>
    </section>
  );
}
