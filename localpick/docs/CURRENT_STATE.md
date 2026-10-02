# LocalPick Korea 현재 상태

기준: 2026-10-02. 사용자 요청: 기획·코드 검토, 경쟁 서비스 비교, Sites 호스팅, 필요한 백엔드 지원.

## 대상과 소스
- 원본: https://github.com/dudqks0319-cpu/-/pull/1, `claude/localpick-korea`, `localpick/`만 대상.
- Claude 최종: `4025fa15be85796606a699e664bf3cf613c4d7f4`.
- 통합 동작 수정: `11264272fbefcaccdad23fef5ef0c329cb3342dc`, `codex/localpick-review`.
- Sites 프로젝트: `appgprj_6abf0698353881918dfbf5431fe7a435`. 소스: 별도 `localpick-korea-site`.

## 완료·증거
- 경쟁 비교·기획·코드·백엔드 검토: REVIEW.md.
- 샘플 49곳 표시, 미측정 인기도 제거, 번역 전송 안내, 번들 라이선스 보완.
- Claude OCR 파일/실패/취소 보강 통합, 부분 일치로 다른 음식을 주문하는 문제 수정.
- Node 검사 8개, 3개 언어·지도·검색·한국어 주문서, 통합본 OCR 정확 일치/부분 일치/오류/취소·재시도 확인.
- 스크린샷·테스트 로그는 검토 체크아웃의 artifacts/에 보관.

## 배포
Sites 버전 1 배포 `succeeded`, 2026-10-02 10:44 KST.
- URL: https://localpick-korea.jyb1126.chatgpt.site
- 배포 소스 SHA: `5595c1e81b8a44c8e26671b4bfaa25082d5f6ecf` (별도 Sites 저장소).
- 배포 ID: `appgdep_6abf0c57c1408191981218d38d2b5293`.
- 접근 read-back: custom, 소유자 1명, 추가 편집자·그룹·외부 방문자 0.
- 수정 전달: https://github.com/dudqks0319-cpu/-/pull/2 (초안, Claude 브랜치 대상).
- 로컬 영수증: artifacts/deployment-receipt.json. 배포 성공과 로컬 브라우저 기능 확인은 각각 별도 증거다. 실제 배포 주소에서 OCR 실행·로그인 후 화면은 아직 직접 검증하지 않았다.
- 사이트 정적 폴더는 `dist/`. 첫 포장 시 미지원 `public/` 이름을 수정한 뒤 공식 도구로 포장·푸시·배포했다.

## 남은 범위
실제 휴대폰 카메라/HEIC/저사양 기기, 장소 출처·가격·의약품/알레르기 설명 검수, 저장·일정·키보드 접근성. REVIEW.md 우선순위 참고. 현재 기능은 정적이므로 DB·유료 API·사진 업로드 서버는 활성화하지 않았다.

## 재개
이 문서와 REVIEW.md, 배포 영수증을 읽고 동일 Sites 프로젝트를 재사용한다. 일반 공개 전 콘텐츠와 실기기 검증부터 진행한다.
