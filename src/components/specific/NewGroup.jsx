import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { SampleUsers } from '../../constant/sampleData';
import UserItem from '../shared/UserItem';

const Newgroup = () => {
  const groupName = useInputValidation("");

  const [members, Setmembers] = useState(SampleUsers);
  const [Selectmembers, Setselectmembers] = useState([]);

  const SelectMemberhandler = (id) => {
    Setselectmembers((prev) => 
      prev.includes(id) 
        ? prev.filter((currentElement) => currentElement !== id) 
        : [...prev, id]
    );
  };
  console.log(Selectmembers);
  
  const submitHandler = () => {};

  const closeHandler = () => {};



  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{xs: "1rem", sm: "2rem"}} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Group</DialogTitle>

        <TextField 
          label="Group Name"
          value={groupName.value} 
          onChange={groupName.changeHandler}
        />
        <Typography>Members</Typography>

        <Stack>
          {members.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={SelectMemberhandler}
                isAdded={Selectmembers.includes(i._id)}
              />
            ))}
        </Stack>      
        <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button variant='outlined' color='error' size='large'>Cancel</Button>
            <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default Newgroup;