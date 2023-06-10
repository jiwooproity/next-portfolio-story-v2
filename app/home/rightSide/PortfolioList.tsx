// 홈 화면 포트폴리오 리스트 출력 준비
import style from "../page.module.css";

interface PortfolioDetailIF {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
}

interface PortfolioPropsType {
  data: PortfolioDetailIF[];
}

export default function PorfolioList({ data }: PortfolioPropsType) {
  return (
    <div id="portfolio" className={`right-area ${style.portfolioArea}`}>
      <h2 className={style.title}>Portfolio</h2>
      {data.map((item: PortfolioDetailIF) => (
        <>
          <p className={style.notionTitle}>{item.title}</p>
          <p className={style.notionDescription}>{item.description}</p>
        </>
      ))}
    </div>
  );
}
