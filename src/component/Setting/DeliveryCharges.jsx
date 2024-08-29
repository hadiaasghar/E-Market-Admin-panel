import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";

const DeliveryCharges = () => {
  return (
    <>
      <TitleHead title={"Delivery Charge"} desc={"Delivery Charge"} />
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Delivery Charges
          </legend>
          <div className="bg-white p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="vendorModify"
                className="form-checkbox"
              />
              <label
                htmlFor="vendorModify"
                className="block text-gray-700 font-semibold text-[1rem] "
              >
                Vendor Can Modify
              </label>
            </div>
            <div>
              <label
                htmlFor="deliveryCharges"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Delivery Charges Per km
              </label>
              <input
                type="number"
                id="deliveryCharges"
                defaultValue={3}
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="minDeliveryCharges"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Minimum Delivery Charges
              </label>
              <input
                type="number"
                id="minDeliveryCharges"
                defaultValue={10}
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="minDeliveryKm"
                className="block text-gray-700 font-semibold text-[1rem] my-3"
              >
                Minimum Delivery Charges Within Km
              </label>
              <input
                type="number"
                id="minDeliveryKm"
                defaultValue={3}
                className="w-full p-2 bg-[#F5F5F5] border rounded"
              />
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default DeliveryCharges;
