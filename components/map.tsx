"use client";

import { useState } from "react";
import {
  BreakfastBar,
  PeanutButter,
  PurpleZone,
  Treats,
  Pizza,
  RomaVeganSaladsAndPanini,
  Beverages,
  MongolianGrill,
  Pasta,
  GrillWorks,
  ChefsTable,
  Roaster,
  SoftServeandIceCream,
  Desserts,
  BroilerWorks,
  DeliPlus,
  Deli,
  Waffles,
  Condiments,
  InfusedWaterStation,
  SaladBar,
} from "./svgRects";

export default function Map({ menu }: { menu: Record<string, any> }) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6">
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
            href="/SouthCampus.png"
            preserveAspectRatio="xMidYMid meet"
          />
          <Treats setSelected={setSelected} />
          <BreakfastBar setSelected={setSelected} />
          <PeanutButter setSelected={setSelected} />
          <PurpleZone setSelected={setSelected} />
          <Pizza setSelected={setSelected} />
          <RomaVeganSaladsAndPanini setSelected={setSelected} />
          <Beverages setSelected={setSelected} />
          <MongolianGrill setSelected={setSelected} />
          <Pasta setSelected={setSelected} />
          <GrillWorks setSelected={setSelected} />
          <ChefsTable setSelected={setSelected} />
          <Roaster setSelected={setSelected} />
          <SoftServeandIceCream setSelected={setSelected} />
          <Desserts setSelected={setSelected} />
          <BroilerWorks setSelected={setSelected} />
          <DeliPlus setSelected={setSelected} />
          <Deli setSelected={setSelected} />
          <Waffles setSelected={setSelected} />
          <Condiments setSelected={setSelected} />
          <InfusedWaterStation setSelected={setSelected} />
          <SaladBar setSelected={setSelected} />
        </svg>
      </div>

      {/* Menu display for each selected area */}
      {selected.length > 0 && (
        <div className="mt-8 w-full flex flex-wrap gap-6 justify-center">
          {selected.map((section) => (
            <div
              key={section}
              className="bg-fuchsia-200 p-10 pr-20 rounded-2xl shadow-md inline-flex flex-col"
              style={{ width: "auto" }}
            >
              <h2 className="text-3xl font-semibold mb-6 border-b-5 border-fuchsia-700 w-max border-dotted">
                {section}
              </h2>
              {menu[section]?.length ? (
                <ul className="space-y-2">
                  {menu[section].map((item: any, i: number) => {
                    const name = Object.keys(item)[0];
                    const { tags } = item[name];
                    return (
                      <li key={i}>
                        <p className="font-medium text-xl text-fuchsia-800">
                          {name}
                        </p>
                        {tags?.length > 0 && (
                          <p className="text-md text-fuchsia-700">
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
          ))}
        </div>
      )}
    </div>
  );
}
