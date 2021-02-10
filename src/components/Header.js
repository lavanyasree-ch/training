import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputIcon from '@material-ui/icons/Input';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

function Header() {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginTop:"30px",
            cursor: "pointer"
        },        
        icon: {
            fontSize: "25px",
            marginLeft: "20px",            
        },        
        searchIcon: {
            fontSize: "25px",
            marginBottom: "-6px",
            marginRight: "17px"
        },
        title:{
            '&:hover': {
                color: '#ffc107 !important',}
        },
    }));


    const classes = useStyles();

    return (       
        <Grid container spacing={3} className={classes.root} direction="row">
            <Grid item lg={3}>
                <Typography variant="h5" component="h2">
                    Products
                </Typography>
                <Typography variant="h7" component="p">
                    Product Listings
                </Typography>
            </Grid>
            <Grid item lg={6}>
                <Input
                    id="input-with-icon-adornment"
                    placeholder="Search something"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon className={classes.searchIcon} />
                        </InputAdornment>
                    }
                />
            </Grid>
            <Grid item lg={3} style={{ display: "flex" }} className={classes.title}>
                <Grid><Typography  variant="h5" component="h2">Products</Typography></Grid>
                <Grid><InputIcon className={classes.icon} /></Grid>
            </Grid>
        </Grid>
    )
}

export default Header
