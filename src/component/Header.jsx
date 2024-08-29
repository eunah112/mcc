import React from "react";
import {FaUser} from "react-icons/fa";
import {MdOutlineLogin} from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function Heaader() {
	return (
		<div className='main flex flex-row justify-between items-center py-[10px] px-[40px]'>
			<div className='flex flex-row items-center justify-center'>
				<Link
					to='/'
					className='flex flex-row items-center justify-center'
				>
					<img
						className='w-[70px] mr-[10px]'
						src='img/likelion_logo.png'
						alt=''
					/>
					<span className='Title text-[25px]'>
						LikeLion Theater
					</span>
				</Link>
				<div className='main flex flex-row'>
					<NavLink
						to='/Movieinfo'
						className={({isActive}) =>
							`px-[35px] ${
								isActive
									? "text-[#2D6FFF]"
									: "text-[black] hover:text-[#2D6FFF]"
							}`
						}
					>
						<b>영화</b>
					</NavLink>
					<NavLink
						to='/Ticketing'
						className={({isActive}) =>
							`px-[35px] ${
								isActive
									? "text-[#2D6FFF]"
									: "text-[black] hover:text-[#2D6FFF]"
							}`
						}
					>
						<b>예매</b>
					</NavLink>
					<NavLink
						to='/Theater'
						className={({isActive}) =>
							`px-[35px] ${
								isActive
									? "text-[#2D6FFF]"
									: "text-[black] hover:text-[#2D6FFF]"
							}`
						}
					>
						<b>극장</b>
					</NavLink>
				</div>
			</div>
			<div className='flex flex-row items-center'>
				<Link
					to='/Login'
					className='flex flex-col items-center px-[25px]'
				>
					<MdOutlineLogin size={20} />
					<span className='text-[10px] mt-[5px]'>
						Login
					</span>
				</Link>
				<Link
					to='/Signup'
					className='flex flex-col items-center px-[25px]'
				>
					<FaUserPlus size={20} />
					<span className='text-[10px] mt-[5px]'>
						SignUp
					</span>
				</Link>
				<Link
					to='/Mypage'
					className='flex flex-col items-center px-[25px]'
				>
					<FaUser size={20} />
					<span className='text-[10px] mt-[5px]'>
						MyPage
					</span>
				</Link>
			</div>
		</div>
	);
}
