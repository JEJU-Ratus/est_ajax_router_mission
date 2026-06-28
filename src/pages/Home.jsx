export default function Home() {
  return (
    <section>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      <h3>최신 글</h3>
      <nav>
        <ul>
          <li>
            <a href="">React Router 시작하기</a>
            <small>&#40;2025-01-01&#41;</small>
          </li>
          <li>
            <a href="">Vite로 React 프로젝트 생성하기</a>
            <small>&#40;2025-01-02&#41;</small>
          </li>
          <li>
            <a href="">useParams로 상세 페이지 만들기</a>
            <small>&#40;2025-01-03&#41;</small>
          </li>
        </ul>
      </nav>
    </section>
  );
}
