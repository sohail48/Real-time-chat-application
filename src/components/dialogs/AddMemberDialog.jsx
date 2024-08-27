import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material';
import React, {useState} from 'react';
import { SampleUsers } from '../../constant/sampleData';
import UserItem from '../shared/UserItem';

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}) => {

    const [members, Setmembers] = useState(SampleUsers);
    const [Selectmembers, Setselectmembers] = useState([]);
  
    const SelectMemberhandler = (id) => {
      Setselectmembers((prev) => 
        prev.includes(id) 
          ? prev.filter((currentElement) => currentElement !== id) 
          : [...prev, id]
      );
    };

    const closeHandler = () => {
        Setselectmembers([]);
        Setmembers([]);
    };

    const addMemberSubmitHandler = () => {
        closeHandler();
    };
    
  return (
    <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

            <Stack spacing={"1rem"}>
                {members.length > 0 ? ( 
                        members.map((i) => (
                        <UserItem 
                            key={i._id} 
                            user={i} 
                            handler={SelectMemberhandler}
                            isAdded={Selectmembers.includes(i._id)} 
                        />
                    ))
                ) : (
                    <Typography textAlign={"center"}>No Friends</Typography>
                )}
            </Stack>
            <Stack 
                direction={"row"} 
                alignItems={"center"} 
                justifyContent={"space-evenly"}
            >
                <Button color='error' onClick={closeHandler}>Cancel</Button>
                <Button onClick={addMemberSubmitHandler} variant='contained' disabled={isLoadingAddMember}>
                    Submit Changes
                </Button>
            </Stack>
        </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;