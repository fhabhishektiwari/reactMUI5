import React, { useState } from 'react'
import { Paper, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography } from '@mui/material'
// import useStyles from './styles';

export default function useTable(records, headCells, filterFn) {
    // const classes = useStyles();

    const pages = [5, 10, 20, 25, 50, 100];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblContainer = props => (
        <TableContainer component={Paper}>
            <Table 
            // className={classes.table}
            >
                {props.children}
            </Table>
        </TableContainer>
    )

    const TblHead = props => {
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <TableCell key={headCell.id} align={headCell.align} 
                                // className={classes.tableCellMargin}
                            >
                                <Typography variant={props.variant} color={props.color} >{headCell.label}</Typography>
                                {/*<TableSortLabel>{headCell.label}</TableSortLabel>*/}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);

    }

    const TblPagination = () => (
        <TablePagination
            component="div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={records.length}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    }
}