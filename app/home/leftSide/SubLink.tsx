import style from "../page.module.css";

export default function SubLink() {
  return (
    <div className={style.linkArea}>
      <ul>
        <li className={style.active}>Introduce</li>
        <li>Porfolio</li>
      </ul>
    </div>
  );
}
