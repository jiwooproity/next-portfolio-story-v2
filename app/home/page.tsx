import moment from "moment";

import style from "./page.module.css";

import Introduce from "./rightSide/Introduce.";
import Title from "./leftSide/Title";
import SubLink from "./leftSide/SubLink";
import PorfolioList from "./rightSide/PortfolioList";
import Contact from "./leftSide/Contact";

import {
  NotionResultsIF,
  NotionSortIF,
  getNotionApi,
} from "../apis/portfolioApi";

async function getPortfolio() {
  const convert = (results: NotionResultsIF) => {
    const { properties } = results;

    return {
      id: results.id,
      title: properties.Title.title[0].text.content,
      description: properties.Description.rich_text[0].text.content,
      start: properties.Date.date.start,
      end: properties.Date.date.end ?? moment(new Date()).format("YYYY-MM-DD"),
    };
  };

  const body: NotionSortIF = {
    page_size: 15,
    sorts: [{ property: "Date", direction: "descending" }],
  };

  const data = await getNotionApi({ body });
  const convertData = data.results.map(convert);
  return convertData;
}

export default async function Home() {
  const porfolios = await getPortfolio();

  return (
    <div className={style.homeWrapper}>
      <div className={style.left}>
        <Title />
        <SubLink />
        <Contact />
      </div>
      <div className={style.right}>
        <Introduce />
        <PorfolioList data={porfolios} />
      </div>
    </div>
  );
}
