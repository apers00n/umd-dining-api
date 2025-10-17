"use client";
import { Card, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Concert_One } from "next/font/google";

const concertOne = Concert_One({ subsets: ["latin"], weight: ["400"] });

interface MenuGridProps {
  menu: Record<string, any[]>;
  filteredMenu: Record<string, any[]>;
}

export function MenuGrid({ filteredMenu }: MenuGridProps) {
  return (
    <div className="grid min-h-200 p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
      {Object.entries(filteredMenu).length === 0 ? (
        <div className="col-span-full text-center text-fuchsia-700 italic">
          No matching items found.
        </div>
      ) : (
        Object.entries(filteredMenu).map(([section, items]) => (
          <Card
            key={section}
            className={`bg-fuchsia-200 hover:shadow-lg transition-all duration-200 p-0 rounded-xl
          ${items.length > 5 ? "md:col-span-2" : "md:col-span-1"}`}
          >
            <Accordion>
              <AccordionItem
                className="font-semibold text-lg rounded-t-xl p-4"
                classNames={{
                  titleWrapper: "pl-3",
                  indicator: "text-fuchsia-900 font-extrabold text-3xl ",
                  title:
                    "text-lg sm:text-2xl border-b-4 border-fuchsia-700 w-max border-dotted",
                }}
                key="1"
                aria-label={section}
                title={section}
              >
                <CardBody className={`space-y-2 ${concertOne.className}`}>
                  {items.map((item: any, j: number) => {
                    const name = Object.keys(item)[0];
                    const { tags } = item[name];
                    return (
                      <div key={j}>
                        <p className="font-medium text-xl">{name}</p>
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
        ))
      )}
    </div>
  );
}
