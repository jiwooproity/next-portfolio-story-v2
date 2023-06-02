import JsViewBox from "./JsViewBox";
import JsViewHeader from "./JsViewHeader";

export default function Home() {
  return (
    <div className="main-container">
      <JsViewBox>
        <JsViewHeader />
      </JsViewBox>
    </div>
  )
}
