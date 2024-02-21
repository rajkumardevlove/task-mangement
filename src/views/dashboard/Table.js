// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 27,
    status: 'Office',
    date: '02/20/2024',
    name: 'Pradeep Vikran',
    salary: '$19586.23',
    email: 'pradeep@infoview.com',
    designation: 'IV-565'
  },
  {
    age: 61,
    date: '02/20/2024',
    salary: '$23896.35',
    status: 'Leave',
    name: 'Dharan Raj',
    email: 'dharan@infoview.com',
    designation: 'IV-568'
  },
  {
    age: 59,
    date: '02/20/2024',
    name: 'Ram Aravind',
    status: 'WFH',
    salary: '$18991.67',
    email: 'ram@infoview.com',
    designation: 'IV-560'
  },
  {
    age: 30,
    date: '02/20/2024',
    status: 'Office',
    salary: '$19252.12',
    name: 'Arun Kumar',
    email: 'arun@infoview.com',
    designation: 'IV-563'
  },
  {
    age: 66,
    status: 'WFH',
    date: '02/20/2024',
    salary: '$13076.28',
    name: 'Arjun',
    designation: 'IV-562',
    email: 'arjun@infoview.com'
  },
]

const statusObj = {
  WFH: { color: 'info' },
  Leave: { color: 'error' },
  resigned: { color: 'warning' },
  Office: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Current Task</TableCell>
              <TableCell>Person Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
