import "./App.css";
import "./SecretPage.css";
import "./mdpage.css";

import COOPER21 from "../assets/images/mdList/mdlist3.png";
import COOPER24 from "../assets/images/cooperWorks/cooper24_2.png";
import COOPER22 from "../assets/images/cooperWorks/cooper22_2.png";
import MDLIST1 from "../assets/images/mdList/mdlist1.png";
import MDLIST2 from "../assets/images/mdList/mdlist2.png";

export default function MdPage() {
  return (
    <div className="pc-layout">
      <main className="pc-main" role="region" aria-live="polite">
        <h1>MD LIST</h1>
        <section className="goods-section">
          <div className="goods-divider" />

          <h3>족자봉</h3>

          <div className="img-wrap">
            <img src={COOPER21} className="goods-image4" />
            <div className="img-blocker" />
          </div>

          <h5>돌 DD님 협력</h5>
          <div className="goods-divider" />
        </section>

        <section className="goods-section">
          <div className="goods-divider" />

          <h3>회전 아크릴 스탠드</h3>

          <div className="img-wrap">
            <img src={COOPER24} className="goods-image4" />
            <div className="img-blocker" />
          </div>

          <h5>른짝님 협력</h5>
          <div className="goods-divider" />
        </section>

        <section className="goods-section">
          <div className="goods-divider" />

          <h3>아크릴 스탠드(일반)</h3>

          <div className="img-wrap">
            <img src={COOPER22} className="goods-image4" />
            <div className="img-blocker" />
          </div>

          <h5>잡곡밥님 협력</h5>
          <div className="goods-divider" />
        </section>

        <section className="goods-section">
          <div className="goods-divider" />

          <h3>아크릴 마그넷 세트</h3>

          <div className="img-wrap">
            <img src={MDLIST1} className="goods-image3" />
            <div className="img-blocker" />
          </div>

          <h5>온리전 제작</h5>
          <div className="goods-divider" />
        </section>

        <section className="goods-section">
          <div className="goods-divider" />

          <h3>아크릴 뱃지</h3>

          <div className="img-wrap">
            <img src={MDLIST2} className="goods-image2" />
            <div className="img-blocker" />
          </div>

          <h5>온리전 제작</h5>
          <div className="goods-divider" />
        </section>
      </main>
    </div>
  );
}
