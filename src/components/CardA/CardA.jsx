import { IoMdTime } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { RiBookLine } from "react-icons/ri";

const CardA = () => {
    return (
        <div className="flex flex-col md:items-end hover:scale-[1.1] duration-500 ">
            <div className="w-[234px] mb-[47px]  text-center opacity-50">
                <h1 className=" text-[#818181] font-normal text-base">
                    When course has
                </h1>
                <h1 className=" text-[#000000] font-semibold text-base">
                    Discount
                </h1>
            </div>
            <div className="w-[234px] h-[284px] shadow-lg rounded-[10px]">
                <img className="h-[157px] w-[234px] object-cover rounded-tr-[10px] rounded-tl-[10px] " src="https://s3-alpha-sig.figma.com/img/f3ec/649f/00d22c1702405aa85aadf7e994b3c9ba?Expires=1703462400&Signature=asrxGd9CdhwsLRxRHd8BXvjmO3FnfNpwMa2qijP82Lfcf5A7aY62t75GI8z3qFZs3Bjo-dcoH7nNl3A7VH47mI4s1yTjxypOHltvX0tky9CutAvnAhsMUPV7lervgAnPgGpFQK7Uk0BLeo5kR6k9b9WOO97PJ~HN89oXwoskuowAihSglauJk2BcAEeJmrLPSzACy45x3BOAKvqFsLAOKHZR-anpv-D6QRN-K0AKe3VH4vknkvn8yv9bYfLjl7nV2tibi77~FZ~BVao9OkTtHAaLVFPQWYOp7HbT3CTzlfT3YkkSVU-AU2Hz7tB72MwrAGcDCpvXCMeduAML878g~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <h1 className="text-base font-medium mt-[10px] px-[10px]">This is a one line title</h1>
                <p className="text-xs font-normal px-[10px]">Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
                <div className="flex justify-between my-[10px] px-[10px]">
                    <p className="text-xs font-normal">$1050 <span className="relative bottom-2"><hr className="h-[1px] bg-[#000000]"></hr></span></p>
                    <p className="text-xs font-normal text-[#1A9C9C]">$750</p>
                    <p className="bg-[#95E3E3] inline text-xs font-normal rounded-lg py-0 px-[10px]">You Save $250</p>
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

export default CardA;