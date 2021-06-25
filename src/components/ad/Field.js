import { colors, FIELD_TYPE_COLOR_SELECT, FIELD_TYPE_MULTI_SELECT, FIELD_TYPE_RADIO, FIELD_TYPE_SELECT } from "../../utils/fieldTypes";
import { Select, FormControl, FormHelperText, RadioGroup, FormControlLabel, Radio, Button, makeStyles, Typography } from '@material-ui/core'
import clsx from "clsx";

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
    onChange = () => {}
}) => {
    const classes = useStyles();
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

    switch (type) {
        case FIELD_TYPE_MULTI_SELECT:
        case FIELD_TYPE_SELECT:
            mainUI = 
                <Select 
                    native 
                    variant="outlined" 
                    multiple={FIELD_TYPE_MULTI_SELECT === type} 
                    onChange={ev => FIELD_TYPE_MULTI_SELECT === type ? handleChangeMultiSelect(ev) : onChange(ev.target.value) }
                >
                    <option aria-label="None" value="">Choose Item</option>
                    {
                        datas?.map((data, index) => <option key={"spec-item-" + index} value={data._id}>{data.name}</option>)
                    }
                </Select>; break;
        case FIELD_TYPE_RADIO:
            mainUI = <RadioGroup aria-label="" name="" className="flex-row px-3" onChange={ev => onChange(ev.target.value)}>            
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
    return <FormControl fullWidth className="mb-2">
      <Typography variant="subtitle2" className="mb-2" >{ name }</Typography>
      { mainUI }
      <FormHelperText></FormHelperText>
    </FormControl>
    
}

export default Field;