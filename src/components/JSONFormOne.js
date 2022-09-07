import React from "react";
import { Link } from "react-router-dom";

const data = {
  fields: [
    {
      label: "Date of Birth (YYYY-MM-DD)",
      key: "birthday",
      isRequired: true,
      order: 1,
      isReadonly: false,
      type: "date",
    },
    {
      label: "Sex",
      items: [
        {
          value: "male",
          text: "Male",
        },
        {
          value: "female",
          text: "Female",
        },
      ],
      key: "sex",
      isRequired: true,
      order: 2,
      isReadonly: false,
      type: "dropdown",
    },
    {
      label: "Weight",
      key: "weight",
      isRequired: true,
      order: 3,
      unit: "kg",
      isReadonly: false,
      type: "number",
    },
  ],
};

export default function JSONFormOne() {
  return (
    <div className=" bg-white max-w-4xl py-6 m-auto mt-8">
      <form className="w-full ">
        {data.fields.map((inputData) => {
          return (
            <div className="md:flex md:items-center mb-6" key={inputData.key}>
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  {inputData.label}
                </label>
              </div>
              <div className="md:w-1/3">
                {inputData.type === "dropdown" ? (
                  <select className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                    {inputData.items.map((item) => {
                      return <option value={item.value}>{item.text}</option>;
                    })}
                  </select>
                ) : (
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type={inputData.type}
                    required={inputData.isRequired}
                  ></input>
                )}
              </div>
              <div className="md:w-2/12">
                <span className=" ml-4 text-gray-500 ">{inputData.unit}</span>
              </div>
            </div>
          );
        })}
        <div className="md:flex justify-center my-8">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
      <Link to="/">
        <p className="text-gray-800 text-center underline">
          Click here for form-1
        </p>
      </Link>
    </div>
  );
}
