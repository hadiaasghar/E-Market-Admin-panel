// import BottomButton from "../../AllCards/DashboardCards/BottomButton";

import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const RadiousConfigration = () => {
  return (
    <>
      <TitleHead title={"Radius configuration"} desc={"Radius configuration"} />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Radius configuration
          </legend>
          <div className="bg-white p-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="vendorModify"
                className="text-gray-700 text-[1rem] font-semibold "
              >
                Restaurant nearby radius
              </label>
              <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="number"
                  id="radius"
                  defaultValue={13000}
                  className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
                />
                <span className="p-2  bg-[#F5F5F5] font-semibold rounded">
                  Miles
                </span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="vendorModify"
                className="text-gray-700  text-[1rem] font-semibold "
              >
                Driver nearby radius
              </label>
              <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="number"
                  id="radius"
                  defaultValue={13000}
                  className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
                />
                <span className="p-2 text-gray-700 bg-[#F5F5F5] font-semibold rounded">
                  Miles
                </span>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="vendorModify"
                className="text-gray-700 text-[1rem] font-semibold "
              >
                Driver Order Accept Reject Duration
              </label>
              <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="number"
                  id="radius"
                  defaultValue={29}
                  className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
                />
                <span className="p-2 text-gray-700 font-semibold bg-[#F5F5F5] rounded">
                  Second
                </span>
              </div>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default RadiousConfigration;
