import Button from "../../../components/common/Button";
import CheckBoxes from "../../../components/common/CheckBoxes";

const QuickFilters = () => {
  return (
    <div className="mr-0 space-y-32">
      <div className="mt-8 bg-white py-8 px-3 md:px-8 shadow rounded-lg space-y-10">
        <h2 className="text-black text-[22px] font-[700] pb-4">Quick Filters</h2>
        <div>
          <h5 className="text-[14px] font-[500]">Distance</h5>
          <div className="flex mt-5 gap-5">
            <button type="button" className="bg-[#FF4D00] w-36 text-[15px] text-white font-[500] px-5 items-center justify-center flex h-[36px] rounded">
              Route
            </button>
            <button type="button" className="text-black w-36 h-[36px] items-center justify-center flex text-[15px] font-[500] mr-2 px-5 rounded border border-[#FF4D00]">
              Sprint
            </button>
          </div>
        </div>

        {/* Quick Filters(Checkboxes) code */}
        <div className="grid grid-cols-2 gap-x-12">
          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Surface
            </legend>
            <div className="mt-6 space-y-6">
              {["Turf", "Dirt", "Synthetic"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Last Race Winner
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-x-12">
          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Dirt-to-Turf
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data}/>
              ))}
            </div>
          </fieldset>
          <fieldset className="">
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Turf-to-Dirt.
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-x-12">
          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Turf to Synthetic
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Synthetic to Turf
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-x-12">
          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Dirt to Synthetic
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Synthetic to Durt
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-x-12">
          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Up in Class
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[14px] font-[500] leading-6 text-gray-900">
              Down in Class
            </legend>
            <div className="mt-6 space-y-6">
              {["True", "False"].map((data) => (
                <CheckBoxes CheckBoxesData={data} key={data} />
              ))}
            </div>
          </fieldset>
        </div>

        {/* Reset Filter Button code */}
        <div className="pt-10 pb-4 md:pb-[490px] lg:pb-[515px]">
          <Button
            buttonText="Reset Filters"
            btnClasses="w-full flex justify-center text-[14px] font-[600] border-2 border-[#666]"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickFilters;
