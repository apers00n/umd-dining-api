"use client";

import { useEffect, useState } from "react";

export default function Map({ menu }: { menu: Record<string, any> }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Dining Ha Layout</h1>
      <h1>{selected}</h1>

      {/* SVG floor plan */}
      <div className="w-full max-w-3xl">
        <svg
          viewBox="0 0 490 415"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto rounded-lg"
        >
          <image
            x="5"
            y="3"
            width="507.47"
            height="411.43"
            href="/SouthCampus.png" // 👈 path to your image in /public
            preserveAspectRatio="xMidYMid meet"
          />
          <rect
            x="76.169"
            y="158.84"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            stroke="#00f"
            fill="none"
            pointerEvents="all"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Treats")}
          />
          <rect
            x="96.52"
            y="122.78"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Breakfast Bar")}
          />
          <rect
            x="96.52"
            y="87.482"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Peanut Butter")}
          />
          <rect
            x="190.83"
            y="56.175"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Purple Zone")}
          />
          <rect
            x="190.83"
            y="91.472"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Pizza")}
          />
          <rect
            x="277.4"
            y="97.969"
            width="75.262"
            height="60.528"
            rx="1.5037"
            ry="1.7834"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="1.5195"
            strokeDasharray="0.151951,0.151951"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Roma Vegan Salads and Panini")}
          />
          <rect
            x="332.22"
            y="137.64"
            width="52.19"
            height="21.841"
            rx="1.0427"
            ry=".64354"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.76009"
            strokeDasharray="0.0760087,0.0760087"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Beverages")}
          />
          <rect
            x="277.4"
            y="6.4428"
            width="75.262"
            height="91.526"
            rx="1.5037"
            ry="2.6968"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="1.8685"
            strokeDasharray="0.186852,0.186852"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Mongolian Grill")}
          />
          <rect
            x="190.83"
            y="126.77"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Pasta")}
          />
          <rect
            x="190.78"
            y="197.31"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Grill Works")}
          />
          <rect
            x="190.75"
            y="232.57"
            width="52.118"
            height="30.726"
            rx="1.0413"
            ry=".90533"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.9009"
            strokeDasharray="0.0900905,0.0900905"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Chef's Table")}
          />
          <rect
            x="190.79"
            y="263.34"
            width="52.03"
            height="37.056"
            rx="1.0395"
            ry="1.0918"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.98853"
            strokeDasharray="0.098853,0.098853"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Roaster")}
          />
          <rect
            x="190.69"
            y="300.3"
            width="60.059"
            height="21.197"
            rx="1.2"
            ry=".62457"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.80327"
            strokeDasharray="0.0803272,0.0803272"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Soft Serve and Ice Cream")}
          />
          <rect
            x="215.24"
            y="321.44"
            width="35.573"
            height="26.303"
            rx=".71074"
            ry=".77503"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.68866"
            strokeDasharray="0.0688658,0.0688658"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Desserts")}
          />
          <rect
            x="178.05"
            y="162.12"
            width="64.779"
            height="35.187"
            rx="1.2943"
            ry="1.0368"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="1.0748"
            strokeDasharray="0.107483,0.107483"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Broiler Works")}
          />
          <rect
            x="76.169"
            y="194.14"
            width="52.054"
            height="35.297"
            rx="1.04"
            ry="1.04"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.965"
            strokeDasharray="0.0964999,0.0964999"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Deli+")}
          />
          <rect
            x="76.15"
            y="229.41"
            width="52.092"
            height="32.483"
            rx="1.0408"
            ry=".95711"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.92609"
            strokeDasharray="0.0926088,0.0926088"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Deli")}
          />
          <rect
            x="146.62"
            y="191.32"
            width="30.59"
            height="29.876"
            rx=".61117"
            ry=".88031"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.68059"
            strokeDasharray="0.0680592,0.0680592"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Waffles")}
          />
          <rect
            x="258.54"
            y="296.85"
            width="48.866"
            height="29.699"
            rx=".97633"
            ry=".87509"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.85766"
            strokeDasharray="0.0857659,0.0857659"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Condiments")}
          />
          <rect
            x="347.86"
            y="317.12"
            width="64.122"
            height="29.577"
            rx="1.2811"
            ry=".87147"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="0.98042"
            strokeDasharray="0.0980422,0.0980422"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Infused Water Station")}
          />
          <rect
            x="146.66"
            y="242.35"
            width="30.152"
            height="81.849"
            rx=".60242"
            ry="2.4117"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="1.1184"
            strokeDasharray="0.11184,0.11184"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Salad Bar")}
          />
          <rect
            x="80.337"
            y="305.68"
            width="47.64"
            height="47.759"
            rx=".95183"
            ry="1.4072"
            fill="none"
            pointerEvents="all"
            stroke="#00f"
            strokeWidth="1.0739"
            strokeDasharray="0.107386,0.107386"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setSelected("Beverages")}
          />
        </svg>
      </div>

      {/* Menu display */}
      {selected && (
        <div className="mt-8 w-full max-w-2xl bg-fuchsia-50 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-fuchsia-900">
            {selected}
          </h2>

          {menu[selected]?.length ? (
            <ul className="space-y-2">
              {menu[selected].map((item: any, i: number) => {
                const name = Object.keys(item)[0];
                const { tags } = item[name];
                return (
                  <li key={i}>
                    <p className="font-medium text-fuchsia-800">{name}</p>
                    {tags?.length > 0 && (
                      <p className="text-sm text-fuchsia-700">
                        {tags.join(", ")}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="italic text-fuchsia-800">No items listed.</p>
          )}
        </div>
      )}
    </div>
  );
}
