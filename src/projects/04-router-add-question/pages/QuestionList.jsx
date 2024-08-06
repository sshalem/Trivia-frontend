import { DataGrid, GridToolbar, heIL } from '@mui/x-data-grid';

// For RTL support import the following
import { createTheme, ThemeProvider } from '@mui/material/styles';

// For Last Page and First Page
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { QuestionController as questionAxios } from '../utils/axiosInstance';

/*****************************************
 * TablePaginationActions components
 *****************************************/

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// (1) Create rtl theme
const theme = createTheme({
  direction: 'rtl',
});

const columns = [
  { field: 'id', headerName: 'שאלה מס.', width: 130 },
  { field: 'subject', headerName: 'נושא', width: 130 },
  { field: 'question', headerName: 'שאלה', width: 130 },
  { field: 'answers', headerName: 'תשובות', width: 300 },
  { field: 'correctAnswer', headerName: 'תשובה נכונה', width: 130 },
];

const QuestionList = () => {
  const [rows, setRows] = useState([]);

  const getAllQuestions = async () => {
    try {
      const res = await questionAxios.get('/getAllQuestions');
      setRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <>
      <div>
        <NavLink to="/admin" className="nav-link">
          חזרה
        </NavLink>
      </div>
      <br />
      <h1>רשימת שאלות</h1>

      {/* <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
      </div> */}

      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              pagination: {
                ActionsComponent: TablePaginationActions,
              },
            }}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            pageSizeOptions={[5, 10, 25, 50]}
            localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default QuestionList;
