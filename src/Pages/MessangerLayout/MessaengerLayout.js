
import React from 'react';

import { CiUser } from 'react-icons/ci';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';
import MessageField from './MessageField';


import NavBar from "./NavBar";
import RightSideBarTop from "./RightSideBar/RightSideBarTop";
import RightSideBarMid from "./RightSideBar/RightSideBarMid";
import RightSideBarEnd from "./RightSideBar/RightSideBarEnd";
import { FiEdit3 } from "react-icons/fi";

const MessaengerLayout = () => {
  return (
    <div>
      {/* Nab Bar */}
      <NavBar></NavBar>
      <div className="grid grid-cols-12">
        <div class="flex flex-row h-screen w-screen	 bg-gray-100">
          <div class="flex flex-col justify-between items-center flex-none w-16 bg-gray-200">
            <div class="flex flex-col space-y-4 w-full items-center pt-5">
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
              <a class="block relative w-full h-16 w-16 flex justify-center items-center">
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
                <div class="absolute top-0 right-0 mr-3 mt-3 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">
                  5
                </div>
              </a>
              <a>
                <div>
                  {" "}
                  <CiUser class="rounded-full bg-gray-400 w-8 h-8" />
                </div>
              </a>
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
            </div>
            <div class="flex flex-col space-y-4 pb-5">
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
              <a>
                <div class="rounded-full bg-gray-400 w-8 h-8"></div>
              </a>
            </div>
          </div>
          {/* Side Menu end */}
          <div class="w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4">
            <div class="flex flex-row justify-between items-center mb-6">
              <h1 class="font-semibold text-2xl">Chats</h1>
              <svg
                class="flex-none w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>


            <div class="bg-red-200 h-64"></div>
            <div class="bg-red-200 h-64"></div>
          </div>
          {/*End Contact */}
          <div class="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
            {/*  <div class="flex flex-col w-1/5">

    return (
        <div >
            {/* Nab Bar */}
            <NavBar></NavBar>
            <div className='grid grid-cols-12'>
                <div class="flex flex-row h-screen w-screen	 bg-gray-100" >
                    <div class="flex flex-col justify-between items-center flex-none w-16 ">
                        <div class="flex flex-col space-y-4 w-full items-center pt-7">
                            <a><div title='Dashbord' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"> <AiOutlineHome className='text-2xl m-auto pt-1' /></div></a>
                            <a class="block relative w-full h-16 w-16 flex justify-center items-center">
                                <div title='Massage' className='rounded-full bg-gray-400 w-8 h-8 cursor-pointer'>
                                    <AiOutlineMail className="w-6 h-6 text-2xl m-auto pt-1" />
                                </div>
                                <div class="absolute top-0 right-0 mr-3 mt-3 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div>
                            </a>
                            <a><div title='Users' className='rounded-full bg-gray-400 w-8 h-8 cursor-pointer text-black'><CiUser class=" text-2xl m-auto pt-1" /></div></a>
                            <a><div title='Group' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"><AiOutlineUsergroupAdd className='text-2xl m-auto pt-1' /></div></a>
                            <a><div title='Shoping' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"><BiShoppingBag className='text-2xl m-auto pt-1' /></div></a>
                            <a><div title='Setting' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"><AiOutlineSetting className='text-2xl m-auto pt-1' /></div></a>
                        </div>
                        <div class="flex flex-col space-y-4 pb-5">
                            <a><div title='profile' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"><CgProfile className='text-3xl m-auto pt-1' /></div></a>
                            <a><div title='LogOut' class="rounded-full bg-gray-400 w-8 h-8 cursor-pointer"><HiOutlineLogout className='text-2xl m-auto pt-1' /></div></a>
                        </div>

                    </div>
                    {/* Side Menu end */}
                    <div class="w-1/4 flex-none bg-white p-4 flex flex-col space-y-4">
                        <div class="flex flex-row justify-between items-center mb-6">
                            <h1 class="font-semibold text-2xl">Chats</h1>
                            <input type="text" placeholder="Searching" className=" ml-4 focus:outline-none p-2 w-full shadow-md rounded-md " /> 
                        </div>

                        <div class="shadow-md rounded-xl">
                            {/* Chat 1  */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>Iqbal Shuvo</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 1  end  */}

                        <div class="shadow-md rounded-xl">
                            {/* Chat 2  */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>John Travolta</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 2 end  */}

                        <div class="shadow-md rounded-xl">
                            {/* Chat 3 */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>John Travolta</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 3  end  */}

                        <div class="shadow-md rounded-xl">
                            {/* Chat 4  */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>John Travolta</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 4  end  */}

                        <div class="shadow-md rounded-xl">
                            {/* Chat 5  */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>John Travolta</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 5  end  */}

                        <div class="shadow-md rounded-xl">
                            {/* Chat 6 */}
                            <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                                <div className='flex'>
                                    <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                                    <div className='ml-4'>
                                        <div className='flex justify-between'>
                                            <h4 className='font-bold '>John Travolta</h4>
                                           <p className='ml-8 text-end'>03:20 PM</p>
                                        </div>
                                        <p className='text-start'>Last message</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        {/* Chat 6  end  */}
                        
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
              <div class="flex-none h-20 flex flex-row justify-between items-center p-5 border-b">
                <div class="flex flex-col space-y-1">
                  <strong>Iqbal Shuvo</strong>
                  <input
                    type="text"
                    placeholder="Add coversation title"
                    class="text-sm outline-none border-b border-dashed text-black placeholder-gray-600"
                  />
                </div>
                <div class="flex flex-row items-center">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div
                class="flex-auto overflow-y-auto p-5 space-y-4"
                style={{ background: "red" }}
              >
                <div class="flex flex-row space-x-2">
                  <svg
                    class="flex-none w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <div class="flex flex-col">
                    <div class="bg-gray-200 rounded p-5">Some message text</div>
                    <div class="text-sm text-gray-600">4hr ago</div>
                  </div>
                </div>

                <div class="flex flex-row justify-center text-sm text-gray-600">
                  You assigned this conversation to yourself 5d ago
                </div>

                        {/* End User list */}
                        <div class="w-4/5 border-l border-r border-gray-400 flex flex-col">
                            <MessageField/>
                        </div>
                        {/* Message Field */}


                <div class="flex flex-row space-x-2 flex-row-reverse space-x-reverse">
                  <svg
                    class="flex-none w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>


                  <div class="flex flex-col">
                    <div class="bg-blue-100 rounded p-5">Some message text</div>
                    <div class="text-sm text-gray-600">5hr ago</div>
                  </div>

                            <div class="flex flex-col space-y-4 p-4">
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    card content
                                </div>
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    card content
                                </div>
                                <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                                    card content
                                </div>
                            </div>
                        </div>
                        {/* End Right side */}

                    </div>

                </div>
              </div>

              <div class="flex-none h-40 p-4 pt-0">
                <textarea class="w-full h-full outline-none border focus:border-blue-600 hover:border-blue-600 rounded p-4 shadow-lg">
                  Hi
                </textarea>
              </div>
            </div>
            {/* End Message Field */}
            {/*Start Right side bar */}
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
