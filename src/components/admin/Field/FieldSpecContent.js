import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFieldSpecs } from "../../../store/actions/fieldSpecsReducer";
import { addSubCategory, deleteSubCategory, getSubCategories, updateSubCategory } from "../../../store/actions/subCategoryActions";
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

    // const handleAddNewSubCategory = subCategoryData => {
    //     dispatch(addSubCategory(categoryId, subCategoryData));
    // }
    // const handleUpdateSubCategory = (subCategoryId, subCategoryData) => {
    //     dispatch(updateSubCategory(subCategoryId, subCategoryData));
    // }
    // const handleDeleteSubCategory = subCategoryId => {
    //     dispatch(deleteSubCategory(subCategoryId));
    // }

    return <>
        <CustomCatTable 
            header="Specifications"
            rows={fieldSpecs}
            cols={cols}
            // onAddNewValue={handleAddNewSubCategory}
            // onUpdateValue={handleUpdateSubCategory}
            // onDeleteRow={handleDeleteSubCategory}
        />
    </>
}
export default FieldSpecContent;