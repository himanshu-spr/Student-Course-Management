import React from "react";

export const getOptions = (options: string[]) => {
  const retOptions = options.map((option: string) => {
    return <option>{option}</option>;
  });
  return retOptions;
};
