import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { fetchToken } from '../../../Auth';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export default function QuizCard({data}) {

    const token = fetchToken();
    const authHeader = "bearer " + token

    const handleAnalysisButton = async() => {
        const response = await axios(
                {
                  method : "post",
                  url : "http://localhost:8000/student-send-responses-mail",
                  data : data,
                  headers: {
                        'Authorization': authHeader
                  }
                }
              );
        
              alert("Mail sent with marked responses data !!!")

    }




return (
<Card sx={{ minWidth: 275 }}>
    <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
            {/* be{bull}nev{bull}o{bull}lent */}
            Quiz
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.quiz_id}
        </Typography>
        <Typography variant="body2">
            Total Marks  : {String(data.total_marks_obtained)}
            
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" onClick = {handleAnalysisButton}>Get Analysis</Button>
    </CardActions>
</Card>
) 
}