import style from "./page.module.css";
import { Background } from "../components";

export default function Home() {
  const title = "So Jiwoo" as const;
  const introduce = "Front-End Developer" as const;

  return (
    <Background>
      <div className={style.homeWrapper}>
        <div className={style.left}>
          <h1 className={style.title}>{title}</h1>
          <h2 className={style.introduce}>{introduce}</h2>
        </div>
        <div className={style.right}></div>
      </div>
    </Background>
  );
}
