import moment from "moment";

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
  domain: string;
}

interface PortfolioPropsType {
  data: PortfolioDetailIF[];
}

export default function PorfolioList({ data }: PortfolioPropsType) {
  return (
    <div id="portfolio" className={`right-area ${style.portfolioArea}`}>
      {data.map((item) => (
        <a key={item.id} href={item.domain} target="_blank">
          <div className={style.projectArea}>
            <div className={style.projectDate}>
              <span>{moment(item.start).format("YYYY.MM.DD")}</span>
            </div>
            <div className={style.projectInfoArea}>
              <h2 className={style.projectTitle}>{item.title}</h2>
              <span className={style.projectDescription}>
                {item.description}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
