import { getNotionApi } from "../apis/porfolioApi";
import style from "./page.module.css";

async function getPortfolios() {
  const res = await getNotionApi();
  return res.results;
}

export default async function porfolio() {
  const porfolios = await getPortfolios();
  console.log(porfolios);

  return (
    <div className={style.porfolioWrapper}>
      {porfolios.map((porfolio) => (
        <div key={porfolio.id}>{porfolio.url}</div>
      ))}
    </div>
  );
}
