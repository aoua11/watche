import { FaPhoneAlt } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";





function Footer(){
return(
<>
<div className="flex justify-around mt-20 mb-10 border-b border-[#b9b9b9] ">
    <div>
    <h1 className=" text-2xl font-black text-[#f4bd85]"><span>Watches</span>Majesty</h1>
    <p className="text-sm font-light pt-3"><FaPhoneAlt className="inline-block mr-2"/> 0782311341</p>
    <p className="text-sm font-light pt-3"><TfiBag className="inline-block mr-2"/> aouakliabdelrahmane@gmail.com</p>
    <p className="text-sm font-light pt-3"><FaLocationDot className="inline-block mr-2"/>Kouba / Hai el badr 269</p>

    </div>
    <div className="pb-4">
        <h1 className="text-lg font-bold">get help</h1>
        <p className="text-sm font-light pt-3">order status</p>
        <p className="text-sm font-light pt-3">shipping</p>
        <p className="text-sm font-light pt-3">Returns</p>
        <p className="text-sm font-light pt-3">Payments</p>
        <p className="text-sm font-light pt-3">Contact Us</p>
    </div>
    <div className="pb-4">
        <h1 className="text-lg font-bold">Company</h1>
        <p className="text-sm font-light pt-3">About</p>
        <p className="text-sm font-light pt-3">News</p>
        <p className="text-sm font-light pt-3">Carears</p>
        <p className="text-sm font-light pt-3">Legal</p>
    </div>
    <div className="pb-4">
        <h1 className="text-lg font-bold">Follow us</h1>
        <p className="pt-4"><FaFacebookF /></p>
        <p className="pt-4"><FaInstagram /></p>
        <p className="pt-4"><FaTwitter/></p>
        <p className="pt-4"><FaLinkedinIn/></p>
    </div>
</div>
<div className="flex justify-around pb-4">
    <div className="flex">
        <p className="text-gray-400 font-light text-sm">Terms & Condition </p>
        <p className="text-gray-400 font-light text-sm">privacy policy</p>
    </div>
    <div className="text-gray-400 font-light text-sm">
        © 2024 aouakli Zandaf
    </div>
</div>
</>



)
}
export default Footer;