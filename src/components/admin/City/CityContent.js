import { useDispatch, useSelector } from "react-redux";
import CustomCatTable from "../../common/table/CustomCatTable";
import { addCity, deleteCity, updateCity } from "../../../store/actions/cityActions";

const cols = [
    {
        field: "name",
        title: "Name"
    },
]

const CityContent = ({
    value = null,
    onChange = () => {}
}) => {
    const dispatch = useDispatch(null);
    const { cities } = useSelector(state => state.city);

    const handleAddNewCity = data => {
        dispatch(addCity(data));
    }
    const handleUpdateCity = (id, data) => {
        dispatch(updateCity(id, data));
    }
    const handleDeleteCity = id => {
        dispatch(deleteCity(id));
    }

    return <>
        <CustomCatTable 
            header="Cities"
            rows={cities}
            cols={cols}
            selectedRow={value}
            onChangeRow={onChange}
            onAddNewValue={handleAddNewCity}
            onUpdateValue={handleUpdateCity}
            onDeleteRow={handleDeleteCity}
        />        
    </>
}
export default CityContent;