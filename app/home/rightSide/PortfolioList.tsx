// 홈 화면 포트폴리오 리스트 출력 준비
import Image from "next/image";
import style from "../page.module.css";
import { NotionMultiSelectIF } from "../../apis/portfolioApi";

interface PortfolioDetailIF {
  id: string;
  title: string;
  description: string;
  stack: NotionMultiSelectIF[];
  start: string;
  end: string;
  thumbnail: string;
}

interface PortfolioPropsType {
  data: PortfolioDetailIF[];
}

export default function PorfolioList({ data }: PortfolioPropsType) {
  return (
    <div id="portfolio" className={`right-area ${style.portfolioArea}`}>
      {data.map((item) => (
        <div key={item.id} className={style.projectArea}>
          <Image
            className={style.projectImage}
            src={item.thumbnail}
            width={100}
            height={56}
            alt={`${item.title}`}
          />
          <div className={style.projectInfoArea}>
            <h2 className={style.projectTitle}>{item.title}</h2>
            <span className={style.projectDescription}>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
