import "../styles/footer.css"
import { NavLink } from "react-router-dom"


function Footer(){
    return(
        <div className="footerNav">
            <ul className="navFooter">
           <NavLink to='/'> <li>MyTinerary</li></NavLink>
           <NavLink to='/cities'> <li>Cities</li></NavLink>
            
           
        </ul>
        <ul className="direcciones">
            <li>🏪Direccion: M.Moreno 3217 Cdad.Mendoza</li>
            <li>📞Tel:2615000678</li>
    
        </ul>
   
      
        </div>
    )
}
export default Footer;