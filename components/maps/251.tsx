const stroke = "none";

export const PurpleZone = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="298.182"
      y="0"
      width="48.69"
      height="67.561"
      rx="1.04"
      ry="1.04"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Purple Zone", "Purple Zone-ALL DAY"])}
    />
  );
};

export const Burgers = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="252.072"
      y="-0.012"
      width="46.117"
      height="67.587"
      rx="0.98505"
      ry="1.0404"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="0.93934"
      strokeDasharray="0.0939335,0.0939335"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() =>
        setSelected(["Smash Hot Sub", "Smash Deli", "Smash Burger"])
      }
    />
  );
};

export const ChefsTable = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="1.884"
      y="54.813"
      width="137.85"
      height="54.081"
      rx="2.9445"
      ry="0.8325"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="1.4527"
      strokeDasharray="0.145273,0.145273"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() =>
        setSelected([
          "Chef's Table Mains",
          "Chef's Table Extras",
          "Halal at Chef's Table",
        ])
      }
    />
  );
};

export const HarvestGreens = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="4.118"
      y="186.877"
      width="137.85"
      height="54.081"
      rx="2.9445"
      ry="0.8325"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="1.4527"
      strokeDasharray="0.145273,0.145273"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() =>
        setSelected(["Harvest Vegan", "Harvest Greens", "Harvest Entree"])
      }
    />
  );
};

export const Chillz = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="200.452"
      y="255.987"
      width="68.124"
      height="55.157"
      rx="1.4551"
      ry="0.84906"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="1.0314"
      strokeDasharray="0.103135,0.103135"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["CHILLZ"])}
    />
  );
};

export const Ciao = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="175.162"
      y="106.928"
      width="53.74"
      height="82.999"
      rx="1.1479"
      ry="1.2777"
      stroke={stroke}
      fill="none"
      pointerEvents="all"
      strokeWidth="1.1237"
      strokeDasharray="0.112368,0.112368"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() =>
        setSelected(["Ciao All-Day", "Ciao Chilled Salads", "Ciao Pizza"])
      }
    />
  );
};

export const NorthSVG = ({ setSelected }: { setSelected: any }) => {
  return (
    <div className="w-full max-w-3xl">
      <svg
        viewBox="0 0 350 350"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rounded-lg"
      >
        <image
          x="0"
          y="0"
          width="346.87"
          height="336.81"
          href="/251.png"
          preserveAspectRatio="xMidYMid meet"
        />
        <PurpleZone setSelected={setSelected} />
        <Burgers setSelected={setSelected} />
        <ChefsTable setSelected={setSelected} />

        <HarvestGreens setSelected={setSelected} />
        <Chillz setSelected={setSelected} />
        <Ciao setSelected={setSelected} />
      </svg>
    </div>
  );
};
