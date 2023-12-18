import { IoMdTime } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { RiBookLine } from "react-icons/ri";

const CardC = () => {
    return (
        <div className="flex flex-col md:items-end lg:items-start justify-center hover:scale-[1.1] duration-500">
            <div className="w-[234px] mb-[47px] mt-10 md:mt-0 text-center opacity-50 ">
                <h1 className=" text-[#818181] font-normal text-base">
                    When course has
                </h1>
                <h1 className=" text-[#000000] font-semibold text-base">
                    FREE
                </h1>
            </div>
            <div className="w-[234px] h-[284px] shadow-lg rounded-[10px]">
                <img className="h-[157px] w-[234px] object-cover rounded-tr-[10px] rounded-tl-[10px] " src="https://s3-alpha-sig.figma.com/img/11a1/0446/48dc890f29078158de7633f1eef68016?Expires=1703462400&Signature=hvVC3zyY03Q2fDnFHyjHvQY~L8CPCFyedYuKPWRPonPAtAav2y4vehGs-c~cJ12qX-eT9bMXK3AWs56Cv1z3PBTo9e6qLkrfIFfgbMNUiOmXMbWeYcN8DobYhtoaSVXqLjK1na4eo4hojPjQjfrTfgxChvcSnz6whJcFSJIXojW0h2F2mVQITuQUPlbBhjoom4Bxe4uKy6QoHfQK~RZ1fNs-q2zzsi1cDBUQvQ~CmsfdcCm6TQ9N-jjGgZ9qCni1mdhRRd7z7w1TWB7yljjIlk7LwctBqDyO8lAeyjSKF~~KLI2I~8fNPICwAf1a6b4ovfeNobTf9b5bH3d-SJH-0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <h1 className="text-base font-medium mt-[10px] px-[10px]">This is a one line title</h1>
                <p className="text-xs font-normal px-[10px]">Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
                <div className="flex justify-between my-[10px] px-[10px]">
                    
                    <p className="text-xs font-normal text-[#1A9C9C]">FREE</p>
                    
                </div>
                <hr />
                <div className="px-[10px] flex items-center gap-2 mt-1">
                    <div className="flex gap-1 items-center">
                        <span className="text-xs font-normal text-[#878787]"><IoMdTime /></span>
                        <p className="text-xs font-normal text-[#878787]">
                            10 hrs
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="text-xs font-normal text-[#878787]"><RiGroupLine />
                        </span>
                        <p className="text-xs font-normal text-[#878787]">
                            308
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="text-xs font-normal text-[#878787]"><RiBookLine /></span>
                        <p className="text-xs font-normal text-[#878787]">
                            17
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CardC;