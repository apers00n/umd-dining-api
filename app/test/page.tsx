"use client";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";
import DiningHallDropdown from "@/components/DiningHallDropdown";
import { MealTabs } from "@/components/MealTabs";
import { MenuGrid } from "@/components/MenuGrid";
import { Map } from "@/components/map";
import { diningHalls } from "@/lib/constants";

export default function Home() {
  const [menu, setMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");
  const [searchTerm, setSearchTerm] = useState("");
  const [diningHall, setDiningHall] = useState<string>("South Dining Hall");

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(
          `/api/menu?locationNum=${diningHalls[diningHall] || 16}`,
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

  const filteredMenu = Object.entries(menu[selectedMeal] || {}).reduce(
    (acc: Record<string, any[]>, [section, items]: [string, any]) => {
      const filteredItems = items.filter((item: any) => {
        const name = Object.keys(item)[0];
        return name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      if (filteredItems.length > 0) acc[section] = filteredItems;
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen p-4 py-24">
      <DiningHallDropdown
        diningHall={diningHall}
        setDiningHall={setDiningHall}
      />
      <MealTabs
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        setSearchTerm={setSearchTerm}
      />
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
      <MenuGrid filteredMenu={filteredMenu} menu={menu} />
    </div>
  );
}
