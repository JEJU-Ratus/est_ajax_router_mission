import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";

function App() {
  // fetch 조회 완료 유무 : loaded, fetch data 저장 : posts
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // let alive = true; // 상품조회 시작.. 일중
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("/data/blog.json", { signal: controller.signal });
        if (!res.ok) throw new Error("로딩에 실패했습니다.");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
        setPosts([]); //에러시 목록 비움
      } finally {
        setLoaded(true);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    }; //정리함수
  }, []);
  // 삭제버튼 누르면 동작
  const onDelete = _id => {
    setPosts(prev => prev.filter(post => post.id !== _id));
  };
  // 작성(write)페이지 등록 시 불러올 id
  const newId = useMemo(() => {
    const maxId = posts.reduce((acc, current) => {
      return Math.max(acc, current.id);
    }, 0);
    return maxId + 1;
  }, [posts]);
  // 작성 페이지 등록 시 동작
  const onCreate = ({ title, content }) => {
    const newPost = {
      title: title,
      content: content,
      id: newId,
      createAt: new Date().toISOString().slice(0, 10),
    };
    setPosts(prev => [...prev, newPost]);
    return newPost.id;
  };
  // 수정 페이지
  const onUpdate = (_id, { title, content }) => {
    setPosts(prev => prev.map(p => (p.id === _id ? { ...p, title: title, content: content } : p)));
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="post/:id" element={<PostDetail posts={posts} onDelete={onDelete} />} />
          <Route path="post/edit/:id" element={<PostEdit posts={posts} onUpdate={onUpdate} />} />
          <Route path="post/new" element={<PostNew posts={posts} onCreate={onCreate} />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
