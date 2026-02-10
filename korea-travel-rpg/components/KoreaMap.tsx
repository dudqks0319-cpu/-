'use client';

interface KoreaMapProps {
  cities: Array<{
    id: string;
    name: string;
    mapPosition: { x: number; y: number };
    themeColor: string;
    isUnlocked: boolean;
    isCompleted: boolean;
    completedMissions: number;
    totalMissions: number;
  }>;
  onCityClick: (cityId: string) => void;
}

export default function KoreaMap({ cities, onCityClick }: KoreaMapProps) {
  return (
    <div className="w-full max-w-lg mx-auto game-touch">
      <svg
        viewBox="0 0 800 1000"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="marker-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
          </filter>
        </defs>

        <style>{`
          .city-active {
            cursor: pointer;
          }
          .city-active:hover .marker-main {
            r: 30;
          }
          .marker-main {
            transition: r 0.2s ease;
          }
        `}</style>

        <rect width="800" height="1000" fill="#BFDBFE" rx="16" />

        <path
          d={`
            M 275 178
            C 310 168, 380 158, 450 162
            C 520 166, 565 178, 592 192
            C 610 206, 616 235, 618 270
            C 622 325, 625 385, 624 440
            C 623 495, 618 540, 610 575
            C 602 608, 590 635, 572 655
            C 552 675, 525 682, 498 678
            C 470 674, 445 664, 420 656
            C 395 648, 375 654, 350 664
            C 322 676, 295 668, 275 654
            C 252 638, 240 614, 236 585
            C 232 555, 236 528, 244 500
            C 252 472, 262 446, 272 420
            C 280 395, 280 372, 276 348
            C 272 324, 266 302, 260 282
            C 254 262, 248 244, 250 230
            C 254 218, 270 208, 296 202
            C 322 196, 340 196, 352 206
            C 346 198, 330 188, 310 182
            C 292 176, 280 176, 275 178
            Z
          `}
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="2.5"
        />

        <path
          d={`
            M 260 360
            C 252 362, 242 358, 237 366
            C 232 374, 238 382, 246 383
            C 254 384, 260 376, 260 368
            Z
          `}
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="1.5"
        />

        <path
          d={`
            M 480 685
            C 486 678, 498 677, 505 684
            C 512 691, 504 700, 494 700
            C 484 700, 474 692, 480 685
            Z
          `}
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="1.5"
        />

        <path
          d={`
            M 442 692
            C 448 686, 460 685, 465 692
            C 470 699, 462 706, 453 705
            C 444 704, 437 698, 442 692
            Z
          `}
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="1.5"
        />

        <ellipse
          cx="310"
          cy="820"
          rx="65"
          ry="28"
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="2.5"
        />

        <ellipse
          cx="392"
          cy="836"
          rx="12"
          ry="7"
          fill="#86EFAC"
          stroke="#059669"
          strokeWidth="1.5"
        />

        {cities.map((city) => {
          const { x, y } = city.mapPosition;

          if (city.isCompleted) {
            return (
              <g
                key={city.id}
                className="city-active"
                onClick={() => onCityClick(city.id)}
                filter="url(#marker-shadow)"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={25}
                  fill={city.themeColor}
                  stroke="white"
                  strokeWidth="3"
                  className="marker-main"
                />
                <text
                  x={x}
                  y={y + 7}
                  textAnchor="middle"
                  fontSize="18"
                >
                  ✅
                </text>
                <text
                  x={x}
                  y={y + 48}
                  textAnchor="middle"
                  fontSize="16"
                  fill="#1E293B"
                  fontWeight="600"
                >
                  {city.name}
                </text>
              </g>
            );
          }

          if (city.isUnlocked) {
            return (
              <g
                key={city.id}
                className="city-active"
                onClick={() => onCityClick(city.id)}
                filter="url(#marker-shadow)"
              >
                <circle cx={x} cy={y} r={25} fill={city.themeColor} opacity="0.3">
                  <animate
                    attributeName="r"
                    values="25;40;25"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.1;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r={25}
                  fill={city.themeColor}
                  stroke="white"
                  strokeWidth="3"
                  className="marker-main"
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize="13"
                  fill="white"
                  fontWeight="700"
                >
                  {city.completedMissions}/{city.totalMissions}
                </text>
                <text
                  x={x}
                  y={y + 48}
                  textAnchor="middle"
                  fontSize="16"
                  fill="#1E293B"
                  fontWeight="600"
                >
                  {city.name}
                </text>
              </g>
            );
          }

          return (
            <g
              key={city.id}
              className="cursor-pointer"
              onClick={() => onCityClick(city.id)}
              opacity={0.6}
            >
              <circle
                cx={x}
                cy={y}
                r={25}
                fill="#94A3B8"
                stroke="#64748B"
                strokeWidth="2"
              />
              <text x={x} y={y + 7} textAnchor="middle" fontSize="18">
                🔒
              </text>
              <text
                x={x}
                y={y + 48}
                textAnchor="middle"
                fontSize="16"
                fill="#64748B"
                fontWeight="500"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
