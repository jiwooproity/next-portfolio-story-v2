import moment from "moment";

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
      {data.map((item: PortfolioDetailIF) => (
        <a key={item.id}>
          <div className={style.portfolioBox}>
            <span className={style.portfolioDate}>
              {moment(item.start).format("YYYY.MM.DD")}
            </span>
            <div className={style.portfolioContent}>
              <h1 className={style.notionTitle}>{item.title}</h1>
              <span className={style.notionDescription}>
                {item.description}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
