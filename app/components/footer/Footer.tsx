import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerWrapper}>
        <span className={style.footerDescription}>
          EMAIL : jiwooproity@naver.com
        </span>
      </div>
    </footer>
  );
}
