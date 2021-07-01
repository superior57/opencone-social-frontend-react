import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubCity, deleteSubCity, getSubCities, updateSubCity } from "../../../store/actions/subCityActions";
import CustomCatTable from "../../common/table/CustomCatTable"

const cols = [
    {
        field: "name",
        title: "Name"
    },
]

const SubCityContent = ({
    cityId = null
}) => {
    const dispatch = useDispatch(null);
    const { subCities } = useSelector(state => state.subCity);

    useEffect(() => {
        if (cityId) {
            dispatch(getSubCities(cityId));
        }
    }, [cityId])

    const handleAddNewSubCity = subCityData => {
        dispatch(addSubCity(cityId, subCityData));
    }
    const handleUpdateSubCity = (subCityId, subCityData) => {
        dispatch(updateSubCity(subCityId, subCityData));
    }
    const handleDeleteSubCity = subCityId => {
        dispatch(deleteSubCity(subCityId));
    }

    return <>
        <CustomCatTable 
            header="Sub cities"
            rows={subCities}
            cols={cols}
            onAddNewValue={handleAddNewSubCity}
            onUpdateValue={handleUpdateSubCity}
            onDeleteRow={handleDeleteSubCity}
        />
    </>
}
export default SubCityContent;