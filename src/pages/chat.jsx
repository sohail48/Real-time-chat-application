import React, { useRef } from 'react';
import Applayout from '../components/layout/Applayout';
import { IconButton, Stack } from '@mui/material';
import { grayColor, orange } from '../constant/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/style/stylescomponent';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constant/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const user = {
  _id:"kfasklnfihoas",
  name:"sohail khan"
}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >
      
       {sampleMessage.map((i) => (
        <MessageComponent message={i} user={user} key={i._id}/>
       ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon/>
          </IconButton>

          <InputBox placeholder='Type Here Message...'/>

          <IconButton 
            type='submit'
            sx={{
              rotate: "-30deg",
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover":{
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon/>
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </>
  );
};

export default Applayout(Chat);
