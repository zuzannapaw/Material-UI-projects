import { Box } from "@mui/system"
import { Typography, Avatar, AvatarGroup, ImageList, ImageListItem, ListItemText, ListItemAvatar } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Fragment } from "react";


const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}> Online Friends </Typography>
                <AvatarGroup max={7} >
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}} alt="Agnes Walker" src="" />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        sx={{outline: "2px solid green"}}
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                </AvatarGroup>

                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/burgers.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/camera.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{outline: "2px solid green"}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{outline: "2px solid green"}} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/7.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar

