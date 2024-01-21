import {Link} from "react-router-dom";

const Footer = () =>{
    return (
        <div className="flex justify-between bg-black px-32">
            <ul className="flex p-4 m-8">
                <li className="px-4 text-white text-sm"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 text-white text-sm"><Link to="/about">About Us</Link></li>
                <li className="px-4 text-white text-sm"><Link to="/copyright">© Copyright</Link></li>
            </ul>

        </div>
    )
}

export default Footer;