import "../styles/footer.css"
import { NavLink } from "react-router-dom"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';


function Footer(){
    return(
        <div className="footerNav">
            <ul className="navFooter">
           <NavLink to='/'> <li>🏠 MyTinerary</li></NavLink>
           <NavLink to='/cities'> <li>🛫Cities</li></NavLink>
            
           
        </ul>
        <ul className="direcciones">
            <li>🏪Direccion: M.Moreno 3217 Cdad.Mendoza</li>
            <li> 📞Tel:2615000678</li>
    
        </ul>
   
      
        </div>
    )
}
export default Footer;