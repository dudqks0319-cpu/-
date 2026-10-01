/*
 * LocalPick Korea — 장소 데이터
 *
 * ⚠️ 지금 들어 있는 장소는 "샘플"입니다.
 *    실제로 가보거나 확인한 뒤 내용을 고치고, 진짜 로컬 가게로 바꿔 넣으세요.
 *
 * 장소 하나 추가하는 법:
 *   아래 places 목록에서 { ... }, 한 덩어리를 복사해서 붙여넣고 내용만 바꾸면 됩니다.
 *
 *   id        : 겹치지 않는 영어 이름 (예: 'seoul-mangwon')
 *   city      : 'seoul' | 'busan' | 'jeonju' | 'gyeongju'
 *   cat       : 'eat'(현지인 맛집) | 'cafe'(카페) | 'musteat'(꼭 먹을 음식) | 'go'(가볼 곳)
 *   ko        : 한글 이름 (직원에게 보여주는 화면에 나옴)
 *   name      : 영어(en) / 일본어(ja) 이름
 *   area      : 동네 이름
 *   locals    : 현지인이 얼마나 가는지 1~5
 *   tourists  : 관광객이 얼마나 가는지 1~5
 *   price     : '₩'(1만원 이하) | '₩₩'(1~3만원) | '₩₩₩'(3만원 이상) | 'free'(무료)
 *   why       : 한국인이 여기 가는 이유 (en / ja)
 *   tips      : 팁 목록 (en / ja)
 *   order     : 직원에게 보여줄 한국어 문장 (ko) + 뜻 (en / ja)
 *   insteadOf : (선택) "관광지 말고 여기" — 대신하는 관광지 (en / ja)
 *   map       : 네이버 지도에서 검색할 한글 단어
 */

