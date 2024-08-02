import RSelect from "react-select";

import { cards } from "@/data/cards";
import { crypto } from "@/data/crypto";
import { DataTypes } from "@/types/data.types.ts";
import "./styles.scss";

const data = ([...cards, ...crypto] as DataTypes[]).map(pay => ({
  value: pay.name,
  label: { ...pay },
}));

const Select = () => {
  return (
    <div>
      <RSelect
        defaultValue={data[0]}
        className="custom-select"
        classNamePrefix="custom-select"
        components={{
          IndicatorSeparator: () => null,
        }}
        // onChange={setSelectedOption}
        options={data}
        formatOptionLabel={pay => <div className="pay-option">
          <div className="pay-option__img">
            <img src={pay?.label.logo} alt="" />
          </div>
          <div className="pay-option__body">
            <div className="pay-option__name">
              {pay?.label.name} &bull; {pay?.label.description}
            </div>
            <div className="pay-option__description">
              Please notice that you will send money in the USD
            </div>
          </div>
        </div>}
      />
    </div>
  );
};

export default Select;
