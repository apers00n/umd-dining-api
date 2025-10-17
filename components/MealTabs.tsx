"use client";
import { Tabs, Tab } from "@heroui/tabs";
import { capitalize, mealsTabs } from "@/lib/constants";

interface Props {
  selectedMeal: string;
  setSelectedMeal: (meal: string) => void;
  setSearchTerm: (term: string) => void;
}

export function MealTabs({
  selectedMeal,
  setSelectedMeal,
  setSearchTerm,
}: Props) {
  return (
    <Tabs
      onSelectionChange={(key) => {
        setSelectedMeal(capitalize(key.toString()));
        setSearchTerm("");
      }}
      className="flex pb-6 justify-center"
      variant="underlined"
      aria-label="Dynamic tabs"
      items={mealsTabs}
      classNames={{
        tabContent:
          "text-fuchsia-600/50 group-data-[selected=true]:text-fuchsia-600",
      }}
    >
      {(item) => <Tab key={item.id} title={item.label} className="text-2xl" />}
    </Tabs>
  );
}
