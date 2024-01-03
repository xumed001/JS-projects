import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Name' />
            <TextField label='Name' variant="standard" />
            <TextField label='Name' variant="filled" />
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField label='Small secondary' />
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField 
            label='Form Input' 
            required 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? 'Required' : 'Do not share passwords'}
            />
            <TextField label='Form Input' helperText='Do not share your password' disabled />
            <TextField label='Password' type="password" InputProps={{
                endAdornment: <InputAdornment position="end"><VisibilityOffIcon /></InputAdornment>
            }}/>
            <TextField label='Read Only' InputProps={{readOnly: true}} />
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }} />
            <TextField label='Weight' InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }}/>
        </Stack>
        
    </Stack>
  )
}

export default MuiTextField