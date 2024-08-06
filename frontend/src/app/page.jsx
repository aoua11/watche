import { GiSevenPointedStar } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { BiSolidWatch } from "react-icons/bi";
import Link from "next/link";

function page() {
    return (
        <>


            <div className="bg-[#2E2E2E] h-[500px] rounded-b-3xl">

                <div className="flex justify-between pl-32">
                    <div className="pt-44">
                        <h1 className="text-[#f4bd85] font-bold text-5xl pt-6">Luxury Watch Men</h1>
                        <p className="text-[#a1a1a1] font-light pt-6">Luxury Watch Men Mesh Ultra-thin Stainless Steel Quartz <br /> Wrist Watch Male Clock reloj hombre relogio</p>
                        <Link href={"./shop"}>
                        <button className="bg-[#f4bd85] mt-6 px-7 py-2 font-semibold rounded-sm hover:scale-125">Shop Now</button>
                        </Link>
                        <h2 className="text-[#f4bd85] inline-block pl-10 font-bold text-lg">450$</h2>
                        
                    </div>
                    <div className="mt-24 mr-32">
                        <img src="/landing.png" className="h-[500px] hover:origin-top-left rotate-12" />
                    </div>
                </div>
            </div>
            <div>


                <div className="flex justify-between">
                    <div className="ml-32 mt-20 mb-32">
                        <img src="/2landing.webp" className="h-[400px] " />
                    </div>
                    <div className="mt-48 mr-64">
                        <h1 className="text-[#f4bd85] font-bold text-3xl text-end">About the Watche</h1>
                        <p className="text-[#717171] font-normal pt-4 text-end">Watches progressed in the 17th centrey from spring-powered <br />clocks, which appeared as early as the 14th centrey. Duriing <br />most of its history the watch was a mechanical device, driven by <br />clockwork, powered by winding a mainspring, and keeping time. </p>
                        <div className="flex justify-center mt-16 text-3xl">
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                            <p><FaStar className="hover:origin-bottom -rotate-12"/></p>
                        </div>

                    </div>

                </div>
                <div className="bg-[#2E2E2E] rounded-t-3xl flex justify-between">
                    <div className="mt-32">
                    <h1 className=" text-2xl font-black text-[#f4bd85] ml-[120px] border-b-2 w-fit border-[#f4bd85] pb-2"><BiSolidWatch className="inline-block text-4xl"/> <span>Watches</span>Majesty</h1>
                        <p className="text-[#f4bd85] font-normal text-md text-xl pt-4 pl-32"> <GiSevenPointedStar  className="inline-block"/> water & scratch resistance</p>
                        <p className="text-[#f4bd85] font-normal text-md text-xl pt-4 pl-32"> <GiSevenPointedStar  className="inline-block"/> Automatic Movments </p>
                        <p className="text-[#f4bd85] font-normal text-md text-xl pt-4 pl-32"> <GiSevenPointedStar  className="inline-block"/> Precious Gembstonse</p>
                        <p className="text-[#f4bd85] font-normal text-md text-xl pt-4 pl-32"> <GiSevenPointedStar  className="inline-block"/> Metal braclet </p>
                        <p className="text-[#f4bd85] font-normal text-md text-xl pt-4 pl-32"> <GiSevenPointedStar  className="inline-block"/> reflective coating </p>
                    </div>
                    <div><img src="/3landing.png" className="w-[500px] mr-44"/></div>
                    
                </div>

            </div>



        </>
    )
}
export default page;