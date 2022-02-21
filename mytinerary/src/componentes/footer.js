import "../styles/footer.css"
import { NavLink } from "react-router-dom"

function Footer(){
    return(
        <div className="footerNav">
            <ul className="navFooter">
           <NavLink to='/home'> <li>MyTinerary</li></NavLink>
           <NavLink to='/cities'> <li>Cities</li></NavLink>
            
           
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53604.442668842894!2d-68.89474035485009!3d-32.89082618945539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20efa3a!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1645194273149!5m2!1ses!2sar" width="200" height="200"></iframe>
        </div>
    )
}
export default Footer;