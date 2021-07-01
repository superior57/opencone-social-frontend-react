
import NestedMenuItem from "material-ui-nested-menu-item";
import React, { useEffect, useState } from "react";
import { FormControl, Select, MenuItem, InputLabel, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 150,
    },
    nestedMenuItem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    selected: {
        backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
    }
}))

const NestedSelect = ({
    label = "",
    parentData = [],
    childrenKey = "",
    size = "small",
    onChangeParent = () => {},
    onChangeChildren = () => {},
    required = false,
    clear = false,
    nested = true
}) => {
    const [open, setOpen] = useState(false);
    const [tempItem, setTempItem] = useState("");
    const [selectedParent, setSelectedParent] = useState("");
    const [selectedChildren, setSelectedChildren] = useState("");
    const classes = useStyles();    

    useEffect(() => {
        if (clear) {
            setSelectedParent("");
            setSelectedChildren("");
        }
    }, [clear])

    return <FormControl variant="outlined" className={classes.formControl} size={size} fullWidth required={required}>
        <InputLabel id={"nestedselect-label-" + label}>{label}</InputLabel>
        <Select
            labelId={"nestedselect-label-" + label}
            value={selectedChildren || selectedParent}
            onChange={ev => {
                setSelectedParent(ev.target.value);
                setSelectedChildren("");
                onChangeParent(ev.target.value);
                onChangeChildren("");
            }}
            renderValue={value => (selectedChildren ? 
                parentData.find(p => p._id === selectedParent)[childrenKey]?.find(c => c._id === selectedChildren).name : 
                parentData.find(p => p._id === selectedParent).name)}
            label={label}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                parentData?.map((pdata, p_index) => pdata[childrenKey]?.length > 0 && nested ? <NestedMenuItem
                    key={"nested-parent-item-" + p_index}
                    label={pdata.name}
                    parentMenuOpen
                    className={clsx(classes.nestedMenuItem, {
                        [classes.selected]: selectedParent === pdata._id
                    })}
                    value={pdata._id}
                    onClick={() => setOpen(true)}
                >
                    {
                        pdata[childrenKey].map((cdata, c_index) => <MenuItem 
                            key={"nested-children-item-" + c_index}
                            value={cdata._id}
                            onClick={() => {
                                setSelectedChildren(cdata._id);
                                setSelectedParent(pdata._id);
                                setOpen(false);
                                setTempItem(<MenuItem value={cdata._id} style={{ display: 'none' }}>{cdata.name}</MenuItem>)
                                onChangeChildren(cdata._id);
                                onChangeParent(pdata._id);
                            }}
                            selected={selectedChildren === cdata._id}
                        >
                            {cdata.name}
                        </MenuItem>)
                    }
                </NestedMenuItem> : 
                <MenuItem key={"children-item-" + p_index} value={pdata._id} >{pdata.name}</MenuItem>)
            }
            {
                tempItem
            }
        </Select>
    </FormControl>
}

export default NestedSelect;