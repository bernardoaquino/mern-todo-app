import { Field } from "~/hooks/useForm";

const enableWhenFieldValueIs = (fieldName: string, fieldValue: any, fieldNameToBeEnabled: string) => (fields: Field[]) => {
    const fieldToBeEnabled = fields?.find(({ name }) => name === fieldNameToBeEnabled);
    
    const afterChange = (value: any) => {
        if (fieldToBeEnabled) {
            fieldToBeEnabled.show = value === fieldValue;
        }
    };
    
    const field = fields?.find(({ name }) => name === fieldName)
    
    if (fieldToBeEnabled) {
        fieldToBeEnabled.show = field?.value === fieldValue;
    }

    if (field && fieldToBeEnabled) {
        const oldAfterChange = field?.afterChange
        
        field.afterChange = (value: any) => {
            oldAfterChange?.(value);
            afterChange?.(value);
        }
    }
}

export default enableWhenFieldValueIs;
