/*
 * LocalPick Korea — 장소·필수템·메뉴 데이터
 *
 * ⚠️ 지금 들어 있는 장소는 "샘플"입니다.
 *    실제로 가보거나 확인한 뒤 내용을 고치고, 진짜 로컬 가게로 바꿔 넣으세요.
 *
 * 글은 언어별로 { ko: 한국어, en: 영어, ja: 일본어 } 로 들어 있어요.
 * 어떤 언어가 비어 있으면 화면에는 영어가 대신 나와요.
 *
 * 장소 하나 추가하는 법:
 *   아래 places 목록에서 { ... }, 한 덩어리를 복사해서 붙여넣고 내용만 바꾸면 됩니다.
 *
 *   id        : 겹치지 않는 영어 이름 (예: 'seoul-mangwon')
 *   city      : 'seoul' | 'busan' | 'jeonju' | 'gyeongju'
 *   cat       : 'eat'(현지인 맛집) | 'cafe'(카페) | 'musteat'(꼭 먹을 음식) | 'go'(가볼 곳)
 *               | 'kids'(아이랑) | 'tradition'(전통) | 'specialty'(특산품)
 *   ko        : 한글 이름 (직원에게 보여주는 화면에 나옴)
 *   name      : 영어(en) / 일본어(ja) 이름
 *   area      : 동네 이름
 *   locals    : 현지인이 얼마나 가는지 1~5
 *   tourists  : 관광객이 얼마나 가는지 1~5
 *   price     : '₩'(1만원 이하) | '₩₩'(1~3만원) | '₩₩₩'(3만원 이상) | 'free'(무료)
 *   why       : 한국인이 여기 가는 이유
 *   tips      : 팁 목록
 *   order     : 직원에게 보여줄 한국어 문장 (ko) + 뜻 (en / ja)
 *   insteadOf : (선택) "관광지 말고 여기" — 대신하는 관광지
 *   map       : 네이버 지도에서 검색할 한글 단어
 *   lat, lng  : (선택) 지도 핀 위치. 네이버 지도에서 장소를 찾아 좌표를 넣으세요. 지금 값은 대략적인 위치예요.
 *               음식처럼 특정 장소가 없으면 빼면 됩니다 (지도에 핀이 안 나와요).
 *   photo     : (선택) 사진 — { src: 'photos/파일이름.jpg', credit: '찍은 사람' }
 *               직접 찍었거나 사용 허락을 받은 사진만 넣으세요. 사진이 없으면 한글 간판 그림이 대신 나와요.
 */

