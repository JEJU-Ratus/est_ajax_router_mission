import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import PostDetail from "./pages/PostDetail";
import PostEdit from "./pages/PostEdit";
// import PostNew from "./pages/PostNew";
// import Header from "./components/Header";

function App() {
  // fetch 조회 완료 유무 : loaded, fetch data 저장 : posts
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function postData() {
      try {
        const res = await fetch("./data/blog.json");
        if (!res.ok) throw new Error("로딩에 실패했습니다.");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    }

    postData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/:id" element={<PostDetail posts={posts} />} />
          <Route path="posts/:id/edit" element={<PostEdit />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
