import "../styles/footer.css"
import { NavLink } from "react-router-dom"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import Facebook from './Facebook.png';
import instagram from './instagram.png';
import twiter from './twiter.png';




function Footer(){
    return(
        <div className="footerNav">
            <ul className="navFooter">
           <NavLink to='/'> <li> MyTinerary</li></NavLink>
           <NavLink to='/cities'> <li>Cities</li></NavLink>
         </ul>
         
          <div className="redes"> 
          <img className={"Facebook"} src={Facebook} alt="face"  /> 
          <img className={"Facebook"} src={instagram} alt="insta" />
          <img className={"Facebook"} src={twiter} alt="twiter"  />           
        </div>
        <ul className="direcciones">
            <li>🏪Direccion: M.Moreno 3217 Cdad.Mendoza</li>
            <li> 📞Tel:2615000678</li>
    
        </ul>   
      
        </div>
    )
}
export default Footer;