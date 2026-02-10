import { City } from '@/types/game';

export const cities: City[] = [
  {
    id: 'seoul',
    name: '서울',
    nameEn: 'Seoul',
    description:
      '대한민국의 수도이자 600년 역사를 간직한 도시.\n전통과 현대가 공존하는 매력적인 메트로폴리스.',
    requiredLevel: 1,
    missions: ['seoul-1', 'seoul-2', 'seoul-3'],
    stamp: '서울 탐험가',
    mapPosition: { x: 55, y: 28 },
    themeColor: '#EF4444',
  },
  {
    id: 'incheon',
    name: '인천',
    nameEn: 'Incheon',
    description:
      '서해를 품은 대한민국 대표 항구 도시.\n차이나타운과 개항 역사가 살아 숨 쉬는 곳.',
    requiredLevel: 1,
    missions: ['incheon-1', 'incheon-2', 'incheon-3'],
    stamp: '인천 탐험가',
    mapPosition: { x: 48, y: 30 },
    themeColor: '#3B82F6',
  },
  {
    id: 'suwon',
    name: '수원',
    nameEn: 'Suwon',
    description:
      '유네스코 세계문화유산 수원화성이 있는 도시.\n정조의 꿈과 맛있는 갈비의 고장.',
    requiredLevel: 1,
    missions: ['suwon-1', 'suwon-2', 'suwon-3'],
    stamp: '수원 탐험가',
    mapPosition: { x: 53, y: 34 },
    themeColor: '#8B5CF6',
  },
  {
    id: 'busan',
    name: '부산',
    nameEn: 'Busan',
    description:
      '대한민국 제2의 도시이자 최대의 항구 도시.\n아름다운 해변과 신선한 해산물의 천국.',
    requiredLevel: 4,
    missions: ['busan-1', 'busan-2', 'busan-3'],
    stamp: '부산 탐험가',
    mapPosition: { x: 78, y: 65 },
    themeColor: '#F59E0B',
  },
  {
    id: 'jeju',
    name: '제주',
    nameEn: 'Jeju',
    description:
      '화산이 만든 천혜의 자연경관을 가진 섬.\n유네스코 세계자연유산이 숨 쉬는 보물섬.',
    requiredLevel: 7,
    missions: ['jeju-1', 'jeju-2', 'jeju-3'],
    stamp: '제주 탐험가',
    mapPosition: { x: 45, y: 85 },
    themeColor: '#10B981',
  },
];
