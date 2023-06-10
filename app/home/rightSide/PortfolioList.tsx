// 홈 화면 포트폴리오 리스트 출력 준비
export default function PorfolioList({ data }: { data: any }) {
  console.log(data);

  return (
    <div
      id="portfolio"
      className="right-area"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {data.map((item) => (
        <span style={{ color: "white" }}>{item.title}</span>
      ))}
    </div>
  );
}
