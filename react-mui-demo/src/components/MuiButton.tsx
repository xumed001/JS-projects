
import { useState } from "react";
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { FormatBold, FormatItalic, FormatUnderlined } from "@mui/icons-material";

function MuiButton() {
  const [formats, setFormats] = useState<string | null>(null)
  console.log({formats,})
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormates: string | null) => {
    setFormats(updatedFormates)
  }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <Button variant="text" href="#">Text</Button>
            <Button variant="contained">Text</Button>
            <Button variant="outlined">Text</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant="outlined" color="primary">primary</Button>
            <Button variant="outlined" color="secondary">secondary</Button>
            <Button variant="outlined" color="error">error</Button>
            <Button variant="outlined" color="warning">warning</Button>
            <Button variant="outlined" color="info">info</Button>
            <Button variant="outlined" color="success">success</Button>
        </Stack>
        <Stack display={'block'} spacing={2} direction={'row'}>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => console.log('clicked')}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
            <IconButton aria-label="send" color="success" size="small"><SendIcon /></IconButton>
        </Stack>
        <Stack direction={'row'}>
            <ButtonGroup 
                variant="outlined" 
                orientation="vertical" 
                size="small" 
                color="info"
                aria-label="alignment button group"
                >   
                <Button onClick={() => console.log('left')}>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'}>
            <ToggleButtonGroup 
                aria-label="text formatting" 
                value={formats} 
                onChange={handleFormatChange}
                orientation="vertical"
                size="small"
                exclusive
            >
                <ToggleButton value={'bold'} aria-aria-label="bold">
                    <FormatBold />
                </ToggleButton>
                <ToggleButton value={'italic'} aria-aria-label="italic">
                    <FormatItalic />
                </ToggleButton>
                <ToggleButton value={'underlined'} aria-aria-label="underlined">
                    <FormatUnderlined />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton