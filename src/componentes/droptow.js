import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Comments from './comments'
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import userActions from '../redux/actions/userActions'
import commentsActions from '../redux/actions/commentsActions';
import { useEffect, useState } from "react";

 function SimpleAccordion(props) {
  const [itineraries, setItineraries]= useState()
  return (
    <div>
      <Accordion sx={{fontSize:"18 px", ml:7}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          </Typography>
          <Accordion sx={{fontSize:"18 px", ml:7}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Comments itineraries={itineraries}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </AccordionDetails>
      </Accordion>
      
      </div>
      );
}





/* import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
    const [More, setMore] = React.useState('');
  
    const handleChange = (event) => {
      setMore(event.target.value);
    };
  
    return (
      <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">View More</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={More}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>Under Construction</em>
            </MenuItem>
            <MenuItem value={10}>Activities</MenuItem>
            <MenuItem value={20}>Comments</MenuItem>
            <MenuItem value={30}></MenuItem>
          </Select>
        </FormControl>
        </div>
  );
}
 */
const mapDispatchToProps={
  getItinerariosPorCiudad: itinerariesActions. getItinerariosPorCiudad,
  addComment:commentsActions.addComment,
  modifiComment: commentsActions.modifiComment,
deleteComment: commentsActions.deleteComment,
}
const mapStateToProps = (state)=>{
  return{
  user:state.userReducer.user,
  itineraries:state.itinerariesReducer.itineraries,
}}
export default  connect(mapStateToProps, mapDispatchToProps)(SimpleAccordion);
