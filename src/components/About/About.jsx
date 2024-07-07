import Button from '../Button/Button.jsx'
import about1 from '../../../public/assets/about/about1.png'
import about2 from '../../../public/assets/about/about2.png'
import { useState, useEffect } from 'react';
export default function About() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 46) {
                setCount(count + 1);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [count]);



    return (
        <div className="mt-5 w-full lg:h-dvh py-3">
            <div className="container justify-between flex flex-col lg:flex-row md:justify-between lg:justify-between items-center h-full text-center md:text-left lg:text-left">
                <div className='w-full lg:w-1/2 flex flex-col justify-center h-full text-center md:text-left lg:text-left'>
                    <h1 className="section-tittle-light lg:mt-7">About Eventnity</h1>
                    <div
                        class="lg:hidden flex rounded-lg bg-gray-200 text-surface shadow-secondary-1 mt-3 mx-4">
                        <img
                            class="w-[210px] rounded-t-lg object-cover z-30"
                            src={about1}
                            alt="" />
                        <div class="flex justify-start items-center p-6">
                            <div className='lg:hidden bottom-[20%] left-[200px] h-[250px] items-center flex justify-center rounded-lg'>
                                <div className='flex flex-col text-center'>
                                    <p className='text-[30px] font-semibold'>{count}</p>
                                    <p className='text-sm font-medium text-gray-600'>Events In The Last Year</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="section-parag-light mt-5 px-6 lg:px-0">Evenity is event management expertise that helps and facilitates Event Planners in achieving the goal of carrying out an event.</p>

                    <div className='mt-7'>
                        <Button>More About Us</Button>
                    </div>
                </div>
                < div className='w-full lg:w-1/2 relative h-full flex flex-col justify-center bg-white'>
                    <img src={about1} alt="" className='w-[300px] h-auto lg:absolute lg:left-24 lg:top-0 hidden lg:block' />
                    <img src={about2} alt="" className='w-[300px] h-auto lg:absolute right-0 -bottom-0 hidden lg:block' />
                    <div className='lg:absolute hidden lg:block bottom-[20%] left-[200px] bg-white py-[20px] px-[20px] rounded-lg'>
                        <div className='flex flex-col text-center'>
                            <p className='text-[42px] font-semibold'>{count}</p>
                            <p className='text-base font-medium text-gray-600'>Events In The Last Year</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}