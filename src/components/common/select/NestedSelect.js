
import NestedMenuItem from "material-ui-nested-menu-item";
import { useState } from "react";

const NestedSelect = ({
    label = "",
    value = "",
    parentData = [],
    childrenKey = "",
    onChange = () => {},
}) => {
    const [open, setOpen] = useState(false);
    return <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth>
        <InputLabel id={"nestedselect-label-" + label}>{label}</InputLabel>
        <Select
            labelId={"nestedselect-label-" + label}
            id="demo-simple-select-outlined"
            value={value}
            onChange={ev => onChange(ev.target.value)}
            label={label}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                parentData.map((data, c_index) => cat.subCategories?.length > 0 ? <NestedMenuItem
                    key={"cat-item-" + c_index}
                    label={cat.name}
                    parentMenuOpen
                    className={classes.nestedMenuItem}
                    value=""
                >
                    {
                        cat.subCategories.map((subCat, sc_index) => <MenuItem 
                            key={"subcat-item-" + sc_index}
                            value={subCat._id}
                            onClick={() => {
                                setSelectedCategory(subCat._id);
                                setMenuOpen(null);
                                setTestcomp(<MenuItem value={subCat._id} style={{ display: 'none' }}>{subCat.name}</MenuItem>)
                            }}
                            selected={selectedCategory === subCat._id}
                        >
                            {subCat.name}
                        </MenuItem>)
                    }
                </NestedMenuItem> : 
                <MenuItem key={"cat-item-" + c_index} value={cat._id} >{cat.name}</MenuItem>)
            }
            {
                testcomp
            }
        </Select>
    </FormControl>
}

export default NestedSelect;