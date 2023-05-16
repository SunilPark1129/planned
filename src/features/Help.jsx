import React from "react";

export default function Help({ closeModal }) {
  return (
    <section className="modal">
      <header>
        <h4>Helper</h4>
      </header>
      <ol className="modal__text-box">
        <li>메뉴 첫번째 심볼을 클릭하여 아이템을 여러개 추가하세요.</li>
        <li>그리고 그 동시에 카테고리도 만드세요.</li>
        <li>PLANNED에서 추가한 아이템을 확인할 수 있습니다.</li>
        <li>추가된 아이템을 오른쪽으로 드레그하세요.</li>
        <li>
          메뉴에서 4번째를 클릭하여 관련된 아이템을 카테고리에 추가하세요.
        </li>
        <li>메뉴에서 2번째 심볼을 클릭하여 리스트에서 아이템을 지우세요.</li>
        <li>메뉴에서 3번째 심볼을 클릭하여 리스트의 이름을 바꾸세요.</li>
      </ol>
      <div className="modal__text-box">
        <p>자신만의 PLANNED 리스트를 만들어 보세요.</p>
        <p>
          유저들의 간편한 이용을 위해 이 앱은 손가락을 몇번 흔드는 것만으로도 이
          앱을 쉽게 사용할 수 있도록 개발되었습니다.
        </p>
        <p>개발자 - Sunil Park</p>
      </div>
      <div className="modal__btn-box">
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
