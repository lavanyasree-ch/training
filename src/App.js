import './App.css';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {theme} from './theme';
import Course from './course/course';

function App() {

  return (
    <ThemeProvider theme={theme}>
         {/* <Navbar /> */}
         <Course />
         </ThemeProvider>

  );
}

export default App;
