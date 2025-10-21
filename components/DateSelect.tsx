"use client";

import { formatDate } from "@/lib/constants";
import { Select, SelectItem, SharedSelection } from "@heroui/react";
import { useMemo } from "react";

interface DateSelectProps {
  date: Date;
  setDate: (newDate: Date) => void;
}

export default function DateSelect({ date, setDate }: DateSelectProps) {
  const dates = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() + i);
      return d;
    });
  }, [date]);

  const selectedKeys = useMemo(
    () => new Set([new Date(date.setHours(0, 0, 0, 0)).toISOString()]),
    [date],
  );

  const handleChange = (keys: SharedSelection) => {
    const selected = Array.from(keys)[0];
    if (!selected) return;
    const newDate = new Date(selected);
    if (!isNaN(newDate.getTime())) setDate(newDate);
  };

  return (
    <div className="flex justify-center p-5">
      <Select
        label="Select a date"
        placeholder="Choose a date"
        variant="bordered"
        selectedKeys={selectedKeys}
        onSelectionChange={handleChange}
        disallowEmptySelection
        className="max-w-xs"
        classNames={{
          label: "group-data-[filled=true]:text-fuchsia-400",
          trigger:
            "data-[open=true]:border-fuchsia-500 data-[hover=true]:border-fuchsia-300 border-fuchsia-500 text-fuchsia-700",
          value: "group-data-[has-value=true]:text-fuchsia-700",
          popoverContent: "bg-fuchsia-300",
          listbox:
            "data-[hover=true]:text-orange-500 data-[selectable=true]:focus:bg-fuchsia-900 data-[selectable=true]:focus:text-fuchsia-700",
        }}
      >
        {dates.map((d) => {
          const key = d.toISOString();
          const label = formatDate(d);
          return <SelectItem key={key}>{label}</SelectItem>;
        })}
      </Select>
    </div>
  );
}
