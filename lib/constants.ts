// constants.ts
export const diningHalls: Record<string, number> = {
  "South Dining Hall": 16,
  Yahentamitsi: 19,
  "251 North": 51,
};

export const mealsTabs = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
];

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
