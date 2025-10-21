"use client";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";
import DiningHallDropdown from "@/components/DiningHallDropdown";
import { MealTabs } from "@/components/MealTabs";
import { MenuGrid } from "@/components/MenuGrid";
import { Map } from "@/components/map";
import { diningHalls, formatDate } from "@/lib/constants";
import DateSelect from "@/components/DateSelect";

export default function Home() {
  const [menu, setMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState<string>("Dinner");
  const [searchTerm, setSearchTerm] = useState("");
  const [diningHall, setDiningHall] = useState<string>("South Dining Hall");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const diningSaved = localStorage.getItem("diningHall");
    if (diningSaved) setDiningHall(diningSaved);
  }, []);

  useEffect(() => {
    localStorage.setItem("diningHall", diningHall);
  }, [diningHall]);

  useEffect(() => {
    async function fetchMenu() {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/menu?locationNum=${diningHalls[diningHall] || 16}&date=${formatDate(date)}`,
        );
        const data = await res.json();
        setMenu(data);
        if (!data[selectedMeal]) {
          // basically when there's brunch, not breakfast
          setSelectedMeal(Object.keys(data)[0]);
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, [diningHall, date]);

  const filteredMenu = Object.entries(
    menu === null ? {} : menu[selectedMeal] || {},
  ).reduce((acc: Record<string, any[]>, [section, items]: [string, any]) => {
    const filteredItems = items.filter((item: any) => {
      const name = Object.keys(item)[0];
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filteredItems.length > 0) acc[section] = filteredItems;
    return acc;
  }, {});

  return (
    <div className="min-h-screen p-4 py-24">
      <DiningHallDropdown
        diningHall={diningHall}
        setDiningHall={setDiningHall}
      />
      <DateSelect date={date} setDate={setDate} />
      {loading && (
        <div className="flex justify-center items-start pt-10 h-screen">
          <Spinner
            size="lg"
            color="current"
            variant="wave"
            className="text-fuchsia-500 scale-[1.6]"
          />
        </div>
      )}
      {!loading && !menu && (
        <div className="text-center text-gray-500 mt-10">
          <h1>No menu data found.</h1>
        </div>
      )}

      {!loading && menu && (
        <>
          <MealTabs
            tabItems={Object.keys(menu).map((key) => ({
              id: key.toLowerCase(),
              label: key,
            }))}
            selectedMeal={selectedMeal}
            setSelectedMeal={setSelectedMeal}
            setSearchTerm={setSearchTerm}
          />
          <Map menu={menu[selectedMeal]} hall={diningHall} />
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
        </>
      )}
    </div>
  );
}
