import { Box } from "@mui/system"
import * as React from 'react';
import Post from './Post'


const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}

export default Feed 
