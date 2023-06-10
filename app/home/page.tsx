import moment from "moment";

import Introduce from "./rightSide/Introduce.";
import Title from "./leftSide/Title";
import style from "./page.module.css";
import SubLink from "./leftSide/SubLink";
import PorfolioList from "./rightSide/PortfolioList";
import Contact from "./leftSide/Contact";

import { getNotionApi } from "../apis/portfolioApi";

async function getPorfolioList() {
  const convertData = ({ properties }: any) => {
    return {
      title: properties.Title.title[0].text.content,
      description: properties.Description.rich_text[0].text.content,
      domain: properties.Domain.url,
      github: properties.GitHub.url,
      created: properties.Date.date.start,
      ended:
        properties.Date.date.end || moment(new Date()).format("YYYY-MM-DD"),
      tag: properties.Tag.multi_select,
      feature: properties.Feature.multi_select,
      progress: !properties.Date.date.end,
    };
  };

  const response = await getNotionApi();
  const porfolios = response.results.map(convertData);
  return porfolios;
}

export default async function Home() {
  const porfolios = await getPorfolioList();

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
