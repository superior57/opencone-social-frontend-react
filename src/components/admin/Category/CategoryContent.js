import { useDispatch, useSelector } from "react-redux";
import { addCategory, deleteCategory, updateCategory } from "../../../store/actions/categoryActions";
import CustomCatTable from "../../common/table/CustomCatTable";

const cols = [
    {
        field: "name",
        title: "Name"
    },
]

const CategoryContent = ({
    value = null,
    onChange = () => {},
    onClearSelected = () => {}
}) => {
    const dispatch = useDispatch(null);
    const { categories } = useSelector(state => state.category);

    const handleAddNewCategory = data => {
        dispatch(addCategory(data));
    }
    const handleUpdateCategory = (id, data) => {
        dispatch(updateCategory(id, data));
    }
    const handleDeleteCategory = id => {
        onClearSelected();
        dispatch(deleteCategory(id));
    }

    return <>
        <CustomCatTable 
            header="Category"
            rows={categories}
            cols={cols}
            selectedRow={value}
            onChangeRow={onChange}
            onAddNewValue={handleAddNewCategory}
            onUpdateValue={handleUpdateCategory}
            onDeleteRow={handleDeleteCategory}
        />        
    </>
}
export default CategoryContent;