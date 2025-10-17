"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { diningHalls } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

interface Props {
  diningHall: string;
  setDiningHall: (name: string) => void;
}

export default function DiningHallDropdown({
  diningHall,
  setDiningHall,
}: Props) {
  return (
    <Dropdown className="bg-fuchsia-100 w-screen shadow-none">
      <DropdownTrigger>
        <div className="justify-center items-center flex-row flex">
          <ChevronDown
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
            strokeWidth={4}
          />
          <h1 className="text-center text-3xl sm:text-5xl p-5">{diningHall}</h1>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        itemClasses={{
          base: "data-[hover=true]:text-fuchsia-500 data-[hover=true]:bg-transparent ",
          title: "text-3xl sm:text-5xl text-center",
        }}
        classNames={{
          base: "bg-transparent w-max items-center justify-center",
        }}
      >
        {Object.keys(diningHalls)
          .filter((name) => name !== diningHall) // hide selected
          .map((name) => (
            <DropdownItem key={name} onPress={() => setDiningHall(name)}>
              {name}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
}
