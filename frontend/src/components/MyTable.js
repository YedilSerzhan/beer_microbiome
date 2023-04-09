import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const columns = [
    { id: 'sample_id', label: 'sample id', minWidth: 100 },
    { id: 'beer', label: 'beer', minWidth: 100 },
    { id: 'type_of_data', label: 'type of data', minWidth: 100 },
    { id: 'sequencing_technique', label: 'sequencing technique', minWidth: 100 },
    { id: 'brewery', label: 'brewery', minWidth: 100 },
    { id: 'country', label: 'country', minWidth: 100 },
    { id: 'download', label: 'download', minWidth: 100 },
    { id: 'publication', label: 'study', minWidth: 100 },
    { id: 'taxa', label: '', minWidth: 100 },
];

export default function StickyHeadTable({ data }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', bgcolor: "#F7F7F7" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, textTransform: 'capitalize' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.sample_id}>
                                        {columns.map((column) => {
                                            console.log(row)
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'sample_id' ? (
                                                        <a href={row.sample_link}>{value}</a>
                                                    ) : column.id === 'type_of_data' ? (
                                                        <p>{row.type_of_data} {row.target}</p>
                                                    ) : column.id === 'publication' ? (
                                                        <a href={row.publication_link}>{value}</a>
                                                    ) : column.id === 'taxa' ? (
                                                        <Link to={'/study/' + row.study_id} style={{ textDecoration: "none" }}>
                                                            <Button variant="outlined" size="small">result</Button>
                                                        </Link>
                                                    ) : column.id === 'download' ? (
                                                        row.dataset_links && Array.isArray(row.dataset_links) ? (
                                                            <Box display="flex" flexDirection="column" my={1}>
                                                                {row.dataset_links.map((link, index) => (
                                                                    <a style={{ marginBottom: '3px' }} key={index} href={link} > {row.sample_id}_{index + 1}</a>
                                                                ))}
                                                            </Box>
                                                        ) : null
                                                    ) : column.format && typeof value === 'number' ? (
                                                        column.format(value)
                                                    ) : (
                                                        value
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}