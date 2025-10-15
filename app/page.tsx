import React from "react";
import { Button, ButtonGroup } from "@heroui/button";
export const dynamic = "force-dynamic"; // ensures it updates when data changes
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Alert } from "@heroui/alert";

export default async function HomePage() {
  const locationNum = 16;
  const dtdate = "10/15/2025";
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/menu?locationNum=${locationNum}&dtdate=${dtdate}`;

  let data = null;
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Dining Menu Preview</h1>
      <p className="mb-4 text-gray-700">
        Showing menu for <b>location {locationNum}</b> on <b>{dtdate}</b>
      </p>
      <Button color="primary">Button</Button>
      <div></div>

      {!data ? (
        <p className="text-red-500">Could not load data.</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
