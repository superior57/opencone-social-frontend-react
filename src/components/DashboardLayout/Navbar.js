import React, { useEffect, useState } from "react";
import { List, ListItemIcon, ListItem, ListItemText, Divider, Grid, Button, ListSubheader, makeStyles, Collapse, TextField, InputAdornment } from "@material-ui/core";
import { navigationList, adminNavigationList } from "../../utils/navigationConfig";
import { Link } from "react-router-dom";
import LogoComponent from "../common/logo";
import JordanFlagImg from "../../assets/images/flags/jordan_flag.png";
import { ExpandLess, ExpandMore, DriveEta, Search } from "@material-ui/icons";
import { 
  UPDATE_LANGUAGE
} from "../../store/actions/types";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getCategories } from "../../store/actions/categoryActions";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  selectedCategory: {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      color: 'white'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    }
  },
}))

const Navbar = () => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useDispatch(null);
  const theme = useSelector(store => store.theme);
  const { t, i18n } = useTranslation();
  const { user } = useSelector(state => state.auth);
  const { categories } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  console.log(categories);
  
  const filteredCategories = () => {
    let filteredCategoryList = [];
    filteredCategoryList = categories;
    if (searchKey) {
      filteredCategoryList = filteredCategoryList.filter(cat => {
        let str_labels = cat.name;
        if (cat.subCategories) {
          cat.subCategories.forEach(catChild => {
            str_labels += " " + catChild.name;
          })
        }
        return str_labels.toLowerCase().includes(searchKey.toLowerCase());
      });
      filteredCategoryList = [
        ...filteredCategoryList.map(category => ({
          ...category,
          children: [
            ...category.subCategories.filter(cat_child => {
              const { name } = cat_child;
              return name.toLowerCase().includes(searchKey.toLowerCase());
            })
          ]
        }))
      ]
    }
    return filteredCategoryList?.map((category, index) => <div key={'category-item-' + index}>
      <ListItem 
        className={`rounded-3 ${selectedItem === index ? classes.selectedCategory : ''}`} 
        button 
        onClick={() => setSelectedItem( selectedItem === index ? '' : index)}
      >
        <ListItemIcon>
          <DriveEta />
        </ListItemIcon>
        <ListItemText primary={category.name} />
        {
          category.subCategories.length > 0 && (selectedItem === index ? <ExpandLess /> : <ExpandMore />)
        }
      </ListItem>
      <Collapse in={selectedItem === index} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            category.subCategories?.map((ch_item, c_index) => <ListItem key={"ch-item-" + c_index} button className={classes.nested}>
              <ListItemText primary={ch_item.name} />
            </ListItem>)
          }
        </List>
      </Collapse>
    </div>)
  }

  return (
    <div>
      <Grid container className="px-3 align-items-center" spacing={2}>
        <Grid style={{
          height: 30
        }}>
          <LogoComponent />  
        </Grid>     
        <Grid item>
          <img src={JordanFlagImg} width={30} height={25} alt="" className="m-2" />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Button 
                variant={theme.language === "en" ? "contained" : "outlined"} 
                color="primary" 
                className="p-0" 
                size="small" 
                style={{ minWidth: 40 }} 
                onClick={() => {
                  i18n.changeLanguage("en");
                  dispatch({
                    type: UPDATE_LANGUAGE,
                    payload: "en"
                  })
                }}
              >
                EN              
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant={theme.language === "ar" ? "contained" : "outlined"} 
                color="primary" 
                className="p-0" 
                size="small" 
                style={{ minWidth: 40 }} 
                onClick={() => {
                  i18n.changeLanguage("ar");
                  dispatch({
                    type: UPDATE_LANGUAGE,
                    payload: "ar"
                  })
                }}
              >
                AR              
              </Button>
            </Grid>
          </Grid>
        </Grid>  
      </Grid>
      <List>
        {
          navigationList.map((d, i) => <Link to={d.link} className="text-decoration-none" key={'nav-list-' + i} >
            <ListItem button={d.button} className={`text-${d.color}`}>               
              <ListItemIcon>{d.icon}</ListItemIcon> 
              <ListItemText primary={t(d.label)} />              
            </ListItem>
          </Link>)
        }
        {
          user.role === "admin" && adminNavigationList.map((d, i) => <Link to={d.link} className="text-decoration-none" key={'nav-list-' + i} >
            <ListItem button={d.button} className={`text-${d.color}`}>               
              <ListItemIcon>{d.icon}</ListItemIcon> 
              <ListItemText primary={t(d.label)} />              
            </ListItem>
          </Link>)
        }
      </List>   
      <Divider style={{
          backgroundColor: 'rgb(0 0 0 / 47%)'
      }} />    
      <List
        className="p-3"
        component="nav"
        subheader={
          <ListSubheader>
            {t('Categories')}
          </ListSubheader>
        }
      >
        <TextField
          id=""
          label=""
          variant="outlined"
          value={searchKey}
          onChange={(ev) => setSearchKey(ev.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />                
              </InputAdornment>
            )
          }}    
          size="small"      
          placeholder={t('Search Categories')}
          margin="normal"
        />
        {
          filteredCategories()
        }
        </List>
    </div>
  )
}

export default Navbar;
