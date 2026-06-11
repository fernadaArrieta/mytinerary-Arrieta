import { connect } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from 'axios';
import { AirlineSeatReclineExtraOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useParams } from "react-router-dom";

function Likes(props){

    console.log(props)
    const {id} =useParams()
    //const [itinerarios]= useState()
     const [itineraries, setItineraries]= useState()
    const [reload, setReload]=useState(false)

    useEffect(()=>{
       
        props. getOneitinerario (props.id)
        .then(response=>setItineraries(response))
         //.then(response=> console.log(response))
         //console.log(id)
         //console.log(props.id)
    }, [reload]) 

  async function LikesOrDislikes (){
      console.log(props)
        await props.likeDislike(props.id)
        setReload(!reload)
    }  
   

    return(
        
        <div className="btnlike">
           {/*  //<button onClick={LikesOrDislikes}><FavoriteBorderIcon/></button> */}
             {props.user ?
              (<button onClick={LikesOrDislikes}>
                {itineraries?.likes.includes(props.user.id) ?
                  <FavoriteBorderIcon style={{ color: "red", fontSize:30 }}/> :
                  <FavoriteBorderIcon style={{ color:"black ",fontSize:30}}/>
                }
                 <h3 style={{  color:"black ",fontSize:30 }}>{itineraries?.likes.length}</h3>
            </button>)
              
              :<>
              <FavoriteBorderIcon style={{ color:"black ", fontSize:30 }}/>
              <h3 style={{  color:"black ",fontSize:30 }}>{itineraries?.likes.length}</h3>
              </>}
             
                           
        </div>

    )
}
 const mapDispatchToProps={
    getItinerariosPorCiudad: itinerariesActions.getItinerariosPorCiudad ,
    likeDislike: itinerariesActions.likeDislike,
    getOneitinerario: itinerariesActions. getOneitinerario,
} 

const mapStateToProps = (state)=>{
    return{
    user:state.userReducer.user,
    itineraries:state.itinerariesReducer.itineraries,
  }}
  export default connect(mapStateToProps, mapDispatchToProps)(Likes );
