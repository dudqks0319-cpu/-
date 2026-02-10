'use client';

interface CityMarkerData {
  id: string;
  name: string;
  mapPosition: { x: number; y: number };
  themeColor: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  completedMissions: number;
  totalMissions: number;
}

interface KoreaMapProps {
  cities: CityMarkerData[];
  onCityClick: (cityId: string) => void;
}

export default function KoreaMap({ cities, onCityClick }: KoreaMapProps) {
  return (
    <div className="w-full max-w-md mx-auto relative game-touch">
      <svg viewBox="0 0 400 520" className="w-full h-auto drop-shadow-lg">
        {/* 바다 배경 */}
        <rect width="400" height="520" fill="#BFDBFE" rx="20" />

        {/* 한반도 남한 본토 */}
        <path
          d="M 170 30 L 200 25 L 230 30 L 255 28 L 270 35 L 280 50 L 290 55
             L 295 70 L 285 85 L 280 95 L 275 100 L 290 110 L 295 120
             L 290 135 L 280 145 L 275 155 L 270 165 L 265 180
             L 260 195 L 265 210 L 270 225 L 280 240 L 290 260
             L 300 275 L 310 290 L 315 310 L 310 325 L 300 340
             L 290 350 L 280 355 L 270 360 L 255 355 L 240 350
             L 225 355 L 210 365 L 195 370 L 180 365 L 165 355
             L 150 340 L 140 325 L 130 310 L 120 290 L 115 270
             L 110 250 L 105 230 L 100 210 L 105 190 L 110 170
             L 115 155 L 120 140 L 115 125 L 110 110 L 115 95
             L 125 80 L 135 65 L 145 50 L 155 40 Z"
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="2"
        />

        {/* 제주도 */}
        <path
          d="M 135 440 L 155 432 L 175 430 L 195 432 L 215 438
             L 225 448 L 220 458 L 205 465 L 185 468 L 165 465
             L 145 458 L 135 450 Z"
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="2"
        />

        {/* 도시 마커 */}
        {cities.map((city) => {
          const cx = city.mapPosition.x * 4;
          const cy = city.mapPosition.y * 5;
          const isJeju = city.id === 'jeju';
          const finalCy = isJeju ? 450 : cy;
          const finalCx = isJeju ? 180 : cx;

          if (!city.isUnlocked) {
            return (
              <g key={city.id} className="cursor-not-allowed">
                <circle
                  cx={finalCx}
                  cy={finalCy}
                  r={18}
                  fill="#94A3B8"
                  stroke="#64748B"
                  strokeWidth="2"
                  opacity={0.6}
                />
                <text
                  x={finalCx}
                  y={finalCy + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fill="white"
                >
                  🔒
                </text>
                <text
                  x={finalCx}
                  y={finalCy + 34}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#94A3B8"
                  fontWeight="bold"
                >
                  {city.name}
                </text>
              </g>
            );
          }

          return (
            <g
              key={city.id}
              onClick={() => onCityClick(city.id)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
            >
              {/* 펄스 애니메이션 (열린 미완료 도시) */}
              {!city.isCompleted && (
                <circle
                  cx={finalCx}
                  cy={finalCy}
                  r={22}
                  fill={city.themeColor}
                  opacity={0.3}
                >
                  <animate
                    attributeName="r"
                    values="22;28;22"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.1;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* 메인 원 */}
              <circle
                cx={finalCx}
                cy={finalCy}
                r={18}
                fill={city.themeColor}
                stroke="white"
                strokeWidth="3"
                className="transition-transform duration-200 hover:scale-110"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
              />

              {/* 완료 체크마크 또는 진행도 */}
              <text
                x={finalCx}
                y={finalCy + 5}
                textAnchor="middle"
                fontSize="14"
                fill="white"
              >
                {city.isCompleted ? '✅' : `${city.completedMissions}/${city.totalMissions}`}
              </text>

              {/* 도시 이름 */}
              <text
                x={finalCx}
                y={finalCy + 34}
                textAnchor="middle"
                fontSize="12"
                fill="#1E293B"
                fontWeight="bold"
              >
                {city.name}
              </text>

              {/* 완료 도시 왕관 */}
              {city.isCompleted && (
                <text
                  x={finalCx}
                  y={finalCy - 22}
                  textAnchor="middle"
                  fontSize="14"
                >
                  👑
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
