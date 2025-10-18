export const Sprouts = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="81.553"
      y="206.1"
      width="85.978"
      height="75.231"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Sprouts", "Sprouts Sides"])}
    />
  );
};

export const GF = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="81.553"
      y="281.33"
      width="110.63"
      height="59.426"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() =>
        setSelected(["Good Food GF Sides", "Good Food Gluten Free"])
      }
    />
  );
};

export const TerpTable = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="147.93"
      y="155.52"
      width="119.48"
      height="105.58"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Terp Comfort Sides", "Terp Comfort"])}
    />
  );
};

export const ChefsCorner = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="287.02"
      y="206.73"
      width="62.587"
      height="60.691"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Chef's Corner", "Chef's Corner Sides"])}
    />
  );
};

export const Mezza = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="197.24"
      y="302.19"
      width="83.45"
      height="101.15"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Mezza", "Mezza Sides", "Al Forno Pastas"])}
    />
  );
};

export const MDBakery = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="338.22"
      y="426.73"
      width="91.036"
      height="31.61"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Maryland Bakery"])}
    />
  );
};

export const SaladBar = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="393.86"
      y="331.27"
      width="134.66"
      height="30.978"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Salad Bar"])}
    />
  );
};

export const Breakfast = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="647.37"
      y="359.09"
      width="80.289"
      height="61.955"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Breakfast", "Breakfast Sides"])}
    />
  );
};

export const Woks = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="611.33"
      y="128.34"
      width="61.323"
      height="127.7"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Woks"])}
    />
  );
};

export const JoesGrill = ({ setSelected }: { setSelected: any }) => {
  return (
    <rect
      x="646.74"
      y="32.874"
      width="95.461"
      height="89.772"
      rx="1.04"
      ry="1.04"
      fill="none"
      pointerEvents="all"
      strokeWidth="0.965"
      strokeDasharray="0.0964999,0.0964999"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setSelected(["Joe's Grill", "Joe's Grill Sides"])}
    />
  );
};

export const Yahentamitsi = ({ setSelected }: { setSelected: any }) => {
  return (
    <div className="w-full max-w-3xl">
      <svg
        viewBox="0 0 845 552"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto rounded-lg"
      >
        <image
          width="841.38"
          height="550.07"
          href="/Y.png"
          preserveAspectRatio="xMidYMid meet"
        />
        <Sprouts setSelected={setSelected} />
        <GF setSelected={setSelected} />
        <TerpTable setSelected={setSelected} />
        <ChefsCorner setSelected={setSelected} />
        <Mezza setSelected={setSelected} />
        <MDBakery setSelected={setSelected} />
        <SaladBar setSelected={setSelected} />
        <Breakfast setSelected={setSelected} />
        <Woks setSelected={setSelected} />
        <JoesGrill setSelected={setSelected} />
      </svg>
    </div>
  );
};
