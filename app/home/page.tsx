import Introduce from "./rightSide/Introduce.";
import Title from "./leftSide/Title";
import style from "./page.module.css";
import SubLink from "./leftSide/SubLink";

export default function Home() {
  return (
    <div className={style.homeWrapper}>
      <div className={style.left}>
        <Title />
        <SubLink />
      </div>
      <div className={style.right}>
        <Introduce />
      </div>
    </div>
  );
}
