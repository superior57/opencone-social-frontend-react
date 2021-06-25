import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFieldSpec, deleteFieldSpec, getFieldSpecs, updateFieldSpec } from "../../../store/actions/fieldSpecsActions";
import CustomCatTable from "../../common/table/CustomCatTable"

const cols = [
    {
        field: "name",
        title: "Name"
    },
]

const FieldSpecContent = ({
    fieldId = null
}) => {
    const dispatch = useDispatch(null);
    const { fieldSpecs } = useSelector(state => state.fieldSpec);

    useEffect(() => {
        if (fieldId) {
            dispatch(getFieldSpecs(fieldId));
        }
    }, [fieldId])

    const handleAddNewFieldSpec = fieldSpecData => {
        dispatch(addFieldSpec(fieldId, fieldSpecData));
    }
    const handleUpdateFieldSpec = (fieldSpecId, fieldSpecData) => {
        dispatch(updateFieldSpec(fieldSpecId, fieldSpecData));
    }
    const handleDeleteFieldSpec = fieldSpeciId => {
        dispatch(deleteFieldSpec(fieldSpeciId));
    }

    return <>
        <CustomCatTable 
            header="Specifications"
            rows={fieldSpecs}
            cols={cols}
            onAddNewValue={handleAddNewFieldSpec}
            onUpdateValue={handleUpdateFieldSpec}
            onDeleteRow={handleDeleteFieldSpec}
        />
    </>
}
export default FieldSpecContent;