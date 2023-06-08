import Introduce from "./rightSide/Introduce.";
import Title from "./leftSide/Title";
import style from "./page.module.css";
import SubLink from "./leftSide/SubLink";
import PorfolioList from "./rightSide/PortfolioList";
import Contact from "./leftSide/Contact";

export default function Home() {
  return (
    <div className={style.homeWrapper}>
      <div className={style.left}>
        <Title />
        <SubLink />
        <Contact />
      </div>
      <div className={style.right}>
        <Introduce />
        <PorfolioList />
      </div>
    </div>
  );
}
