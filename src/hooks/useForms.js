import { useState } from "react";

export const useForms = (formValues) => {
  const [inputForms, setInputForms] = useState(formValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputForms((pre) => ({ ...pre, [name]: value }));
  };

  return { handleChange, inputForms };
};
