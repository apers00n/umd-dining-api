"use client";

import { Spinner } from "@heroui/spinner";
import { Card, CardBody } from "@heroui/card";
import { useEffect, useState } from "react";
import { Concert_One } from "next/font/google";
const concertOne = Concert_One({ subsets: ["latin"], weight: ["400"] });
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Tabs, Tab } from "@heroui/tabs";
import Map from "@/components/map";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const diningHalls2: Record<string, number> = {
  "South Dining Hall": 16,
  Yahentamitsi: 19,
  "251 North": 51,
};
const tabs = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
];

export default function Home() {
  const [menu, setMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");
  const [searchTerm, setSearchTerm] = useState("");
  const [diningHall, setDiningHall] = useState<string>("South Dining Hall");

  useEffect(() => {
    async function fetchMenu() {
      try {
        console.log(diningHalls2[diningHall]);
        const res = await fetch(
          `/api/menu?locationNum=${diningHalls2[diningHall] || "16"}`,
        );
        const data = await res.json();
        setMenu(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, [diningHall]);

  if (loading)
    return (
      <div className="flex bg-fuchsia-200/50 justify-center items-center h-screen">
        <Spinner
          size="lg"
          color="current"
          variant="wave"
          className="text-fuchsia-500 scale-[1.6]"
        />
      </div>
    );

  if (!menu)
    return (
      <div className="text-center text-gray-500 mt-10">
        <h1>No menu data found.</h1>
      </div>
    );

  const filteredMenu = (
    Object.entries(menu[selectedMeal] || {}) as [string, any[]][]
  ).reduce((acc: Record<string, any[]>, [section, items]) => {
    const filteredItems = items.filter((item) => {
      const name = Object.keys(item)[0];
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filteredItems.length > 0) {
      acc[section] = filteredItems;
    }

    return acc;
  }, {});

  return (
    <div className="min-h-screen py-24">
      <Dropdown className="bg-fuchsia-100 shadow-none">
        <DropdownTrigger>
          <h1 className="text-center text-5xl p-5">{diningHall}</h1>
        </DropdownTrigger>
        <DropdownMenu
          itemClasses={{
            title: "text-5xl text-center",
          }}
          classNames={{
            base: "bg-transparent items-center justify-center",
          }}
        >
          {Object.entries(diningHalls2).map(([name, num]) => (
            <DropdownItem
              key={name}
              onPress={() => {
                setDiningHall(name);
              }}
            >
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <Tabs
        onSelectionChange={(key) => {
          setSelectedMeal(capitalize(key.toString()));
          setSearchTerm("");
        }}
        className="flex pb-6 justify-center"
        variant="underlined"
        aria-label="Dynamic tabs"
        items={tabs}
        classNames={{
          tabContent:
            "text-fuchsia-600/50 group-data-[selected=true]:text-fuchsia-600",
        }}
      >
        {(item) => (
          <Tab className="text-2xl" key={item.id} title={item.label}></Tab>
        )}
      </Tabs>

      <Map menu={menu[selectedMeal]} />

      <h1 className="pb-10 mt-24 pt-24 border-dotted border-t-8 text-5xl underline text-center flex items-center justify-center">{`Full ${selectedMeal} Menu`}</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-120 text-xl rounded-xl border-4 border-dashed border-fuchsia-400 bg-fuchsia-100 px-4 py-3 text-fuchsia-500 placeholder-fuchsia-500/60 focus:outline-none focus:ring-2 focus:border-solid focus:ring-fuchsia-400"
        />
      </div>
      <div className="grid min-h-200 p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
        {Object.entries(filteredMenu).length === 0 ? (
          <div className="col-span-full text-center text-fuchsia-700 italic">
            No matching items found.
          </div>
        ) : (
          Object.entries(filteredMenu).map(
            ([section, items]: [string, any], i: number) => (
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
                        "text-2xl border-b-4 border-fuchsia-700 w-max border-dotted",
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
            ),
          )
        )}
      </div>
    </div>
  );
}
