import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostNew from "./pages/PostNew";
import Header from "./components/Header";
async function postData() {
  try {
    const res = await fetch("./data/blog.json");
    if (!res.ok) throw new Error("로딩에 실패했습니다.");
    const posts = await res.json();
    // console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
postData();
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/write" element={<PostNew />} />
      </Routes>
    </>
  );
}

export default App;
