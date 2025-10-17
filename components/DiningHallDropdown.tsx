"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { diningHalls } from "@/lib/constants";

interface Props {
  diningHall: string;
  setDiningHall: (name: string) => void;
}

export default function DiningHallDropdown({
  diningHall,
  setDiningHall,
}: Props) {
  return (
    <Dropdown className="bg-fuchsia-100 shadow-none">
      <DropdownTrigger>
        <h1 className="text-center text-3xl sm:text-5xl p-5">{diningHall}</h1>
      </DropdownTrigger>
      <DropdownMenu
        itemClasses={{ title: "text-3xl sm:text-5xl text-center" }}
        classNames={{ base: "bg-transparent items-center justify-center" }}
      >
        {Object.keys(diningHalls).map((name) => (
          <DropdownItem key={name} onPress={() => setDiningHall(name)}>
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
