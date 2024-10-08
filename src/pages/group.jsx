import React, { lazy, memo, Suspense, useEffect, useState } from 'react';
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon, Edit as EditIcon, Done as DoneIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { bgGradient, matBlack } from '../constant/color';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from '../components/style/stylescomponent';
import AvatarCard from '../components/shared/Avatar';
import { SampleChats, SampleUsers } from '../constant/sampleData';
import UserItem from '../components/shared/UserItem';

const ConfirmDeleteDialog = lazy(() => 
  import('../components/dialogs/ConfirmDeleteDialog')
);

const AddMemberDialog = lazy(() => 
  import('../components/dialogs/AddMemberDialog')
);

const isAddMember = false;

const Group = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate(); 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [groupname, Setgroupname] = useState("");
  const [groupnameUpdatedvalue, SetgroupnameUpdatedvalue] = useState("");
  
  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupnameUpdatedvalue);
  };

  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log('Delete Group');
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    console.log('Add Member');
  };

  const deleteHandler = () => {
    console.log("Delete Handler");
    closeConfirmDeleteHandler();
  };

  const removeMemberHandler = (id) => {
    console.log("Remove Member", id);
  };

  useEffect(() => {
    if(chatId){
      Setgroupname(`Group Name ${chatId}`);
      SetgroupnameUpdatedvalue(`Group Name ${chatId}`);
    }

    return () => {
      Setgroupname("");
      SetgroupnameUpdatedvalue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconsBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon/>
        </IconButton>
      </Box>

        <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon/>
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupnameUpdatedvalue}
            onChange={(e) => SetgroupnameUpdatedvalue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon/>
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant='h4'>{groupname}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon/>
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button 
        size='large' 
        color='error' 
        startIcon={<DeleteIcon/>}
        onClick={openconfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button 
        size='large' 
        variant='contained' 
        startIcon={<AddIcon/>}
        onClick={openAddMemberHandler}
      >
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
      >
        <GroupsList w={"50vw"} myGroups={SampleChats} chatId={chatId} />
      </Grid>

      <Grid 
        item 
        xs={12} 
        sm={8} 
          sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconsBtns}
        {groupname && (
          <>
            {GroupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant='body1'
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              padding={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
            {/* Members */}

            {SampleUsers.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                isAdded
                styling={{
                  boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "1rem",
                }}
                handler={removeMemberHandler}
              />
            ))}
          </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>
      {isAddMember && ( 
        <Suspense fallback={<Backdrop open/>}>
          <AddMemberDialog/>
      </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open/>}>
          <ConfirmDeleteDialog 
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler} 
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer 
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen} 
        onClose={handleMobileClose}
      >
        <GroupsList w={"50vw"} myGroups={SampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w, myGroups = [], chatId }) => (
  <Stack 
    width={w = "100%"}
    sx={{
      backgroundImage: bgGradient,
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => <GroupListItem group={group} 
      chatId={chatId} key={group._id}/>)
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({group, chatId}) => {
  const {name, avatar, _id} = group;

  return(
    <Link 
      to={`?group=${_id}`}
      onClick={(e) => {
        if(chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar}/>
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;