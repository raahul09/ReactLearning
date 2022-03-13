import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const formikStart = () => {
    return (
        <div>
            <Container sx={{margin:"30px auto"}}>
                <Typography variant='h1' fontSize="2rem" fontWeight={700} textAlign="center" sx={{marginBottom:"40px"}}>
                    This is the demo of React Formik From
                </Typography>
                <form>
                    <Box sx={{background:"#f8f8f8",padding:"30px", display:"flex",flexWrap:"wrap",justifyContent:"center",maxWidth:"500px",margin:"0 auto" }}>
                        <TextField id="firstName" sx={{margin:"10px",width:'40%'}} gutterBottom label="First Name" variant="standard" />
                        <TextField id="lastName" sx={{margin:"10px" ,width:'40%'}} gutterBottom label="Last Name" variant="standard" />
                        <TextField id="phone" sx={{margin:"10px",width:'40%'}} gutterBottom label="Phone" variant="standard" />
                        <TextField id="company" sx={{margin:"10px",width:'40%'}} gutterBottom label="Company" variant="standard" />
                        <Button variant='contained' sx={{marginTop:"30px"}}>Submit</Button>
                    </Box>
                    
                </form>
            </Container>
        </div>

    )
}

export default formikStart