window.LP_DATA = {
  cities: [
    {
      id: 'seoul', ko: '서울', en: 'Seoul', ja: 'ソウル',
      line: { en: 'Neighborhood bars, market lunches, river picnics.', ja: '路地の酒場、市場ランチ、漢江ピクニック。' }
    },
    {
      id: 'busan', ko: '부산', en: 'Busan', ja: '釜山',
      line: { en: 'Pork soup, cold noodles, a bridge that lights up at night.', ja: 'テジクッパ、ミルミョン、夜に光る広安大橋。' }
    },
    {
      id: 'jeonju', ko: '전주', en: 'Jeonju', ja: '全州',
      line: { en: 'Bean-sprout soup for breakfast, corner-store beer at night.', ja: '朝はコンナムルクッパ、夜は商店ビール。' }
    },
    {
      id: 'gyeongju', ko: '경주', en: 'Gyeongju', ja: '慶州',
      line: { en: 'Ancient tombs by day, lit-up palace ponds by night.', ja: '昼は古墳、夜はライトアップの池。' }
    }
  ],

  categories: [
    { id: 'eat',     ko: '현지인 맛집', en: 'Local eats',   ja: '地元の店' },
    { id: 'cafe',    ko: '현지인 카페', en: 'Cafés',        ja: 'カフェ' },
    { id: 'musteat', ko: '꼭 먹을 음식', en: 'Must-eat',    ja: '必食グルメ' },
    { id: 'go',      ko: '가볼 곳',     en: 'Places to go', ja: '行くべき場所' }
  ],

  places: [
    /* ───────────── 서울 ───────────── */
    {
      id: 'seoul-nogari', city: 'seoul', cat: 'eat',
      ko: '을지로 노가리골목',
      name: { en: 'Euljiro Nogari Alley', ja: '乙支路ノガリ横丁' },
      area: { en: 'Euljiro, Jung-gu', ja: '中区 乙支路' },
      locals: 5, tourists: 2, price: '₩',
      why: {
        en: 'Office workers spill onto plastic stools after work for dried pollack and cheap draft beer. It is loud, cheap and very Seoul.',
        ja: '仕事帰りの会社員が路上のプラスチック椅子で、干しスケトウダラと安い生ビールを楽しむ場所。にぎやかで安くて、ソウルらしさ満点。'
      },
      tips: {
        en: ['Busiest on weekday evenings after 7pm.', 'Dip the nogari in the spicy mayo sauce.'],
        ja: ['平日19時以降が一番にぎわいます。', 'ノガリは辛いマヨソースにつけて。']
      },
      order: { ko: '노가리 하나랑 생맥주 두 잔 주세요.', en: 'One nogari and two draft beers, please.', ja: 'ノガリ1つと生ビール2杯ください。' },
      insteadOf: { en: 'Themed tourist bars', ja: '観光客向けのテーマバー' },
      map: '을지로 노가리골목'
    },
    {
      id: 'seoul-mangwon', city: 'seoul', cat: 'eat',
      ko: '망원시장',
      name: { en: 'Mangwon Market', ja: '望遠市場' },
      area: { en: 'Mangwon-dong, Mapo-gu', ja: '麻浦区 望遠洞' },
      locals: 5, tourists: 3, price: '₩',
      why: {
        en: 'A real neighborhood market where locals buy groceries and grab knife-cut noodles, fried chicken bites and croquettes.',
        ja: '地元の人が食材を買い、カルグクスやタッカンジョン、コロッケをつまむ本物の市場。'
      },
      tips: {
        en: ['Walk 10 minutes to Mangwon Hangang Park after eating.', 'Small stalls may prefer cash.'],
        ja: ['食後は徒歩10分の望遠漢江公園へ。', '小さな屋台は現金が便利です。']
      },
      order: { ko: '칼국수 하나 주세요.', en: 'One kalguksu (knife-cut noodles), please.', ja: 'カルグクスを1つください。' },
      insteadOf: { en: 'The packed stalls of Gwangjang Market', ja: '混雑する広蔵市場の屋台' },
      map: '망원시장'
    },
    {
      id: 'seoul-seongsu', city: 'seoul', cat: 'cafe',
      ko: '성수동 카페거리',
      name: { en: 'Seongsu-dong café streets', ja: '聖水洞のカフェ通り' },
      area: { en: 'Seongsu-dong, Seongdong-gu', ja: '城東区 聖水洞' },
      locals: 5, tourists: 3, price: '₩₩',
      why: {
        en: 'Old factories and warehouses turned into cafés and pop-up stores. This is where young Koreans spend a weekend afternoon.',
        ja: '古い工場や倉庫を改装したカフェやポップアップストアが並ぶ街。韓国の若者の週末の定番。'
      },
      tips: {
        en: ['Weekday afternoons are much calmer.', 'Seoul Forest park is a short walk away.'],
        ja: ['平日の午後ならゆったり過ごせます。', 'ソウルの森公園もすぐ近く。']
      },
      order: { ko: '아이스 아메리카노 한 잔 주세요.', en: 'One iced Americano, please.', ja: 'アイスアメリカーノを1杯ください。' },
      map: '성수동 카페거리'
    },
    {
      id: 'seoul-yeonnam', city: 'seoul', cat: 'cafe',
      ko: '연남동 경의선숲길',
      name: { en: 'Yeonnam-dong & Gyeongui Line Forest Park', ja: '延南洞・京義線森の道' },
      area: { en: 'Yeonnam-dong, Mapo-gu', ja: '麻浦区 延南洞' },
      locals: 4, tourists: 3, price: '₩₩',
      why: {
        en: 'A long park built on old rail tracks, lined with small cafés. Locals sit on the grass with coffee when the weather is nice.',
        ja: '廃線跡にできた細長い公園沿いに小さなカフェが並びます。天気の良い日は芝生でコーヒーを楽しむ人がいっぱい。'
      },
      tips: {
        en: ['Start from Hongik Univ. Station exit 3.', 'Side streets have quieter cafés than the main path.'],
        ja: ['弘大入口駅3番出口から歩き始めましょう。', '大通りより路地のカフェのほうが静かです。']
      },
      order: { ko: '라떼 한 잔이랑 이 디저트 주세요.', en: 'One latte and this dessert, please.', ja: 'ラテ1杯とこのデザートをください。' },
      map: '경의선숲길 연남동'
    },
    {
      id: 'seoul-samgyeopsal', city: 'seoul', cat: 'musteat',
      ko: '삼겹살과 소주',
      name: { en: 'Samgyeopsal & soju', ja: 'サムギョプサルと焼酎' },
      area: { en: 'Any neighborhood BBQ place', ja: '街の焼肉店ならどこでも' },
      locals: 5, tourists: 4, price: '₩₩',
      why: {
        en: 'Grilled pork belly with soju is the Korean way to end a work week. Skip the tourist strips; any busy local BBQ joint is good.',
        ja: '豚バラ焼きと焼酎は、韓国人の「お疲れさま」の定番。観光地より、地元客でにぎわう街の焼肉店へ。'
      },
      tips: {
        en: ['Most places require at least 2 servings.', 'Wrap the meat in lettuce with garlic and ssamjang.'],
        ja: ['多くの店は2人前から注文できます。', 'サンチュに肉とニンニク、サムジャンを包んで。']
      },
      order: { ko: '삼겹살 2인분이랑 소주 한 병 주세요.', en: 'Two servings of pork belly and a bottle of soju, please.', ja: 'サムギョプサル2人前と焼酎1本ください。' },
      insteadOf: { en: 'BBQ chains in Myeongdong', ja: '明洞の観光客向け焼肉店' },
      map: '삼겹살 맛집'
    },
    {
      id: 'seoul-sundaeguk', city: 'seoul', cat: 'musteat',
      ko: '순대국',
      name: { en: 'Sundae-guk (blood sausage soup)', ja: 'スンデクッ（腸詰めスープ）' },
      area: { en: 'Neighborhood soup restaurants', ja: '街のクッパ店' },
      locals: 5, tourists: 1, price: '₩',
      why: {
        en: 'A cheap, filling soup Koreans eat for lunch or after a night of drinking. You will rarely see it in travel guides.',
        ja: '安くてお腹いっぱいになる、ランチや飲んだ翌日の定番スープ。ガイドブックにはほとんど載っていません。'
      },
      tips: {
        en: ['Season it yourself with salted shrimp and perilla powder.', 'Rice goes into the soup, not next to it.'],
        ja: ['アミの塩辛とエゴマ粉で自分好みに味付け。', 'ご飯はスープに入れて食べるのが韓国式。']
      },
      order: { ko: '순대국 하나 주세요.', en: 'One sundae-guk, please.', ja: 'スンデクッを1つください。' },
      map: '순대국'
    },
    {
      id: 'seoul-hangang', city: 'seoul', cat: 'go',
      ko: '한강공원',
      name: { en: 'Hangang River parks', ja: '漢江公園' },
      area: { en: 'Yeouido, Banpo, Ttukseom and more', ja: '汝矣島・盤浦・トゥクソムなど' },
      locals: 5, tourists: 3, price: 'free',
      why: {
        en: 'On a warm evening, Seoul sits by the river: picnic mats, fried chicken delivered to the grass, and ramyeon from the convenience store.',
        ja: '暖かい夜、ソウルの人は川辺へ。レジャーシートを広げ、チキンを芝生まで出前し、コンビニのラーメンをすすります。'
      },
      tips: {
        en: ['Convenience stores here have ramyeon cooking machines.', 'Bring a mat or rent one nearby.'],
        ja: ['公園のコンビニにはラーメン調理機があります。', 'レジャーシートを持参するか近くで借りましょう。']
      },
      order: { ko: '라면 하나 끓여 먹을게요. 어떻게 해요?', en: 'I want to cook a ramyeon. How does it work?', ja: 'ラーメンを作りたいです。どうすればいいですか？' },
      insteadOf: { en: 'Crowded shopping streets at night', ja: '夜の混雑した繁華街' },
      map: '한강공원'
    },
    {
      id: 'seoul-naksan', city: 'seoul', cat: 'go',
      ko: '낙산공원 성곽길',
      name: { en: 'Naksan Park city wall trail', ja: '駱山公園の城郭道' },
      area: { en: 'Ihwa-dong, Jongno-gu', ja: '鍾路区 梨花洞' },
      locals: 4, tourists: 2, price: 'free',
      why: {
        en: 'Walk along the old Seoul city wall at sunset for a free night view over the city.',
        ja: '夕暮れに古いソウル城郭沿いを歩けば、無料でソウルの夜景が楽しめます。'
      },
      tips: {
        en: ['Start from Hyehwa Station and walk up through Ihwa village.', 'Wear comfortable shoes; it is hilly.'],
        ja: ['恵化駅から梨花洞を通って登りましょう。', '坂道が多いので歩きやすい靴で。']
      },
      order: { ko: '낙산공원 가는 길이 어디예요?', en: 'Which way to Naksan Park?', ja: '駱山公園へはどう行けばいいですか？' },
      insteadOf: { en: 'Paid tickets for N Seoul Tower', ja: 'Nソウルタワーの有料展望台' },
      map: '낙산공원'
    },

    /* ───────────── 부산 ───────────── */
    {
      id: 'busan-millak', city: 'busan', cat: 'eat',
      ko: '민락 회센터',
      name: { en: 'Millak raw-fish center', ja: '民楽の刺身センター' },
      area: { en: 'Millak-dong, Suyeong-gu', ja: '水営区 民楽洞' },
      locals: 5, tourists: 2, price: '₩₩₩',
      why: {
        en: 'Pick live fish downstairs, then eat it sliced upstairs with a view of Gwangan Bridge. This is how Busan people eat hoe (raw fish).',
        ja: '1階で活魚を選び、上の階で広安大橋を眺めながら刺身を食べる。これが釜山流。'
      },
      tips: {
        en: ['Upstairs restaurants charge a small per-person table fee for sauces and sides.', 'Ask for maeuntang (spicy fish stew) made from the leftovers.'],
        ja: ['上階の店では、タレやおかず代として1人あたりの席料がかかります。', '残ったアラでメウンタン（辛い鍋）を頼みましょう。']
      },
      order: { ko: '두 명이 먹을 회 추천해 주세요.', en: 'Please recommend raw fish for two people.', ja: '2人分の刺身をおすすめしてください。' },
      map: '민락어민활어직판장'
    },
    {
      id: 'busan-bupyeong', city: 'busan', cat: 'eat',
      ko: '부평깡통시장',
      name: { en: 'Bupyeong Kkangtong Market', ja: '富平カントン市場' },
      area: { en: 'Bupyeong-dong, Jung-gu', ja: '中区 富平洞' },
      locals: 4, tourists: 3, price: '₩',
      why: {
        en: 'Busan fish cakes (eomuk) were born around here. Locals come for fish-cake stalls, yubu pockets and snacks.',
        ja: '釜山オムク（練り物）発祥の地の近く。地元の人はオムクやユブチュモニを食べに来ます。'
      },
      tips: {
        en: ['Eat fish cakes standing at the stall and drink the free broth.', 'Gukje Market is right next door.'],
        ja: ['屋台で立ったままオムクを食べ、無料のスープも一緒に。', 'すぐ隣が国際市場です。']
      },
      order: { ko: '어묵 몇 개 먹을게요. 계산은 나중에 할게요.', en: 'I will eat a few fish cakes and pay at the end.', ja: 'オムクをいくつか食べて、最後に払います。' },
      map: '부평깡통시장'
    },
    {
      id: 'busan-jeonpo', city: 'busan', cat: 'cafe',
      ko: '전포카페거리',
      name: { en: 'Jeonpo Café Street', ja: '田浦カフェ通り' },
      area: { en: 'Jeonpo-dong, Busanjin-gu', ja: '釜山鎮区 田浦洞' },
      locals: 5, tourists: 2, price: '₩₩',
      why: {
        en: 'Old tool shops mixed with independent cafés and bakeries. Young Busan locals hang out here, not on the beach.',
        ja: '工具店の間に個性的なカフェやベーカリーが混ざる街。釜山の若者はビーチよりここに集まります。'
      },
      tips: {
        en: ['Seomyeon Station is a 10-minute walk.', 'Many cafés open late morning.'],
        ja: ['西面駅から徒歩約10分。', '多くのカフェは昼前に開店します。']
      },
      order: { ko: '오늘의 커피 한 잔 주세요.', en: 'One coffee of the day, please.', ja: '本日のコーヒーを1杯ください。' },
      map: '전포카페거리'
    },
    {
      id: 'busan-yeongdo', city: 'busan', cat: 'cafe',
      ko: '영도 바다 카페',
      name: { en: 'Yeongdo seaside cafés', ja: '影島の海辺カフェ' },
      area: { en: 'Yeongdo-gu', ja: '影島区' },
      locals: 4, tourists: 2, price: '₩₩',
      why: {
        en: 'Big cafés with views of ships waiting at anchor. Locals drive here for a slow afternoon by the sea.',
        ja: '沖に停泊する船を眺められる大型カフェ。地元の人は海辺でのんびりするために車で訪れます。'
      },
      tips: {
        en: ['Take a taxi; buses on the island are slow.', 'Huinnyeoul Culture Village is nearby.'],
        ja: ['島内のバスは遅いのでタクシーが便利。', '白麗ヨウル文化村も近くです。']
      },
      order: { ko: '바다 보이는 자리 있어요?', en: 'Do you have a seat with a sea view?', ja: '海が見える席はありますか？' },
      map: '영도 카페'
    },
    {
      id: 'busan-dwaeji', city: 'busan', cat: 'musteat',
      ko: '돼지국밥',
      name: { en: 'Dwaeji-gukbap (pork rice soup)', ja: 'テジクッパ（豚肉スープご飯）' },
      area: { en: 'All over Busan', ja: '釜山のいたるところ' },
      locals: 5, tourists: 4, price: '₩',
      why: {
        en: 'Busan’s soul food. Ask any local where their favorite gukbap place is and you will get a strong opinion.',
        ja: '釜山のソウルフード。地元の人に好きな店を聞けば、必ず熱く語ってくれます。'
      },
      tips: {
        en: ['Add the chive salad (jeongguji, in Busan dialect) into the soup.', 'Season with salted shrimp, not salt.'],
        ja: ['ニラ和え（釜山の方言で「チョングジ」）をスープに入れて。', '塩ではなくアミの塩辛で味を調えます。']
      },
      order: { ko: '돼지국밥 하나 주세요. 정구지 많이 주세요.', en: 'One pork soup, please. Extra chives, please.', ja: 'テジクッパ1つください。ニラ多めでお願いします。' },
      map: '돼지국밥'
    },
    {
      id: 'busan-milmyeon', city: 'busan', cat: 'musteat',
      ko: '밀면',
      name: { en: 'Milmyeon (Busan cold noodles)', ja: 'ミルミョン（釜山冷麺）' },
      area: { en: 'All over Busan', ja: '釜山のいたるところ' },
      locals: 5, tourists: 3, price: '₩',
      why: {
        en: 'Cold wheat noodles created by refugees during the Korean War. Locals eat it all summer and argue about the best shop.',
        ja: '朝鮮戦争の避難民が生んだ小麦の冷麺。夏の定番で、どの店が一番かいつも議論になります。'
      },
      tips: {
        en: ['Mul = in icy broth, bibim = spicy and dry.', 'Add vinegar and mustard at the table.'],
        ja: ['ムル＝冷たいスープ、ビビン＝辛い汁なし。', 'テーブルの酢とからしで味を調整。']
      },
      order: { ko: '물밀면 하나, 비빔밀면 하나 주세요.', en: 'One cold-broth milmyeon and one spicy milmyeon, please.', ja: 'ムルミルミョン1つ、ビビンミルミョン1つください。' },
      map: '밀면'
    },
    {
      id: 'busan-gwangalli', city: 'busan', cat: 'go',
      ko: '광안리 해변 야경',
      name: { en: 'Gwangalli Beach at night', ja: '広安里ビーチの夜景' },
      area: { en: 'Suyeong-gu', ja: '水営区' },
      locals: 5, tourists: 3, price: 'free',
      why: {
        en: 'Gwangan Bridge lights up over the water. Locals choose Gwangalli for evenings out over Haeundae.',
        ja: '海の上に広安大橋が光ります。地元の人は夜遊びなら海雲台より広安里を選びます。'
      },
      tips: {
        en: ['Sit on the sand with snacks from a convenience store.', 'Check for drone light shows on weekends.'],
        ja: ['コンビニでおつまみを買って砂浜に座りましょう。', '週末はドローンショーの開催をチェック。']
      },
      order: { ko: '광안리 해변 가는 버스 어디서 타요?', en: 'Where do I catch the bus to Gwangalli Beach?', ja: '広安里ビーチ行きのバスはどこで乗れますか？' },
      insteadOf: { en: 'Haeundae for a night out', ja: '夜の海雲台' },
      map: '광안리해수욕장'
    },
    {
      id: 'busan-songjeong', city: 'busan', cat: 'go',
      ko: '송정해수욕장',
      name: { en: 'Songjeong Beach', ja: '松亭海水浴場' },
      area: { en: 'Haeundae-gu', ja: '海雲台区' },
      locals: 4, tourists: 2, price: 'free',
      why: {
        en: 'A calmer beach where Busan locals surf and walk. Beginner surf lessons are easy to find.',
        ja: '釜山の人がサーフィンや散歩をする落ち着いたビーチ。初心者向けのサーフィン教室もあります。'
      },
      tips: {
        en: ['Walk the coastal path to Jukdo Island at one end.', 'Cafés line the road behind the beach.'],
        ja: ['ビーチの端にある竹島まで海沿いを散歩。', 'ビーチ裏の道沿いにカフェが並びます。']
      },
      order: { ko: '서핑 초보 강습 있어요?', en: 'Do you have surfing lessons for beginners?', ja: '初心者向けのサーフィン教室はありますか？' },
      map: '송정해수욕장'
    },

    /* ───────────── 전주 ───────────── */
    {
      id: 'jeonju-nambu', city: 'jeonju', cat: 'eat',
      ko: '남부시장',
      name: { en: 'Nambu Market', ja: '南部市場' },
      area: { en: 'Wansan-gu', ja: '完山区' },
      locals: 5, tourists: 3, price: '₩',
      why: {
        en: 'Locals start the day here with bean-sprout soup. The rooftop youth mall and the weekend night market are fun too.',
        ja: '地元の人はここでコンナムルクッパを食べて一日を始めます。屋上の青年モールや週末の夜市も楽しい。'
      },
      tips: {
        en: ['Come early in the morning for gukbap.', 'The night market runs on weekend evenings.'],
        ja: ['クッパは朝早くがおすすめ。', '夜市は週末の夕方から。']
      },
      order: { ko: '콩나물국밥 하나 주세요.', en: 'One bean-sprout rice soup, please.', ja: 'コンナムルクッパを1つください。' },
      map: '전주 남부시장'
    },
    {
      id: 'jeonju-gamaek', city: 'jeonju', cat: 'eat',
      ko: '전주 가맥집',
      name: { en: 'Gamaek: corner-store beer', ja: 'カメク（商店ビール）' },
      area: { en: 'Around Jeonju city center', ja: '全州の中心部' },
      locals: 5, tourists: 2, price: '₩',
      why: {
        en: '"Gamaek" means beer at a corner shop. Jeonju locals drink bottled beer with grilled dried pollack and a secret dipping sauce.',
        ja: '「カメク」は商店で飲むビールのこと。全州の人は瓶ビールと焼いた干しダラを、秘伝のタレで楽しみます。'
      },
      tips: {
        en: ['It is a local tradition, not a tourist show. Just sit down.', 'Order hwangtae (dried pollack) and an egg roll.'],
        ja: ['観光向けではない地元の文化。気軽に座りましょう。', 'ファンテ（干しダラ）と卵焼きを注文。']
      },
      order: { ko: '황태 하나랑 맥주 두 병 주세요.', en: 'One dried pollack and two bottles of beer, please.', ja: 'ファンテ1つとビール2本ください。' },
      map: '전주 가맥'
    },
    {
      id: 'jeonju-gaekri', city: 'jeonju', cat: 'cafe',
      ko: '객리단길',
      name: { en: 'Gaekridan-gil', ja: '客里団ギル' },
      area: { en: 'Near Jeonju Gaeksa', ja: '全州客舎の周辺' },
      locals: 5, tourists: 2, price: '₩₩',
      why: {
        en: 'Small cafés and restaurants around the old guesthouse hall. This is where young Jeonju locals go instead of Hanok Village.',
        ja: '古い客舎の周りに小さなカフェやレストランが集まる通り。全州の若者は韓屋村ではなくここに来ます。'
      },
      tips: {
        en: ['A 15-minute walk from Hanok Village.', 'Evenings are livelier than mornings.'],
        ja: ['韓屋村から徒歩15分ほど。', '朝より夜のほうがにぎやか。']
      },
      order: { ko: '여기 시그니처 메뉴가 뭐예요?', en: 'What is your signature menu?', ja: 'ここの看板メニューは何ですか？' },
      insteadOf: { en: 'Main street of Hanok Village', ja: '韓屋村のメインストリート' },
      map: '객리단길'
    },
    {
      id: 'jeonju-seohak', city: 'jeonju', cat: 'cafe',
      ko: '서학동 예술마을',
      name: { en: 'Seohak-dong Art Village', ja: '西学洞芸術村' },
      area: { en: 'Across the stream from Hanok Village', ja: '韓屋村から川を渡った先' },
      locals: 4, tourists: 2, price: '₩₩',
      why: {
        en: 'Quiet streets with small galleries, bookshops and cafés run by artists. A calm break from the crowds.',
        ja: 'アーティストが営む小さなギャラリーや本屋、カフェが並ぶ静かな街。人混みから離れてひと休み。'
      },
      tips: {
        en: ['Cross Namcheon Bridge from Hanok Village.', 'Some galleries close on Mondays.'],
        ja: ['韓屋村から南川橋を渡ってすぐ。', '月曜休みのギャラリーもあります。']
      },
      order: { ko: '들어가서 구경해도 돼요?', en: 'May I come in and look around?', ja: '中を見てもいいですか？' },
      map: '서학동 예술마을'
    },
    {
      id: 'jeonju-kongnamul', city: 'jeonju', cat: 'musteat',
      ko: '콩나물국밥',
      name: { en: 'Kongnamul-gukbap (bean-sprout soup)', ja: 'コンナムルクッパ' },
      area: { en: 'All over Jeonju', ja: '全州のいたるところ' },
      locals: 5, tourists: 3, price: '₩',
      why: {
        en: 'Jeonju’s breakfast and hangover cure. It costs less than half of a Hanok Village bibimbap.',
        ja: '全州の朝ごはん兼二日酔い対策。韓屋村のビビンバの半額以下で食べられます。'
      },
      tips: {
        en: ['It comes with a soft-poached egg (suran). Add a few spoons of broth and seaweed to it.', 'Many shops open early in the morning.'],
        ja: ['半熟卵（スラン）が付いてきます。スープ数さじと海苔を入れて食べて。', '朝早くから開いている店が多いです。']
      },
      order: { ko: '콩나물국밥 하나 주세요. 덜 맵게 해 주세요.', en: 'One bean-sprout soup, please. Less spicy, please.', ja: 'コンナムルクッパ1つください。辛さ控えめでお願いします。' },
      insteadOf: { en: 'Expensive bibimbap in Hanok Village', ja: '韓屋村の高いビビンバ' },
      map: '전주 콩나물국밥'
    },
    {
      id: 'jeonju-pisundae', city: 'jeonju', cat: 'musteat',
      ko: '피순대',
      name: { en: 'Pi-sundae (Jeonju blood sausage)', ja: 'ピスンデ（全州の腸詰め）' },
      area: { en: 'Nambu Market', ja: '南部市場' },
      locals: 4, tourists: 2, price: '₩',
      why: {
        en: 'A richer style of Korean sausage that Jeonju is known for. Locals eat it with soup and a bottle of soju.',
        ja: '全州名物の濃厚な腸詰め。地元の人はスープと焼酎と一緒に食べます。'
      },
      tips: {
        en: ['Try it in a sundae-gukbap if the plate feels like too much.', 'Popular shops have lines at lunch.'],
        ja: ['1皿が多ければスンデクッパで。', '人気店は昼に行列ができます。']
      },
      order: { ko: '피순대 작은 거 하나 주세요.', en: 'One small plate of pi-sundae, please.', ja: 'ピスンデの小を1つください。' },
      map: '남부시장 피순대'
    },
    {
      id: 'jeonju-deokjin', city: 'jeonju', cat: 'go',
      ko: '덕진공원',
      name: { en: 'Deokjin Park', ja: '徳津公園' },
      area: { en: 'Deokjin-gu', ja: '徳津区' },
      locals: 5, tourists: 1, price: 'free',
      why: {
        en: 'A big lotus pond where locals walk in the evening. In summer the lotus flowers cover the water.',
        ja: '地元の人が夕方に散歩する大きな蓮池。夏には水面が蓮の花でいっぱいに。'
      },
      tips: {
        en: ['Lotus season is usually July to August.', 'Take a short taxi ride from the city center.'],
        ja: ['蓮の見頃はだいたい7〜8月。', '中心部からタクシーですぐ。']
      },
      order: { ko: '덕진공원으로 가 주세요.', en: 'To Deokjin Park, please.', ja: '徳津公園までお願いします。' },
      map: '덕진공원'
    },
    {
      id: 'jeonju-arboretum', city: 'jeonju', cat: 'go',
      ko: '전주수목원',
      name: { en: 'Jeonju Arboretum', ja: '全州樹木園' },
      area: { en: 'Deokjin-gu', ja: '徳津区' },
      locals: 4, tourists: 1, price: 'free',
      why: {
        en: 'A quiet garden that locals visit on weekends for flowers and shade. Almost no tour groups.',
        ja: '週末に地元の人が花と木陰を楽しみに来る静かな庭園。団体客はほとんどいません。'
      },
      tips: {
        en: ['Closed on some holidays; check before you go.', 'Bring water in summer.'],
        ja: ['休園日があるので事前に確認を。', '夏は飲み物を持参しましょう。']
      },
      order: { ko: '전주수목원으로 가 주세요.', en: 'To Jeonju Arboretum, please.', ja: '全州樹木園までお願いします。' },
      map: '한국도로공사 전주수목원'
    },

    /* ───────────── 경주 ───────────── */
    {
      id: 'gyeongju-seongdong', city: 'gyeongju', cat: 'eat',
      ko: '성동시장',
      name: { en: 'Seongdong Market', ja: '城東市場' },
      area: { en: 'Near old Gyeongju Station', ja: '旧慶州駅の近く' },
      locals: 5, tourists: 2, price: '₩',
      why: {
        en: 'Known for its Korean buffet stalls: pick from a long counter of side dishes for one low price.',
        ja: '韓国式ビュッフェの屋台で有名。長いカウンターに並ぶおかずを、手頃な一律料金で選べます。'
      },
      tips: {
        en: ['Go at lunchtime when the dishes are fresh.', 'Pay first, then fill your plate.'],
        ja: ['おかずが新しいお昼どきがおすすめ。', '先に支払ってから盛り付けます。']
      },
      order: { ko: '한식뷔페 한 명이요.', en: 'Korean buffet for one, please.', ja: '韓国式ビュッフェ、1人です。' },
      map: '경주 성동시장'
    },
    {
      id: 'gyeongju-gampo', city: 'gyeongju', cat: 'eat',
      ko: '감포항 물회',
      name: { en: 'Mulhoe at Gampo Port', ja: '甘浦港のムルフェ' },
      area: { en: 'Gampo-eup, east coast', ja: '東海岸 甘浦邑' },
      locals: 4, tourists: 1, price: '₩₩',
      why: {
        en: 'Cold, spicy raw-fish soup at a small fishing port. Gyeongju locals drive to the coast for it.',
        ja: '小さな漁港で食べる、冷たくてピリ辛の刺身スープ。慶州の人はこれを食べに海まで車を走らせます。'
      },
      tips: {
        en: ['Mix the fish with the broth, then add noodles or rice.', 'Combine with the Yangnam coastal trail.'],
        ja: ['刺身とスープを混ぜてから、麺かご飯を入れて。', '陽南の海沿い散策とセットで。']
      },
      order: { ko: '물회 두 개 주세요.', en: 'Two mulhoe, please.', ja: 'ムルフェを2つください。' },
      map: '감포항 물회'
    },
    {
      id: 'gyeongju-bomun', city: 'gyeongju', cat: 'cafe',
      ko: '보문호수 카페',
      name: { en: 'Bomun Lake cafés', ja: '普門湖のカフェ' },
      area: { en: 'Bomun Tourist Complex', ja: '普門観光団地' },
      locals: 4, tourists: 3, price: '₩₩',
      why: {
        en: 'Lakeside cafés with a walking path around the water. In spring the whole lake is lined with cherry blossoms.',
        ja: '湖畔のカフェと湖を一周する散歩道。春は湖のまわりが桜でいっぱいになります。'
      },
      tips: {
        en: ['Walk part of the lake loop after coffee.', 'Cherry blossoms usually peak in early April.'],
        ja: ['コーヒーの後は湖の散歩道へ。', '桜の見頃は例年4月上旬。']
      },
      order: { ko: '창가 자리 있어요?', en: 'Is there a window seat?', ja: '窓際の席はありますか？' },
      map: '보문호수 카페'
    },
    {
      id: 'gyeongju-yangnam-cafe', city: 'gyeongju', cat: 'cafe',
      ko: '양남 바다 카페',
      name: { en: 'Yangnam seaside cafés', ja: '陽南の海辺カフェ' },
      area: { en: 'Yangnam-myeon, east coast', ja: '東海岸 陽南面' },
      locals: 4, tourists: 1, price: '₩₩',
      why: {
        en: 'Ocean-view cafés on the quiet east coast, far from the crowds downtown.',
        ja: '市内の人混みから離れた、静かな東海岸のオーシャンビューカフェ。'
      },
      tips: {
        en: ['You will need a taxi or car.', 'Pair it with the columnar joint trail.'],
        ja: ['タクシーか車が必要です。', '柱状節理の散策路とセットで。']
      },
      order: { ko: '바다 보이는 자리 있어요?', en: 'Do you have a seat with a sea view?', ja: '海が見える席はありますか？' },
      map: '양남 카페'
    },
    {
      id: 'gyeongju-ssambap', city: 'gyeongju', cat: 'musteat',
      ko: '쌈밥',
      name: { en: 'Ssambap (leaf-wrap rice set)', ja: 'サムパプ（葉包みご飯定食）' },
      area: { en: 'Near Daereungwon tombs', ja: '大陵苑の周辺' },
      locals: 4, tourists: 4, price: '₩₩',
      why: {
        en: 'A table full of side dishes and fresh leaves to wrap rice and meat in. A Gyeongju classic for Korean families too.',
        ja: 'たくさんのおかずと新鮮な葉野菜でご飯と肉を包んで食べる定食。韓国の家族旅行でも定番。'
      },
      tips: {
        en: ['Usually ordered for 2 or more people.', 'Put a bit of ssamjang paste in each wrap.'],
        ja: ['ふつうは2人前から注文します。', '包むたびにサムジャンを少しのせて。']
      },
      order: { ko: '쌈밥 정식 2인분 주세요.', en: 'Ssambap set for two, please.', ja: 'サムパプ定食を2人前ください。' },
      map: '경주 쌈밥'
    },
    {
      id: 'gyeongju-hwangnam', city: 'gyeongju', cat: 'musteat',
      ko: '황남빵',
      name: { en: 'Hwangnam bread (red-bean pastry)', ja: '皇南パン（あんこ菓子）' },
      area: { en: 'Downtown Gyeongju', ja: '慶州市内' },
      locals: 4, tourists: 4, price: '₩₩',
      why: {
        en: 'The souvenir Koreans actually bring home from Gyeongju: thin pastry filled with sweet red bean.',
        ja: '韓国人が本当に慶州のお土産に買って帰る、薄い皮にあんこたっぷりのお菓子。'
      },
      tips: {
        en: ['Best eaten warm on the day.', 'Barley bread (chalboribbang) is the other local favorite.'],
        ja: ['当日に温かいうちに食べるのが一番。', 'チャルボリパン（もち麦パン）も地元の人気。']
      },
      order: { ko: '황남빵 한 상자 주세요.', en: 'One box of Hwangnam bread, please.', ja: '皇南パンを1箱ください。' },
      map: '황남빵'
    },
    {
      id: 'gyeongju-wolji', city: 'gyeongju', cat: 'go',
      ko: '동궁과 월지 야경',
      name: { en: 'Donggung Palace & Wolji Pond at night', ja: '東宮と月池の夜景' },
      area: { en: 'Inwang-dong', ja: '仁旺洞' },
      locals: 4, tourists: 4, price: '₩',
      why: {
        en: 'Koreans come here after sunset, when the pavilions are lit and reflected in the pond. Daytime visits miss the point.',
        ja: '韓国人は日が沈んでから訪れます。ライトアップされた楼閣が池に映る姿が見どころ。昼に行くのはもったいない。'
      },
      tips: {
        en: ['Arrive just before sunset and stay for the lights.', 'Cheomseongdae is a short walk away.'],
        ja: ['日没直前に着いてライトアップまで待ちましょう。', '瞻星台も歩いてすぐ。']
      },
      order: { ko: '어른 두 명이요.', en: 'Two adults, please.', ja: '大人2人です。' },
      insteadOf: { en: 'Visiting in the middle of the day', ja: '昼間の訪問' },
      map: '동궁과 월지'
    },
    {
      id: 'gyeongju-jusangjeolli', city: 'gyeongju', cat: 'go',
      ko: '양남 주상절리 파도소리길',
      name: { en: 'Yangnam Columnar Joint coastal trail', ja: '陽南柱状節理 波の音の道' },
      area: { en: 'Yangnam-myeon, east coast', ja: '東海岸 陽南面' },
      locals: 4, tourists: 1, price: 'free',
      why: {
        en: 'A seaside path past rock columns shaped like a fan. Free, quiet, and rarely on foreign travel lists.',
        ja: '扇のように広がる岩の柱を眺める海沿いの散策路。無料で静か、海外の旅行リストにはほとんど載っていません。'
      },
      tips: {
        en: ['The walk takes about an hour one way.', 'Windy in winter; bring a jacket.'],
        ja: ['片道1時間ほどの散策路です。', '冬は風が強いので上着を。']
      },
      order: { ko: '주상절리 파도소리길로 가 주세요.', en: 'To the Columnar Joint coastal trail, please.', ja: '柱状節理の波の音の道までお願いします。' },
      map: '경주 양남 주상절리'
    }
  ],

  /* ───────────── 올리브영 쇼핑 리스트 ───────────── */
  shopping: {
    tips: {
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
        ko: '선크림', name: { en: 'Sunscreen', ja: '日焼け止め' },
        why: { en: 'Koreans wear it every day. Light formulas with no white cast are the norm.', ja: '韓国人は毎日塗ります。白浮きしない軽いテクスチャーが主流。' }
      },
      {
        ko: '마스크팩', name: { en: 'Sheet masks', ja: 'シートマスク' },
        why: { en: 'Buy the 10-packs. Locals use them like a weekly routine, not a treat.', ja: '10枚入りがお得。韓国人にとっては特別なケアではなく習慣です。' }
      },
      {
        ko: '여드름 패치', name: { en: 'Pimple patches', ja: 'ニキビパッチ' },
        why: { en: 'Cheap, effective and in almost every Korean bathroom.', ja: '安くてよく効き、韓国の家庭にはほぼ必ずある定番品。' }
      },
      {
        ko: '진정 크림', name: { en: 'Soothing (cica) cream', ja: '鎮静（シカ）クリーム' },
        why: { en: 'For redness and irritation. Look for "cica" or "centella" on the label.', ja: '赤みや肌荒れに。ラベルの「CICA」「センテラ」が目印。' }
      },
      {
        ko: '립 틴트', name: { en: 'Lip tint', ja: 'リップティント' },
        why: { en: 'Long-lasting color that Koreans reapply all day. Try the testers.', ja: '色持ちが良く、韓国人は一日中塗り直します。テスターで試して。' }
      },
      {
        ko: '쿠션 파운데이션', name: { en: 'Cushion foundation', ja: 'クッションファンデ' },
        why: { en: 'Korea invented the cushion compact. Refills are often included.', ja: 'クッションファンデは韓国発祥。リフィル付きが多いです。' }
      },
      {
        ko: '클렌징 오일', name: { en: 'Cleansing oil', ja: 'クレンジングオイル' },
        why: { en: 'The first step of the Korean double cleanse.', ja: '韓国式ダブル洗顔の最初のステップ。' }
      },
      {
        ko: '헤어 트리트먼트', name: { en: 'Hair treatment', ja: 'ヘアトリートメント' },
        why: { en: 'Rinse-off treatments that Koreans use instead of conditioner.', ja: '韓国ではコンディショナーの代わりに洗い流すトリートメントが人気。' }
      }
    ]
  }
};
