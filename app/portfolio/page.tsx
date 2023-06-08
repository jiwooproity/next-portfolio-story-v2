import { getNotionApi } from "../apis/portfolioApi";
import style from "./page.module.css";

async function getPortfolios() {
  const res = await getNotionApi();
  return res.results;
}

export default async function portfolio() {
  const porfolios = await getPortfolios();

  return (
    <div className={style.porfolioWrapper}>
      {porfolios.map((porfolio) => (
        <div key={porfolio.id}>{porfolio.url}</div>
      ))}
    </div>
  );
}
