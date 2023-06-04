import style from "../page.module.css";

export default function Title() {
  return (
    <>
      <h1 className={style.title}>So Jiwoo</h1>
      <h2 className={style.introduce}>Front-End Developer</h2>
      <p className={style.description}>
        1년 차 프론트 엔드 개발자 소지우입니다.
      </p>
    </>
  );
}
