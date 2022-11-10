import { Box } from "@mui/system"

const Sidebar = () => {
    return (
        <Box bgcolor="skyblue" flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>Sidebar</Box>
    )
}

export default Sidebar