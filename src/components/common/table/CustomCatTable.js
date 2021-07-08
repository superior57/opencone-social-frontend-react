import { Paper, Table, TableBody, TableRow, TableCell, TableContainer, makeStyles, IconButton, TextField, TableHead } from "@material-ui/core";
import { useEffect, useState } from "react";
import CustomCatToolbar from "./CustomCatToolbar";
import { Delete, Edit, Save, Close } from "@material-ui/icons";
import clsx from "clsx";
// import NoDataComponent from "../../common/nodata/NoData";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    row: {
        cursor: "pointer",
    },
    selected: {
        backgroundColor: '#e4e4e4 !important'
    },
    tableContainer: {
        height: 'calc(100% - 64px)'
    },
    tableCell: {
        '& > *': {
            width: '100%'
        }
    },
    table: {
        // minWidth: 650
    }
}))

const CustomCatTable = ({
    rows = [],
    cols = [],
    align = "left",
    header = "",
    selectedRow = null,
    size = "medium",
    hideHeader = true,
    hiddenHeaderCols = [],
    onChangeRow = () => {},
    onDeleteRow = () => {},
    onAddNewValue = () => {},
    onUpdateValue = () => {},
    editable = true
}) => {
    

    const classes = useStyles();
    const [focusingId, setFocusingId] = useState(null);
    const [focusingValue, setFocusingValue] = useState({});
    const [adding, setAdding] = useState(false);
    const [addingValue, setAddingValue] = useState({});
    const headerCols = cols.filter(col => !hiddenHeaderCols.includes(col.field));

    useEffect(() => {
        if (selectedRow) onChangeRow(selectedRow);
    }, [selectedRow])    

    const initialKeys = () => {
        const returnObj = {};
        cols.forEach(obj => {
            returnObj[obj.field] = ""
        });
        return returnObj;
    }

    const handleEditValue = (rowId, rowData) => {
        const initialFocusValue = {};
        cols.forEach(obj => {
            initialFocusValue[obj.field] = rowData[obj.field];
        })
        setFocusingId(rowId);
        setFocusingValue(initialFocusValue);
    }
    const handleSaveValue = () => {
        setFocusingId(null);
        onUpdateValue(focusingId, focusingValue);
    }
    const handleAddValue = () => {
        setAdding(false);
        onAddNewValue(addingValue);
    }
    const handleCancelAddValue = () => {
        setAdding(false);
    }
    const handleClickNewButton = () => {
        setAdding(true);
        setFocusingId(null);
        setAddingValue(initialKeys());
    }

    return <Paper variant="outlined" elevation={0} square className={classes.root}>
        <CustomCatToolbar 
            title={header}
            adding={adding}
            onAddValue={handleAddValue}
            onClickAddButton={handleClickNewButton}
        />
        <TableContainer className={classes.tableContainer}>
            <Table size={size} className={classes.table}>
                {
                    !hideHeader && <TableHead>
                        <TableRow >
                            {
                                headerCols.map((col, index) => <TableCell key={"col-" + index} align={align} className={clsx("px-4", classes.tableCell)} colSpan={index === headerCols.length - 1 ? hiddenHeaderCols.length + 1 : 1}>
                                    {
                                        col.title
                                    }
                                </TableCell>)
                            }
                            <TableCell align={align} className={clsx("px-4", classes.tableCell)} >
                               
                            </TableCell>
                        </TableRow>
                    </TableHead>
                }
                {
                    adding && <TableHead>
                        <TableRow >
                            {
                                headerCols.map((col, index) => <TableCell key={"col-" + index} align={align} className={clsx("px-4", classes.tableCell)} colSpan={index === 0 ? hiddenHeaderCols.length + 1 : 1}>
                                    {
                                        col.render ? col.render(addingValue[col.field], value => {
                                            setAddingValue({...addingValue, [col.field]: value})
                                        }) : 
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={addingValue[col.field]}
                                            onChange={ev => setAddingValue({...addingValue, [col.field]: ev.target.value})}
                                            autoFocus     
                                            InputProps={{
                                                style: {
                                                    borderRadius: 0
                                                }
                                            }}         
                                        />
                                    }
                                </TableCell>)
                            }
                            <TableCell align="right">
                                <IconButton aria-label="Delete" onClick={handleCancelAddValue} size="small">
                                    <Close />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                }
                <TableBody>
                    {
                        rows?.map((row, index) => <TableRow 
                            key={'table-row'+index}
                            className={clsx(classes.row, {
                                [classes.selected]: row._id === selectedRow
                            })} 
                            hover
                            selected={row._id === selectedRow}
                            onClick={() => onChangeRow(row._id)}
                        >
                            {
                                cols.map((col, index) => <TableCell key={"tbody-col-" + index} align={align} className={clsx("px-4", classes.tableCell)}>
                                    {
                                        focusingId === row._id ? (col.render ? col.render(focusingValue[col.field], value => {
                                            setFocusingValue({...focusingValue, [col.field]: value})
                                        }) : <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            value={focusingValue[col.field]}
                                            onChange={ev => setFocusingValue({...focusingValue, [col.field]: ev.target.value})}
                                            autoFocus     
                                            InputProps={{
                                                style: {
                                                    borderRadius: 0,
                                                },
                                            }}
                                            
                                        />) : (
                                            col.displayRender ? col.displayRender(row[col.field]) : row[col.field]
                                        )                                    
                                    }
                                </TableCell>)
                            }
                            <TableCell align="right">
                                {
                                    editable && ( focusingId === row._id ? <IconButton aria-label="Delete" onClick={handleSaveValue} size="small">
                                        <Save />
                                    </IconButton> : 
                                    <IconButton aria-label="Delete" onClick={() => handleEditValue(row._id, row)} size="small">
                                        <Edit />
                                    </IconButton>)
                                }
                                <IconButton aria-label="Delete" onClick={() => onDeleteRow(row._id)} size="small">
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
}
export default CustomCatTable;