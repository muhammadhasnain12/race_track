import Button from "../../../components/common/Button";

import { useState } from "react";
import DropDown from "../../../components/common/DropDown";
import SelectedCheckbox from "../../../assets/icons/selected_checkbox.svg";
import MultiRangeSlider from "../../../components/common/MultiSliderRange";

const PreviousRace = () => {
  const [isOpen, setOpen] = useState(false);
  const [checked, setChecked] = useState(true)
  
  return (
    <div className="mt-8 bg-white p-4 shadow rounded-lg">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-6">
        <p className="text-[22px] font-[700]">Previous Race</p>
        <Button
          buttonText="Reset All Filters"
          btnClasses="w-34 px-2 gap-2 border-2 border-[#666]"
        />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-12 ">
        <div>
          <h5 className="text-[14px] font-[500]">Date</h5>
          <div className="flex mt-5 gap-5">
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-7 py-1 rounded border border-slate-300">
              9/8/2000
            </span>
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-7 py-1 rounded border border-slate-300">
              9/8/2000
            </span>
          </div>


          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>

        <div>
          <div className="flex justify-between">
            <h5 className="text-[14px] font-[500]">Odds Range</h5>
            <div className="flex items-center mr-6 md:mr-2">
            <input checked={checked} onChange={()=> setChecked(!checked)} id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-black accent-slate-50 border-black rounded focus:ring-black focus:ring-2"></input>
              
              <span className="ml-2 font-[500] text-[14px] text-gray-900">
                Favorite?
              </span>
            </div>
          </div>
          <div className="flex mt-5 gap-5">
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-7 py-1 rounded border border-slate-300">
              0
            </span>
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-7 py-1 rounded border border-slate-300">
              138
            </span>
          </div>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>

        <div>
          <h5 className="text-[14px] font-[500]">Distance Range</h5>
          <div className="flex mt-5 gap-5">
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-5 py-1 rounded border border-slate-300">
              0
            </span>
            <span className="text-black w-36 md:w-44 text-center text-[15px] font-[600] mr-2 px-5 py-1 rounded border border-slate-300">
              138
            </span>
          </div>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-10">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((data) => (
          <DropDown setOpen={setOpen} isOpen={isOpen} key={data} />
        ))}
      </div>
    </div>
  );
};

export default PreviousRace;
