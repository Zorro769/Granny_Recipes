import React from "react";
import Select from "react-select";
import colorStyle from "helpers/styleReactSelect";

const NavbarSelect = ({ options, defaultValue, handleChange }) => {
  return (
    <Select
      className="basic-single inline-block border-transparent"
      options={options}
      defaultValue={defaultValue}
      styles={{
        singleValue: (provided, state) => ({
          ...provided,
          color: "[#1FB137]",
        }),

        ...colorStyle,
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "black",
          borderColor: "yellow",
        }),
        control: (provided, state) => ({
          ...provided,
          border: "none",
          background: "black",
        }),
      }}
      onChange={(option) => handleChange(option)}
    />
  );
};

export default NavbarSelect;
