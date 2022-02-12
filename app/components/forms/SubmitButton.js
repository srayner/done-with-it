import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}
