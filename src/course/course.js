import React, { useState } from 'react';
import {
  Container, makeStyles, Typography, Paper,
  withStyles, InputAdornment, Menu, MenuItem, FormControl, InputLabel,
  Grid, TextField, Button, Table, TableBody, Input, FormHelperText,
  TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#757575',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Code, Percent, Currency, Createdat, Status) {
  return { Code, Percent, Currency, Createdat, Status };
}
const rows = [
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-2020', '10%', '$159.00', 'Jul 21,2020'),
  createData('MARTFURY-MID2020', '5%', '$25.00', 'Jul 21, 2020'),
  createData('SUMMERHOT', '7.5%', '$50.00', 'Jul 21, 2020'),
  createData('EXLORE2020', '3%', '$10.00', 'Jul 21, 2020'),
  createData('LAPTOP2020', '10%', '$50.00', 'Jul 21, 2020'),
];
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const styles = makeStyles(() => ({
  h5: {
    fontWeight: 'bold'
  },
  caption: {
    color: '#9e9e9e'
  },
  table: {
    minWidth: 700,
  },
  search: {
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid #ffc107',
    },
    '& .MuiInput-underline:hover': {
      borderBottom: '1px solid #ffc107',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
    '& .MuiInput-underline:focus': {
      borderBottom: '1px solid #ffc107',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):after': {
      borderBottom: 0,
    },
  },
  fields: {
    width: 250,
    '& .MuiOutlinedInput-adornedStart': {
      padding: 0
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#bdbdbd',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffc107',
      },
    },
  },
  number: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-start",
  },
}))
function Course(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = useState({
    start: 0,selected: 1
  });
  const style = styles();
  return (
    <Container style={{ margin: '60px 70px' }}>
      <Grid Container >
        <Grid container style={{ margin: '90px 0px' }}>
          <Grid item md={4} lg={4} >
            <Typography variant='h5' className={style.h5}>
              Coupons </Typography>
            <Typography variant='caption' className={style.caption}>
              Martfury Counpon Listing</Typography>
          </Grid>

          <Grid item md={5} lg={5}>
            <TextField className={style.search}
              placeholder="Search something"
              InputProps={{
                style: {},
                startAdornment: (
                  <InputAdornment position="start">
                    <Button >
                      <Icon>search</Icon>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={3} lg={3}>
            <Button style={{ fontWeight: 'bold' }}>VIEW YOUR STORE</Button>
          </Grid>
        </Grid>

        <Grid container style={{ margin: '90px 0px' }}>
          <Grid item md={8} lg={8}>
            <Grid container direction='row'>
              <Grid item lg={12}>
                <TableContainer component={Paper}>
                  <Table className={style.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Code </StyledTableCell>
                        <StyledTableCell align="right">Percent</StyledTableCell>
                        <StyledTableCell align="right">Currency</StyledTableCell>
                        <StyledTableCell align="right">Created&nbsp;at</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(page.start, page.start + 5).map((row) => (
                        <StyledTableRow key={row.Code} >
                          <StyledTableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                            {row.Code}
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.Percent}</StyledTableCell>
                          <StyledTableCell align="right">{row.Currency}</StyledTableCell>
                          <StyledTableCell align="right">{row.Createdat}</StyledTableCell>
                          <StyledTableCell align="right">
                            <Button variant='contained' size='small' disabled>Expired</Button>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button onClick={handleClick} >...</Button>
                            <StyledMenu
                              id="customized-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                            >
                              <StyledMenuItem>
                                <ListItemText primary="Edit" />
                              </StyledMenuItem>
                              <StyledMenuItem>
                                <ListItemText primary="Delete" />
                              </StyledMenuItem>
                            </StyledMenu>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={12} >
                <Grid container className={style.number}>
                  <Grid item lg={5} sm={3}>
                    <Typography variant="h7" >Show {page.start+5} in 30 items .</Typography>
                  </Grid>

                  <Grid item lg={7} sm={3} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Button onClick={() => {
                      setPage({ ...page, start: ((page.selected - 1) * 5) - 5, selected: page.selected > 1 ? page.selected - 1 : page.selected })
                    }
                    }><KeyboardArrowLeftIcon /></Button>
                    {Array(Math.ceil(((rows.length / 5)) / 1)).fill(1).map((x, y) => (x + y * 1)).map(pageNumber => {
                      return <Button className={style.page} style={{ backgroundColor: page.selected == pageNumber ? "#ffc107" : "" }} variant="contained" onClick={() => {
                        if (pageNumber == 1) {
                          setPage({ ...page, start: 0, selected: pageNumber })
                        }
                        else {
                          setPage({ ...page, start: (pageNumber * 5) - 5, selected: pageNumber })
                        }
                      }}>{pageNumber}</Button>
                    })}
                    <Button onClick={() => {
                      setPage({ ...page, start: ((page.selected + 1) * 5) - 5, selected: page.selected < 4 ? page.selected + 1 : page.selected })

                    }}><KeyboardArrowRightIcon /></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1} lg={1}></Grid>
          <Grid item md={3} lg={3}>
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
              New Coupon
            </Typography>
            <FormControl>
              <Typography variant='body2' style={{ margin: '10px 0px' }} >
                Coupon Code
            </Typography>
              <TextField className={style.fields} variant='outlined'
                InputProps={{
                  style: {},
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant='body2' style={{ margin: '10px 0px' }} >
                By Percent
            </Typography>
              <TextField className={style.fields} variant='outlined'
                InputProps={{
                  style: {},
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant='body2' style={{ margin: '10px 0px' }}>
                By Currency
            </Typography>
              <TextField className={style.fields} variant='outlined'
                InputProps={{
                  style: {},
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant='body2' style={{ margin: '10px 0px' }} >
                Expired Date
            </Typography>
              <TextField className={style.fields} variant='outlined'
                InputProps={{
                  style: {},
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
              <Typography variant='body2' style={{ margin: '10px 0px' }} >
                Description
            </Typography>
              <TextField className={style.fields}
                placeholder='Enter category description'
                multiline
                rows={6}
                variant="outlined"
              />
              <Grid container style={{ marginTop: 60 }}>
                <Grid item md={6}>
                  <Button variant='contained' size='small' style={{
                    fontWeight: 'bold', padding: '10px 25px'
                  }}> Reset </Button>
                </Grid>
                <Grid item md={6}>
                  <Button variant='contained' size='small' style={{
                    backgroundColor: '#689f38',
                    fontWeight: 'bold', color: 'white', padding: '10px 25px'
                  }}> Add New </Button>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Course;