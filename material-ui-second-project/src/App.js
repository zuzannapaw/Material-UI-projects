import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import {Box,Stack,Container} from "@mui/material"



function App() {

return (
  
      <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} >
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </Stack>
      </Box>
 

  );
}

export default App;
