# ValueFinder 소개 페이지 디자인 검수·완료 보고

검수일: 2026-09-09

디자인 수정과 로컬 검증을 완료했다. 공개 GitHub Pages와 기존 Sites 배포본에는 반영하지 않았다. 현재 작업물은 `valuefinder-site` 하위의 독립된 사이트 저장소에 있다. 원래 확장 프로그램 소스는 변경하지 않았다.

## 적용한 스킬과 범위

- [Impeccable](https://github.com/pbakaus/impeccable): SKILL.md, audit, critique, craft-floor를 참고하고 실제 원본 페이지와 스크린샷을 검수했다. 자동 컨텍스트 로더의 최초 실행은 캐시 권한 문제로 실패하여 프로젝트 문서와 소스를 직접 읽었다. 이후 임시 경로에서 공식 엔진 0.1.5를 실행하여 수정 전·후 코드를 검사했다.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): 금융·생산성 도구의 소개 페이지로 디자인 시스템 검색을 수행하고, 실제 데모 중심의 기능 소개 구조와 접근성·반응형 지침을 적용했다. 최초 검색의 포트폴리오 제안은 업종과 맞지 않아 제외하고 질의를 좁혔다. React dialog 검색의 초점 관리 지침도 적용했다.
- 사이트의 기존 Sites/GitHub Pages 이중 빌드 구조를 유지했다. 기존 배포 설정과 접근 권한을 변경하지 않았다.

참조 버전:

- Impeccable: `cd12f8660e2dde57b9615c8a6b8ea674101f9cfc`
- UI UX Pro Max: `4aad0584d92131626b16d4ff4d77f0455385013c`
- 사이트 수정 기준: `e1d7b8a297b6d1e74bbf8dd69348d2fc79bce171`

## 주요 검수 결과와 조치

| 우선순위 | 수정 전 문제 | 조치 |
|---|---|---|
| P1 | 첫 화면의 밝은 모형·가상 시세가 실제 어두운 확장 프로그램과 다름 | 실제 Yahoo Finance 배당 검색 화면으로 교체. 정보명과 메뉴 경로를 함께 표시 |
| P1 | 기능 이미지에 고정 비율과 object-fit: cover를 적용해 안내가 잘림 | 12장 모두 원본 비율 유지. 원본 확대 보기 추가 |
| P1 | 지원 불가 화면을 정상 사용의 시작 예시와 섞어서 설명 | 지원 사이트·개별 종목 열기 설명과 문제 해결 구간에 배치 |
| P2 | 설치 버튼이 웹스토어 검색 결과로 연결됨 | 기존 확장 프로그램 README에서 확인한 제품 ID의 상세 페이지로 연결 |
| P2 | 작은 스크린샷과 반복적인 구성으로 실제 동작을 읽기 어려움 | 세 가지 상황을 독립된 큰 구간으로 구성하고 설치·사용법을 분리 |
| P2 | 일부 보조 텍스트·선택 UI의 가독성과 초점 안내가 약함 | 색상 토큰, 자체 호스팅 글꼴, 44px 조작 영역, 초점 표시, 문서 언어·RTL 적용 |
| P2 | 확대 안내를 이미지 위에 올리면 실제 버튼을 가림 | 최종 검수에서 확대 안내를 이미지 아래로 이동 |

기존 로고, 개인정보처리방침, 문의 링크, 주요 설명, 12개 언어 선택을 유지했다. 새로운 보조 안내 일부는 한국어 외 언어에서 영어로 제공한다. 이를 완전한 12개 언어 현지화 완료로 보지 않는다.

## 스크린샷 배치

아래 파일은 모두 public 아래 원본 경로 기준이다. 원본 파일은 수정하지 않았다.

| 원본 | 배치와 설명 |
|---|---|
| howtouse/vf_show-location-in-current-page.jpg | 첫 화면: Yahoo Finance 배당 검색, Statistics → Dividends & Splits |
| wayfinding/vf_highlight-here.jpg | 현재 화면에서 찾기: P/E, Statistics → Valuation Measures |
| wayfinding/vf_go-to-the-page-and-highlight.jpg | 다른 메뉴로 이동: Peer Comparison, Summary → Compare |
| wayfinding/vf_leading-to-other-website.jpg | Investing.com에서 Short Interest를 제공하는 대체 사이트 안내 |
| setup/vf_chrome-extensions-visitChromeWebStore.jpg | 설치 1단계: Chrome 메뉴에서 웹스토어 열기 |
| setup/vf_search-fill-valuefinder.jpg | 설치 1단계: ValueFinder 검색 결과 |
| setup/vf_add-to-extensions.jpg | 설치 2단계: 제품 상세 페이지에서 Chrome에 추가 |
| setup/vf_after-installing-fix-on-your-toolbar.jpg | 설치 3단계: 확장 프로그램 툴바 고정 |
| howtouse/vf_go-and-highlight-in-other-page.jpg | 사용법: Yahoo Finance에서 P/E의 다른 페이지로 이동하는 전체 화면 |
| howtouse/vf_not-available-here-leading-to-othere-site.jpg | 사용법: Finviz Peer Comparison의 대체 사이트 안내 전체 화면 |
| howtouse/vf_not-supported-website.jpg | 문제 해결: Google처럼 지원하지 않는 사이트 |
| howtouse/vf_not-supported-page-search-and-open-an-individual-stock-page.jpg | 문제 해결: 개별 종목 페이지를 먼저 열어야 하는 상태 |

이전 public/feature-*.png 모형 3장과 og.png, 로고 원본도 파일로 보존했다. 같은 내용을 담은 모형을 서로 다른 기능의 실제 화면으로 재사용하지 않았다.

## 자동 검사와 실측

- Impeccable 정적 검사: 수정 전 자동 지적 6건, 수정 후 0건. 원시 결과는 `impeccable-before.json`, `impeccable-after.json`에 보관했다. 수정 전 화살표 도형의 테두리를 카드로 판단한 항목과 둥글지 않은 패널을 둥근 카드로 판단한 항목은 오탐으로 구분했다. 자동 검사 0건이 완전한 접근성 준수를 의미하지 않는다.
- GitHub Pages 정적 빌드: 통과.
- Sites/Vinext 빌드: 통과.
- `npm test`: 3개 통과. 실제 제품 렌더링·설치 링크, 원본 12장 대응 및 렌더링, 확대·문제 해결·언어 선택 구조를 검사한다. 제품과 맞지 않던 초기 로딩 화면 테스트를 대체했다.
- 수정한 React 페이지 및 GitHub 진입점의 엄격 TypeScript 검사: 통과.
- 수정한 페이지와 테스트 ESLint: 오류 0건, Next Image 사용 권고 4건. 정적 GitHub Pages와 동일하게 동작하도록 일반 img와 미리 최적화한 WebP를 사용했다.
- `git diff --check`: 통과.
- 원본 12장 합계 1,254,683 bytes → 표시용 WebP 356,666 bytes, 약 72% 감소. 원본은 확대 시 사용한다. 폰트·다른 파일 용량은 이 감소율에 포함하지 않았다.

색 대비 실측:

| 조합 | 대비 |
|---|---:|
| 본문 / 기본 배경 | 14.06:1 |
| 보조 본문 / 기본 배경 | 6.07:1 |
| 보조 본문 / 제품 미리보기 배경 | 5.55:1 |
| 보조 본문 / 사용법 배경 | 5.68:1 |
| 녹색 강조 / 사용법 배경 | 6.13:1 |
| 설치 버튼 글자 / 버튼 배경 | 5.58:1 |

브라우저 검수:

- 375px: 12개 언어 모두 문서 가로 넘침과 주요 제목·컨트롤의 화면 이탈 없음.
- 768/1024/1440px: 한국어·영어·아랍어 각 검수. 같은 항목에서 넘침 없음.
- 스크린샷 확대: 실제 원본 표시, 닫기 버튼으로 초점 이동, Esc 닫기, 원래 버튼으로 초점 복귀 확인.
- 문제 해결: 펼치기, 두 이미지 정상 로딩, Enter로 접기 확인.
- 최종 확대 안내가 원본 이미지의 버튼을 덮지 않는지 확인.
- reduced-motion 대응은 CSS로 확인했다. 운영체제 동작 줄이기 설정을 변경한 실기기 검수나 전체 스크린리더 인증을 수행한 것은 아니다.

## 남은 제한과 배포 상태

- 저장소 전체 `tsc --noEmit`은 수정하지 않은 Cloudflare 서버 파일의 타입 선언 문제(cloudflare:workers, Fetcher, D1Database) 3건이 남는다. 소개 페이지 대상 타입 검사와 두 배포용 빌드는 통과했다.
- 자체 호스팅 가변 글꼴은 약 2.06MB다. 이번에는 한국어 글자 누락을 피하고 원래 패키지 구성을 유지했으며, 글꼴 서브셋 최적화는 별도 개선 여지가 있다.
- 의존성 설치 시 기존 잠금 파일 기준 보안 경고가 있었다. 디자인 작업에 범위를 한정하여 의존성 버전을 일괄 변경하지 않았다.
- 외부 금융 사이트 6곳에서 확장 프로그램 자체를 다시 실사용 검증한 작업은 아니다.
- 공개 GitHub Pages와 기존 Sites 주소에는 아직 배포하지 않았다. 현재 결과는 로컬 미리보기에서 검토할 수 있으며, 공개 반영 시 이 사이트 저장소의 변경 사항을 반영해야 한다.
