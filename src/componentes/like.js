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
        props.getItinerariosPorCiudad (id)
        .then(response=>setItineraries(response.data.response.itineraries))

    }, [reload]) 

  async function LikesOrDislikes (){
        await props.likeDislike(itineraries._id)
        setReload(!reload)
    }  
   

    return(
        <div className="btnlike">
            <button onClick={LikesOrDislikes}><FavoriteBorderIcon/></button>
             {props.user ?
              (<button onClick={LikesOrDislikes}>{itineraries?.likes.includes(props.user.id) ?
                <span  ><FavoriteBorderIcon style={{ color: "red", fontSize:30 }}/></span> :
                <span style={{  fontSize:30 }}><FavoriteBorderIcon/></span>}</button>)

              : (<span style={{  fontSize:30 }} class="material-icons"><FavoriteBorderIcon/></span>)}

          <h3 style={{  color:"black ",fontSize:30 }}>{itineraries?.likes.length}</h3>
            <FavoriteBorderIcon onclick={LikesOrDislikes}/>
            <span>0</span>   
        </div>

    )
}
 const mapDispatchToProps={
    getItinerariosPorCiudad: itinerariesActions.getItinerariosPorCiudad ,
    likeDislike: itinerariesActions.likeDislike
} 

const mapStateToProps = (state)=>{
    return{
    user:state.userReducer.user,
    itineraries:state.itinerariesReducer.itineraries,
  }}
  export default connect(mapStateToProps, mapDispatchToProps)(Likes );
