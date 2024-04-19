// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useAuth } from 'src/hooks/useAuth'
import AddStudentDetail from './components/addStudentDetail'
import AddEmployeeDetail from './components/addEmployeeDetail'
import EditEmployeeDetail from './components/editEmployeeDetail'
import EditStudentDetail from './components/editStudentDetail'


const Home = () => {
  const { userAuths } = useAuth()

  return (

    <Grid container spacing={6}>
      <EditStudentDetail/>
    </Grid>
  )
}

export default Home
