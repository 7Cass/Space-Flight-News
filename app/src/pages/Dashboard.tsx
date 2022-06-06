import {IoIosRocket} from 'react-icons/io';

export default function Dashboard() {
    return (
        <div>
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="border border-purple w-24 h-24 mb-4 rounded-full flex items-center justify-center">
                        <IoIosRocket className='h-16 w-16 text-purple' />
                    </div>
                    <h1 className="text-2xl text-purple">Space Flight News</h1>
                </div>
            </div>
            <div className="w-full flex items-center justify-center border-t border-t-purple py-16">
                <div className="flex items-start justify-center p-4 rounded-md shadow hover:shadow-md hover:transition-shadow w-[1200px]">
                    <div className="mr-10">
                        <img className="w-[42rem]" src="https://spaceflightnow.com/wp-content/uploads/2022/06/sz14roll-1.jpg" />
                    </div>
                    <div className="w-[42rem]">
                        <h2 className="font-bold text-xl">Chinese astronauts prep for six-month space station construction flight</h2>
                        <div className="w-full flex items-center justify-between mt-2">
                            <time className="text-sm">{new Date('2022-06-04T19:53:42.000Z').toLocaleDateString()}</time>
                            <button className="border-2 border-orange bg-orange hover:bg-white text-white hover:text-orange hover:transition-colors text-sm w-32 py-2 rounded-md">
                                <a href="https://spaceflightnow.com/2022/06/04/chinese-astronauts-prep-for-six-month-space-station-construction-flight/" target="_blank" rel="noopener noreferer">
                                    Spaceflight Now
                                </a>
                            </button>
                        </div>
                        <p className="mt-4 h-48 rounded-md overflow-y-hidden text-ellipsis">
                        Three Chinese military pilots are ready for launch Saturday on a Long March 2F rocket to begin a six-month expedition to help expand China’s space station in low Earth orbit, a mission slated to include the arrival of two modules and multiple spacewalks.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <button className="border-2 border-purple text-purple rounded-md p-2 hover:bg-purple hover:text-white hover:transition-colors">
                    Carregar mais
                </button>
            </div>
        </div>
    );
}