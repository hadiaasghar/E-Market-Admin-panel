import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const DocumentVerification = () => {
  return (
    <>
      <TitleHead
        title={"Document Verification"}
        desc={"Document Verification"}
      />
      <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Document Verification
          </legend>
          <div className="flex items-center gap-4 mb-5">
            <input
              type="checkbox"
              name=""
              id="restaurant"
              className="h-5 w-5"
            />
            <label
              htmlFor="restaurant"
              className="block text-gray-700 font-semibold text-[1rem] "
            >
              Enable Document Verification For Restaurant
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="dirver" className="h-5 w-5" />
            <label
              htmlFor="dirver"
              className="block text-gray-700 font-semibold text-[1rem] "
            >
              Enable Document Verification For Driver
            </label>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default DocumentVerification;
