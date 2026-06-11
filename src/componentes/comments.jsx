import { useEffect, useState } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import commentsActions from "../redux/actions/commentsActions";
import { useParams } from "react-router-dom";
import '../styles/comment.css'

const Comments = (props) => {
  const { id } = useParams();
  const [itineraries, setItineraries] = useState();
  const [inputText, setInputText] = useState();
  const [modifi, setModifi] = useState();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    props
      .getItinerariosPorCiudad(id)
      .then((response) => setItineraries(response.data.response.itineraries));
  }, [reload]);

  async function cargarComentario(event) {
    const commentData = {
      itineraries: itineraries._id,
      comment: inputText,
    };
    await props
      .addComment(commentData)
      .then(
        (response) => setItineraries(response.data.response.nuevoComment),
        setInputText("")
      );
  }
  async function modificarComentario(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modifi,
    };
    await props.modifiComment(commentData);
    setReload(!reload);
  }
  async function eliminarComentario(event) {
    await props.deleteComment(event.target.id);
    setReload(!reload);
  }

  return (
    <div className="comments">
      {itineraries?.comment.map((comment) => 
        <>
          {comment.userID?._id !== props.user?.id ? (
            <div className="comentItinerary" key={comment._id}>
              <div className="userComments">
                {comment.userID?.fistName}
              </div>
              <div className="card-body">
                <p className="card-text">{comment.comment}</p>
              </div>
            </div>
          ) : (
            <div className="card cardComments">
              <div className="card-header">{comment.userID.firsName }</div>
              <div className="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} className="btn btn-primary">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} className="btn btn-primary">Eliminar</button>
                        </div>
            </div>
          )}
        </>
         )}
 {props.user ?
    <div className="card cardComments">
      <div className="card-header">
      Leave us your comment
      </div>
      <div className="card-body ">
        <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
        <button onClick={cargarComentario} className="btn btn-primary">Load</button>
      </div>
    </div> :
    <h1>
    Make singIn and leave us your comment</h1>
  }

     

    </div>
  );
};
 
const mapDispatchToProps={
    getItinerariosPorCiudad: itinerariesActions. getItinerariosPorCiudad,
    addComment:commentsActions.addComment,
    modifiComment: commentsActions.modifiComment,
  deleteComment: commentsActions.deleteComment,
}
const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.user,
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Comments)