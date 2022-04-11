
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import { Post } from '../../types/post';
import Link from 'next/link';
import styles from './postsGrid.module.scss';

  type Props = {
      posts: [Post]
  }
  
  export default function PostsGrid({posts}: Props) {
      const [rowsPerPage, setRowsPerPage] = React.useState(25);
      const [page, setPage] = React.useState(0);
      const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
      
      const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

      const tableRows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

      return (
          <div className={styles.container}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                          <TableCell className={styles.rowHeader}>
                            Title
                          </TableCell>
                          <TableCell className={styles.rowHeader}>
                            Category
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>

                      {
                      tableRows.map((post) => (
                      <TableRow
                          key={post.title}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell component="th" scope="row">
                            <Link href={`https://www.technologybear.net/posts/${post.slug}`}>
                              {post.title}
                            </Link>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {post.category}
                          </TableCell>
                      </TableRow>
                      ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={posts.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
            </TableContainer>
          </div>
      );
  }