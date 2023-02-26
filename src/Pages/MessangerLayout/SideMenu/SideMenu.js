import React from 'react';
import { CiUser } from 'react-icons/ci';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';

const SideMenu = () => {
    return (
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
    );
};

export default SideMenu;