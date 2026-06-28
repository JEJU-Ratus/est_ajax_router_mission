import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Posts from "./pages/Posts";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
// import PostNew from "./pages/PostNew";
// import Header from "./components/Header";

function App() {
  // fetch 조회 완료 유무 : loaded, fetch data 저장 : posts
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

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
  console.log(posts);
  console.log(loaded);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
