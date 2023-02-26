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
                        {/*  <div class="flex flex-col w-1/5">
                            <div class="flex-none h-24 bg-red-200"> top</div>

                            <div class="flex-auto overflow-y-auto">

                                <a class="block border-b">
                                    <div class="border-l-2 border-transparent hover:bg-gray-100 p-3 space-y-4">
                                        <div class="flex flex-row items-center space-x-2">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <strong class="flex-grow text-sm">Iqbal Shuvo</strong>
                                            <div class="text-sm text-gray-600">5hr</div>
                                        </div>

                                        <div class="flex flex-row items-center space-x-1">
                                            <svg class="flex-none w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <div class="flex-grow truncate text-xs">some message content whedkjwhed wkjehdkjweh dkjhwekjdhwekjhd </div>
                                        </div>
                                    </div>
                                </a>

                                <a class="block border-b">
                                    <div class="border-l-2 border-blue-500 bg-blue-100 p-3 space-y-4">
                                        <div class="flex flex-row items-center space-x-2">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <strong class="flex-grow text-sm">Iqbal Shuvo</strong>
                                            <div class="text-sm text-gray-600">5hr</div>
                                        </div>

                                        <div class="flex flex-row items-center space-x-1">
                                            <svg class="flex-none w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <div class="flex-grow truncate text-xs">some message content whedkjwhed wkjehdkjweh dkjhwekjdhwekjhd </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div> */}
                        {/* End User list */}
                        <div class="w-[70%] border-l border-r border-gray-400 flex flex-col">
                            <MessageField />
                        </div>
                        {/* Message Field */}

                        {/*  <div class="w-1/5 bg-gray-200 overflow-y-auto flex flex-col">
                            <div class="h-64 flex-none border-b border-gray-400 flex flex-col">
                                hi
                            </div>

                            <div class="flex flex-col space-y-4 p-4">
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    
                                </div>
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    card content
                                </div>
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    card content
                                </div>
                            </div>
                        </div> */}


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