import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
// import PostDetail from "./pages/PostDetail";
// import PostNew from "./pages/PostNew";
// import Header from "./components/Header";

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
  const onDelete = _id => {
    setPosts(prev => prev.filter(post => post.id !== _id));
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="post/:id" element={<PostDetail posts={posts} onDelete={onDelete} />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
