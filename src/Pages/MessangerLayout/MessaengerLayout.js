import React from 'react';


import { FiEdit3 } from "react-icons/fi";
import MessageField from './MessageField';


import NavBar from './NavBar';
import RightSideBarTop from './RightSideBar/RightSideBarTop';
import RightSideBarMid from './RightSideBar/RightSideBarMid';
import RightSideBarEnd from './RightSideBar/RightSideBarEnd';
import SideMenu from './SideMenu/SideMenu';
import ChatUser from './Chat/ChatUser';

const MessaengerLayout = () => {

    return (
        <div >
            {/* Nab Bar */}
            <NavBar></NavBar>
            <div className='grid grid-cols-12'>
                <div class="flex flex-row h-screen w-screen	 bg-gray-100" >
                    <SideMenu/>
                    {/* Side Menu end */}
                    <div class="w-1/4 flex-none bg-white p-4 flex flex-col space-y-4">
                        <ChatUser/>

                    </div>
                    {/*End Contact */}
                    <div class="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
                       
                        {/* End User list */}
                        <div class="w-[70%] border-l border-r border-gray-400 flex flex-col">
                            <MessageField />
                        </div>
                        {/* Message Field */}
                        <div class="w-[30%] bg-gray-200 overflow-y-auto flex flex-col">
                            <div class="flex flex-col space-y-4 p-4">
                                <div class=" p-2 h-52 bg-white border rounded  justify-center items-center">
                                    <div className="flex justify-end">
                                        <button
                                            className="tooltip tooltip-left"
                                            data-tip="NickName"
                                        >
                                            <FiEdit3 className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <RightSideBarTop />
                                </div>
                                <div class=" h-64 bg-white border rounded p-4 justify-center items-center">
                                    <h1 className="text-lg">Personal Information</h1>
                                    <RightSideBarMid />
                                </div>
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    <RightSideBarEnd />
                                </div>
                            </div>
                        </div>
                        {/* End Right side */}

                    </div>
                </div>


            </div>
        </div>
    );
};

export default MessaengerLayout;