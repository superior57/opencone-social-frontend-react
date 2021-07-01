import { colors, FIELD_TYPE_COLOR_SELECT, FIELD_TYPE_MULTI_SELECT, FIELD_TYPE_RADIO, FIELD_TYPE_RANGE_SELECT, FIELD_TYPE_SELECT } from "../../utils/fieldTypes";
import { 
    Select, FormControl, FormHelperText, RadioGroup, FormControlLabel, Radio, Button, makeStyles, Typography, Grid, InputLabel,
    MenuItem, Checkbox, ListItemText
} from '@material-ui/core'
import clsx from "clsx";
import { useState } from "react";

const size_colorbutton = 40;
const useStyles = makeStyles(theme => ({
    colorButton: {
        minWidth: size_colorbutton, 
        width: size_colorbutton, 
        height: size_colorbutton,
        margin: 5,
    },
    selectedButton: {
        borderColor: theme.palette.primary.main,
        border: 'solid',
        borderWidth: 2
    }
}))
const Field = ({
    type = "",
    name = "",
    datas = [],
    value = "",
    filter = false,
    onChange = () => {},
    ...otherProps
}) => {
    const classes = useStyles();
    const [range, setRange] = useState({
        from: 0,
        to: 0
    })
    var mainUI = <></>;

    const handleChangeMultiSelect = ev => {
        const { options } = ev.target;
        const values = [];
        for (const i in options) {
            const option = options[i];
            if (option.selected) {
                values.push(option.value);
            }
        }
        onChange(values);
    }
    const handleChangeMultiCheckSelect = ev => {
        onChange(ev.target.value);
    }
    const handleChangeRangeSelectValue = (key, value) => {
        setRange({
            ...range,
            [key]: value
        });
        onChange({
            ...range,
            [key]: value
        });
    }

    if (filter) {
        switch (type) {
            case FIELD_TYPE_MULTI_SELECT:
            case FIELD_TYPE_SELECT:
            case FIELD_TYPE_RADIO:
                mainUI = 
                    <Select
                        variant="outlined"
                        multiple
                        value={value === "" ? [] : value}
                        onChange={handleChangeMultiCheckSelect}
                        renderValue={selected => selected.join(', ')}
                    >
                        {datas.map((data, index) => (
                            <MenuItem key={data.name} value={data.name}>
                                <Checkbox checked={value === "" ? false : value.indexOf(data.name) > -1} />
                                <ListItemText primary={data.name} />
                            </MenuItem>
                        ))}
                    </Select>; break;
            case FIELD_TYPE_RANGE_SELECT:
                mainUI = <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <FormControl variant="outlined" fullWidth {...otherProps}>
                            <InputLabel id={"from-select-label"}>From</InputLabel>
                            <Select 
                                native 
                                onChange={ev => handleChangeRangeSelectValue('from', datas.find(d => d._id === ev.target.value)?.name || "")}
                                labelId={"from-select-label"}
                                label="From"
                            >
                                <option value=""></option>
                                {
                                    datas?.map((data, index) => <option key={"spec-item-" + index} value={data._id}>{data.name}</option>)
                                }
                            </Select>
                        </FormControl>
                    </Grid>    
                    <Grid item xs={6}>
                        <FormControl variant="outlined" fullWidth {...otherProps}>
                            <InputLabel id={"to-select-label"}>To</InputLabel>
                            <Select 
                                native 
                                onChange={ev => handleChangeRangeSelectValue('to', datas.find(d => d._id === ev.target.value)?.name || "")}
                                labelId={"to-select-label"}
                                label="To"
                            >
                                <option value=""></option>
                                {
                                    datas?.map((data, index) => <option key={"spec-item-" + index} value={data._id}>{data.name}</option>)
                                }
                            </Select>
                        </FormControl>
                    </Grid>                    
                </Grid>; break;
            default:
                mainUI = <></>; break;
        }
    } else {
        switch (type) {
            case FIELD_TYPE_RANGE_SELECT:
            case FIELD_TYPE_MULTI_SELECT:
            case FIELD_TYPE_SELECT:
                mainUI = 
                    <Select 
                        native 
                        variant="outlined" 
                        multiple={FIELD_TYPE_MULTI_SELECT === type} 
                        onChange={ev => FIELD_TYPE_MULTI_SELECT === type ? handleChangeMultiSelect(ev) : onChange(ev.target.value) }
                        required
                    >
                        <option aria-label="None" value=""></option>
                        {
                            datas?.map((data, index) => <option key={"spec-item-" + index} value={data.name}>{data.name}</option>)
                        }
                    </Select>; break;
            case FIELD_TYPE_RADIO:
                mainUI = <RadioGroup aria-label="" name="" className="flex-row px-3" onChange={ev => onChange(datas.find(d => d._id === ev.target.value).name)} required>            
                        {
                            datas?.map((data, index) => <FormControlLabel key={"spec-item-" + index} value={data._id} label={data.name} labelPlacement="end" control={<Radio  />} />)
                        }
                    </RadioGroup>; break;
            case FIELD_TYPE_COLOR_SELECT:
                mainUI = <RadioGroup aria-label="" name="" className="flex-row px-3">            
                        {
                            colors?.map((color, index) => <FormControlLabel 
                                    key={"spec-item-" + index} 
                                    value={color.value} 
                                    control={<Button 
                                        className={clsx(classes.colorButton, {
                                            [classes.selectedButton]: value === color.value
                                        })} 
                                        variant="contained" 
                                        style={{ backgroundColor: color.value}} 
                                        onClick={ev => onChange(color.value)}
                                    />} 
                                />)
                        }
                    </RadioGroup>; break;
            default:
                mainUI = <></>;
        }
    }
    return <FormControl fullWidth className="" {...otherProps} required>
      <Typography variant="subtitle2" className="mb-2" >{ name }</Typography>
      { mainUI }
      <FormHelperText></FormHelperText>
    </FormControl>
    
}

export default Field;