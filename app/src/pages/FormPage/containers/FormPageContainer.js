import { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";

import Form from "../components/Form";

import { useForm } from "../../../hooks";

const FormPageContainer = () => {
  const [formData, onFormChange] = useForm({
    email: "",
    password: "",
  });

  const [isFormPrinted, setFormPrinted] = useState(false);

  const [dataToDisplay, setDataToDisplay] = useState({});

  const handleSetDataToDisplay = useCallback(
    (data) => {
      setDataToDisplay(data);
    },
    [formData]
  );

  const debouncedSetData = useCallback(
    debounce((data) => {
      handleSetDataToDisplay(data);
    }, 1000),
    []
  );

  useEffect(() => {
    debouncedSetData(formData);
  }, [formData]);

  const handleFormPrint = useCallback((event) => {
    event.preventDefault();
    setFormPrinted(true);
  }, []);

  return (
    <Form
      formData={formData}
      dataToDisplay={dataToDisplay}
      // isFormPrinted={isFormPrinted}
      onFormChange={onFormChange}
      onSubmit={handleFormPrint}
    />
  );
};

export default FormPageContainer;
