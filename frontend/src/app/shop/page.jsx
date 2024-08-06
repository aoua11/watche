import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { BsBag } from "react-icons/bs";





async function Shop() {
    const resp = await axios.get('http://localhost:8000/watches')
    const watches = resp.data;
    return (
        <>
            <div>
                <div className="w-fit relative left-[35%] border rounded-lg mt-7 p-2 flex">
                    <input type="text" className="outline-none w-96 placeholder:font-light" placeholder="search through 50,000 watches from 70 countries " />
                    <BsSearch className="text-2xl pl-1" />
                </div>
            </div>

            <div className="flex ml-32 mt-10 ">
                <Link href="/">
                <IoIosHome className="text-2xl text-[#2E2E2E] mr-1" />
                </Link>
                <h4 className="text-xl font-bold text-[#f4bd85]">watches</h4>
            </div>
            <div className="ml-32 mt-5">
                <h1 className="font-bold text-4xl">Rolex GMT-Master II</h1>
            </div>






            <div className="grid grid-cols-4 mx-28">

                {
                    watches.map((watche) => {
                        return (
                            <div key={watche._id} className=" m-5  py-5 px-4 bg-[#F5F2ED] rounded-lg hover:scale-110 transition ">
                                <div>
                                    <Link href={`/product/${watche._id}`}>
                                   
                                    <img src={`http://localhost:8000/${watche.image}`} className="w-44 ml-6 mt-3 hover:scale-110 transition " />
                                    </Link>
                                </div>
                                <div className="text-[#2E2E2E] pt-7 text-start">
                                    <h1 className="font-normal text-sm">{watche.brand}</h1>
                                    <h2 className="font-semibold text-md">{watche.model}</h2>
                                    <h3 className="font-normal text-sm"> from {watche.price}$</h3>
                                </div>
                                <button className="bg-[#e0dfdf] mt-6 px-7 py-2 rounded-sm hover:scale-125"> <BsBag className="text-black inline-block text-lg mr-2 mb-1 " /> add</button>
                            </div>
                           
                                                        
                        )
                        

                    })}

            </div>





            <div className="bg-[#2E2E2E] h-[500px] mx-16 mt-20 rounded-lg">
                <div className=" absolute right-0 mr-48 pt-10">
                    <img src="/richard.webp" className="w-72" />
                </div>
                <div className="flex pl-20 pt-44">
                    <div className="px-32">
                        <h1 className="font-bold text-7xl text-white">RM 66</h1>
                        <p className="font-extralight text-white text-lg ">Tourbillon Volant à Remontage <br /> Manuel</p>
                    </div>
                    <div className="">
                        <h4 className="text-2xl font-bold text-[#f4bd85]">RÉSERVE DE <br /> MARCHE </h4>
                        <p className="font-light text-[#f4bd85] text-sm ">Environ 72 heures (± 10%).</p>
                    </div>
                </div>
            </div>







            <div className="border-4 rounded-sm border-[#e0b488] w-[800px] h-[350px] ml-80 my-48">
                <div className="flex flex-col items-center mt-20">
                    <div className="text-3xl flex text-[#ffbe54] pb-7">
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                        <p><FaStar className="hover:origin-bottom -rotate-12" /></p>
                    </div>
                    <p className="text-center text-gray-500 text-lg px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quam? Quia dicta ipsam, vitae expedita eum rem fuga odio cumque, inventore eius pariatur nulla molestias possimus nemo molestiae vel dolorum!</p>
                    <h1 className=" text-2xl font-black pt-4"><span>Watches</span>Majesty</h1>
                </div>

            </div>


        </>
    )
}
export default Shop;