const sites = ["Investing.com", "네이버페이 증권", "Yahoo Finance", "Finviz", "StockAnalysis", "Seeking Alpha"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ValueFinder 홈"><img src="/valuefinder-logo.png" alt="" /><span>ValueFinder</span></a>
        <nav aria-label="주요 메뉴"><a href="#how">동작 방식</a><a href="#install">설치 가이드</a><a className="nav-cta" href="#install">무료로 시작하기</a></nav>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> FINANCIAL WAYFINDER</p>
          <h1>찾는 재무정보까지,<br />헤매지 말고 <em>바로.</em></h1>
          <p className="hero-description">ValueFinder는 지금 보고 있는 금융 사이트를 읽고, 원하는 지표가 있는 메뉴로 안내합니다. 없다면 확인 가능한 다른 사이트까지 찾아드립니다.</p>
          <div className="hero-actions"><a className="button button-primary" href="#install">설치 방법 보기 <span aria-hidden="true">→</span></a><a className="text-link" href="#demo">60초 사용 가이드</a></div>
          <p className="microcopy">Chrome 확장 프로그램 · 로그인 없음 · 개인정보 수집 없음</p>
        </div>
        <div className="product-stage" aria-label="ValueFinder 사용 화면 예시">
          <div className="browser-bar"><span /><span /><span /><p>finance.yahoo.com / AAPL</p></div>
          <div className="finance-page" aria-hidden="true"><p className="tiny-label">APPLE INC.</p><div className="ticker-line"><b>AAPL</b><strong>226.34</strong><i>+1.28%</i></div><div className="chart-line" /></div>
          <div className="finder-panel">
            <div className="panel-brand"><img src="/valuefinder-logo.png" alt="" /><b>ValueFinder</b></div>
            <div className="demo-label">어떤 정보를 찾으시나요?</div><div className="search-box"><span>공매도</span><kbd>↵</kbd></div>
            <p className="result-kicker">이 사이트에서 찾았어요</p><h2>Statistics → Share Statistics</h2><p className="result-copy">Shares Short 항목을 화면에서 표시할 수 있습니다.</p><div className="mock-button">여기서 표시 <span>→</span></div>
          </div>
        </div>
      </section>
      <section className="site-strip" aria-label="지원 사이트"><p>6개 주요 금융 사이트 지원</p><ul>{sites.map((site) => <li key={site}>{site}</li>)}</ul></section>
      <section className="principle" id="how"><p className="section-number">01 / WAYFINDING</p><h2>검색 결과가 아니라,<br />도착할 경로를 알려줍니다.</h2><p>ValueFinder는 그럴듯한 주소를 추측하지 않습니다. 현재 화면을 확인하고, 가능한 다음 행동만 명확하게 제안합니다.</p></section>

      <section className="route-flow" aria-label="ValueFinder 동작 방식">
        <article><span>01</span><img className="feature-shot" src="/feature-current.png" alt="현재 화면의 공매도 항목을 강조한 ValueFinder 화면" /><h3>지금 화면에 있다면</h3><p>해당 위치로 스크롤한 뒤, 찾던 항목을 형광펜으로 정확히 짚어줍니다.</p></article>
        <article><span>02</span><img className="feature-shot" src="/feature-route.png" alt="다른 탭으로 이동하기 전 경로를 안내하는 ValueFinder 화면" /><h3>다른 메뉴에 있다면</h3><p>어떤 탭이나 페이지로 이동할지 먼저 알리고, 동의한 뒤 안내를 이어갑니다.</p></article>
        <article><span>03</span><img className="feature-shot" src="/feature-alternative.png" alt="대체 사이트를 제안하는 ValueFinder 화면" /><h3>그 사이트에 없다면</h3><p>없다는 사실을 분명히 말하고, 실제로 확인 가능한 다른 사이트를 제안합니다.</p></article>
      </section>

      <section className="proof">
        <div><strong>26</strong><span>재무 정보 개념</span></div><div><strong>6</strong><span>지원 금융 사이트</span></div><div><strong>2</strong><span>한국어 · 영어 검색</span></div><p>경로와 항목명은 실제 금융 사이트에서 사용하는 표현을 그대로 보여줍니다. 화면에 없는 번역어로 사용자를 혼란스럽게 만들지 않습니다.</p>
      </section>

      <section className="install" id="install">
        <div className="install-intro">
          <p className="section-number">02 / GET STARTED</p>
          <h2>5분이면<br />설치가 끝납니다.</h2>
          <p>Chrome 웹스토어에서 바로 설치할 수 있습니다. 별도의 계정이나 복잡한 설정은 필요하지 않습니다.</p>
          <a className="store-badge" href="https://chromewebstore.google.com/search/ValueFinder?hl=ko" target="_blank" rel="noreferrer" aria-label="Chrome 웹스토어에서 ValueFinder 찾기"><span className="chrome-mark" aria-hidden="true" /><span><small>Chrome 웹스토어에서</small><strong>ValueFinder 설치</strong></span></a>
        </div>
        <ol className="install-steps">
          <li><b>01</b><div><h3>웹스토어에서 ValueFinder 검색</h3><p>Chrome 웹스토어를 열고 검색창에 <strong>ValueFinder</strong>를 입력합니다.</p></div></li>
          <li><b>02</b><div><h3>Chrome에 설치하기</h3><p>ValueFinder 상세 페이지에서 <strong>Chrome에 추가</strong>를 누르고 설치를 확인합니다.</p></div></li>
          <li><b>03</b><div><h3>상세정보 확인 후 툴바에 고정</h3><p>설치된 확장 프로그램의 상세정보와 권한을 확인합니다. 주소창 옆 퍼즐 아이콘을 열어 ValueFinder의 고정 아이콘을 누르면 준비가 끝납니다.</p></div></li>
        </ol>
      </section>

      <section className="quick-guide" id="demo">
        <div className="guide-heading"><p className="section-number">03 / 60-SECOND GUIDE</p><h2>찾고, 확인하고,<br />도착하세요.</h2></div>
        <div className="guide-timeline">
          <article><div className="time">00:00</div><div><h3>지원 사이트에서 원하는 종목을 검색합니다</h3><p>Investing.com, 네이버페이 증권, Yahoo Finance 등 6개 사이트에서 시작할 수 있습니다.</p></div></article>
          <article><div className="time">00:15</div><div><h3>ValueFinder에 찾을 항목을 입력합니다</h3><p>“공매도”, “부채”, “short interest”처럼 평소 쓰는 표현으로 검색하세요.</p></div></article>
          <article><div className="time">00:30</div><div><h3>다음 동작을 확인합니다</h3><p>여기서 표시, 탭 열고 표시, 다른 사이트로 이동 중 하나가 구체적으로 안내됩니다.</p></div></article>
          <article><div className="time">00:45</div><div><h3>버튼을 눌러 항목을 확인합니다</h3><p>도착한 화면에서 찾던 행이나 라벨이 강조됩니다. <kbd>Shift + Enter</kbd>로도 실행할 수 있습니다.</p></div></article>
        </div>
      </section>

      <section className="privacy-note">
        <div><p className="section-number">PRIVACY BY DEFAULT</p><h2>당신이 무엇을 찾았는지,<br />우리는 알 수 없습니다.</h2></div>
        <p>ValueFinder는 개인정보를 수집·저장·판매하지 않으며 별도의 서버를 운영하지 않습니다. 검색과 안내는 브라우저 안에서 처리됩니다.</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src="/valuefinder-logo.png" alt="" /><span>ValueFinder</span></a>
        <p>금융 사이트에서 원하는 정보까지, 가장 짧은 길.</p>
        <div><a href="mailto:kjyslt@gmail.com">문의하기</a><a href="https://jook27.github.io/valuefinder-site/privacy-policy.html">개인정보처리방침</a></div>
        <small>ValueFinder는 지원 금융 사이트와 제휴 관계가 없는 독립적인 도구입니다.</small>
      </footer>
    </main>
  );
}
