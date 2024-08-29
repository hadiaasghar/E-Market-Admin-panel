import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const DineInFeature = () => {
  return (
    <>
      <TitleHead
        title={"DINE IN feature setting"}
        desc={"DINE IN feature setting"}
      />
      <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            DINE IN feature setting
          </legend>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="offer" className="h-5 w-5" />
            <label
              htmlFor="offer"
              className="text-gray-700 font-semibold text-[1rem]"
            >
              Enable DINE IN feature for Restaurant
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="customer" className="h-5 w-5" />
            <label
              htmlFor="customer"
              className="text-gray-700 font-semibold text-[1rem]"
            >
              {" "}
              DINE IN for Customers
            </label>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default DineInFeature;
