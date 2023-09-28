import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/** Hooks */
import useForm, { Field } from 'hooks/useForm';

/** Types */
import KeyValuePair from 'types/KeyValuePair';

/** Component */
import Button from 'atoms/Button';
import CheckboxField, { CheckboxProps } from 'atoms/FormField/Checkbox';
import SelectField, { Option as SelectOption, SelectProps } from 'atoms/FormField/Select';
import TextField, { TextFieldProps } from 'atoms/FormField/TextField';
import Textbox, { TextboxProps } from 'atoms/FormField/Textbox';

/** Styles */
import * as El from './Form.style';

type SectionConfig = {
  [index: number]: {
    title?: string
  }
}

type ColumnConfig = {
  [index: number]: number
}

type FormProps = {
  sectionConfig?: SectionConfig;
  columnConfig?: ColumnConfig;
  fields: Field[];
  validators?: ((fields: Field[]) => void)[];
  submitLabel?: string;
  onSubmit?: Function;
  onlyRenderFields?: boolean;
}

/**
 * @Todo Add logic to allow configurable column sizes, not only amounts
 */
const Form = forwardRef(({
  submitLabel = 'enviar',
  sectionConfig,
  columnConfig,
  fields,
  validators,
  onSubmit,
  onlyRenderFields = false
}: FormProps, ref) => {
  const { updateFormField, isSubmittingForm, handleSubmit } = useForm(fields);
  const skipFieldRenderTillIndex = useRef<number>();

  useEffect(() => {
    validators?.map(validatorFn => validatorFn(fields));
  }, [validators, fields]);

  useImperativeHandle(ref, () => ({
    handleSubmit
  }), [handleSubmit])

  const onChangeMap: KeyValuePair<(field: Field) => any> = {
    default: (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) => updateFormField(field, e.target.value),
    textbox: (field: Field) => (e: React.ChangeEvent<HTMLTextAreaElement>) => updateFormField(field, e.target.value),
    select: (field: Field) => (selectedOption: SelectOption) => updateFormField(field, selectedOption.value),
    checkbox: (field: Field) => (checked: boolean) => updateFormField(field, checked),
  }

  const getChangeMapType = (type: string) => {
    if (Object.hasOwn(onChangeMap, type)) {
      return type;
    }

    return 'default';
  }

  const getFieldProps = (type: string, field: Field) => {
    const normalizedFieldName = field.name.toLowerCase().split(' ').join('_');
    const key = `form-field-${normalizedFieldName}`
    
    if (type === 'select') {
      const { type, value, ...fieldProps } = field;
      const onChange = onChangeMap?.[getChangeMapType(type)]?.(field);

      return {
        ...fieldProps,
        selected: value,
        options: fieldProps.options as SelectOption[],
        key,
        onChange
      };
    } else {
      const onChange = onChangeMap?.[getChangeMapType(type)]?.(field);
      
      return {
        ...field,
        key,
        onChange
      }
    }
  }

  const renderField = (field: Field) => {
    const { type } = field;
    const fieldProps = getFieldProps(type, field);

    if (!field?.value) {
      field.value = '';
    }

    if (field?.show === false) {
      return null;
    }

    if (type === 'select') {
      return <SelectField key={fieldProps.key} {...(fieldProps as SelectProps)} />;
    } else if (type === 'checkbox') {
      return <CheckboxField key={fieldProps.key} {...(fieldProps as CheckboxProps)} />;
    } else if (type === 'textbox') {
      return <Textbox key={fieldProps.key} {...(fieldProps as TextboxProps)} />;
    } else {
      return <TextField key={fieldProps.key} {...(fieldProps as TextFieldProps)} />;
    }
  }

  const renderFieldColumns = (field: Field, fields: Field[], fieldIndex: number) => {
    if (!!columnConfig && !!columnConfig?.[fieldIndex]) {
      const columnsAmount = (columnConfig?.[fieldIndex] - fieldIndex) + 1;
      skipFieldRenderTillIndex.current = columnConfig?.[fieldIndex];
      
      return (
        <El.FieldColumns amount={columnsAmount}>
          {Array(columnsAmount).fill(0).map((_, index) => renderField(fields[fieldIndex + index]))}
        </El.FieldColumns>
      )
    }
    
    return renderField(field);
  }

  const renderedFields = fields?.map((field, index) => {
    if (skipFieldRenderTillIndex?.current && index <= skipFieldRenderTillIndex.current) {
      if (index === skipFieldRenderTillIndex.current) {
        skipFieldRenderTillIndex.current = undefined;
      }

      return null;
    }

    if (sectionConfig?.[index]) {
      return (
        <El.Wrapper key={field.name + index}>
          <El.SectionTitle>{sectionConfig?.[index]?.title}</El.SectionTitle>
          {renderFieldColumns(field, fields, index)}
        </El.Wrapper>
      )
    }

    return (
      <El.Wrapper key={field.name + index}>
        {renderFieldColumns(field, fields, index)}
      </El.Wrapper>
    )
  });

  if (sectionConfig?.[fields.length]) {
    renderedFields.push(<El.SectionTitle>{sectionConfig?.[fields.length]?.title}</El.SectionTitle>)
  }

  if (onlyRenderFields) {
    return (
      <El.Container>
        {renderedFields}
      </El.Container>
    )
  }

  if (!onSubmit && !ref) {
    return null;
  }

  return (
    <El.Form onSubmit={handleSubmit(onSubmit)} data-testid={'Form'}>
      <El.Container>
        {renderedFields}
        <El.Button>
          <Button type={'submit'} color='primary' disabled={isSubmittingForm}>
            {submitLabel}
          </Button>
        </El.Button>
      </El.Container>
    </El.Form>
  );
});

Form.displayName = 'Form';

export default Form;
