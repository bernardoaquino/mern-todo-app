import { Field } from "~/hooks/useForm";

const requiredWhenFieldValueIs = (fieldName: string, fieldValue: any, fieldNameToBeEnabled: string) => (fields: Field[]) => {
    const fieldToBeRequired = fields?.find(({ name }) => name === fieldNameToBeEnabled);
    
    const afterChange = (value: any) => {
        if (fieldToBeRequired) {
            fieldToBeRequired.required = value === fieldValue;
        }
    };
    
    const field = fields?.find(({ name }) => name === fieldName)
    
    if (fieldToBeRequired) {
        fieldToBeRequired.required = field?.value === fieldValue;
    }

    if (field && fieldToBeRequired) {
        const oldAfterChange = field?.afterChange
        
        field.afterChange = (value: any) => {
            oldAfterChange?.(value);
            afterChange?.(value);
        }
    }
}

export default requiredWhenFieldValueIs;
