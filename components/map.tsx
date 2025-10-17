"use client";

import { useState } from "react";

import { Concert_One } from "next/font/google";
import { SouthCampusSVG } from "./maps/SouthCampus";
import { NorthSVG } from "./maps/251";

const concertOne = Concert_One({ subsets: ["latin"], weight: ["400"] });

export function Map({
  menu,
  hall,
}: {
  menu: Record<string, any>;
  hall: string;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center w-full p-6">
      {hall === "South Dining Hall" && (
        <SouthCampusSVG setSelected={setSelected} />
      )}
      {hall === "251 North" && <NorthSVG setSelected={setSelected} />}

      {selected.length > 0 && (
        <div className="mt-8 w-full flex flex-wrap gap-6 justify-center">
          {selected.map((section) => (
            <div
              key={section}
              className="bg-fuchsia-200 p-10 pr-20 rounded-2xl shadow-md inline-flex flex-col"
              style={{ width: "auto" }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b-5 border-fuchsia-700 w-max border-dotted">
                {section}
              </h2>
              {menu[section]?.length ? (
                <ul className={`space-y-2 ${concertOne.className}`}>
                  {menu[section].map((item: any, i: number) => {
                    const name = Object.keys(item)[0];
                    const { tags } = item[name];
                    return (
                      <li key={i}>
                        <p className="font-medium text-md sm:text-xl text-fuchsia-800">
                          {name}
                        </p>
                        {tags?.length > 0 && (
                          <p className="text-xs sm:text-md text-fuchsia-700">
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
