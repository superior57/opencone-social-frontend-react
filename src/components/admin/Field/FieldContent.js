import { useDispatch, useSelector } from "react-redux";
import CustomCatTable from "../../common/table/CustomCatTable";
import { Select, FormControl } from "@material-ui/core";
import { addField, deleteField, updateField } from "../../../store/actions/fieldActions";

const fieldTypes = [
    {
        title: "Select",
        value: "Select"
    },
    {
        title: "Multi Select",
        value: "Multi Select"
    },
    {
        title: "Radio",
        value: "Radio"
    },
]
const cols = [
    {
        field: "name",
        title: "Name"
    },
    {
        field: "type",
        title: "Type",
        render: (value = "", setValue = () => {}) => <FormControl size="small">
            <Select native variant="outlined" className="rounded-0" onChange={ev => setValue(ev.target.value)} value={value}  >
                <option selected >{"Choose Type"}</option>
                {
                    fieldTypes.map((type, index) => 
                    <option key={"field-type-" + index} value={type.value} >{type.title}</option>)
                }
            </Select>
        </FormControl>
    }
]

const FieldContent = ({
    value = null,
    onChange = () => {}
}) => {
    const dispatch = useDispatch(null);
    const { fields } = useSelector(state => state.field);

    const handleAddNewField = data => {
        dispatch(addField(data));
    }
    const handleUpdateField = (id, data) => {
        dispatch(updateField(id, data));
    }
    const handleDeleteField = id => {
        dispatch(deleteField(id));
    }

    return <>
        <CustomCatTable 
            header="Fields"
            rows={fields}
            cols={cols}
            selectedRow={value}
            onChangeRow={onChange}
            onAddNewValue={handleAddNewField}
            onUpdateValue={handleUpdateField}
            onDeleteRow={handleDeleteField}
        />        
    </>
}
export default FieldContent;