import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const AdminCommission = () => {
  return (
    <>
      <TitleHead title={"Admin Commission"} desc={"Admin Commission"} />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Admin Commission
          </legend>
          <div className="bg-white p-4 grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="commission"
                  className="form-checkbox w-4 h-4"
                />
                <label
                  htmlFor="commission"
                  className="text-gray-700 font-semibold text-[1rem]"
                >
                  Enabled AdminCommission
                </label>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="vendorModify"
                className="text-gray-700 text-[1rem] font-semibold "
              >
                Commission Type
              </label>
              <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
                <select
                  type="select"
                  id="radius"
                  defaultValue={15}
                  className="w-full pw-full p-2 text-gray-400  bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
                >
                  <option value="percent">Percent</option>
                  <option value="fix">Fix</option>
                </select>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="vendorModify"
                className="text-gray-700 text-[1rem] font-semibold "
              >
                Admin Commission
              </label>
              <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="number"
                  id="radius"
                  defaultValue={15}
                  className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default AdminCommission;
