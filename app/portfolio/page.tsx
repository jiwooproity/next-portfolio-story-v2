import moment from "moment";

import style from "./page.module.css";

import { NotionResultsIF, getNotionApi } from "../apis/portfolioApi";
import Image from "next/image";

interface NotionSortingIF {
  page_size: number;
  sorts: [
    {
      property: string;
      direction: string;
    }
  ];
}

async function getPortfolio() {
  const convert = (results: NotionResultsIF) => {
    const { properties, cover } = results;

    return {
      id: results.id,
      title: properties.Title.title[0].text.content,
      description: properties.Description.rich_text[0].text.content,
      stack: properties.Tag.multi_select,
      start: properties.Date.date.start,
      end: properties.Date.date.end ?? moment(new Date()).format("YYYY-MM-DD"),
      thumbnail: cover.file.url,
      domain: properties.Domain.url,
      notion: results.url,
    };
  };

  const body: NotionSortingIF = {
    page_size: 15,
    sorts: [{ property: "Date", direction: "descending" }],
  };

  const data = await getNotionApi({ body });
  const convertData = data.results.map(convert);
  return convertData;
}

export default async function portfolio() {
  const portfolios = await getPortfolio();

  return (
    <div className={style.portfolioWrapper}>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className={style.portfolioInfoBox}>
          <div className={style.portfolioLeftArea} title="노션 정보 보러가기">
            <a href={portfolio.notion} target="_blank">
              <Image
                src={portfolio.thumbnail}
                width={250}
                height={140}
                alt="thumbnail"
              />
            </a>
          </div>
          <div className={style.portfolioRightArea}>
            <h1 className={style.portfolioTitle}>{portfolio.title}</h1>
            <span className={style.portfolioDescription}>
              {portfolio.description}
            </span>
            <div className={style.portfolioTagBox}>
              {portfolio.stack.map((tag) => (
                <span key={tag.id} className={style.portfolioTag}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