window.LP_DATA = {
  cities: [
    {
      id: 'seoul',
      ko: '서울',
      en: 'Seoul',
      ja: 'ソウル',
      line: {
        ko: '동네 술집, 시장 점심, 한강 피크닉.',
        en: 'Neighborhood bars, market lunches, river picnics.',
        ja: '路地の酒場、市場ランチ、漢江ピクニック。'
      }
    },
    {
      id: 'busan',
      ko: '부산',
      en: 'Busan',
      ja: '釜山',
      line: {
        ko: '돼지국밥, 밀면, 밤에 빛나는 다리.',
        en: 'Pork soup, cold noodles, a bridge that lights up at night.',
        ja: 'テジクッパ、ミルミョン、夜に光る広安大橋。'
      }
    },
    {
      id: 'jeonju',
      ko: '전주',
      en: 'Jeonju',
      ja: '全州',
      line: {
        ko: '아침엔 콩나물국밥, 밤엔 가맥.',
        en: 'Bean-sprout soup for breakfast, corner-store beer at night.',
        ja: '朝はコンナムルクッパ、夜は商店ビール。'
      }
    },
    {
      id: 'gyeongju',
      ko: '경주',
      en: 'Gyeongju',
      ja: '慶州',
      line: {
        ko: '낮엔 고분, 밤엔 불 밝힌 연못.',
        en: 'Ancient tombs by day, lit-up palace ponds by night.',
        ja: '昼は古墳、夜はライトアップの池。'
      }
    }
  ],

  categories: [
    { id: 'eat', ko: '현지인 맛집', en: 'Local eats', ja: '地元の店' },
    { id: 'cafe', ko: '현지인 카페', en: 'Cafés', ja: 'カフェ' },
    { id: 'musteat', ko: '꼭 먹을 음식', en: 'Must-eat', ja: '必食グルメ' },
    { id: 'go', ko: '가볼 곳', en: 'Places to go', ja: '行くべき場所' },
    { id: 'kids', ko: '아이랑', en: 'With kids', ja: '子連れ' },
    { id: 'tradition', ko: '전통', en: 'Tradition', ja: '伝統文化' },
    { id: 'specialty', ko: '특산품', en: 'Specialties', ja: '名産品' }
  ],

  places: [
    /* ───────────── 서울 ───────────── */
    {
      id: 'seoul-nogari',
      city: 'seoul',
      cat: 'eat',
      ko: '을지로 노가리골목',
      name: { en: 'Euljiro Nogari Alley', ja: '乙支路ノガリ横丁' },
      area: { ko: '중구 을지로', en: 'Euljiro, Jung-gu', ja: '中区 乙支路' },
      locals: 5,
      tourists: 2,
      price: '₩',
      why: {
        ko: '퇴근한 직장인들이 길가 플라스틱 의자에 앉아 노가리와 싼 생맥주를 즐기는 곳. 시끄럽고, 싸고, 가장 서울다운 풍경이에요.',
        en: 'Office workers spill onto plastic stools after work for dried pollack and cheap draft beer. It is loud, cheap and very Seoul.',
        ja: '仕事帰りの会社員が路上のプラスチック椅子で、干しスケトウダラと安い生ビールを楽しむ場所。にぎやかで安くて、ソウルらしさ満点。'
      },
      tips: {
        ko: ['평일 저녁 7시 이후가 가장 붐벼요.', '노가리는 매콤한 마요 소스에 찍어 드세요.'],
        en: [
          'Busiest on weekday evenings after 7pm.',
          'Dip the nogari in the spicy mayo sauce.'
        ],
        ja: ['平日19時以降が一番にぎわいます。', 'ノガリは辛いマヨソースにつけて。']
      },
      order: { ko: '노가리 하나랑 생맥주 두 잔 주세요.', en: 'One nogari and two draft beers, please.', ja: 'ノガリ1つと生ビール2杯ください。' },
      insteadOf: { ko: '관광객용 테마 술집', en: 'Themed tourist bars', ja: '観光客向けのテーマバー' },
      map: '을지로 노가리골목',
      lat: 37.566,
      lng: 126.991
    },
    {
      id: 'seoul-mangwon',
      city: 'seoul',
      cat: 'eat',
      ko: '망원시장',
      name: { en: 'Mangwon Market', ja: '望遠市場' },
      area: { ko: '마포구 망원동', en: 'Mangwon-dong, Mapo-gu', ja: '麻浦区 望遠洞' },
      locals: 5,
      tourists: 3,
      price: '₩',
      why: {
        ko: '동네 사람들이 장을 보고 칼국수, 닭강정, 고로케를 사 먹는 진짜 동네 시장이에요.',
        en: 'A real neighborhood market where locals buy groceries and grab knife-cut noodles, fried chicken bites and croquettes.',
        ja: '地元の人が食材を買い、カルグクスやタッカンジョン、コロッケをつまむ本物の市場。'
      },
      tips: {
        ko: ['다 먹고 10분 걸어서 망원한강공원으로 가 보세요.', '작은 가게는 현금이 편해요.'],
        en: [
          'Walk 10 minutes to Mangwon Hangang Park after eating.',
          'Small stalls may prefer cash.'
        ],
        ja: ['食後は徒歩10分の望遠漢江公園へ。', '小さな屋台は現金が便利です。']
      },
      order: { ko: '칼국수 하나 주세요.', en: 'One kalguksu (knife-cut noodles), please.', ja: 'カルグクスを1つください。' },
      insteadOf: { ko: '사람 많은 광장시장 노점', en: 'The packed stalls of Gwangjang Market', ja: '混雑する広蔵市場の屋台' },
      map: '망원시장',
      lat: 37.556,
      lng: 126.9063
    },
    {
      id: 'seoul-seongsu',
      city: 'seoul',
      cat: 'cafe',
      ko: '성수동 카페거리',
      name: { en: 'Seongsu-dong café streets', ja: '聖水洞のカフェ通り' },
      area: { ko: '성동구 성수동', en: 'Seongsu-dong, Seongdong-gu', ja: '城東区 聖水洞' },
      locals: 5,
      tourists: 3,
      price: '₩₩',
      why: {
        ko: '옛 공장과 창고를 고친 카페와 팝업스토어 거리. 한국 젊은이들의 주말 오후 코스예요.',
        en: 'Old factories and warehouses turned into cafés and pop-up stores. This is where young Koreans spend a weekend afternoon.',
        ja: '古い工場や倉庫を改装したカフェやポップアップストアが並ぶ街。韓国の若者の週末の定番。'
      },
      tips: {
        ko: ['평일 오후가 훨씬 한산해요.', '서울숲이 걸어서 금방이에요.'],
        en: [
          'Weekday afternoons are much calmer.',
          'Seoul Forest park is a short walk away.'
        ],
        ja: ['平日の午後ならゆったり過ごせます。', 'ソウルの森公園もすぐ近く。']
      },
      order: { ko: '아이스 아메리카노 한 잔 주세요.', en: 'One iced Americano, please.', ja: 'アイスアメリカーノを1杯ください。' },
      map: '성수동 카페거리',
      lat: 37.5446,
      lng: 127.0557
    },
    {
      id: 'seoul-yeonnam',
      city: 'seoul',
      cat: 'cafe',
      ko: '연남동 경의선숲길',
      name: { en: 'Yeonnam-dong & Gyeongui Line Forest Park', ja: '延南洞・京義線森の道' },
      area: { ko: '마포구 연남동', en: 'Yeonnam-dong, Mapo-gu', ja: '麻浦区 延南洞' },
      locals: 4,
      tourists: 3,
      price: '₩₩',
      why: {
        ko: '옛 철길 위에 만든 길쭉한 공원을 따라 작은 카페가 늘어선 곳. 날이 좋으면 잔디에 앉아 커피를 마셔요.',
        en: 'A long park built on old rail tracks, lined with small cafés. Locals sit on the grass with coffee when the weather is nice.',
        ja: '廃線跡にできた細長い公園沿いに小さなカフェが並びます。天気の良い日は芝生でコーヒーを楽しむ人がいっぱい。'
      },
      tips: {
        ko: ['홍대입구역 3번 출구에서 출발하세요.', '큰길보다 골목 카페가 조용해요.'],
        en: [
          'Start from Hongik Univ. Station exit 3.',
          'Side streets have quieter cafés than the main path.'
        ],
        ja: ['弘大入口駅3番出口から歩き始めましょう。', '大通りより路地のカフェのほうが静かです。']
      },
      order: { ko: '라떼 한 잔이랑 이 디저트 주세요.', en: 'One latte and this dessert, please.', ja: 'ラテ1杯とこのデザートをください。' },
      map: '경의선숲길 연남동',
      lat: 37.56,
      lng: 126.9235
    },
    {
      id: 'seoul-samgyeopsal',
      city: 'seoul',
      cat: 'musteat',
      ko: '삼겹살과 소주',
      name: { en: 'Samgyeopsal & soju', ja: 'サムギョプサルと焼酎' },
      area: { ko: '동네 고깃집 어디든', en: 'Any neighborhood BBQ place', ja: '街の焼肉店ならどこでも' },
      locals: 5,
      tourists: 4,
      price: '₩₩',
      why: {
        ko: '삼겹살에 소주는 한국 직장인의 한 주 마무리. 관광지 말고 손님 많은 동네 고깃집이면 충분해요.',
        en: 'Grilled pork belly with soju is the Korean way to end a work week. Skip the tourist strips; any busy local BBQ joint is good.',
        ja: '豚バラ焼きと焼酎は、韓国人の「お疲れさま」の定番。観光地より、地元客でにぎわう街の焼肉店へ。'
      },
      tips: {
        ko: ['대부분 2인분 이상 주문해야 해요.', '상추에 고기, 마늘, 쌈장을 올려 싸 드세요.'],
        en: [
          'Most places require at least 2 servings.',
          'Wrap the meat in lettuce with garlic and ssamjang.'
        ],
        ja: ['多くの店は2人前から注文できます。', 'サンチュに肉とニンニク、サムジャンを包んで。']
      },
      order: {
        ko: '삼겹살 2인분이랑 소주 한 병 주세요.',
        en: 'Two servings of pork belly and a bottle of soju, please.',
        ja: 'サムギョプサル2人前と焼酎1本ください。'
      },
      insteadOf: { ko: '명동 관광객용 고깃집', en: 'BBQ chains in Myeongdong', ja: '明洞の観光客向け焼肉店' },
      map: '삼겹살 맛집'
    },
    {
      id: 'seoul-sundaeguk',
      city: 'seoul',
      cat: 'musteat',
      ko: '순대국',
      name: { en: 'Sundae-guk (blood sausage soup)', ja: 'スンデクッ（腸詰めスープ）' },
      area: { ko: '동네 국밥집', en: 'Neighborhood soup restaurants', ja: '街のクッパ店' },
      locals: 5,
      tourists: 1,
      price: '₩',
      why: {
        ko: '싸고 든든해서 점심이나 술 마신 다음 날 먹는 국. 여행 가이드에는 거의 안 나와요.',
        en: 'A cheap, filling soup Koreans eat for lunch or after a night of drinking. You will rarely see it in travel guides.',
        ja: '安くてお腹いっぱいになる、ランチや飲んだ翌日の定番スープ。ガイドブックにはほとんど載っていません。'
      },
      tips: {
        ko: ['새우젓과 들깨가루로 간을 맞추세요.', '밥은 국에 말아 먹는 게 한국식이에요.'],
        en: [
          'Season it yourself with salted shrimp and perilla powder.',
          'Rice goes into the soup, not next to it.'
        ],
        ja: ['アミの塩辛とエゴマ粉で自分好みに味付け。', 'ご飯はスープに入れて食べるのが韓国式。']
      },
      order: { ko: '순대국 하나 주세요.', en: 'One sundae-guk, please.', ja: 'スンデクッを1つください。' },
      map: '순대국'
    },
    {
      id: 'seoul-hangang',
      city: 'seoul',
      cat: 'go',
      ko: '한강공원',
      name: { en: 'Hangang River parks', ja: '漢江公園' },
      area: { ko: '여의도·반포·뚝섬 등', en: 'Yeouido, Banpo, Ttukseom and more', ja: '汝矣島・盤浦・トゥクソムなど' },
      locals: 5,
      tourists: 3,
      price: 'free',
      why: {
        ko: '따뜻한 저녁이면 서울 사람들은 강변으로 가요. 돗자리 펴고, 치킨 배달시키고, 편의점 라면을 먹어요.',
        en: 'On a warm evening, Seoul sits by the river: picnic mats, fried chicken delivered to the grass, and ramyeon from the convenience store.',
        ja: '暖かい夜、ソウルの人は川辺へ。レジャーシートを広げ、チキンを芝生まで出前し、コンビニのラーメンをすすります。'
      },
      tips: {
        ko: ['한강 편의점에는 라면 끓이는 기계가 있어요.', '돗자리를 챙기거나 근처에서 빌리세요.'],
        en: [
          'Convenience stores here have ramyeon cooking machines.',
          'Bring a mat or rent one nearby.'
        ],
        ja: ['公園のコンビニにはラーメン調理機があります。', 'レジャーシートを持参するか近くで借りましょう。']
      },
      order: {
        ko: '라면 하나 끓여 먹을게요. 어떻게 해요?',
        en: 'I want to cook a ramyeon. How does it work?',
        ja: 'ラーメンを作りたいです。どうすればいいですか？'
      },
      insteadOf: { ko: '밤의 붐비는 번화가', en: 'Crowded shopping streets at night', ja: '夜の混雑した繁華街' },
      map: '한강공원',
      lat: 37.5284,
      lng: 126.933
    },
    {
      id: 'seoul-naksan',
      city: 'seoul',
      cat: 'go',
      ko: '낙산공원 성곽길',
      name: { en: 'Naksan Park city wall trail', ja: '駱山公園の城郭道' },
      area: { ko: '종로구 이화동', en: 'Ihwa-dong, Jongno-gu', ja: '鍾路区 梨花洞' },
      locals: 4,
      tourists: 2,
      price: 'free',
      why: {
        ko: '해 질 녘 한양도성 성곽을 따라 걸으면 무료로 서울 야경을 볼 수 있어요.',
        en: 'Walk along the old Seoul city wall at sunset for a free night view over the city.',
        ja: '夕暮れに古いソウル城郭沿いを歩けば、無料でソウルの夜景が楽しめます。'
      },
      tips: {
        ko: ['혜화역에서 이화마을을 지나 올라가세요.', '언덕길이라 편한 신발을 신으세요.'],
        en: [
          'Start from Hyehwa Station and walk up through Ihwa village.',
          'Wear comfortable shoes; it is hilly.'
        ],
        ja: ['恵化駅から梨花洞を通って登りましょう。', '坂道が多いので歩きやすい靴で。']
      },
      order: { ko: '낙산공원 가는 길이 어디예요?', en: 'Which way to Naksan Park?', ja: '駱山公園へはどう行けばいいですか？' },
      insteadOf: { ko: 'N서울타워 유료 전망대', en: 'Paid tickets for N Seoul Tower', ja: 'Nソウルタワーの有料展望台' },
      map: '낙산공원',
      lat: 37.5806,
      lng: 127.0074
    },
    {
      id: 'seoul-kids-museum',
      city: 'seoul',
      cat: 'kids',
      ko: '국립중앙박물관 어린이박물관',
      name: { en: 'Children’s Museum, National Museum of Korea', ja: '国立中央博物館 こども博物館' },
      area: { ko: '용산구', en: 'Yongsan-gu', ja: '龍山区' },
      locals: 5,
      tourists: 1,
      price: 'free',
      why: {
        ko: '한국 부모들이 몇 주 전에 예약하는 무료 체험형 박물관. 만지고, 만들고, 옷을 입어 보며 역사를 배워요.',
        en: 'Korean parents book this free, hands-on museum weeks ahead. Kids touch, build and dress up while learning Korean history.',
        ja: '韓国の親が何週間も前から予約する無料の体験型博物館。触って、作って、衣装を着て韓国の歴史を学べます。'
      },
      tips: {
        ko: ['시간 지정 예약제예요. 미리 온라인으로 예약하세요.', '본관과 정원 연못도 무료예요.'],
        en: [
          'Entry is by timed reservation. Book online before you go.',
          'The main museum and its garden pond are free too.'
        ],
        ja: ['時間指定の予約制です。事前にオンラインで予約を。', '本館と庭園の池も無料で楽しめます。']
      },
      order: {
        ko: '어린이박물관 예약했어요. 입구가 어디예요?',
        en: 'I booked the Children’s Museum. Where is the entrance?',
        ja: 'こども博物館を予約しました。入口はどこですか？'
      },
      map: '국립중앙박물관 어린이박물관',
      lat: 37.524,
      lng: 126.9803
    },
    {
      id: 'seoul-kids-forest',
      city: 'seoul',
      cat: 'kids',
      ko: '서울숲',
      name: { en: 'Seoul Forest', ja: 'ソウルの森' },
      area: { ko: '성동구', en: 'Seongdong-gu', ja: '城東区' },
      locals: 5,
      tourists: 2,
      price: 'free',
      why: {
        ko: '서울 가족들이 주말을 보내는 큰 공원. 사슴도 보고, 잔디밭과 놀이터, 자전거 대여도 있어요.',
        en: 'A huge park where Seoul families spend weekends: deer to see, open lawns, playgrounds and bike rentals.',
        ja: 'ソウルの家族が週末を過ごす大きな公園。シカが見られ、芝生や遊び場、レンタサイクルもあります。'
      },
      tips: {
        ko: ['옆 성수동에서 점심을 함께 드세요.', '맑은 날엔 돗자리를 챙기세요.'],
        en: [
          'Pair it with lunch in Seongsu-dong next door.',
          'Bring a picnic mat on sunny days.'
        ],
        ja: ['隣の聖水洞でランチとセットで。', '晴れた日はレジャーシートを持って。']
      },
      order: { ko: '사슴 있는 곳이 어디예요?', en: 'Where can we see the deer?', ja: 'シカがいる場所はどこですか？' },
      map: '서울숲',
      lat: 37.5444,
      lng: 127.0374
    },
    {
      id: 'seoul-jongmyo',
      city: 'seoul',
      cat: 'tradition',
      ko: '종묘',
      name: { en: 'Jongmyo Shrine', ja: '宗廟' },
      area: { ko: '종로구', en: 'Jongno-gu', ja: '鍾路区' },
      locals: 4,
      tourists: 2,
      price: '₩',
      why: {
        ko: '조선 왕들을 모신 사당으로 유네스코 세계유산이에요. 큰 궁궐보다 훨씬 조용해요.',
        en: 'The royal ancestral shrine of the Joseon kings, a UNESCO World Heritage site. Far quieter than the big palaces.',
        ja: '朝鮮王朝の王を祀る宗廟で、ユネスコ世界遺産。大きな宮殿よりずっと静かに見学できます。'
      },
      tips: {
        ko: ['해설 관람만 가능한 날이 있으니 일정을 확인하세요.', '한복을 입으면 서울 고궁은 무료입장이에요.'],
        en: [
          'Some days are guided tours only; check the schedule.',
          'Wearing hanbok gets you free entry to Seoul’s royal palaces.'
        ],
        ja: ['ガイドツアーのみの日があるので日程を確認。', '韓服を着るとソウルの古宮は無料で入場できます。']
      },
      order: { ko: '영어 해설 몇 시에 있어요?', en: 'What time is the English tour?', ja: '英語ガイドは何時からですか？' },
      map: '종묘',
      lat: 37.5747,
      lng: 126.994
    },
    {
      id: 'seoul-huwon',
      city: 'seoul',
      cat: 'tradition',
      ko: '창덕궁 후원',
      name: { en: 'Changdeokgung Secret Garden', ja: '昌徳宮 後苑' },
      area: { ko: '종로구', en: 'Jongno-gu', ja: '鍾路区' },
      locals: 4,
      tourists: 3,
      price: '₩',
      why: {
        ko: '창덕궁 뒤편의 왕실 정원. 연못과 정자가 아름다워 봄꽃과 가을 단풍 때 예약해서 가요.',
        en: 'The royal garden behind Changdeokgung Palace, with ponds and pavilions. Koreans book it for spring blossoms and autumn leaves.',
        ja: '昌徳宮の奥にある王の庭園。池と東屋が美しく、韓国人は春の花と秋の紅葉の時期に予約して訪れます。'
      },
      tips: {
        ko: ['인원 제한 해설 관람으로만 들어가요. 일찍 예약하세요.', '단풍은 10월 말~11월 초가 절정이에요.'],
        en: [
          'Entry is by guided tour with limited spots. Book early.',
          'Late October to early November is peak autumn color.'
        ],
        ja: ['人数限定のガイドツアーで入場。早めに予約を。', '紅葉の見頃は10月下旬〜11月上旬。']
      },
      order: { ko: '후원 관람 예약했어요.', en: 'I have a booking for the Secret Garden.', ja: '後苑の見学を予約しています。' },
      map: '창덕궁 후원',
      lat: 37.5794,
      lng: 126.991
    },

    /* ───────────── 부산 ───────────── */
    {
      id: 'busan-millak',
      city: 'busan',
      cat: 'eat',
      ko: '민락 회센터',
      name: { en: 'Millak raw-fish center', ja: '民楽の刺身センター' },
      area: { ko: '수영구 민락동', en: 'Millak-dong, Suyeong-gu', ja: '水営区 民楽洞' },
      locals: 5,
      tourists: 2,
      price: '₩₩₩',
      why: {
        ko: '1층에서 활어를 고르고 위층 식당에서 광안대교를 보며 회를 먹는 부산식 회 문화예요.',
        en: 'Pick live fish downstairs, then eat it sliced upstairs with a view of Gwangan Bridge. This is how Busan people eat hoe (raw fish).',
        ja: '1階で活魚を選び、上の階で広安大橋を眺めながら刺身を食べる。これが釜山流。'
      },
      tips: {
        ko: ['위층 식당은 양념·반찬 값으로 1인당 상차림비를 받아요.', '남은 뼈로 매운탕을 끓여 달라고 하세요.'],
        en: [
          'Upstairs restaurants charge a small per-person table fee for sauces and sides.',
          'Ask for maeuntang (spicy fish stew) made from the leftovers.'
        ],
        ja: ['上階の店では、タレやおかず代として1人あたりの席料がかかります。', '残ったアラでメウンタン（辛い鍋）を頼みましょう。']
      },
      order: { ko: '두 명이 먹을 회 추천해 주세요.', en: 'Please recommend raw fish for two people.', ja: '2人分の刺身をおすすめしてください。' },
      map: '민락어민활어직판장',
      lat: 35.1545,
      lng: 129.1335
    },
    {
      id: 'busan-bupyeong',
      city: 'busan',
      cat: 'eat',
      ko: '부평깡통시장',
      name: { en: 'Bupyeong Kkangtong Market', ja: '富平カントン市場' },
      area: { ko: '중구 부평동', en: 'Bupyeong-dong, Jung-gu', ja: '中区 富平洞' },
      locals: 4,
      tourists: 3,
      price: '₩',
      why: {
        ko: '부산 어묵이 시작된 동네. 현지인은 어묵, 유부주머니, 간식을 먹으러 와요.',
        en: 'Busan fish cakes (eomuk) were born around here. Locals come for fish-cake stalls, yubu pockets and snacks.',
        ja: '釜山オムク（練り物）発祥の地の近く。地元の人はオムクやユブチュモニを食べに来ます。'
      },
      tips: {
        ko: ['어묵은 가게 앞에 서서 먹고, 국물은 공짜로 떠 드세요.', '바로 옆이 국제시장이에요.'],
        en: [
          'Eat fish cakes standing at the stall and drink the free broth.',
          'Gukje Market is right next door.'
        ],
        ja: ['屋台で立ったままオムクを食べ、無料のスープも一緒に。', 'すぐ隣が国際市場です。']
      },
      order: {
        ko: '어묵 몇 개 먹을게요. 계산은 나중에 할게요.',
        en: 'I will eat a few fish cakes and pay at the end.',
        ja: 'オムクをいくつか食べて、最後に払います。'
      },
      map: '부평깡통시장',
      lat: 35.1017,
      lng: 129.0262
    },
    {
      id: 'busan-jeonpo',
      city: 'busan',
      cat: 'cafe',
      ko: '전포카페거리',
      name: { en: 'Jeonpo Café Street', ja: '田浦カフェ通り' },
      area: { ko: '부산진구 전포동', en: 'Jeonpo-dong, Busanjin-gu', ja: '釜山鎮区 田浦洞' },
      locals: 5,
      tourists: 2,
      price: '₩₩',
      why: {
        ko: '공구 가게 사이에 개성 있는 카페와 빵집이 섞인 거리. 부산 젊은이들은 바다보다 여기로 와요.',
        en: 'Old tool shops mixed with independent cafés and bakeries. Young Busan locals hang out here, not on the beach.',
        ja: '工具店の間に個性的なカフェやベーカリーが混ざる街。釜山の若者はビーチよりここに集まります。'
      },
      tips: {
        ko: ['서면역에서 걸어서 10분이에요.', '카페들은 대부분 늦은 오전에 열어요.'],
        en: [
          'Seomyeon Station is a 10-minute walk.',
          'Many cafés open late morning.'
        ],
        ja: ['西面駅から徒歩約10分。', '多くのカフェは昼前に開店します。']
      },
      order: { ko: '오늘의 커피 한 잔 주세요.', en: 'One coffee of the day, please.', ja: '本日のコーヒーを1杯ください。' },
      map: '전포카페거리',
      lat: 35.1555,
      lng: 129.064
    },
    {
      id: 'busan-yeongdo',
      city: 'busan',
      cat: 'cafe',
      ko: '영도 바다 카페',
      name: { en: 'Yeongdo seaside cafés', ja: '影島の海辺カフェ' },
      area: { ko: '영도구', en: 'Yeongdo-gu', ja: '影島区' },
      locals: 4,
      tourists: 2,
      price: '₩₩',
      why: {
        ko: '바다 위에 정박한 배들이 보이는 대형 카페. 현지인은 바닷가에서 느긋한 오후를 보내러 차를 몰고 와요.',
        en: 'Big cafés with views of ships waiting at anchor. Locals drive here for a slow afternoon by the sea.',
        ja: '沖に停泊する船を眺められる大型カフェ。地元の人は海辺でのんびりするために車で訪れます。'
      },
      tips: {
        ko: ['섬 안 버스는 느려서 택시가 편해요.', '흰여울문화마을이 가까워요.'],
        en: [
          'Take a taxi; buses on the island are slow.',
          'Huinnyeoul Culture Village is nearby.'
        ],
        ja: ['島内のバスは遅いのでタクシーが便利。', '白麗ヨウル文化村も近くです。']
      },
      order: { ko: '바다 보이는 자리 있어요?', en: 'Do you have a seat with a sea view?', ja: '海が見える席はありますか？' },
      map: '영도 카페',
      lat: 35.079,
      lng: 129.044
    },
    {
      id: 'busan-dwaeji',
      city: 'busan',
      cat: 'musteat',
      ko: '돼지국밥',
      name: { en: 'Dwaeji-gukbap (pork rice soup)', ja: 'テジクッパ（豚肉スープご飯）' },
      area: { ko: '부산 어디든', en: 'All over Busan', ja: '釜山のいたるところ' },
      locals: 5,
      tourists: 4,
      price: '₩',
      why: {
        ko: '부산의 소울푸드. 현지인에게 단골집을 물어보면 다들 할 말이 많아요.',
        en: 'Busan’s soul food. Ask any local where their favorite gukbap place is and you will get a strong opinion.',
        ja: '釜山のソウルフード。地元の人に好きな店を聞けば、必ず熱く語ってくれます。'
      },
      tips: {
        ko: ['부추무침(부산말로 정구지)을 국에 넣어 드세요.', '소금 대신 새우젓으로 간을 맞춰요.'],
        en: [
          'Add the chive salad (jeongguji, in Busan dialect) into the soup.',
          'Season with salted shrimp, not salt.'
        ],
        ja: ['ニラ和え（釜山の方言で「チョングジ」）をスープに入れて。', '塩ではなくアミの塩辛で味を調えます。']
      },
      order: {
        ko: '돼지국밥 하나 주세요. 정구지 많이 주세요.',
        en: 'One pork soup, please. Extra chives, please.',
        ja: 'テジクッパ1つください。ニラ多めでお願いします。'
      },
      map: '돼지국밥'
    },
    {
      id: 'busan-milmyeon',
      city: 'busan',
      cat: 'musteat',
      ko: '밀면',
      name: { en: 'Milmyeon (Busan cold noodles)', ja: 'ミルミョン（釜山冷麺）' },
      area: { ko: '부산 어디든', en: 'All over Busan', ja: '釜山のいたるところ' },
      locals: 5,
      tourists: 3,
      price: '₩',
      why: {
        ko: '한국전쟁 때 피란민이 만든 밀가루 냉면. 여름 내내 먹고, 어느 집이 최고인지 늘 논쟁해요.',
        en: 'Cold wheat noodles created by refugees during the Korean War. Locals eat it all summer and argue about the best shop.',
        ja: '朝鮮戦争の避難民が生んだ小麦の冷麺。夏の定番で、どの店が一番かいつも議論になります。'
      },
      tips: {
        ko: ['물밀면은 시원한 육수, 비빔밀면은 매콤하게 비벼 먹어요.', '식초와 겨자는 테이블에서 넣어요.'],
        en: [
          'Mul = in icy broth, bibim = spicy and dry.',
          'Add vinegar and mustard at the table.'
        ],
        ja: ['ムル＝冷たいスープ、ビビン＝辛い汁なし。', 'テーブルの酢とからしで味を調整。']
      },
      order: {
        ko: '물밀면 하나, 비빔밀면 하나 주세요.',
        en: 'One cold-broth milmyeon and one spicy milmyeon, please.',
        ja: 'ムルミルミョン1つ、ビビンミルミョン1つください。'
      },
      map: '밀면'
    },
    {
      id: 'busan-gwangalli',
      city: 'busan',
      cat: 'go',
      ko: '광안리 해변 야경',
      name: { en: 'Gwangalli Beach at night', ja: '広安里ビーチの夜景' },
      area: { ko: '수영구', en: 'Suyeong-gu', ja: '水営区' },
      locals: 5,
      tourists: 3,
      price: 'free',
      why: {
        ko: '바다 위로 광안대교 불빛이 켜져요. 부산 사람들은 저녁 나들이로 해운대보다 광안리를 골라요.',
        en: 'Gwangan Bridge lights up over the water. Locals choose Gwangalli for evenings out over Haeundae.',
        ja: '海の上に広安大橋が光ります。地元の人は夜遊びなら海雲台より広安里を選びます。'
      },
      tips: {
        ko: ['편의점 간식을 사서 모래사장에 앉아 보세요.', '주말엔 드론 라이트쇼가 있는지 확인하세요.'],
        en: [
          'Sit on the sand with snacks from a convenience store.',
          'Check for drone light shows on weekends.'
        ],
        ja: ['コンビニでおつまみを買って砂浜に座りましょう。', '週末はドローンショーの開催をチェック。']
      },
      order: {
        ko: '광안리 해변 가는 버스 어디서 타요?',
        en: 'Where do I catch the bus to Gwangalli Beach?',
        ja: '広安里ビーチ行きのバスはどこで乗れますか？'
      },
      insteadOf: { ko: '저녁의 해운대', en: 'Haeundae for a night out', ja: '夜の海雲台' },
      map: '광안리해수욕장',
      lat: 35.1532,
      lng: 129.1186
    },
    {
      id: 'busan-songjeong',
      city: 'busan',
      cat: 'go',
      ko: '송정해수욕장',
      name: { en: 'Songjeong Beach', ja: '松亭海水浴場' },
      area: { ko: '해운대구', en: 'Haeundae-gu', ja: '海雲台区' },
      locals: 4,
      tourists: 2,
      price: 'free',
      why: {
        ko: '부산 사람들이 서핑하고 산책하는 한적한 해변. 초보 서핑 강습도 쉽게 찾을 수 있어요.',
        en: 'A calmer beach where Busan locals surf and walk. Beginner surf lessons are easy to find.',
        ja: '釜山の人がサーフィンや散歩をする落ち着いたビーチ。初心者向けのサーフィン教室もあります。'
      },
      tips: {
        ko: ['해변 끝 죽도까지 해안길을 걸어 보세요.', '해변 뒷길에 카페가 늘어서 있어요.'],
        en: [
          'Walk the coastal path to Jukdo Island at one end.',
          'Cafés line the road behind the beach.'
        ],
        ja: ['ビーチの端にある竹島まで海沿いを散歩。', 'ビーチ裏の道沿いにカフェが並びます。']
      },
      order: { ko: '서핑 초보 강습 있어요?', en: 'Do you have surfing lessons for beginners?', ja: '初心者向けのサーフィン教室はありますか？' },
      map: '송정해수욕장',
      lat: 35.1786,
      lng: 129.1997
    },
    {
      id: 'busan-kids-maritime',
      city: 'busan',
      cat: 'kids',
      ko: '국립해양박물관',
      name: { en: 'National Maritime Museum', ja: '国立海洋博物館' },
      area: { ko: '영도구', en: 'Yeongdo-gu', ja: '影島区' },
      locals: 5,
      tourists: 1,
      price: 'free',
      why: {
        ko: '바닷가의 무료 박물관. 작은 수족관 터널과 배 모형이 있어 비 오는 날 가족들이 와요.',
        en: 'A free museum by the sea with a small aquarium tunnel and ship models. Busan families come on rainy days.',
        ja: '海辺にある無料の博物館。小さな水槽トンネルや船の模型があり、雨の日の家族連れに人気。'
      },
      tips: {
        ko: ['월요일은 휴관이에요.', '영도 바다 카페와 함께 가세요.'],
        en: ['Closed on Mondays.', 'Combine with the Yeongdo seaside cafés.'],
        ja: ['月曜休館です。', '影島の海辺カフェとセットで。']
      },
      order: { ko: '국립해양박물관으로 가 주세요.', en: 'To the National Maritime Museum, please.', ja: '国立海洋博物館までお願いします。' },
      map: '국립해양박물관',
      lat: 35.0785,
      lng: 129.0805
    },
    {
      id: 'busan-kids-citizens',
      city: 'busan',
      cat: 'kids',
      ko: '부산시민공원',
      name: { en: 'Busan Citizens Park', ja: '釜山市民公園' },
      area: { ko: '부산진구', en: 'Busanjin-gu', ja: '釜山鎮区' },
      locals: 5,
      tourists: 1,
      price: 'free',
      why: {
        ko: '옛 미군 기지를 바꾼 큰 공원. 물놀이터, 잔디밭, 놀이터가 있어요.',
        en: 'A former US Army base turned into a big city park with water play areas, lawns and playgrounds.',
        ja: '元米軍基地を整備した大きな公園。水遊び場、芝生、遊具がそろっています。'
      },
      tips: {
        ko: ['물놀이터는 보통 여름에 열어요.', '전포카페거리가 가까워요.'],
        en: [
          'Water play areas usually open in summer.',
          'Jeonpo Café Street is close by.'
        ],
        ja: ['水遊び場はふつう夏に開放。', '田浦カフェ通りもすぐ近く。']
      },
      order: { ko: '부산시민공원으로 가 주세요.', en: 'To Busan Citizens Park, please.', ja: '釜山市民公園までお願いします。' },
      map: '부산시민공원',
      lat: 35.1683,
      lng: 129.057
    },
    {
      id: 'busan-beomeosa',
      city: 'busan',
      cat: 'tradition',
      ko: '범어사',
      name: { en: 'Beomeosa Temple', ja: '梵魚寺' },
      area: { ko: '금정구', en: 'Geumjeong-gu', ja: '金井区' },
      locals: 4,
      tourists: 2,
      price: 'free',
      why: {
        ko: '1,300년 된 산사. 부산 사람들이 산책하고 기도하러 오고, 템플스테이도 할 수 있어요.',
        en: 'A 1,300-year-old mountain temple where Busan people come to walk and pray. Temple stays are available.',
        ja: '1300年の歴史がある山寺。釜山の人が散策やお参りに訪れ、テンプルステイも体験できます。'
      },
      tips: {
        ko: ['지하철 범어사역에서 버스나 택시로 조금 가요.', '법당 근처에선 조용히 해 주세요.'],
        en: [
          'Take the subway to Beomeosa Station, then a short bus or taxi.',
          'Speak quietly near the halls.'
        ],
        ja: ['地下鉄で梵魚寺駅まで行き、バスかタクシーで。', 'お堂の近くでは静かに。']
      },
      order: { ko: '범어사로 가 주세요.', en: 'To Beomeosa Temple, please.', ja: '梵魚寺までお願いします。' },
      map: '범어사',
      lat: 35.2838,
      lng: 129.0687
    },
    {
      id: 'busan-dongnae',
      city: 'busan',
      cat: 'tradition',
      ko: '동래온천',
      name: { en: 'Dongnae hot springs', ja: '東莱温泉' },
      area: { ko: '동래구', en: 'Dongnae-gu', ja: '東莱区' },
      locals: 5,
      tourists: 1,
      price: '₩',
      why: {
        ko: '한국의 오래된 온천 마을. 현지인은 대중목욕탕에서 몸을 담가요. 가장 한국적인 휴식법이에요.',
        en: 'Korea’s old hot-spring town. Locals soak in public bathhouses, a very Korean way to relax.',
        ja: '韓国の古い温泉街。地元の人は銭湯でゆっくり湯につかります。韓国らしいリラックス法。'
      },
      tips: {
        ko: ['대중탕은 남녀 구분이고 수영복 없이 들어가요.', '부끄러우면 밖의 무료 족욕탕부터 해 보세요.'],
        en: [
          'Public baths are separated by gender, and you bathe without a swimsuit.',
          'Try a free foot bath outside if you are shy.'
        ],
        ja: ['大浴場は男女別で、水着なしで入ります。', '恥ずかしければ屋外の無料足湯から。']
      },
      order: { ko: '목욕 한 명이요.', en: 'Bath entry for one, please.', ja: '入浴を1人お願いします。' },
      map: '동래온천',
      lat: 35.2206,
      lng: 129.0827
    },
    {
      id: 'busan-eomuk',
      city: 'busan',
      cat: 'specialty',
      ko: '부산어묵',
      name: { en: 'Busan fish cakes (eomuk)', ja: '釜山オムク（練り物）' },
      area: { ko: '영도구 등 부산 곳곳', en: 'Yeongdo-gu and all over Busan', ja: '影島区ほか釜山各地' },
      locals: 5,
      tourists: 3,
      price: '₩',
      why: {
        ko: '부산은 한국 어묵의 본고장. 현지인은 진공포장 선물세트를 사 가요.',
        en: 'Busan is the home of Korean fish cakes. Locals buy vacuum-packed gift boxes to take home.',
        ja: '釜山は韓国オムクの本場。地元の人は真空パックのギフトセットをお土産に買います。'
      },
      tips: {
        ko: ['매장에서 따끈한 어묵 고로케부터 드세요.', '진공포장은 캐리어에 넣어 가기 좋아요.'],
        en: [
          'Eat a hot fish-cake croquette in the shop first.',
          'Vacuum packs travel well in a suitcase.'
        ],
        ja: ['まずお店で熱々のオムクコロッケを。', '真空パックならスーツケースで持ち帰れます。']
      },
      order: { ko: '선물용 어묵 세트 주세요.', en: 'A fish-cake gift set, please.', ja: 'お土産用のオムクセットをください。' },
      map: '삼진어묵 본점',
      lat: 35.0916,
      lng: 129.0429
    },

    /* ───────────── 전주 ───────────── */
    {
      id: 'jeonju-nambu',
      city: 'jeonju',
      cat: 'eat',
      ko: '남부시장',
      name: { en: 'Nambu Market', ja: '南部市場' },
      area: { ko: '완산구', en: 'Wansan-gu', ja: '完山区' },
      locals: 5,
      tourists: 3,
      price: '₩',
      why: {
        ko: '전주 사람들은 여기서 콩나물국밥으로 하루를 시작해요. 옥상 청년몰과 주말 야시장도 재밌어요.',
        en: 'Locals start the day here with bean-sprout soup. The rooftop youth mall and the weekend night market are fun too.',
        ja: '地元の人はここでコンナムルクッパを食べて一日を始めます。屋上の青年モールや週末の夜市も楽しい。'
      },
      tips: {
        ko: ['국밥은 이른 아침에 가세요.', '야시장은 주말 저녁에 열려요.'],
        en: [
          'Come early in the morning for gukbap.',
          'The night market runs on weekend evenings.'
        ],
        ja: ['クッパは朝早くがおすすめ。', '夜市は週末の夕方から。']
      },
      order: { ko: '콩나물국밥 하나 주세요.', en: 'One bean-sprout rice soup, please.', ja: 'コンナムルクッパを1つください。' },
      map: '전주 남부시장',
      lat: 35.813,
      lng: 127.145
    },
    {
      id: 'jeonju-gamaek',
      city: 'jeonju',
      cat: 'eat',
      ko: '전주 가맥집',
      name: { en: 'Gamaek: corner-store beer', ja: 'カメク（商店ビール）' },
      area: { ko: '전주 시내 곳곳', en: 'Around Jeonju city center', ja: '全州の中心部' },
      locals: 5,
      tourists: 2,
      price: '₩',
      why: {
        ko: '"가맥"은 가게에서 마시는 맥주. 전주 사람들은 병맥주에 구운 황태를 비법 소스에 찍어 먹어요.',
        en: '"Gamaek" means beer at a corner shop. Jeonju locals drink bottled beer with grilled dried pollack and a secret dipping sauce.',
        ja: '「カメク」は商店で飲むビールのこと。全州の人は瓶ビールと焼いた干しダラを、秘伝のタレで楽しみます。'
      },
      tips: {
        ko: ['관광 상품이 아니라 동네 문화예요. 편하게 앉으세요.', '황태와 계란말이를 시키세요.'],
        en: [
          'It is a local tradition, not a tourist show. Just sit down.',
          'Order hwangtae (dried pollack) and an egg roll.'
        ],
        ja: ['観光向けではない地元の文化。気軽に座りましょう。', 'ファンテ（干しダラ）と卵焼きを注文。']
      },
      order: {
        ko: '황태 하나랑 맥주 두 병 주세요.',
        en: 'One dried pollack and two bottles of beer, please.',
        ja: 'ファンテ1つとビール2本ください。'
      },
      map: '전주 가맥'
    },
    {
      id: 'jeonju-gaekri',
      city: 'jeonju',
      cat: 'cafe',
      ko: '객리단길',
      name: { en: 'Gaekridan-gil', ja: '客里団ギル' },
      area: { ko: '전주객사 주변', en: 'Near Jeonju Gaeksa', ja: '全州客舎の周辺' },
      locals: 5,
      tourists: 2,
      price: '₩₩',
      why: {
        ko: '옛 객사 주변에 작은 카페와 식당이 모인 거리. 전주 젊은이들은 한옥마을 대신 여기로 와요.',
        en: 'Small cafés and restaurants around the old guesthouse hall. This is where young Jeonju locals go instead of Hanok Village.',
        ja: '古い客舎の周りに小さなカフェやレストランが集まる通り。全州の若者は韓屋村ではなくここに来ます。'
      },
      tips: {
        ko: ['한옥마을에서 걸어서 15분 정도예요.', '아침보다 저녁이 활기차요.'],
        en: [
          'A 15-minute walk from Hanok Village.',
          'Evenings are livelier than mornings.'
        ],
        ja: ['韓屋村から徒歩15分ほど。', '朝より夜のほうがにぎやか。']
      },
      order: { ko: '여기 시그니처 메뉴가 뭐예요?', en: 'What is your signature menu?', ja: 'ここの看板メニューは何ですか？' },
      insteadOf: { ko: '한옥마을 메인 거리', en: 'Main street of Hanok Village', ja: '韓屋村のメインストリート' },
      map: '객리단길',
      lat: 35.8197,
      lng: 127.1439
    },
    {
      id: 'jeonju-seohak',
      city: 'jeonju',
      cat: 'cafe',
      ko: '서학동 예술마을',
      name: { en: 'Seohak-dong Art Village', ja: '西学洞芸術村' },
      area: { ko: '한옥마을 건너편 천변', en: 'Across the stream from Hanok Village', ja: '韓屋村から川を渡った先' },
      locals: 4,
      tourists: 2,
      price: '₩₩',
      why: {
        ko: '예술가들이 운영하는 작은 갤러리, 책방, 카페가 있는 조용한 동네. 인파를 피해 쉬어 가기 좋아요.',
        en: 'Quiet streets with small galleries, bookshops and cafés run by artists. A calm break from the crowds.',
        ja: 'アーティストが営む小さなギャラリーや本屋、カフェが並ぶ静かな街。人混みから離れてひと休み。'
      },
      tips: {
        ko: ['한옥마을에서 남천교를 건너면 바로예요.', '월요일에 쉬는 갤러리도 있어요.'],
        en: [
          'Cross Namcheon Bridge from Hanok Village.',
          'Some galleries close on Mondays.'
        ],
        ja: ['韓屋村から南川橋を渡ってすぐ。', '月曜休みのギャラリーもあります。']
      },
      order: { ko: '들어가서 구경해도 돼요?', en: 'May I come in and look around?', ja: '中を見てもいいですか？' },
      map: '서학동 예술마을',
      lat: 35.8105,
      lng: 127.1505
    },
    {
      id: 'jeonju-kongnamul',
      city: 'jeonju',
      cat: 'musteat',
      ko: '콩나물국밥',
      name: { en: 'Kongnamul-gukbap (bean-sprout soup)', ja: 'コンナムルクッパ' },
      area: { ko: '전주 어디든', en: 'All over Jeonju', ja: '全州のいたるところ' },
      locals: 5,
      tourists: 3,
      price: '₩',
      why: {
        ko: '전주의 아침밥이자 해장국. 한옥마을 비빔밥의 절반도 안 되는 값이에요.',
        en: 'Jeonju’s breakfast and hangover cure. It costs less than half of a Hanok Village bibimbap.',
        ja: '全州の朝ごはん兼二日酔い対策。韓屋村のビビンバの半額以下で食べられます。'
      },
      tips: {
        ko: ['수란이 따로 나와요. 국물 몇 숟가락과 김을 넣어 드세요.', '이른 아침부터 여는 집이 많아요.'],
        en: [
          'It comes with a soft-poached egg (suran). Add a few spoons of broth and seaweed to it.',
          'Many shops open early in the morning.'
        ],
        ja: ['半熟卵（スラン）が付いてきます。スープ数さじと海苔を入れて食べて。', '朝早くから開いている店が多いです。']
      },
      order: {
        ko: '콩나물국밥 하나 주세요. 덜 맵게 해 주세요.',
        en: 'One bean-sprout soup, please. Less spicy, please.',
        ja: 'コンナムルクッパ1つください。辛さ控えめでお願いします。'
      },
      insteadOf: { ko: '한옥마을의 비싼 비빔밥', en: 'Expensive bibimbap in Hanok Village', ja: '韓屋村の高いビビンバ' },
      map: '전주 콩나물국밥'
    },
    {
      id: 'jeonju-pisundae',
      city: 'jeonju',
      cat: 'musteat',
      ko: '피순대',
      name: { en: 'Pi-sundae (Jeonju blood sausage)', ja: 'ピスンデ（全州の腸詰め）' },
      area: { ko: '남부시장', en: 'Nambu Market', ja: '南部市場' },
      locals: 4,
      tourists: 2,
      price: '₩',
      why: {
        ko: '전주가 유명한 진한 피순대. 현지인은 국밥, 소주 한 병과 함께 먹어요.',
        en: 'A richer style of Korean sausage that Jeonju is known for. Locals eat it with soup and a bottle of soju.',
        ja: '全州名物の濃厚な腸詰め。地元の人はスープと焼酎と一緒に食べます。'
      },
      tips: {
        ko: ['한 접시가 부담되면 순대국밥으로 드세요.', '인기 가게는 점심에 줄을 서요.'],
        en: [
          'Try it in a sundae-gukbap if the plate feels like too much.',
          'Popular shops have lines at lunch.'
        ],
        ja: ['1皿が多ければスンデクッパで。', '人気店は昼に行列ができます。']
      },
      order: { ko: '피순대 작은 거 하나 주세요.', en: 'One small plate of pi-sundae, please.', ja: 'ピスンデの小を1つください。' },
      map: '남부시장 피순대'
    },
    {
      id: 'jeonju-deokjin',
      city: 'jeonju',
      cat: 'go',
      ko: '덕진공원',
      name: { en: 'Deokjin Park', ja: '徳津公園' },
      area: { ko: '덕진구', en: 'Deokjin-gu', ja: '徳津区' },
      locals: 5,
      tourists: 1,
      price: 'free',
      why: {
        ko: '현지인이 저녁 산책하는 큰 연못 공원. 여름이면 연꽃이 물을 덮어요.',
        en: 'A big lotus pond where locals walk in the evening. In summer the lotus flowers cover the water.',
        ja: '地元の人が夕方に散歩する大きな蓮池。夏には水面が蓮の花でいっぱいに。'
      },
      tips: {
        ko: ['연꽃은 보통 7~8월이 절정이에요.', '시내에서 택시로 금방이에요.'],
        en: [
          'Lotus season is usually July to August.',
          'Take a short taxi ride from the city center.'
        ],
        ja: ['蓮の見頃はだいたい7〜8月。', '中心部からタクシーですぐ。']
      },
      order: { ko: '덕진공원으로 가 주세요.', en: 'To Deokjin Park, please.', ja: '徳津公園までお願いします。' },
      map: '덕진공원',
      lat: 35.847,
      lng: 127.122
    },
    {
      id: 'jeonju-arboretum',
      city: 'jeonju',
      cat: 'go',
      ko: '전주수목원',
      name: { en: 'Jeonju Arboretum', ja: '全州樹木園' },
      area: { ko: '덕진구', en: 'Deokjin-gu', ja: '徳津区' },
      locals: 4,
      tourists: 1,
      price: 'free',
      why: {
        ko: '주말에 현지인이 꽃과 그늘을 즐기러 오는 조용한 정원. 단체 관광객이 거의 없어요.',
        en: 'A quiet garden that locals visit on weekends for flowers and shade. Almost no tour groups.',
        ja: '週末に地元の人が花と木陰を楽しみに来る静かな庭園。団体客はほとんどいません。'
      },
      tips: {
        ko: ['쉬는 날이 있으니 가기 전에 확인하세요.', '여름엔 물을 챙기세요.'],
        en: [
          'Closed on some holidays; check before you go.',
          'Bring water in summer.'
        ],
        ja: ['休園日があるので事前に確認を。', '夏は飲み物を持参しましょう。']
      },
      order: { ko: '전주수목원으로 가 주세요.', en: 'To Jeonju Arboretum, please.', ja: '全州樹木園までお願いします。' },
      map: '한국도로공사 전주수목원',
      lat: 35.865,
      lng: 127.058
    },
    {
      id: 'jeonju-kids-zoo',
      city: 'jeonju',
      cat: 'kids',
      ko: '전주동물원',
      name: { en: 'Jeonju Zoo', ja: '全州動物園' },
      area: { ko: '덕진구', en: 'Deokjin-gu', ja: '徳津区' },
      locals: 5,
      tourists: 1,
      price: '₩',
      why: {
        ko: '전주 가족들이 좋아하는 작고 저렴한 동물원. 어린아이와 반나절이면 충분해요.',
        en: 'A small, low-cost zoo that Jeonju families love. Easy to do in half a day with young kids.',
        ja: '全州の家族に愛される、小さくて安い動物園。小さな子ども連れでも半日で回れます。'
      },
      tips: {
        ko: ['덕진공원이 가까워요.', '봄에는 동물원 길이 벚꽃길이 돼요.'],
        en: [
          'Deokjin Park is a short ride away.',
          'Spring cherry blossoms line the zoo roads.'
        ],
        ja: ['徳津公園も近くです。', '春は園内の道が桜並木になります。']
      },
      order: { ko: '어른 둘, 아이 하나요.', en: 'Two adults and one child, please.', ja: '大人2人、子ども1人です。' },
      map: '전주동물원',
      lat: 35.8565,
      lng: 127.143
    },
    {
      id: 'jeonju-gyeonggijeon',
      city: 'jeonju',
      cat: 'tradition',
      ko: '경기전',
      name: { en: 'Gyeonggijeon Shrine', ja: '慶基殿' },
      area: { ko: '한옥마을', en: 'Hanok Village', ja: '韓屋村' },
      locals: 4,
      tourists: 3,
      price: '₩',
      why: {
        ko: '조선을 세운 태조의 어진을 모신 곳. 대나무 숲은 북적이는 한옥마을 속 조용한 쉼터예요.',
        en: 'The shrine holding the portrait of King Taejo, founder of the Joseon dynasty. Its bamboo grove is a calm spot inside busy Hanok Village.',
        ja: '朝鮮王朝を開いた太祖の肖像画を祀る祠堂。竹林が美しく、にぎやかな韓屋村の中の静かな場所。'
      },
      tips: {
        ko: ['문 열자마자 가면 대숲을 독차지할 수 있어요.', '바로 밖에 한복 대여점이 있어요.'],
        en: [
          'Go right at opening to have the bamboo grove to yourself.',
          'Hanbok rental shops are just outside.'
        ],
        ja: ['開門直後なら竹林を独り占めできます。', 'すぐ外に韓服レンタル店があります。']
      },
      order: { ko: '어른 두 명이요.', en: 'Two adults, please.', ja: '大人2人です。' },
      map: '경기전',
      lat: 35.8152,
      lng: 127.1497
    },
    {
      id: 'jeonju-hanji',
      city: 'jeonju',
      cat: 'tradition',
      ko: '한지 만들기 체험',
      name: { en: 'Hanji paper-making class', ja: '韓紙づくり体験' },
      area: { ko: '한옥마을', en: 'Hanok Village', ja: '韓屋村' },
      locals: 3,
      tourists: 2,
      price: '₩₩',
      why: {
        ko: '전주는 수백 년 동안 한지를 만들어 온 도시. 직접 종이나 작은 공예품을 만들어 가져가요.',
        en: 'Jeonju has made hanji, traditional mulberry paper, for centuries. Make your own sheet or a small craft to take home.',
        ja: '全州は何百年も韓紙（楮の伝統紙）を作ってきた町。自分で紙や小物を作って持ち帰れます。'
      },
      tips: {
        ko: ['주말 체험은 하루 전에 예약하세요.', '6살 정도부터 아이도 할 수 있어요.'],
        en: [
          'Book a day ahead for weekend classes.',
          'Good for kids from about age 6.'
        ],
        ja: ['週末の体験は前日までに予約を。', '6歳くらいから子どもも楽しめます。']
      },
      order: { ko: '한지 체험 두 명 가능해요?', en: 'Can two people join the hanji class?', ja: '韓紙体験、2人できますか？' },
      map: '전주 한지 체험',
      lat: 35.815,
      lng: 127.153
    },
    {
      id: 'jeonju-chocopie',
      city: 'jeonju',
      cat: 'specialty',
      ko: '전주 수제 초코파이',
      name: { en: 'Jeonju handmade choco pie', ja: '全州の手作りチョコパイ' },
      area: { ko: '전주 시내', en: 'Downtown Jeonju', ja: '全州市内' },
      locals: 4,
      tourists: 4,
      price: '₩₩',
      why: {
        ko: '한국 국민 과자를 두툼하게 손으로 만든 전주 명물. 잼과 크림이 들어 있고, 한국인도 줄 서서 상자째 사요.',
        en: 'A thick, handmade version of the famous Korean snack, filled with jam and cream. Koreans line up to buy boxes as gifts.',
        ja: '韓国の定番お菓子を分厚く手作りした全州名物。ジャムとクリーム入りで、韓国人も箱買いしてお土産にします。'
      },
      tips: {
        ko: ['여름엔 초콜릿이 녹으니 시원하게 보관하세요.', '달콤한 약재 술 모주도 전주 기념품이에요.'],
        en: [
          'Keep them cool in summer; the chocolate melts.',
          'Moju, a sweet herbal rice drink, is the other Jeonju souvenir.'
        ],
        ja: ['夏はチョコが溶けるので涼しい場所で保管。', '甘い薬草入りのお酒「モジュ」も全州のお土産。']
      },
      order: { ko: '초코파이 한 상자 주세요.', en: 'One box of choco pies, please.', ja: 'チョコパイを1箱ください。' },
      map: '풍년제과 본점',
      lat: 35.8183,
      lng: 127.146
    },

    /* ───────────── 경주 ───────────── */
    {
      id: 'gyeongju-seongdong',
      city: 'gyeongju',
      cat: 'eat',
      ko: '성동시장',
      name: { en: 'Seongdong Market', ja: '城東市場' },
      area: { ko: '옛 경주역 근처', en: 'Near old Gyeongju Station', ja: '旧慶州駅の近く' },
      locals: 5,
      tourists: 2,
      price: '₩',
      why: {
        ko: '한식뷔페로 유명한 시장. 긴 반찬 진열대에서 저렴한 한 가격에 골라 먹어요.',
        en: 'Known for its Korean buffet stalls: pick from a long counter of side dishes for one low price.',
        ja: '韓国式ビュッフェの屋台で有名。長いカウンターに並ぶおかずを、手頃な一律料金で選べます。'
      },
      tips: {
        ko: ['반찬이 신선한 점심시간에 가세요.', '먼저 계산하고 담아 먹어요.'],
        en: [
          'Go at lunchtime when the dishes are fresh.',
          'Pay first, then fill your plate.'
        ],
        ja: ['おかずが新しいお昼どきがおすすめ。', '先に支払ってから盛り付けます。']
      },
      order: { ko: '한식뷔페 한 명이요.', en: 'Korean buffet for one, please.', ja: '韓国式ビュッフェ、1人です。' },
      map: '경주 성동시장',
      lat: 35.8435,
      lng: 129.214
    },
    {
      id: 'gyeongju-gampo',
      city: 'gyeongju',
      cat: 'eat',
      ko: '감포항 물회',
      name: { en: 'Mulhoe at Gampo Port', ja: '甘浦港のムルフェ' },
      area: { ko: '동해안 감포읍', en: 'Gampo-eup, east coast', ja: '東海岸 甘浦邑' },
      locals: 4,
      tourists: 1,
      price: '₩₩',
      why: {
        ko: '작은 어항에서 먹는 시원하고 매콤한 물회. 경주 사람들은 이걸 먹으러 바다까지 가요.',
        en: 'Cold, spicy raw-fish soup at a small fishing port. Gyeongju locals drive to the coast for it.',
        ja: '小さな漁港で食べる、冷たくてピリ辛の刺身スープ。慶州の人はこれを食べに海まで車を走らせます。'
      },
      tips: {
        ko: ['회와 육수를 섞은 다음 국수나 밥을 넣어요.', '양남 해안 산책과 함께 가세요.'],
        en: [
          'Mix the fish with the broth, then add noodles or rice.',
          'Combine with the Yangnam coastal trail.'
        ],
        ja: ['刺身とスープを混ぜてから、麺かご飯を入れて。', '陽南の海沿い散策とセットで。']
      },
      order: { ko: '물회 두 개 주세요.', en: 'Two mulhoe, please.', ja: 'ムルフェを2つください。' },
      map: '감포항 물회',
      lat: 35.804,
      lng: 129.505
    },
    {
      id: 'gyeongju-bomun',
      city: 'gyeongju',
      cat: 'cafe',
      ko: '보문호수 카페',
      name: { en: 'Bomun Lake cafés', ja: '普門湖のカフェ' },
      area: { ko: '보문관광단지', en: 'Bomun Tourist Complex', ja: '普門観光団地' },
      locals: 4,
      tourists: 3,
      price: '₩₩',
      why: {
        ko: '호숫가 카페와 호수를 도는 산책길. 봄에는 호수 둘레가 벚꽃으로 가득해요.',
        en: 'Lakeside cafés with a walking path around the water. In spring the whole lake is lined with cherry blossoms.',
        ja: '湖畔のカフェと湖を一周する散歩道。春は湖のまわりが桜でいっぱいになります。'
      },
      tips: {
        ko: ['커피를 마신 뒤 호숫길을 걸어 보세요.', '벚꽃은 보통 4월 초가 절정이에요.'],
        en: [
          'Walk part of the lake loop after coffee.',
          'Cherry blossoms usually peak in early April.'
        ],
        ja: ['コーヒーの後は湖の散歩道へ。', '桜の見頃は例年4月上旬。']
      },
      order: { ko: '창가 자리 있어요?', en: 'Is there a window seat?', ja: '窓際の席はありますか？' },
      map: '보문호수 카페',
      lat: 35.8425,
      lng: 129.287
    },
    {
      id: 'gyeongju-yangnam-cafe',
      city: 'gyeongju',
      cat: 'cafe',
      ko: '양남 바다 카페',
      name: { en: 'Yangnam seaside cafés', ja: '陽南の海辺カフェ' },
      area: { ko: '동해안 양남면', en: 'Yangnam-myeon, east coast', ja: '東海岸 陽南面' },
      locals: 4,
      tourists: 1,
      price: '₩₩',
      why: {
        ko: '시내 인파에서 벗어난 조용한 동해안 오션뷰 카페예요.',
        en: 'Ocean-view cafés on the quiet east coast, far from the crowds downtown.',
        ja: '市内の人混みから離れた、静かな東海岸のオーシャンビューカフェ。'
      },
      tips: {
        ko: ['택시나 차가 필요해요.', '주상절리 산책길과 함께 가세요.'],
        en: [
          'You will need a taxi or car.',
          'Pair it with the columnar joint trail.'
        ],
        ja: ['タクシーか車が必要です。', '柱状節理の散策路とセットで。']
      },
      order: { ko: '바다 보이는 자리 있어요?', en: 'Do you have a seat with a sea view?', ja: '海が見える席はありますか？' },
      map: '양남 카페',
      lat: 35.693,
      lng: 129.477
    },
    {
      id: 'gyeongju-ssambap',
      city: 'gyeongju',
      cat: 'musteat',
      ko: '쌈밥',
      name: { en: 'Ssambap (leaf-wrap rice set)', ja: 'サムパプ（葉包みご飯定食）' },
      area: { ko: '대릉원 주변', en: 'Near Daereungwon tombs', ja: '大陵苑の周辺' },
      locals: 4,
      tourists: 4,
      price: '₩₩',
      why: {
        ko: '반찬이 가득한 상에 신선한 잎채소로 밥과 고기를 싸 먹는 정식. 한국 가족 여행에서도 단골 메뉴예요.',
        en: 'A table full of side dishes and fresh leaves to wrap rice and meat in. A Gyeongju classic for Korean families too.',
        ja: 'たくさんのおかずと新鮮な葉野菜でご飯と肉を包んで食べる定食。韓国の家族旅行でも定番。'
      },
      tips: {
        ko: ['보통 2인분부터 주문해요.', '쌈마다 쌈장을 조금씩 올리세요.'],
        en: [
          'Usually ordered for 2 or more people.',
          'Put a bit of ssamjang paste in each wrap.'
        ],
        ja: ['ふつうは2人前から注文します。', '包むたびにサムジャンを少しのせて。']
      },
      order: { ko: '쌈밥 정식 2인분 주세요.', en: 'Ssambap set for two, please.', ja: 'サムパプ定食を2人前ください。' },
      map: '경주 쌈밥',
      lat: 35.838,
      lng: 129.212
    },
    {
      id: 'gyeongju-wolji',
      city: 'gyeongju',
      cat: 'go',
      ko: '동궁과 월지 야경',
      name: { en: 'Donggung Palace & Wolji Pond at night', ja: '東宮と月池の夜景' },
      area: { ko: '인왕동', en: 'Inwang-dong', ja: '仁旺洞' },
      locals: 4,
      tourists: 4,
      price: '₩',
      why: {
        ko: '한국 사람들은 해가 진 뒤에 와요. 불 밝힌 누각이 연못에 비칠 때가 핵심이라 낮에 가면 아까워요.',
        en: 'Koreans come here after sunset, when the pavilions are lit and reflected in the pond. Daytime visits miss the point.',
        ja: '韓国人は日が沈んでから訪れます。ライトアップされた楼閣が池に映る姿が見どころ。昼に行くのはもったいない。'
      },
      tips: {
        ko: ['해 지기 직전에 도착해 조명이 켜질 때까지 머무르세요.', '첨성대도 걸어서 금방이에요.'],
        en: [
          'Arrive just before sunset and stay for the lights.',
          'Cheomseongdae is a short walk away.'
        ],
        ja: ['日没直前に着いてライトアップまで待ちましょう。', '瞻星台も歩いてすぐ。']
      },
      order: { ko: '어른 두 명이요.', en: 'Two adults, please.', ja: '大人2人です。' },
      insteadOf: { ko: '한낮 방문', en: 'Visiting in the middle of the day', ja: '昼間の訪問' },
      map: '동궁과 월지',
      lat: 35.8346,
      lng: 129.2266
    },
    {
      id: 'gyeongju-jusangjeolli',
      city: 'gyeongju',
      cat: 'go',
      ko: '양남 주상절리 파도소리길',
      name: { en: 'Yangnam Columnar Joint coastal trail', ja: '陽南柱状節理 波の音の道' },
      area: { ko: '동해안 양남면', en: 'Yangnam-myeon, east coast', ja: '東海岸 陽南面' },
      locals: 4,
      tourists: 1,
      price: 'free',
      why: {
        ko: '부채처럼 펼쳐진 돌기둥을 지나는 해안 산책길. 무료이고 조용하며 외국 여행 목록엔 거의 없어요.',
        en: 'A seaside path past rock columns shaped like a fan. Free, quiet, and rarely on foreign travel lists.',
        ja: '扇のように広がる岩の柱を眺める海沿いの散策路。無料で静か、海外の旅行リストにはほとんど載っていません。'
      },
      tips: {
        ko: ['편도 1시간 정도 걸려요.', '겨울엔 바람이 세니 겉옷을 챙기세요.'],
        en: [
          'The walk takes about an hour one way.',
          'Windy in winter; bring a jacket.'
        ],
        ja: ['片道1時間ほどの散策路です。', '冬は風が強いので上着を。']
      },
      order: {
        ko: '주상절리 파도소리길로 가 주세요.',
        en: 'To the Columnar Joint coastal trail, please.',
        ja: '柱状節理の波の音の道までお願いします。'
      },
      map: '경주 양남 주상절리',
      lat: 35.6921,
      lng: 129.4776
    },
    {
      id: 'gyeongju-kids-world',
      city: 'gyeongju',
      cat: 'kids',
      ko: '경주월드',
      name: { en: 'Gyeongju World', ja: '慶州ワールド' },
      area: { ko: '보문관광단지', en: 'Bomun Tourist Complex', ja: '普門観光団地' },
      locals: 5,
      tourists: 2,
      price: '₩₩₩',
      why: {
        ko: '한국 수학여행과 가족이 오는 놀이공원. 어린이 구역과 청소년용 큰 롤러코스터가 있어요.',
        en: 'The amusement park Korean school trips and families come to, with a kids’ zone and big roller coasters for teens.',
        ja: '韓国の修学旅行や家族連れが訪れる遊園地。子ども向けエリアと、中高生向けの大型コースターがあります。'
      },
      tips: {
        ko: ['방학이 아닌 평일이 한산해요.', '바로 옆이 보문호수 카페 거리예요.'],
        en: [
          'Weekdays outside school holidays are quietest.',
          'Bomun Lake cafés are next door.'
        ],
        ja: ['学校の休み以外の平日が空いています。', '隣は普門湖のカフェエリア。']
      },
      order: {
        ko: '자유이용권 어른 둘, 아이 하나요.',
        en: 'Day passes for two adults and one child, please.',
        ja: 'フリーパス、大人2人と子ども1人です。'
      },
      map: '경주월드',
      lat: 35.8353,
      lng: 129.2808
    },
    {
      id: 'gyeongju-kids-museum',
      city: 'gyeongju',
      cat: 'kids',
      ko: '국립경주박물관',
      name: { en: 'Gyeongju National Museum', ja: '国立慶州博物館' },
      area: { ko: '인왕동', en: 'Inwang-dong', ja: '仁旺洞' },
      locals: 4,
      tourists: 3,
      price: 'free',
      why: {
        ko: '신라 금관이 가득한 무료 박물관. 어린이박물관과 야외의 큰 범종도 있어요.',
        en: 'Free museum full of Silla gold crowns, with a children’s museum and a giant bronze bell outside.',
        ja: '新羅の金冠などが並ぶ無料の博物館。こども博物館や屋外の大きな梵鐘もあります。'
      },
      tips: {
        ko: ['동궁과 월지에서 걸어서 금방이에요.', '2시간 정도 잡으세요.'],
        en: [
          'It is a short walk from Donggung Palace and Wolji Pond.',
          'Allow two hours.'
        ],
        ja: ['東宮と月池から歩いてすぐ。', '2時間ほど見ておきましょう。']
      },
      order: { ko: '어린이박물관은 어디예요?', en: 'Where is the children’s museum?', ja: 'こども博物館はどこですか？' },
      map: '국립경주박물관',
      lat: 35.8293,
      lng: 129.2277
    },
    {
      id: 'gyeongju-gyochon',
      city: 'gyeongju',
      cat: 'tradition',
      ko: '교촌마을',
      name: { en: 'Gyochon Hanok Village', ja: '校村村（キョチョン韓屋村）' },
      area: { ko: '교동', en: 'Gyo-dong', ja: '校洞' },
      locals: 4,
      tourists: 2,
      price: 'free',
      why: {
        ko: '기와집이 모인 마을. 300년 동안 재산을 나눈 것으로 유명한 경주 최부잣집도 있어요.',
        en: 'Old tile-roofed houses, including the home of the Choi family, known for 300 years of sharing their wealth.',
        ja: '瓦屋根の古い家が並ぶ村。300年にわたって富を分け合ったことで知られる崔氏一族の家もあります。'
      },
      tips: {
        ko: ['밤에는 월정교 야경을 걸어 보세요.', '근처 황리단길보다 조용해요.'],
        en: [
          'Walk the stone bridge Woljeonggyo at night.',
          'Quieter than Hwangnidan-gil nearby.'
        ],
        ja: ['夜は月精橋のライトアップを。', '近くの皇理団通りより静かです。']
      },
      order: { ko: '교촌마을로 가 주세요.', en: 'To Gyochon Village, please.', ja: '校村村までお願いします。' },
      insteadOf: { ko: '사람 많은 황리단길', en: 'The crowds of Hwangnidan-gil', ja: '皇理団通りの人混み' },
      map: '경주 교촌마을',
      lat: 35.8295,
      lng: 129.215
    },
    {
      id: 'gyeongju-yangdong',
      city: 'gyeongju',
      cat: 'tradition',
      ko: '양동마을',
      name: { en: 'Yangdong Folk Village', ja: '良洞村' },
      area: { ko: '강동면', en: 'Gangdong-myeon', ja: '江東面' },
      locals: 4,
      tourists: 1,
      price: '₩',
      why: {
        ko: '지금도 사람들이 조선시대 집에 사는 유네스코 세계유산 마을. 꾸며낸 곳이 아니라 생활이 있어요.',
        en: 'A UNESCO-listed village where families still live in Joseon-era houses. It feels lived-in, not staged.',
        ja: '今も人が暮らす朝鮮時代の家が残る、ユネスコ世界遺産の村。観光地化されていない生活感があります。'
      },
      tips: {
        ko: ['주민이 살고 있어요. 출입금지 표시된 집엔 들어가지 마세요.', '시내에서 택시나 차로 가야 해요.'],
        en: [
          'People live here. Do not enter houses marked private.',
          'You need a taxi or car from downtown.'
        ],
        ja: ['住民が暮らしています。立入禁止の家には入らないで。', '市内からはタクシーか車で。']
      },
      order: { ko: '양동마을로 가 주세요.', en: 'To Yangdong Village, please.', ja: '良洞村までお願いします。' },
      map: '경주 양동마을',
      lat: 35.9994,
      lng: 129.2575
    },
    {
      id: 'gyeongju-hwangnam',
      city: 'gyeongju',
      cat: 'specialty',
      ko: '황남빵',
      name: { en: 'Hwangnam bread (red-bean pastry)', ja: '皇南パン（あんこ菓子）' },
      area: { ko: '경주 시내', en: 'Downtown Gyeongju', ja: '慶州市内' },
      locals: 4,
      tourists: 4,
      price: '₩₩',
      why: {
        ko: '한국인이 경주에서 실제로 사 가는 기념품. 얇은 피에 달콤한 팥이 가득해요.',
        en: 'The souvenir Koreans actually bring home from Gyeongju: thin pastry filled with sweet red bean.',
        ja: '韓国人が本当に慶州のお土産に買って帰る、薄い皮にあんこたっぷりのお菓子。'
      },
      tips: {
        ko: ['당일에 따뜻할 때 먹는 게 최고예요.', '찰보리빵도 현지인이 좋아하는 기념품이에요.'],
        en: [
          'Best eaten warm on the day.',
          'Barley bread (chalboribbang) is the other local favorite.'
        ],
        ja: ['当日に温かいうちに食べるのが一番。', 'チャルボリパン（もち麦パン）も地元の人気。']
      },
      order: { ko: '황남빵 한 상자 주세요.', en: 'One box of Hwangnam bread, please.', ja: '皇南パンを1箱ください。' },
      map: '황남빵',
      lat: 35.836,
      lng: 129.213
    }
  ],

  /* ───────────── 한국 오면 사야 할 필수템 ─────────────
   * groups 안에 가게 종류별로 나눠져 있어요. 항목 추가는 items 안에 한 덩어리 복사해서 바꾸면 됩니다.
   * ko 이름은 "직원에게 보여주기" 화면에 "○○ 어디 있어요?"로 나와요.
   */
  shopping: {
    groups: [
      {
        id: 'oliveyoung',
        ko: '올리브영',
        name: { en: 'Olive Young', ja: 'オリーブヤング' },
        intro: {
          ko: '거의 모든 길목에 있는 한국의 뷰티·헬스 스토어예요.',
          en: 'Korea’s beauty and health store, on almost every corner.',
          ja: '韓国の街角どこにでもあるビューティー＆ヘルスストア。'
        },
        tips: {
          ko: [
            '"1+1", "2+1" 표시를 찾으세요. 한국인은 이걸로 쟁여요.',
            '올영세일은 계절마다 한 번 정도 열려요 (보통 3·6·9·12월 초).',
            '여권을 챙기세요. 많은 매장에서 관광객 즉시 택스리펀이 돼요.'
          ],
          en: [
            'Look for "1+1" and "2+1" tags. Koreans stock up on these.',
            'The big Olive Young sale happens about once a season (usually early March, June, September and December).',
            'Bring your passport. Many stores offer instant tax refunds for tourists.'
          ],
          ja: [
            '「1+1」「2+1」の札を探しましょう。韓国人はこれでまとめ買いします。',
            'オリーブヤングの大型セールは季節ごとに1回ほど（例年3・6・9・12月の上旬）。',
            'パスポートを持参。多くの店舗で観光客は即時免税が受けられます。'
          ]
        },
        items: [
          {
            ko: '선크림',
            name: { en: 'Sunscreen', ja: '日焼け止め' },
            why: {
              ko: '한국인은 매일 발라요. 백탁 없는 가벼운 제품이 기본이에요.',
              en: 'Koreans wear it every day. Light formulas with no white cast are the norm.',
              ja: '韓国人は毎日塗ります。白浮きしない軽いテクスチャーが主流。'
            }
          },
          {
            ko: '마스크팩',
            name: { en: 'Sheet masks', ja: 'シートマスク' },
            why: {
              ko: '10장 묶음이 이득. 한국인에겐 특별 관리가 아니라 일상이에요.',
              en: 'Buy the 10-packs. Locals use them as a weekly routine, not a treat.',
              ja: '10枚入りがお得。韓国人にとっては特別なケアではなく習慣です。'
            }
          },
          {
            ko: '여드름 패치',
            name: { en: 'Pimple patches', ja: 'ニキビパッチ' },
            why: {
              ko: '싸고 효과가 좋아 거의 모든 한국 집에 있어요.',
              en: 'Cheap, effective and in almost every Korean bathroom.',
              ja: '安くてよく効き、韓国の家庭にはほぼ必ずある定番品。'
            }
          },
          {
            ko: '진정 크림',
            name: { en: 'Soothing (cica) cream', ja: '鎮静（シカ）クリーム' },
            why: {
              ko: '붉은기·자극에. 라벨의 "시카", "센텔라"를 찾으세요.',
              en: 'For redness and irritation. Look for "cica" or "centella" on the label.',
              ja: '赤みや肌荒れに。ラベルの「CICA」「センテラ」が目印。'
            }
          },
          {
            ko: '립 틴트',
            name: { en: 'Lip tint', ja: 'リップティント' },
            why: {
              ko: '오래가는 색, 한국인은 하루 종일 덧발라요. 테스터로 발라 보세요.',
              en: 'Long-lasting color that Koreans reapply all day. Try the testers.',
              ja: '色持ちが良く、韓国人は一日中塗り直します。テスターで試して。'
            }
          },
          {
            ko: '쿠션 파운데이션',
            name: { en: 'Cushion foundation', ja: 'クッションファンデ' },
            why: {
              ko: '쿠션 팩트는 한국이 원조. 리필이 들어 있는 경우가 많아요.',
              en: 'Korea invented the cushion compact. Refills are often included.',
              ja: 'クッションファンデは韓国発祥。リフィル付きが多いです。'
            }
          },
          {
            ko: '클렌징 오일',
            name: { en: 'Cleansing oil', ja: 'クレンジングオイル' },
            why: {
              ko: '한국식 이중 세안의 첫 단계예요.',
              en: 'The first step of the Korean double cleanse.',
              ja: '韓国式ダブル洗顔の最初のステップ。'
            }
          },
          {
            ko: '헤어 트리트먼트',
            name: { en: 'Hair treatment', ja: 'ヘアトリートメント' },
            why: {
              ko: '많은 한국인이 린스 대신 쓰는 씻어내는 트리트먼트예요.',
              en: 'Rinse-off treatments that many Koreans use instead of conditioner.',
              ja: '韓国ではコンディショナーの代わりに洗い流すトリートメントが人気。'
            }
          }
        ]
      },
      {
        id: 'pharmacy',
        ko: '약국',
        name: { en: 'Pharmacy', ja: '薬局' },
        intro: {
          ko: '"약" 간판이 표시예요. 한국 집집마다 있는 상비약을 살 수 있어요.',
          en: 'Korean pharmacies (look for 약) sell well-known home remedies that Koreans keep in every house.',
          ja: '「약」の看板が目印。韓国の家庭に必ずある定番の常備薬が買えます。'
        },
        tips: {
          ko: [
            '일반의약품이에요. 알레르기나 먹는 약이 있으면 약사에게 말하세요.',
            '라벨을 읽고 용량을 지키세요.',
            '일요일엔 쉬는 약국이 많아요. "휴일지킴이" 약국을 찾으세요.'
          ],
          en: [
            'These are over-the-counter products. Tell the pharmacist about allergies or other medicine you take.',
            'Read the label and follow the dose.',
            'Many pharmacies close on Sundays; look for a "휴일지킴이" (holiday) pharmacy.'
          ],
          ja: [
            '市販薬です。アレルギーや服用中の薬は薬剤師に伝えてください。',
            'ラベルを読み、用量を守りましょう。',
            '日曜休みの薬局が多いので「휴일지킴이（休日当番）」薬局を探して。'
          ]
        },
        items: [
          {
            ko: '케토톱',
            name: { en: 'Ketotop pain-relief patch', ja: 'ケトトップ（湿布）' },
            why: {
              ko: '어깨·무릎 통증에 붙이는 한국 대표 파스. 많이 걸은 날 인기예요.',
              en: 'The pain patch Koreans use for sore shoulders and knees. Popular after long days of walking.',
              ja: '肩や膝の痛みに貼る韓国定番の湿布。歩き疲れた日に人気。'
            }
          },
          {
            ko: '마데카솔',
            name: { en: 'Madecassol ointment', ja: 'マデカソール（軟膏）' },
            why: {
              ko: '병풀 성분이 든 작은 상처용 대표 연고예요.',
              en: 'A classic ointment for small cuts and scrapes, made with centella.',
              ja: 'ツボクサ成分入りの、すり傷や切り傷用の定番軟膏。'
            }
          },
          {
            ko: '까스활명수',
            name: { en: 'Gas Hwal Myung Su', ja: 'カスファルミョンス（胃腸ドリンク）' },
            why: {
              ko: '과식했을 때 한국인이 찾는 생약 소화제. 100년이 넘었어요.',
              en: 'A herbal digestive drink Koreans reach for after eating too much. Over 100 years old.',
              ja: '食べすぎたときに韓国人が飲む生薬の胃腸ドリンク。100年以上の歴史。'
            }
          },
          {
            ko: '쌍화탕',
            name: { en: 'Ssanghwatang herbal drink', ja: '双和湯（漢方ドリンク）' },
            why: {
              ko: '감기 기운이 있을 때 데워 마시는 한방 음료예요.',
              en: 'A warm herbal drink Koreans have when they feel a cold coming on.',
              ja: '風邪のひきはじめに韓国人が温めて飲む漢方ドリンク。'
            }
          },
          {
            ko: '겔포스',
            name: { en: 'Gelfos antacid gel', ja: 'ゲルポス（胃薬）' },
            why: {
              ko: '한 번 먹을 양씩 포장된 위장약. 매운 음식 먹은 날 유용해요.',
              en: 'An antacid gel in single-dose packs, handy for spicy-food days.',
              ja: '1回分ずつ包装された胃薬。辛い料理を食べた日に便利。'
            }
          },
          {
            ko: '판콜에이',
            name: { en: 'Pancol-A cold syrup', ja: 'パンコールA（風邪シロップ）' },
            why: {
              ko: '한국 집과 회사에 늘 있는 작은 병 감기약이에요.',
              en: 'Small bottles of cold syrup that Korean offices and homes keep on hand.',
              ja: '韓国の家庭や職場の常備品、小瓶タイプの風邪シロップ。'
            }
          }
        ]
      },
      {
        id: 'store',
        ko: '편의점',
        name: { en: 'Convenience store', ja: 'コンビニ' },
        intro: {
          ko: 'GS25, CU, 세븐일레븐이 어디에나 있어요. 한국인은 사기만 하는 게 아니라 여기서 먹기도 해요.',
          en: 'GS25, CU and 7-Eleven are everywhere. Koreans eat here, not just shop.',
          ja: 'GS25、CU、セブンイレブンがどこにでも。韓国人はここで食事もします。'
        },
        tips: {
          ko: ['온수기로 컵라면을 끓여 창가 자리에서 드세요.', '"1+1", "2+1" 행사는 매달 바뀌어요.'],
          en: [
            'Use the hot-water machine and eat ramyeon at the window counter.',
            '"1+1" and "2+1" deals change every month.'
          ],
          ja: ['お湯の機械でカップラーメンを作り、窓際カウンターで食べましょう。', '「1+1」「2+1」のお得商品は毎月変わります。']
        },
        items: [
          {
            ko: '바나나맛우유',
            name: { en: 'Banana milk', ja: 'バナナ牛乳' },
            why: {
              ko: '한국인 누구나 어릴 때부터 마신 동그란 노란 병. 가져가기보다 그 자리에서 마시세요.',
              en: 'The round yellow bottle every Korean grew up with. Drink it on the spot; it is not easy to take home.',
              ja: '韓国人なら誰もが子どもの頃から飲んできた丸い黄色のボトル。持ち帰りより、その場で飲むのが一番。'
            }
          },
          {
            ko: '불닭볶음면',
            name: { en: 'Buldak spicy noodles', ja: 'ブルダック炒め麺' },
            why: {
              ko: '아주 매운 볶음면. 까르보·치즈 맛은 조금 순해요.',
              en: 'Very spicy fried noodles. The carbonara and cheese versions are milder.',
              ja: '激辛の汁なし麺。カルボナーラ味やチーズ味は少しマイルド。'
            }
          },
          {
            ko: '허니버터칩',
            name: { en: 'Honey butter chips', ja: 'ハニーバターチップ' },
            why: {
              ko: '한때 전국에서 품절됐던 단짠 감자칩이에요.',
              en: 'Sweet and salty potato chips that once sold out across Korea.',
              ja: '一時は韓国中で品切れになった、甘じょっぱいポテトチップス。'
            }
          },
          {
            ko: '삼각김밥',
            name: { en: 'Triangle kimbap', ja: '三角キンパ' },
            why: {
              ko: '가장 싼 한 끼. 1, 2, 3 순서로 뜯어요.',
              en: 'Korea’s cheapest quick meal. Pull tabs 1, 2, 3 in order to open.',
              ja: '韓国で一番手軽なごはん。①②③の順に引いて開けます。'
            }
          },
          {
            ko: '숙취해소제',
            name: { en: 'Hangover drinks', ja: '二日酔いドリンク' },
            why: {
              ko: '한국인이 소주 마시기 전에 마셔요. 계산대 옆에 있어요.',
              en: 'Koreans drink one before a night of soju. You will see them next to the counter.',
              ja: '焼酎を飲む前に韓国人が飲むドリンク。レジ横にあります。'
            }
          }
        ]
      },
      {
        id: 'mart',
        ko: '마트',
        name: { en: 'Supermarket souvenirs', ja: 'スーパーのお土産' },
        intro: {
          ko: '이마트, 롯데마트 같은 대형마트는 한국인이 먹거리 선물을 사는 곳. 관광지보다 싸요.',
          en: 'Big marts like E-Mart and Lotte Mart are where Koreans buy food gifts. Cheaper than tourist shops.',
          ja: 'イーマートやロッテマートなどの大型スーパーは、韓国人が食品のお土産を買う場所。観光地より安いです。'
        },
        tips: {
          ko: ['대형마트는 한 달에 두 번 일요일에 쉬는 곳이 많아요.', '장바구니를 챙기거나 계산대에서 봉투를 사요.'],
          en: [
            'Many marts close on two Sundays a month. Check before you go.',
            'Bring your own bag or buy one at the counter.'
          ],
          ja: ['大型スーパーは月2回、日曜休業が多いので事前に確認を。', 'マイバッグ持参か、レジで袋を購入します。']
        },
        items: [
          {
            ko: '조미김',
            name: { en: 'Seasoned seaweed', ja: '味付け海苔' },
            why: {
              ko: '가볍고 싸고 모든 한국 집의 반찬. 묶음 팩이 이득이에요.',
              en: 'Light, cheap, and every Korean family’s side dish. Buy the multipacks.',
              ja: '軽くて安い、韓国の家庭の定番おかず。まとめ買いパックがお得。'
            }
          },
          {
            ko: '홍삼',
            name: { en: 'Red ginseng', ja: '紅参（高麗人参）' },
            why: {
              ko: '한국인이 부모님께 드리는 대표 선물. 스틱형이 들고 다니기 편해요.',
              en: 'The gift Koreans give parents. Stick packs are easy to carry.',
              ja: '韓国人が両親に贈る定番ギフト。スティックタイプが持ち運びやすい。'
            }
          },
          {
            ko: '유자차',
            name: { en: 'Yuja (citron) tea', ja: 'ゆず茶' },
            why: {
              ko: '뜨거운 물에 타 먹는 유자청. 한국의 겨울 단골이에요.',
              en: 'Citron marmalade you mix with hot water. Koreans drink it in winter.',
              ja: 'お湯で溶かして飲むゆずのマーマレード。韓国の冬の定番。'
            }
          },
          {
            ko: '믹스커피',
            name: { en: 'Instant coffee mix', ja: 'インスタントコーヒーミックス' },
            why: {
              ko: '한국 모든 사무실에 있는 달달한 스틱 커피예요.',
              en: 'Sweet coffee sticks found in every Korean office.',
              ja: '韓国のどの職場にもある甘いスティックコーヒー。'
            }
          },
          {
            ko: '약과',
            name: { en: 'Yakgwa honey cookies', ja: 'ヤックァ（伝統菓子）' },
            why: {
              ko: '젊은 층에서 다시 유행한 꿀 전통과자예요.',
              en: 'A traditional honey cookie that became a trend with young Koreans.',
              ja: '若者の間でブームになった、蜂蜜の伝統菓子。'
            }
          }
        ]
      }
    ]
  },

  /* ───────────── 메뉴판 번역기 ─────────────
   * ko: 메뉴판에 적힌 한글 · rom: 읽는 법 · spicy: 매운 정도 0~3
   * tags: 'pork'(돼지고기) 'beef'(소고기) 'chicken'(닭고기) 'seafood'(해산물)
   * unit: 주문할 때 붙는 단위 (인분, 개, 병, 잔, 줄, 마리)
   * requests: 주문할 때 함께 보여줄 요청 문장
   */
  menu: {
    groups: [
      {
        id: 'meat',
        ko: '고기·구이',
        en: 'BBQ & grill',
        ja: '焼肉',
        items: [
          {
            ko: '삼겹살',
            rom: 'samgyeopsal',
            name: { en: 'Pork belly BBQ', ja: 'サムギョプサル（豚バラ焼き）' },
            desc: {
              ko: '테이블에서 구워 먹는 두툼한 돼지 뱃살.',
              en: 'Thick pork belly you grill at the table.',
              ja: 'テーブルで焼く厚切り豚バラ。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '목살',
            rom: 'moksal',
            name: { en: 'Pork neck BBQ', ja: 'モクサル（豚肩ロース焼き）' },
            desc: {
              ko: '삼겹살보다 기름이 적고 쫄깃한 부위.',
              en: 'A leaner, chewier cut than pork belly.',
              ja: 'サムギョプサルより脂が少なく歯ごたえのある部位。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '돼지갈비',
            rom: 'dwaeji-galbi',
            name: { en: 'Marinated pork ribs', ja: 'テジカルビ（味付け豚カルビ）' },
            desc: {
              ko: '달콤한 간장 양념에 재운 돼지갈비.',
              en: 'Pork ribs in a sweet soy marinade, grilled.',
              ja: '甘い醤油ダレに漬けた豚カルビ。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '소갈비',
            rom: 'so-galbi',
            name: { en: 'Beef short ribs', ja: 'ソカルビ（牛カルビ）' },
            desc: {
              ko: '양념 또는 생으로 굽는 소갈비. 가격이 높은 편.',
              en: 'Beef short ribs, marinated or plain. On the pricey side.',
              ja: '味付けまたは塩で焼く牛カルビ。高めです。'
            },
            spicy: 0,
            tags: ['beef'],
            unit: '인분'
          },
          {
            ko: '불고기',
            rom: 'bulgogi',
            name: { en: 'Bulgogi (sweet soy beef)', ja: 'プルコギ' },
            desc: {
              ko: '달콤한 간장 양념의 얇은 소고기. 국물과 함께 익히기도.',
              en: 'Thin beef in sweet soy sauce, often cooked in a pan with broth.',
              ja: '甘い醤油味の薄切り牛肉。鍋で煮ることも。'
            },
            spicy: 0,
            tags: ['beef'],
            unit: '인분'
          },
          {
            ko: '닭갈비',
            rom: 'dak-galbi',
            name: { en: 'Spicy stir-fried chicken', ja: 'タッカルビ' },
            desc: {
              ko: '닭고기, 양배추, 떡을 고추장 양념에 볶는 철판 요리. 마지막에 볶음밥.',
              en: 'Chicken, cabbage and rice cakes stir-fried in red pepper sauce. Add fried rice at the end.',
              ja: '鶏肉・キャベツ・トッポッキを辛いタレで炒める鉄板料理。最後にポックンパを。'
            },
            spicy: 2,
            tags: ['chicken'],
            unit: '인분'
          },
          {
            ko: '곱창',
            rom: 'gopchang',
            name: { en: 'Grilled intestines', ja: 'コプチャン（ホルモン焼き）' },
            desc: {
              ko: '소주와 잘 맞는 쫄깃한 곱창구이.',
              en: 'Chewy grilled intestines, a classic with soju.',
              ja: '焼酎に合う、歯ごたえのあるホルモン焼き。'
            },
            spicy: 0,
            tags: ['beef'],
            unit: '인분'
          }
        ]
      },
      {
        id: 'soup',
        ko: '국·탕·찌개',
        en: 'Soups & stews',
        ja: 'スープ・鍋',
        items: [
          {
            ko: '김치찌개',
            rom: 'kimchi-jjigae',
            name: { en: 'Kimchi stew', ja: 'キムチチゲ' },
            desc: {
              ko: '묵은지에 돼지고기와 두부를 넣은 얼큰한 찌개.',
              en: 'Spicy stew of aged kimchi with pork and tofu.',
              ja: '熟成キムチに豚肉と豆腐を入れた辛い鍋。'
            },
            spicy: 2,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '된장찌개',
            rom: 'doenjang-jjigae',
            name: { en: 'Soybean paste stew', ja: 'テンジャンチゲ（味噌チゲ）' },
            desc: {
              ko: '두부와 채소를 넣은 구수한 된장찌개.',
              en: 'Savory soybean paste stew with tofu and vegetables.',
              ja: '豆腐と野菜が入った香ばしい味噌チゲ。'
            },
            spicy: 1,
            tags: [],
            unit: '인분'
          },
          {
            ko: '순두부찌개',
            rom: 'sundubu-jjigae',
            name: { en: 'Soft tofu stew', ja: 'スンドゥブチゲ' },
            desc: {
              ko: '매콤한 국물에 부드러운 순두부. 해산물과 달걀을 넣기도.',
              en: 'Silky tofu in a spicy broth, often with seafood and an egg.',
              ja: '辛いスープにふわふわの豆腐。魚介や卵入りも。'
            },
            spicy: 2,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '부대찌개',
            rom: 'budae-jjigae',
            name: { en: 'Army base stew', ja: 'プデチゲ' },
            desc: {
              ko: '햄, 소시지, 라면사리, 치즈를 넣은 얼큰한 찌개.',
              en: 'Spicy stew with ham, sausage, ramen noodles and cheese.',
              ja: 'ハム・ソーセージ・ラーメン・チーズ入りの辛い鍋。'
            },
            spicy: 2,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '돼지국밥',
            rom: 'dwaeji-gukbap',
            name: { en: 'Pork rice soup', ja: 'テジクッパ' },
            desc: {
              ko: '뽀얀 돼지 육수에 고기를 넣은 국밥. 부산 대표 음식.',
              en: 'Milky pork broth with sliced pork and rice. Busan’s classic.',
              ja: '白濁した豚骨スープに豚肉とご飯。釜山の名物。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '개'
          },
          {
            ko: '순대국',
            rom: 'sundae-guk',
            name: { en: 'Blood sausage soup', ja: 'スンデクッ' },
            desc: {
              ko: '돼지 육수에 순대와 내장을 넣은 국.',
              en: 'Pork broth with Korean blood sausage and offal.',
              ja: '豚スープにスンデ（腸詰め）とモツ入り。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '개'
          },
          {
            ko: '설렁탕',
            rom: 'seolleongtang',
            name: { en: 'Ox bone soup', ja: 'ソルロンタン' },
            desc: {
              ko: '맑고 순한 사골국. 소금과 파로 간을 해요.',
              en: 'Mild, milky beef bone soup. Season it with salt and green onion.',
              ja: 'まろやかな牛骨スープ。塩とネギで味を調えます。'
            },
            spicy: 0,
            tags: ['beef'],
            unit: '개'
          },
          {
            ko: '갈비탕',
            rom: 'galbitang',
            name: { en: 'Short rib soup', ja: 'カルビタン' },
            desc: { ko: '소갈비를 넣고 맑게 끓인 국.', en: 'Clear soup with beef short ribs.', ja: '牛カルビ入りの澄んだスープ。' },
            spicy: 0,
            tags: ['beef'],
            unit: '개'
          },
          {
            ko: '삼계탕',
            rom: 'samgyetang',
            name: { en: 'Ginseng chicken soup', ja: 'サムゲタン' },
            desc: {
              ko: '어린 닭 한 마리에 찹쌀과 인삼을 넣고 끓인 보양식.',
              en: 'A whole young chicken stuffed with rice and ginseng.',
              ja: '若鶏1羽にもち米と高麗人参を詰めて煮た料理。'
            },
            spicy: 0,
            tags: ['chicken'],
            unit: '개'
          },
          {
            ko: '감자탕',
            rom: 'gamjatang',
            name: { en: 'Pork bone stew', ja: 'カムジャタン' },
            desc: {
              ko: '돼지 등뼈, 감자, 시래기를 넣은 얼큰한 탕. 여럿이 나눠 먹어요.',
              en: 'Spicy stew with pork spine, potato and greens. Shared pot.',
              ja: '豚の背骨・じゃがいも・青菜の辛い鍋。みんなで分けて。'
            },
            spicy: 2,
            tags: ['pork'],
            unit: '개'
          },
          {
            ko: '해장국',
            rom: 'haejangguk',
            name: { en: 'Hangover soup', ja: 'ヘジャングク（酔い覚ましスープ）' },
            desc: {
              ko: '술 마신 다음 날 먹는 든든한 국. 선지와 배추가 들어가기도.',
              en: 'Hearty soup Koreans eat after drinking, often with ox blood and cabbage.',
              ja: '飲んだ翌日に食べるスープ。牛の血の塊や白菜入りも。'
            },
            spicy: 1,
            tags: ['beef'],
            unit: '개'
          }
        ]
      },
      {
        id: 'rice',
        ko: '밥',
        en: 'Rice dishes',
        ja: 'ご飯もの',
        items: [
          {
            ko: '비빔밥',
            rom: 'bibimbap',
            name: { en: 'Mixed rice bowl', ja: 'ビビンバ' },
            desc: {
              ko: '밥에 나물, 달걀, 고추장을 올린 음식. 비벼서 먹어요.',
              en: 'Rice with vegetables, egg and chili paste. Mix before eating.',
              ja: 'ご飯にナムル・卵・コチュジャン。混ぜて食べます。'
            },
            spicy: 1,
            tags: [],
            unit: '개'
          },
          {
            ko: '돌솥비빔밥',
            rom: 'dolsot-bibimbap',
            name: { en: 'Hot stone bibimbap', ja: '石焼ビビンバ' },
            desc: {
              ko: '뜨거운 돌솥에 담아 밥이 바삭하게 눌어요.',
              en: 'Served in a sizzling stone bowl so the rice turns crispy.',
              ja: '熱い石鍋で出てきて、おこげができます。'
            },
            spicy: 1,
            tags: [],
            unit: '개'
          },
          {
            ko: '김밥',
            rom: 'gimbap',
            name: { en: 'Seaweed rice roll', ja: 'キンパ' },
            desc: {
              ko: '김에 밥과 재료를 넣고 만 음식. 싸고 빨라요.',
              en: 'Rice and fillings rolled in seaweed. Cheap and quick.',
              ja: '海苔でご飯と具を巻いたもの。安くて早い。'
            },
            spicy: 0,
            tags: [],
            unit: '줄'
          },
          {
            ko: '제육볶음',
            rom: 'jeyuk-bokkeum',
            name: { en: 'Spicy stir-fried pork', ja: 'チェユクポックム（豚肉炒め）' },
            desc: {
              ko: '돼지고기를 고추장 양념에 볶은 밥반찬.',
              en: 'Pork stir-fried in red pepper sauce, served with rice.',
              ja: '豚肉の辛味噌炒め。ご飯と一緒に。'
            },
            spicy: 2,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '오징어볶음',
            rom: 'ojingeo-bokkeum',
            name: { en: 'Spicy stir-fried squid', ja: 'イカ炒め' },
            desc: { ko: '오징어를 매콤한 양념에 볶은 요리.', en: 'Squid stir-fried in red pepper sauce.', ja: 'イカの辛味噌炒め。' },
            spicy: 2,
            tags: ['seafood'],
            unit: '인분'
          },
          {
            ko: '김치볶음밥',
            rom: 'kimchi-bokkeumbap',
            name: { en: 'Kimchi fried rice', ja: 'キムチチャーハン' },
            desc: {
              ko: '김치를 넣고 볶은 밥. 보통 달걀프라이를 올려요.',
              en: 'Fried rice with kimchi, usually topped with a fried egg.',
              ja: 'キムチ入りチャーハン。たいてい目玉焼きのせ。'
            },
            spicy: 1,
            tags: [],
            unit: '개'
          },
          {
            ko: '공깃밥',
            rom: 'gonggitbap',
            name: { en: 'Extra bowl of rice', ja: 'ご飯（追加）' },
            desc: { ko: '추가 밥 한 공기.', en: 'An extra bowl of steamed rice.', ja: '追加のご飯1杯。' },
            spicy: 0,
            tags: [],
            unit: '개'
          }
        ]
      },
      {
        id: 'noodle',
        ko: '면',
        en: 'Noodles',
        ja: '麺類',
        items: [
          {
            ko: '물냉면',
            rom: 'mul-naengmyeon',
            name: { en: 'Cold noodles in broth', ja: 'ムルネンミョン（水冷麺）' },
            desc: {
              ko: '살얼음 육수에 쫄깃한 메밀면. 식초와 겨자를 넣어요.',
              en: 'Chewy buckwheat noodles in icy beef broth. Add vinegar and mustard.',
              ja: 'シャーベット状のスープにそば粉の麺。酢とからしを入れて。'
            },
            spicy: 0,
            tags: ['beef'],
            unit: '개'
          },
          {
            ko: '비빔냉면',
            rom: 'bibim-naengmyeon',
            name: { en: 'Spicy cold noodles', ja: 'ビビン冷麺' },
            desc: {
              ko: '새콤달콤 매운 양념에 비벼 먹는 냉면.',
              en: 'Cold noodles mixed in a sweet-spicy sauce.',
              ja: '甘辛いタレで混ぜる冷麺。'
            },
            spicy: 2,
            tags: [],
            unit: '개'
          },
          {
            ko: '칼국수',
            rom: 'kalguksu',
            name: { en: 'Knife-cut noodle soup', ja: 'カルグクス' },
            desc: {
              ko: '손으로 썬 밀면을 따뜻한 국물에. 바지락을 넣기도.',
              en: 'Hand-cut wheat noodles in warm broth, often with clams.',
              ja: '手切りの麺を温かいスープで。アサリ入りも。'
            },
            spicy: 0,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '잔치국수',
            rom: 'janchi-guksu',
            name: { en: 'Banquet noodles', ja: 'チャンチグクス（にゅうめん）' },
            desc: { ko: '멸치 육수에 가는 소면.', en: 'Thin wheat noodles in a light anchovy broth.', ja: '煮干しスープの細いそうめん。' },
            spicy: 0,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '짜장면',
            rom: 'jjajangmyeon',
            name: { en: 'Black bean noodles', ja: 'チャジャン麺' },
            desc: {
              ko: '달콤짭짤한 춘장 소스에 돼지고기를 넣은 면.',
              en: 'Noodles in a thick, sweet black bean sauce with pork.',
              ja: '甘じょっぱい黒味噌ソースと豚肉の麺。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '개'
          },
          {
            ko: '짬뽕',
            rom: 'jjamppong',
            name: { en: 'Spicy seafood noodles', ja: 'チャンポン' },
            desc: { ko: '빨갛고 얼큰한 해물 국수.', en: 'Red, spicy seafood noodle soup.', ja: '赤くて辛い海鮮麺スープ。' },
            spicy: 2,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '라면',
            rom: 'ramyeon',
            name: { en: 'Ramyeon', ja: 'ラミョン（韓国ラーメン）' },
            desc: {
              ko: '주문하면 바로 끓여 주는 한국 라면. 달걀을 넣기도.',
              en: 'Korean instant noodles cooked to order, often with an egg.',
              ja: '注文ごとに作る韓国ラーメン。卵入りも。'
            },
            spicy: 1,
            tags: [],
            unit: '개'
          },
          {
            ko: '밀면',
            rom: 'milmyeon',
            name: { en: 'Busan cold noodles', ja: 'ミルミョン' },
            desc: { ko: '부산식 밀가루 냉면.', en: 'Busan-style cold wheat noodles.', ja: '釜山風の小麦冷麺。' },
            spicy: 0,
            tags: [],
            unit: '개'
          }
        ]
      },
      {
        id: 'snack',
        ko: '분식',
        en: 'Street food',
        ja: '粉食（屋台グルメ）',
        items: [
          {
            ko: '떡볶이',
            rom: 'tteokbokki',
            name: { en: 'Spicy rice cakes', ja: 'トッポッキ' },
            desc: {
              ko: '쫄깃한 떡을 달콤 매콤한 빨간 소스에.',
              en: 'Chewy rice cakes in sweet-spicy red sauce.',
              ja: 'もちもちの餅を甘辛い赤いソースで。'
            },
            spicy: 2,
            tags: [],
            unit: '인분'
          },
          {
            ko: '순대',
            rom: 'sundae',
            name: { en: 'Korean blood sausage', ja: 'スンデ' },
            desc: {
              ko: '당면과 돼지 피로 만든 순대. 소금에 찍어 먹어요.',
              en: 'Steamed sausage of glass noodles and pork blood. Dip it in salt.',
              ja: '春雨と豚の血の腸詰め。塩につけて。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '튀김',
            rom: 'twigim',
            name: { en: 'Fried snacks', ja: 'ティギム（韓国天ぷら）' },
            desc: {
              ko: '채소, 오징어, 만두 튀김. 떡볶이 국물에 찍어 먹어요.',
              en: 'Assorted fried vegetables, squid and dumplings. Dip in tteokbokki sauce.',
              ja: '野菜・イカ・餃子の揚げ物。トッポッキのソースにつけて。'
            },
            spicy: 0,
            tags: ['seafood'],
            unit: '인분'
          },
          {
            ko: '어묵',
            rom: 'eomuk',
            name: { en: 'Fish cake skewer', ja: 'オムク（おでん）' },
            desc: { ko: '뜨거운 국물에 담긴 꼬치 어묵.', en: 'Fish cake on a stick in hot broth.', ja: '熱いスープに浸かった串おでん。' },
            spicy: 0,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '만두',
            rom: 'mandu',
            name: { en: 'Dumplings', ja: 'マンドゥ（餃子）' },
            desc: {
              ko: '찐만두나 군만두. 고기만두와 김치만두가 많아요.',
              en: 'Steamed or fried dumplings, often pork or kimchi.',
              ja: '蒸しまたは焼き餃子。肉やキムチ入り。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '인분'
          },
          {
            ko: '호떡',
            rom: 'hotteok',
            name: { en: 'Sweet filled pancake', ja: 'ホットック' },
            desc: {
              ko: '흑설탕, 계피, 견과류가 든 달콤한 호떡.',
              en: 'Fried pancake filled with brown sugar, cinnamon and nuts.',
              ja: '黒砂糖・シナモン・ナッツ入りの甘いおやき。'
            },
            spicy: 0,
            tags: [],
            unit: '개'
          }
        ]
      },
      {
        id: 'chicken',
        ko: '치킨·안주',
        en: 'Chicken & bar food',
        ja: 'チキン・おつまみ',
        items: [
          {
            ko: '후라이드 치킨',
            rom: 'huraideu chikin',
            name: { en: 'Fried chicken', ja: 'フライドチキン' },
            desc: { ko: '바삭한 한국식 프라이드치킨.', en: 'Crispy Korean fried chicken.', ja: 'カリッと揚げた韓国式フライドチキン。' },
            spicy: 0,
            tags: ['chicken'],
            unit: '마리'
          },
          {
            ko: '양념치킨',
            rom: 'yangnyeom chikin',
            name: { en: 'Sweet-spicy chicken', ja: 'ヤンニョムチキン' },
            desc: {
              ko: '달콤 매콤한 양념을 입힌 치킨.',
              en: 'Fried chicken glazed in sweet chili sauce.',
              ja: '甘辛いタレを絡めたチキン。'
            },
            spicy: 1,
            tags: ['chicken'],
            unit: '마리'
          },
          {
            ko: '반반 치킨',
            rom: 'banban chikin',
            name: { en: 'Half & half chicken', ja: '半々チキン' },
            desc: {
              ko: '후라이드 반, 양념 반.',
              en: 'Half fried, half sweet-spicy, in one order.',
              ja: 'フライドとヤンニョムが半分ずつ。'
            },
            spicy: 1,
            tags: ['chicken'],
            unit: '마리'
          },
          {
            ko: '해물파전',
            rom: 'haemul-pajeon',
            name: { en: 'Seafood green onion pancake', ja: '海鮮チヂミ' },
            desc: {
              ko: '파와 해산물을 넣은 바삭한 전. 막걸리와 잘 맞아요.',
              en: 'Crispy pancake with green onion and seafood. Great with makgeolli.',
              ja: 'ネギと海鮮のチヂミ。マッコリによく合います。'
            },
            spicy: 0,
            tags: ['seafood'],
            unit: '개'
          },
          {
            ko: '족발',
            rom: 'jokbal',
            name: { en: 'Braised pig’s trotters', ja: 'チョッパル（豚足）' },
            desc: {
              ko: '간장과 향신료로 삶은 족발. 상추에 싸 먹어요.',
              en: 'Pork trotters braised in soy and spices. Wrap them in lettuce.',
              ja: '醤油と香辛料で煮込んだ豚足。サンチュで包んで。'
            },
            spicy: 0,
            tags: ['pork'],
            unit: '개'
          },
          {
            ko: '보쌈',
            rom: 'bossam',
            name: { en: 'Boiled pork wraps', ja: 'ポッサム' },
            desc: {
              ko: '부드럽게 삶은 돼지고기를 김치와 배추에 싸 먹어요.',
              en: 'Tender boiled pork wrapped in cabbage with spicy radish kimchi.',
              ja: '柔らかいゆで豚を白菜とキムチで包んで。'
            },
            spicy: 1,
            tags: ['pork'],
            unit: '개'
          }
        ]
      },
      {
        id: 'drink',
        ko: '음료·술',
        en: 'Drinks',
        ja: '飲み物・お酒',
        items: [
          {
            ko: '소주',
            rom: 'soju',
            name: { en: 'Soju', ja: '焼酎' },
            desc: {
              ko: '한국의 맑은 술. 알코올 16~17% 정도.',
              en: 'Korea’s clear spirit, about 16–17% alcohol.',
              ja: '韓国の透明な蒸留酒。アルコール度数16〜17%ほど。'
            },
            spicy: 0,
            tags: [],
            unit: '병'
          },
          {
            ko: '맥주',
            rom: 'maekju',
            name: { en: 'Beer (bottle)', ja: 'ビール（瓶）' },
            desc: { ko: '병맥주.', en: 'Korean lager in a bottle.', ja: '韓国の瓶ビール。' },
            spicy: 0,
            tags: [],
            unit: '병'
          },
          {
            ko: '생맥주',
            rom: 'saeng-maekju',
            name: { en: 'Draft beer', ja: '生ビール' },
            desc: { ko: '생맥주 한 잔. 보통 500ml.', en: 'Draft beer, usually 500 ml.', ja: '生ビール。たいてい500ml。' },
            spicy: 0,
            tags: [],
            unit: '잔'
          },
          {
            ko: '막걸리',
            rom: 'makgeolli',
            name: { en: 'Makgeolli rice wine', ja: 'マッコリ' },
            desc: {
              ko: '뽀얗고 살짝 달콤한 쌀 술. 따르기 전에 살살 흔들어요.',
              en: 'Milky, lightly sweet rice wine. Shake gently before pouring.',
              ja: '白く濁ったやや甘い米のお酒。注ぐ前に軽く振って。'
            },
            spicy: 0,
            tags: [],
            unit: '병'
          },
          {
            ko: '아이스 아메리카노',
            rom: 'aiseu amerikano',
            name: { en: 'Iced Americano', ja: 'アイスアメリカーノ' },
            desc: {
              ko: '한국인이 일 년 내내 마시는 커피.',
              en: 'What most Koreans drink, all year round.',
              ja: '韓国人が一年中飲むコーヒー。'
            },
            spicy: 0,
            tags: [],
            unit: '잔'
          },
          {
            ko: '식혜',
            rom: 'sikhye',
            name: { en: 'Sweet rice drink', ja: 'シッケ' },
            desc: {
              ko: '식후에 많이 마시는 차갑고 달콤한 쌀 음료.',
              en: 'Cold, sweet rice punch often served after meals.',
              ja: '食後によく飲む冷たくて甘い米の飲み物。'
            },
            spicy: 0,
            tags: [],
            unit: '개'
          }
        ]
      }
    ],
    requests: [
      { ko: '덜 맵게 해 주세요.', en: 'Less spicy, please.', ja: '辛さ控えめでお願いします。' },
      { ko: '안 맵게 해 주세요.', en: 'Not spicy at all, please.', ja: '辛くしないでください。' },
      { ko: '1인분도 주문 돼요?', en: 'Can I order a single serving?', ja: '1人前でも注文できますか？' },
      { ko: '포장해 주세요.', en: 'To go, please.', ja: '持ち帰りでお願いします。' },
      { ko: '앞접시 주세요.', en: 'Small plates for sharing, please.', ja: '取り皿をください。' },
      { ko: '물은 어디 있어요?', en: 'Where is the water?', ja: 'お水はどこですか？' },
      { ko: '카드 결제 돼요?', en: 'Can I pay by card?', ja: 'カードで払えますか？' },
      { ko: '돼지고기는 못 먹어요.', en: 'I can’t eat pork.', ja: '豚肉は食べられません。' },
      {
        ko: '채식주의자예요. 고기와 해산물은 못 먹어요.',
        en: 'I’m vegetarian. No meat or seafood.',
        ja: 'ベジタリアンです。肉と魚介は食べられません。'
      },
      { ko: '땅콩 알레르기가 있어요.', en: 'I have a peanut allergy.', ja: 'ピーナッツアレルギーがあります。' },
      {
        ko: '새우, 게 같은 갑각류 알레르기가 있어요.',
        en: 'I’m allergic to shellfish like shrimp and crab.',
        ja: 'エビやカニなど甲殻類のアレルギーがあります。'
      },
      { ko: '계산해 주세요.', en: 'The bill, please.', ja: 'お会計お願いします。' }
    ]
  }
};
