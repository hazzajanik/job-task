import { IoMdTime } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { RiBookLine } from "react-icons/ri";

const CardB = () => {
    // hlw JavaScript Boys
    return (
        <div className="flex flex-col  md:items-center hover:scale-[1.1] duration-500">
            <div className="w-[234px] mb-[47px] mt-10 md:mt-0 text-center">
                <h1 className=" text-[#818181] font-normal text-base">
                    When course has
                </h1>
                <h1 className=" text-[#000000] font-semibold text-base">
                   No Discount
                </h1>
            </div>
            <div className="w-[234px] h-[284px] shadow-lg rounded-[10px]">
                <img className="h-[157px] w-[234px] object-cover rounded-tr-[10px] rounded-tl-[10px] " src="https://s3-alpha-sig.figma.com/img/c2be/ad33/728b0df6c56f9bf41aa020739ddae949?Expires=1703462400&Signature=lP9d1399oSNS33LH5e78nFyTnDAUScHmkhwjoyPi6gEWOeDuyPQ1l0Y7pzTqfSKNFM5sQJgXk2vKjak6MD~5Yf2RR5XCa28mSk0fv95uLx3gomYDTdJK6N6EzzCsucjVMYYpcGONo0oAdvzPAugXWnbyRWLZK5lA-zvx1GQcjlb7risGasqWSQeQjEBs-OwKNsGmkhBbA-0JsVRPJJDfMXaLqRk7ws486ZCEoEBE-yIcJSsZSKO~Wbq5Nmck1C6vYcaccENa82fqf~~NhQ2IZnwng36IlYNnduQNfYhta~8-X-XbMPyFV~DB3Rz65dS1SGk0lxk1bhSWzh51hu4a3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <h1 className="text-base font-medium mt-[10px] px-[10px]">This is a one line title</h1>
                <p className="text-xs font-normal px-[10px]">Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
                <div className="flex justify-between my-[10px] px-[10px]">
                  
                    <p className="text-xs font-normal text-[#1A9C9C]">$750</p>
                   
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

export default CardB;