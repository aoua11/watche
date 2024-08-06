import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

function Navbar() {
    return (
        <>
            <nav className="flex justify-around p-2 py-3 bg-[#2E2E2E] text-[#f4bd85] border-[#f4bd85] border-b">

                <ul className="absolute left-0 font-normal  text-sm ml-32 ">
                    <Link href="/"><li className="inline-block px-2 pt-2">Home</li></Link>
                    <Link href="/shop"><li className="inline-block px-2 pt-2">Shop</li></Link>
                    <Link href="/about"><li className="inline-block px-2 pt-2">About us</li></Link>
                    <Link href="/contact"><li className="inline-block px-2 pt-2 ">Contact</li></Link>
                </ul>

                <h1 className=" text-2xl font-black"><span>Watches</span>Majesty</h1>

                <div className="flex absolute right-16 pt-1">
                    <h1 className="px-2 text-xl"><FaRegHeart /></h1>
                    <h1 className="px-2 text-xl"><BsBag /></h1>
                    <h1 className="px-2 text-xl"><CiUser /></h1>
                </div>
            </nav>

        </>
    )

}
export default Navbar;