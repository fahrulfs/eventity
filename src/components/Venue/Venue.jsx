import venue1 from "../../../public/assets/venue/venue1.png"
import venue2 from "../../../public/assets/venue/venue2.png"
import icon from "../../../public/assets/Icon.png"
import Button from "../Button/Button"

export default function Venue() {
    return (
        <div className="w-full mt-5 lg:mt-14">
            <div className="mt-5 container w-full flex flex-col md:flex-row lg:flex-row">
                <div className="flex justify-start w-full relative">
                    <div>
                        <h1 className="section-tittle-light">
                            Explore Beautiful Venues
                        </h1>
                        <img src={venue1} alt="" className="mt-5 h-full w-[200px] lg:w-[400px]" />
                    </div>
                    <div className='absolute bottom-[20%] left-[100px] lg:left-[200px] bg-white p-4 w-fit rounded-2xl'>
                        <div className='flex flex-col text-left'>
                            <p className="text-gray-500">Venue : 1</p>
                            <p className='text-[20px] lg:text-[28px] font-semibold'>KEMPINSKI HOTEL INDONESIA</p>
                            <div className="flex gap-2 items-center">
                                <p className='text-[12px] lg:text-base font-medium text-gray-600'>Jakarta, Indonesia</p>
                                <img src={icon} alt="" width={25} height={25} className="bg-primaryColor rounded-full p-1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full relative">
                    <img src={venue2} alt="" className="w-[200px] lg:w-[400px]" />
                    <div className='absolute bottom-[5%] lg:top-[30%] right-[100px] lg:right-[200px] bg-white p-4 w-fit rounded-2xl h-fit'>
                        <div className='flex flex-col text-left'>
                            <p className="text-gray-500">Venue : 2</p>
                            <p className='text-[20px] lg:text-[28px] font-semibold'>REGAELE CONVENTION HALL</p>
                            <div className="flex gap-2 items-center">
                                <p className='text-[12px] lg:text-base font-medium text-gray-600'>Jakarta, Indonesia</p>
                                <img src={icon} alt="" width={25} height={25} className="bg-primaryColor rounded-full p-1" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <Button className="">Detail</Button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}