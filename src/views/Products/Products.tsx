import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import Button from '../../components/CustomButtons/Button';
import { createStyles } from '@material-ui/core';
import logo from "../../assets/img/logo.svg"


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const styles = createStyles({
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: 300,
        fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: 400,
            lineHeight: 1
        }
    }
});

interface Data {
    name: string,
    availability: number,
    inventory: number,
    order: number,
    kkd: number,
    sectors: string,
    manufacture: string
}

function createData(
    name: string,
    availability: number,
    inventory: number,
    order: number,
    kkd: number,
    sectors: string,
    manufacture: string
): Data {
    return { name, availability, inventory, order, kkd, sectors, manufacture };
}

const rows = [
    createData('Thẻ Từ (Phụ Kiện Mua Kèm Bộ Pro-Kit)', 99, 99, 0, 0, "Thẻ từ", "AZURA"),
    createData('Cảm Biến Laser Beam (Phụ Kiện Mua Kèm Bộ Pro-Kit)', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Cảm Biến Hồng Ngoại Outdoor (Phụ Kiện Mua Kèm Bộ Pro-Kit)', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Cảm Biến Hồng Ngoại Indoor (Phụ Kiện Mua Kèm Bộ Pro-Kit)', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Cảm Biến Cửa Thông Minh (Phụ Kiện Mua Kèm Bộ Pro-Kit)', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)1', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)2', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)3', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)4', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)5', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)6', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)7', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)8', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)9', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)10', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),
    createData('Remote 4 Kênh (Phụ Kiện Mua Kèm Bộ Pro-Kit)11', 99, 99, 0, 0, "Cảm biến laser", "AZURA"),

];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Tên sản phẩm' },
    { id: 'availability', numeric: true, disablePadding: false, label: 'Khả dụng' },
    { id: 'inventory', numeric: true, disablePadding: false, label: 'Tồn' },
    { id: 'order', numeric: true, disablePadding: false, label: 'Đặt' },
    { id: 'kkd', numeric: true, disablePadding: false, label: 'K.K.D' },
    { id: 'sectors', numeric: true, disablePadding: false, label: 'Loại' },
    { id: 'manufacture', numeric: true, disablePadding: false, label: 'NCC' },
];

interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                    color: theme.palette.secondary.main,
                    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
                }
                : {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.secondary.dark,
                },
        title: {
            flex: '1 1 100%',
        },
    }),
);

interface EnhancedTableToolbarProps {
    numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    {/* Nutrition */}
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            // top: 20,
            width: 1,
        },
    }),
);

function Products(props: any) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('availability');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


    return (
        <>



            <GridContainer>
                <GridItem xs={12} sm={12} md={12} >
                    <Button color="info" >
                        Tạo sản phẩm
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Paper >
                        <Tabs value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="simple tabs example">
                            <Tab label=" Tất cả sản phẩm" {...a11yProps(0)} />
                            <Tab label="Phân loại sản phẩm" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Paper>
                                <EnhancedTableToolbar numSelected={selected.length} />
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="tableTitle"
                                        size={dense ? 'small' : 'medium'}
                                        aria-label="enhanced table"
                                    >
                                        <EnhancedTableHead
                                            classes={classes}
                                            numSelected={selected.length}
                                            order={order}
                                            orderBy={orderBy}
                                            onSelectAllClick={handleSelectAllClick}
                                            onRequestSort={handleRequestSort}
                                            rowCount={rows.length}
                                        />
                                        <TableBody>
                                            {stableSort(rows, getComparator(order, orderBy))
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, index) => {
                                                    const isItemSelected = isSelected(row.name);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.name)}
                                                            role="checkbox"
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            key={row.name}
                                                            selected={isItemSelected}
                                                        >
                                                            <TableCell padding="checkbox">
                                                                <Checkbox
                                                                    checked={isItemSelected}
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                />
                                                            </TableCell>
                                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.availability}</TableCell>
                                                            <TableCell align="right">{row.inventory}</TableCell>
                                                            <TableCell align="right">{row.order}</TableCell>
                                                            <TableCell align="right">{row.kkd}</TableCell>
                                                            <TableCell align="right">{row.sectors}</TableCell>
                                                            <TableCell align="right">{row.manufacture}</TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            {emptyRows > 0 && (
                                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                                    <TableCell colSpan={6} />
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Phân loại sản phẩm
                        </TabPanel>

                    </Paper>
                </GridItem>

            </GridContainer>
        </>
    );
}

export default withStyles(styles)(Products);
