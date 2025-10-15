"use client";

import { Spinner } from "@heroui/spinner";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { useEffect, useState } from "react";
import { Concert_One } from "next/font/google";
const concertOne = Concert_One({ subsets: ["latin"], weight: ["400"] });
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Home() {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("/api/menu?locationNum=16&dtdate=10/15/2025");
        const data = await res.json();
        setMenu(data["Breakfast"]); // 🔹 only grab breakfast section
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    );

  if (!menu)
    return (
      <div className="text-center text-gray-500 mt-10">
        No breakfast data found.
      </div>
    );

  return (
    <div className="grid p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
      {Object.entries(menu).map(([section, items], i) => (
        <Card
          key={section}
          className={`bg-fuchsia-100 hover:shadow-lg transition-all duration-200 p-0 rounded-xl
        ${items.length > 5 ? "md:col-span-2" : "md:col-span-1"}`}
        >
          <Accordion>
            <AccordionItem
              className="text-fuchsia-900 font-semibold text-lg rounded-t-xl p-4"
              key="1"
              aria-label={section}
              title={section}
            >
              <CardBody className={`space-y-2 ${concertOne.className}`}>
                {items.map((item, j) => {
                  const name = Object.keys(item)[0];
                  const { tags } = item[name];
                  return (
                    <div key={j}>
                      <p className="font-medium text-fuchsia-900">{name}</p>
                      {tags && tags.length > 0 && (
                        <p className="text-xs text-fuchsia-700">
                          {tags.join(", ")}
                        </p>
                      )}
                    </div>
                  );
                })}
              </CardBody>
            </AccordionItem>
          </Accordion>
        </Card>
      ))}
    </div>
  );
}
