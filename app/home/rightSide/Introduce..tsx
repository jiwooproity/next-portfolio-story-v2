import style from "../page.module.css";

export default function Introduce() {
  return (
    <p className={style.description}>
      {`1년 차 프론트 엔드 개발자입니다.

        개발에 있어 `}
      <strong>{`꾸준함`}</strong>
      {`이 곧 개발자가 되기 위한 `}
      <strong>{`발걸음`}</strong>
      {`이라고 생각하고, 꾸준함을 통한 자기 발전에 큰 성취감을 느낍니다.

        무엇보다 사용자들에게 더 나은 솔루션, 사용자 경험을 제공하는 것이 프론트 엔드 개발자로서의 개발 목적이라고 생각합니다.
        
        언젠가 나의 코드를 보고 누군가 배움을 얻어가는 순간이 오면 좋겠다고 생각하며, 스스로의 자기 계발을 통해 자부심이 있는 코드를 만들어 보자는 목표가 있습니다.`}
    </p>
  );
}
