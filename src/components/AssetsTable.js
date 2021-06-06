import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const AssetsTable = (props) => {
    // console.log(props)
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Owner</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">AppraisedValue</TableCell>
                        <TableCell align="right">Color</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.ID}>
                            <TableCell component="th" scope="row">
                                {row.ID}
                            </TableCell>
                            <TableCell align="right">{row.Owner}</TableCell>
                            <TableCell align="right">{row.Size}</TableCell>
                            <TableCell align="right">{row.AppraisedValue}</TableCell>
                            <TableCell align="right">{row.Color}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default AssetsTable;

