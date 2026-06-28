import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout({ loaded }) {
  // console.log(loaded);
  return (
    <div>
      <Header />
      {loaded ? <Outlet /> : <p>로딩 중...</p>}
    </div>
  );
}
