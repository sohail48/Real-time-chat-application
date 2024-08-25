import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material';
import { orange } from '@mui/material/colors';
import React, { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchDialog = lazy(() => import('../specific/Search'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));
const NotificationsDialog = lazy(() => import('../specific/Notifications'));


const Header = () => {
    const navigate = useNavigate();

    const [mobile, setmobile] = useState(false);
    const [isSearch, SetisSearch] = useState(false);
    const [isNewGroup, SetisNewGroup] = useState(false);
    const [isNotification, SetisNotification] = useState(false);

    const handleMobile = () => {
        setmobile((prev) => !prev);
    }

    const openSearchDialog = () => {
        SetisSearch((prev) => !prev);
    }

    const opennewGroup = () => {
        SetisNewGroup((prev) => !prev);
    };

    const notification = () => {
        SetisNotification((prev) => !prev);
    };

    const Navigatetogroup = () => navigate("/groups");

    const logouthandler = () => {
        console.log('Logout');
    }

  return(
    <>
        <Box sx={{flexGrow:1}} height={"4rem"}>
            <AppBar 
                position='static' 
                sx={{
                bgcolor: orange,
                }}
            >
            <Toolbar>
                <Typography 
                    variant='h6'
                    sx={{
                        display: {xs: "none", sm: "block"},
                    }}
                >
                    ChatApp
                </Typography>
                <Box
                    sx={{
                        display: {xs: "block", sm: "none"},
                    }}
                >
                    <IconButton color='inherit' onClick={handleMobile}>
                        <MenuIcon/>
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                />
                <Box>
                    <IconBtn
                        title={"Search"}
                        icon={<SearchIcon/>}
                        onClick={openSearchDialog}
                    />
                    <IconBtn
                        title={"New Group"}
                        icon={<AddIcon/>}
                        onClick={opennewGroup}
                    />
                    <IconBtn
                        title={"Manage Groups"}
                        icon={<GroupIcon/>}
                        onClick={Navigatetogroup}
                    />
                    <IconBtn
                        title={"Notification Groups"}
                        icon={<NotificationsIcon/>}
                        onClick={notification}
                    />
                    <IconBtn
                        title={"Logout"}
                        icon={<LogoutIcon/>}
                        onClick={logouthandler}
                    />
                </Box>
            </Toolbar>
            </AppBar>
        </Box>

        {isSearch && (
            <Suspense fallback={<Backdrop open/>}>
                <SearchDialog/>
            </Suspense>
        )}
        {isNotification && (
            <Suspense fallback={<Backdrop open/>}>
                <NotificationsDialog/>
            </Suspense>
        )}
        {isNewGroup && (
            <Suspense fallback={<Backdrop open/>}>
                <NewGroupDialog/>
            </Suspense>
        )}
    </>
  );
}

const IconBtn = ({title, icon, onClick}) => {
    return(
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default Header;