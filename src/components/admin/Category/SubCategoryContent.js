import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubCategory, deleteSubCategory, getSubCategories, updateSubCategory } from "../../../store/actions/subCategoryActions";
import CustomCatTable from "../../common/table/CustomCatTable"

const cols = [
    {
        field: "name",
        title: "Name"
    },
]

const SubCategoryContent = ({
    categoryId = null
}) => {
    const dispatch = useDispatch(null);
    const { subCategories } = useSelector(state => state.subCategory);

    useEffect(() => {
        if (categoryId) {
            dispatch(getSubCategories(categoryId));
        }
    }, [categoryId])

    const handleAddNewSubCategory = subCategoryData => {
        dispatch(addSubCategory(categoryId, subCategoryData));
    }
    const handleUpdateSubCategory = (subCategoryId, subCategoryData) => {
        dispatch(updateSubCategory(subCategoryId, subCategoryData));
    }
    const handleDeleteSubCategory = subCategoryId => {
        dispatch(deleteSubCategory(subCategoryId));
    }

    return <>
        <CustomCatTable 
            header="Sub Category"
            rows={subCategories}
            cols={cols}
            onAddNewValue={handleAddNewSubCategory}
            onUpdateValue={handleUpdateSubCategory}
            onDeleteRow={handleDeleteSubCategory}
        />
    </>
}
export default SubCategoryContent;