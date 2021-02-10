import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function Products() {
    const [product, setProduct] = useState(false)
    const [isSearchFocus, setIsSearchFocus] = useState(false)
    const [state, setState] = React.useState({
        category: '',
        type: "",
        status: "",
        start: 0,
        selected: 1
    });
    const onProductclick = () => {
        setProduct(true)
    }
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const StyledTableCell = withStyles((theme) => ({
        head: {
            color: "#999999"
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(even)': {
                backgroundColor: "#eff4e5",
            },
        },
    }))(TableRow);

    const useStyles = makeStyles((theme) => ({
        table: {
            width: "100%",
        },

        item: {
            height: "45px",
            // "&:nth-child(even)": { backgroundColor: "#eff4e5" }

        },
        price: {
            fontWeight: "700",
        },
        stock: {
            backgroundColor: "#eff4e5",
            display: "inline-block",
            padding: "6px 10px",
            borderradius: "4px",
            fontWeight: "700",
            marginTop: "20px"

        },
        icon: {
            fontSize: "20px",
            marginBottom: "-5px"
        },
        tittle: {
            color: "#999999"
        },
        number: {
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "flex-start",
        },
        root: {
            // display: "flex",
            // justifyContent: "space-between",
            textAlign: "center",
            marginBottom: "40px"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: "100%",
            minHeight: "60px"
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        productButton: {
            height: "44px",
            width: "200px",
            fontSize: "12px",
            border: "0px",
            backgroundColor: "#80bc00",
            color: "white",
            fontWeight: "700",
            outline: "none",
            '&:hover': {
                backgroundColor: '#ffc107 !important',
            }
        },
        productPosition: {
            marginTop: "50px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        button: {
            border: "0px",
            outline: "none",
            padding: "10px",
            height: "45px",
            width: "100px",
            backgroundColor: "#e5e5e5",
            '&:hover': {
                backgroundColor: '#ffc107 !important',
            },
            marginTop: "6px"
        },
        select: {
            height: "40px",
        },
        search: {
            height: "40px",
            width: "400px",
            padding: "20px",
            marginTop: "-20px"
        },
        option: {
            height: "40px",
        },
        form: {
            padding: "16px 24px",
            border: "1px solid #f0f5e7",
            marginBottom: "20px"
        },
        input: {
            height: "40px",
            width: "100%",
            marginBottom: "30px",
        },
        title: {
            height: "16px",
            backgroundColor: "#f0f5e7",
            padding: "24px",
            fontWeight: "700",
            textAlign: "left",
            fontSize: "17px"
        },
        label: {
            fontWeight: "500",
            fontSize: "16px",
            textAlign: "left",
            color: "black",
            marginBottom: "5px"
        },
        file: {
            backgroundColor: "#cd4040",
            color: "white",
            height: "55px",
            padding: "10px",
            fontSize: "12px",
            marginLeft: "-15 px",
            '&:hover': {
                backgroundColor: '#ffc107 !important',
            },
        },
        navButton: {
            height: "40px",
            width: "110px",
            marginBottom: "30px",
            '&:hover': {
                backgroundColor: '#ffc107 !important',
            },
        },
        buttonPosition: {
            display: "flex",
            justifyContent: "space-around"
        },
        page: {
            height: "32px",
            width: "20px !important",
            '&:hover': {
                backgroundColor: '#ffc107 !important',
            },
        }
    }));

    const classes = useStyles();

    const products = [
        {
            id: "ABH-0",
            name: "Herschel Leather Duffle Bag In Brown Color",
            sku: "AB123456789-1",
            stock: "Stock",
            price: "£125.30",
            category: "BagsClothing & Apparel",
            date: "2019/11/06",
        },
        {
            id: "ABH-1",
            name: "Apple iPhone Retina 6s Plus 64GB",
            sku: "CD987654316-1",
            stock: "Stock",
            price: "£1,249.99",
            category: "Computers & TechnologiesTechnologies",
            date: "2018/12/11",
        },
        {
            id: "ABH-2",
            name: "Marshall Kilburn Portable Wireless Speaker",
            sku: "SF1133569600-1",
            stock: "Stock",
            price: "£36.78",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-3",
            name: "Xbox One Wireless Controller Black Color",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£55.30",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-4",
            name: "Grand Slam Indoor Of Show Jumping Novel",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£32.39",
            category: "Books & OfficeCars & Motocycles",
            date: "2018/12/11",
        },
        {
            id: "ABH-5",
            name: "Rayban Rounded Sunglass Brown Color",
            sku: "AB123456783",
            stock: "Stock",
            price: "£321.39",
            category: "Clothing & ApparelCars & Motocycles",
            date: "2018/12/11",
        },
        {
            id: "ABH-9",
            name: "Herschel Leather Duffle Bag In Brown Color",
            sku: "AB123456789-1",
            stock: "Stock",
            price: "£125.30",
            category: "BagsClothing & Apparel",
            date: "2019/11/06",
        },
        {
            id: "ABH-10",
            name: "Apple iPhone Retina 6s Plus 64GB",
            sku: "CD987654316-1",
            stock: "Stock",
            price: "£1,249.99",
            category: "Computers & TechnologiesTechnologies",
            date: "2018/12/11",
        },
        {
            id: "ABH-11",
            name: "Marshall Kilburn Portable Wireless Speaker",
            sku: "SF1133569600-1",
            stock: "Stock",
            price: "£36.78",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-12",
            name: "Xbox One Wireless Controller Black Color",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£55.30",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-13",
            name: "Grand Slam Indoor Of Show Jumping Novel",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£32.39",
            category: "Books & OfficeCars & Motocycles",
            date: "2018/12/11",
        },
        {
            id: "ABH-14",
            name: "Rayban Rounded Sunglass Brown Color",
            sku: "AB123456783",
            stock: "Stock",
            price: "£321.39",
            category: "Clothing & ApparelCars & Motocycles",
            date: "2018/12/11",
        },
        {
            id: "ABH-15",
            name: "Herschel Leather Duffle Bag In Brown Color",
            sku: "AB123456789-1",
            stock: "Stock",
            price: "£125.30",
            category: "BagsClothing & Apparel",
            date: "2019/11/06",
        },
        {
            id: "ABH-16",
            name: "Apple iPhone Retina 6s Plus 64GB",
            sku: "CD987654316-1",
            stock: "Stock",
            price: "£1,249.99",
            category: "Computers & TechnologiesTechnologies",
            date: "2018/12/11",
        },
        {
            id: "ABH-17",
            name: "Marshall Kilburn Portable Wireless Speaker",
            sku: "SF1133569600-1",
            stock: "Stock",
            price: "£36.78",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-18",
            name: "Xbox One Wireless Controller Black Color",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£55.30",
            category: "AccessoriesAir Conditioners",
            date: "2018/12/11",
        },
        {
            id: "ABH-19",
            name: "Grand Slam Indoor Of Show Jumping Novel",
            sku: "AB123456788",
            stock: "Out-of-stock",
            price: "£32.39",
            category: "Books & OfficeCars & Motocycles",
            date: "2018/12/11",
        },
        {
            id: "ABH-20",
            name: "Rayban Rounded Sunglass Brown Color",
            sku: "AB123456783",
            stock: "Stock",
            price: "£321.39",
            category: "Clothing & ApparelCars & Motocycles",
            date: "2018/12/11",
        },
    ]

    return (
        <Grid>
            <Container>

                {product ? (
                    <Grid>
                        <Container style={{ marginTop: "50px" }}>
                            <Grid container spacing={1} direction="row">
                                <Grid item lg={6} xs={12}>
                                    <Box className={classes.title}>
                                        Genaral
                                </Box>
                                    <Container className={classes.form}>
                                        <InputLabel className={classes.label} htmlFor="product-name">Product Name</InputLabel>
                                        <TextField className={classes.input} placeholder="Enter Product Name" id="product-name" variant="outlined" />

                                        <InputLabel className={classes.label} htmlFor="reference">Reference</InputLabel>
                                        <TextField className={classes.input} placeholder="Enter Product Reference..." id="reference" variant="outlined" />
                                        <Grid>
                                            <InputLabel className={classes.label} htmlFor="product-summary">Product Summary</InputLabel>
                                            <TextField className={classes.input} placeholder="Enter Product summary" id="product-summary" variant="outlined" />
                                        </Grid>
                                        <Grid>
                                            <InputLabel className={classes.label} htmlFor="regular-price">Regular Price</InputLabel>
                                            <TextField className={classes.input} id="regular-price" variant="outlined" />
                                        </Grid>
                                        <InputLabel className={classes.label} htmlFor="sale-price">Sale Price</InputLabel>
                                        <TextField className={classes.input} id="sale-price" variant="outlined" />

                                        <InputLabel className={classes.label} htmlFor="outlined-basic">Sale quantity</InputLabel>
                                        <TextField className={classes.input} id="sale-quantity" variant="outlined" />

                                        <InputLabel className={classes.label} htmlFor="sold-items">Sold Items</InputLabel>
                                        <TextField className={classes.input} id="sold-items" variant="outlined" />

                                        <InputLabel className={classes.label} htmlFor="sold-items">Product Description</InputLabel>
                                        <TextField className={classes.input} id="sold-items" multiline rowsMax={4} variant="outlined" />
                                    </Container>
                                </Grid>

                                <Grid item lg={6} xs={12}>
                                    <Box className={classes.title}>
                                        Product Images
                                    </Box>
                                    <Container className={classes.form}>
                                        <Grid>
                                            <InputLabel className={classes.label} htmlFor="product-thumbnail">Product Thumbnail</InputLabel>
                                            <Grid style={{ display: "flex" }} >
                                                <Grid lg={10}  ><TextField className={classes.input} style={{ width: "100%" }} id="sold-items" variant="outlined" /></Grid>
                                                <Grid lg={2}><Button className={classes.file}>Choose</Button></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <InputLabel className={classes.label} htmlFor="product-gallery">Product Gallery</InputLabel>
                                            <Grid style={{ display: "flex" }}>
                                                <Grid lg={10}><TextField className={classes.input} style={{ width: "100%" }} id="product-gallery" variant="outlined" /></Grid>
                                                <Grid lg={2}><Button className={classes.file}>Choose</Button></Grid>
                                            </Grid>
                                            <Grid style={{ display: "flex" }}>
                                                <Grid lg={10}><TextField className={classes.input} style={{ width: "100%" }} id="product-gallery" variant="outlined" /></Grid>
                                                <Grid lg={2}><Button className={classes.file}>Choose</Button></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <InputLabel className={classes.label} htmlFor="vedio">Vedio(optional)</InputLabel>
                                            <TextField className={classes.input} placeholder="Enter vedio URL" id="vedio" variant="outlined" />
                                        </Grid>
                                    </Container>
                                    <Grid>
                                        <Box className={classes.title}>
                                            Inventory
                                       </Box>
                                        <Container className={classes.form}>
                                            <Grid>
                                                <InputLabel className={classes.label} htmlFor="sku">SKU</InputLabel>
                                                <TextField className={classes.input} id="sku" variant="outlined" />
                                            </Grid>
                                            <Grid
                                            >
                                                <InputLabel className={classes.label} htmlFor="status">Status</InputLabel>

                                                <FormControl variant="outlined" style={{ minHeight: "60px", width: "100%" }}>
                                                    <Select
                                                        native
                                                        className={classes.select}
                                                        value={state.type}
                                                        onChange={handleChange}
                                                        inputProps={{
                                                            name: 'age',
                                                            id: 'outlined-age-native-simple',
                                                        }}
                                                    >
                                                        {/* <option value="">Product Type</option> */}
                                                        <option value={10}>Status1</option>
                                                        <option value={20}>Status2</option>
                                                        <option value={30}>Status3</option>
                                                        <option value={24}>Status4</option>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Container>
                                    </Grid>
                                    <Grid>
                                        <Box className={classes.title}>
                                            Meta
                                       </Box>
                                        <Container className={classes.form}>
                                            <Grid>
                                                <InputLabel className={classes.label} htmlFor="sold-items">Brand</InputLabel>

                                                <FormControl variant="outlined" style={{ minHeight: "60px", width: "100%" }}>
                                                    <Select
                                                        native
                                                        className={classes.select}
                                                        value={state.type}
                                                        onChange={handleChange}
                                                        inputProps={{
                                                            name: 'age',
                                                            id: 'outlined-age-native-simple',
                                                        }}
                                                    >
                                                        {/* <option value="">Product Type</option> */}
                                                        <option value={10}>Brand1</option>
                                                        <option value={20}>Brand2</option>
                                                        <option value={30}>Brand3</option>
                                                        <option value={24}>Brand4</option>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid>
                                                <InputLabel className={classes.label} htmlFor="tags">Tags</InputLabel>
                                                <TextField className={classes.input} id="tags" variant="outlined" />
                                            </Grid>
                                        </Container>
                                    </Grid>

                                </Grid>
                                <Grid item lg={12} xs={12}>
                                    <Grid className={classes.buttonPosition} >
                                        <Grid><Button onClick={() => setProduct(false)} className={classes.navButton} style={{ backgroundColor: "black", color: "white" }}>Back</Button></Grid>
                                        <Grid><Button className={classes.navButton} style={{ backgroundColor: "#e5e5e5" }}>Cancel</Button></Grid>
                                        <Grid><Button className={classes.navButton} style={{ backgroundColor: "#cd4040", color: "white" }}>Submit</Button></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid >
                )
                    : (
                        <Grid>
                            <Grid className={classes.productPosition}>
                                <Button className={classes.productButton} onClick={onProductclick}>
                                    <AddIcon className={classes.icon} />NEW  PRODUCT</Button>
                            </Grid>
                            <Grid container spacing={1} direction="row" className={classes.root}>
                                <Grid item md={2} xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            native
                                            className={classes.select}
                                            value={state.category}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'outlined-age-native-simple',
                                            }}
                                        >
                                            <option value="">Select Category</option>
                                            <option value={10}>Cloathing & Apparel</option>
                                            <option value={20}>Cloathing & Apparel</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            native
                                            className={classes.select}
                                            value={state.type}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'outlined-age-native-simple',
                                            }}
                                        >
                                            <option value="">Product Type</option>
                                            <option className={classes.option} value={10}>Simple Product</option>
                                            <option value={20}>Grouped Product</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            className={classes.select}
                                            native
                                            value={state.status}
                                            onChange={handleChange}
                                            inputProps={{
                                                name: 'age',
                                                id: 'outlined-age-native-simple',
                                            }}
                                        >
                                            <option value="">Status</option>
                                            <option value={10}>Active</option>
                                            <option value={20}>Inactive</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <Button className={classes.button}><FilterListIcon style={{ marginBottom: "-5px", fontSize: "20px" }} />FILTER</Button>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <TextField className={classes.search} color="#ffc107" onFocus={() => setIsSearchFocus(true)} onMouseLeave={() => setIsSearchFocus(false)} placeholder="Search product" variant="outlined" />
                                </Grid>
                            </Grid>

                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>ID</StyledTableCell>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell>SKU</StyledTableCell>
                                        <StyledTableCell>Stock</StyledTableCell>
                                        <StyledTableCell>Price</StyledTableCell>
                                        <StyledTableCell>Category</StyledTableCell>
                                        <StyledTableCell>Date</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {products.slice(state.start, state.start + 5).map((item) => (
                                        <StyledTableRow key={item.id}>
                                            <StyledTableCell className={classes.item} component="th" scope="row">
                                                {item.id}
                                            </StyledTableCell>
                                            <StyledTableCell className={classes.price}>{item.name}</StyledTableCell>
                                            <StyledTableCell >{item.sku}</StyledTableCell>
                                            <StyledTableCell className={classes.price} style={{ color: item.stock == "Stock" ? "green" : 'black' }}>{item.stock}</StyledTableCell>
                                            <StyledTableCell className={classes.price} >{item.price}</StyledTableCell>
                                            <StyledTableCell >{item.category}</StyledTableCell>
                                            <StyledTableCell >{item.date}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Grid container spacing={3} className={classes.number}>
                                <Grid item lg={3} sm={3}><Typography variant="h7" component="p">Show 10 in 30 items.</Typography></Grid>
                                <Grid item lg={7} sm={3} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Button disabled={state.selected == 1 ? true : false} onClick={() => {
                                        setState({ ...state, start: ((state.selected - 1) * 5) - 5, selected: state.selected > 1 ? state.selected - 1 : state.selected })
                                    }
                                    }><KeyboardArrowLeftIcon /></Button>
                                    {Array(Math.ceil(((products.length / 5)) / 1)).fill(1).map((x, y) => (x + y * 1)).map(pageNumber => {
                                        return <Button className={classes.page} style={{ backgroundColor: state.selected == pageNumber ? "#ffc107" : "" }} variant="contained" onClick={() => {
                                            if (pageNumber == 1) {
                                                setState({ ...state, start: 0, selected: pageNumber })
                                            }
                                            else {
                                                setState({ ...state, start: (pageNumber * 5) - 5, selected: pageNumber })
                                            }
                                        }}>{pageNumber}</Button>
                                    })}
                                    <Button disabled={state.selected == 4 ? true : false} onClick={() => {
                                        setState({ ...state, start: ((state.selected + 1) * 5) - 5, selected: state.selected < 4 ? state.selected + 1 : state.selected })

                                    }}><KeyboardArrowRightIcon /></Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    )}

            </Container>
        </Grid>

    )
}

export default Products
