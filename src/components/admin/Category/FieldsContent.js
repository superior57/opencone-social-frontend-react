import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFieldToSubCategory, deleteFieldFromSubCategory, getSubCategory } from "../../../store/actions/subCategoryActions";
import CustomCatTable from "../../common/table/CustomCatTable";
import { Select, FormControl } from "@material-ui/core";

const hiddenHeaderCols = [
    "type"
]

const FieldsContent = ({
    subCategoryId = null
}) => {
    const dispatch = useDispatch(null);
    const { fields } = useSelector(state => state.field);
    const { subCategory } = useSelector(state => state.subCategory);
    // const { fields: subCategoryFields } = subCategory;

    const cols = [
        {
            field: "name",
            title: "Field",
            render: (value = "", setValue = () => {}) => <FormControl size="small">
                <Select native variant="outlined" className="rounded-0" onChange={ev => setValue(ev.target.value)} value={value}  >
                    <option >{"Choose Field"}</option>
                    {
                        fields.map((field, index) => 
                        <option key={"field-item-" + index} value={field._id} >{field.name}</option>)
                    }
                </Select>
            </FormControl>
        },
        {
            field: "type",
            title: "Type",
        }
    ]

    useEffect(() => {
        if (subCategoryId) {
            dispatch(getSubCategory(subCategoryId));
        }
    }, [subCategoryId])

    const handleAddFieldToSubCategory = subCategoryData => {
        dispatch(addFieldToSubCategory(subCategoryId, subCategoryData.name));
    }
    const handleDeleteFieldFromSubCategory = fieldId => {
        dispatch(deleteFieldFromSubCategory(subCategoryId, fieldId));
    }

    return <>
        <CustomCatTable 
            header="Added Fields"
            rows={subCategory?.fields || []}
            cols={cols}
            editable={false}
            onAddNewValue={handleAddFieldToSubCategory}
            hiddenHeaderCols={hiddenHeaderCols}
            onDeleteRow={handleDeleteFieldFromSubCategory}
        />
    </>
}
export default FieldsContent;