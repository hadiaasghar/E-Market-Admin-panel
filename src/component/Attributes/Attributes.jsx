import AttributeCard from "../AllCards/AttributeCard";

const Attributes = () => {
  const attribute = [
    { id: 1, name: "Texture " },
    { id: 2, name: "Onine Food" },
    { id: 3, name: "Polite B" },
    { id: 4, name: "Food" },
    { id: 5, name: "Mango" },
    { id: 6, name: "Size" },
    { id: 7, name: "Taste " },
    { id: 8, name: "Banana" },
    { id: 9, name: "Freshness" },
    { id: 10, name: "Timeliness" },
    { id: 11, name: "Responsiveness" },
  ];
  return (
    <>
      <AttributeCard attributes={attribute} name="Review" />
      {/* <AttributeButtonCard name="Review" /> */}
    </>
  );
};

export default Attributes;
