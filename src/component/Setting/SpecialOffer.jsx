import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const SpecialOffer = () => {
  return (
    <>
      <TitleHead title={"Special Offer"} desc={"Special Offer "} />
      <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Special Offer
          </legend>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="offer" className="h-5 w-5" />
            <label
              htmlFor="offer"
              className="block text-gray-700 text-md font-semibold mb-2"
            >
              Enable Special Offer Discount
            </label>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default SpecialOffer;
