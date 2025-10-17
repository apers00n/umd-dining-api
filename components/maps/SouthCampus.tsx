import {
  BreakfastBar,
  PeanutButter,
  PurpleZone,
  Treats,
  Pizza,
  RomaVeganSaladsAndPanini,
  Beverages,
  MongolianGrill,
  Pasta,
  GrillWorks,
  ChefsTable,
  Roaster,
  SoftServeandIceCream,
  Desserts,
  BroilerWorks,
  DeliPlus,
  Deli,
  Waffles,
  Condiments,
  InfusedWaterStation,
  SaladBar,
} from "./svgRects";

export const SouthCampusSVG = ({ setSelected }: { setSelected: any }) => {
  return (
    <div className="w-full max-w-3xl">
      <svg
        viewBox="0 0 490 415"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rounded-lg"
      >
        <image
          x="5"
          y="3"
          width="507.47"
          height="411.43"
          href="/SouthCampus.png"
          preserveAspectRatio="xMidYMid meet"
        />
        <Treats setSelected={setSelected} />
        <BreakfastBar setSelected={setSelected} />
        <PeanutButter setSelected={setSelected} />
        <PurpleZone setSelected={setSelected} />
        <Pizza setSelected={setSelected} />
        <RomaVeganSaladsAndPanini setSelected={setSelected} />
        <Beverages setSelected={setSelected} />
        <MongolianGrill setSelected={setSelected} />
        <Pasta setSelected={setSelected} />
        <GrillWorks setSelected={setSelected} />
        <ChefsTable setSelected={setSelected} />
        <Roaster setSelected={setSelected} />
        <SoftServeandIceCream setSelected={setSelected} />
        <Desserts setSelected={setSelected} />
        <BroilerWorks setSelected={setSelected} />
        <DeliPlus setSelected={setSelected} />
        <Deli setSelected={setSelected} />
        <Waffles setSelected={setSelected} />
        <Condiments setSelected={setSelected} />
        <InfusedWaterStation setSelected={setSelected} />
        <SaladBar setSelected={setSelected} />
      </svg>
    </div>
  );
};
