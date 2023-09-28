import { FormEvent, useEffect, useState } from "react";

/** Types */
import { Option as SelectOption } from "atoms/FormField/Select";



export type Field = {
  type: 'textbox' | 'number' | 'text' | 'date' | 'datetime-local' | 'password' | 'email' | 'select' | 'checkbox';
  rows?: number;
  disabled?: boolean;
  name: string;
  label: string;
  required?: boolean;
  options?: SelectOption[]
  value?: string | number | boolean;
  afterChange?: (value: any) => void;
  show?: boolean;
};

export type Form = {
  [key: string]: string | number | boolean | null;
};

const createDefaultForm = (fields: Field[]): Form => fields?.reduce?.((formObject, field) => {
  formObject[field.name] = field?.value ?? null;

  return formObject;
}, {} as Form);

const useForm = (fields: Field[]) => {
  const DEFAULT_FORM = createDefaultForm(fields);
  const [form, setForm] = useState<Form>(DEFAULT_FORM);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  useEffect(() => {
    setForm(createDefaultForm(fields));
  }, [fields])

  const updateFormField = (field: Field, value: any) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field.name]: value,
    }))
    field.value = value;
    field?.afterChange?.(value);
  }

  const getForm = () => {
    return form;
  }

  const handleSubmit = (callback?: Function) => async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsSubmittingForm(true);
    const callbackReturn = await callback?.(getForm());
    setIsSubmittingForm(false);

    return callbackReturn;
  }

  return {
    updateFormField,
    handleSubmit,
    isSubmittingForm
  };
};

export default useForm;