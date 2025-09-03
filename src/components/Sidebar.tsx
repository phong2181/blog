import { NavLink } from "react-router-dom";
import { Translation } from '../types';

interface SidebarProps {
    t: Translation;
}
export default function Sidebar({ t }: SidebarProps) {
  return (
        <div
            className="sstyle group fixed top-[140px] left-0 
                        h-[230px] shadow-md 
                        w-4 hover:w-48 hover:rounded-r-2xl 
                        transition-all duration-300 
                        flex flex-col items-center lg:items-start py-4
                        bg-gray-700 hover:opacity-1 " 
            >
                <div className="chill flex flex-col justify-between h-full mx-auto">
                    {/* HOME */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        `hidden group-hover:flex items-center gap-3 px-3 py-2 w-full rounded-md transition h-[60px]
                        ${isActive
                            ? "bg-blue-100 border border-gray-600 text-black font-bold"
                            : "bg-[#E2E2E2] text-gray-500 hover:bg-gray-300 hover:text-black"}`
                        }
                    >
                        <i className="bi bi-people"></i>
                        <span className="text-sm">{t.home}</span>
                    </NavLink>

                    {/* POSTS */}
                    <NavLink
                        to="/posts"
                        className={({ isActive }) =>
                        `hidden group-hover:flex items-center gap-3 px-3 py-2 w-full rounded-md transition h-[60px]
                        ${isActive
                            ? "bg-blue-100 border border-gray-600 text-black font-bold"
                            : "bg-[#E2E2E2] text-gray-500 hover:bg-gray-300 hover:text-black"}`
                        }
                    >
                        <i className="bi bi-postcard-fill text-lg"></i>
                        <span className="text-sm">{t.posts}</span>
                    </NavLink>

                    {/* ABOUT */}
                    <NavLink
                        to="/about_us"
                        className={({ isActive }) =>
                        `hidden group-hover:flex items-center gap-3 px-3 py-2 w-full rounded-md transition h-[60px]
                        ${isActive
                            ? "bg-blue-100 border border-gray-600 text-black font-bold"
                            : "bg-[#E2E2E2] text-gray-500 hover:bg-gray-300 hover:text-black"}`
                        }
                    >
                        <i className="bi bi-people"></i>
                        <span className="text-sm">{t.roadmaps}</span>
                    </NavLink>
                </div>
        </div>
    );
}
