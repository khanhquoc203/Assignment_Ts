// import { Link } from "react-router-dom";
// import { useLocalStorage } from "../hook";
// import { useState } from "react";

// const Header = () => {
//     const [user, setUser] = useLocalStorage("user", null);
//     const onHandleLogout = () => {
//         setUser("");
//     };
//     return (
//         <header className="bg-[#666] h-[64px]">
//             <div className="layout-container flex items-center justify-center gap-x-[115px]">
//                 <div className="logo h-[64px] leading-[64px] py-[3px]">
//                     <Link to="/">

//                     </Link>
//                 </div>
//                 <div className="search-area w-[560px] h-[34px] relative">
//                     <input
//                         type="text"
//                         placeholder="Tìm kiếm"
//                         className="w-full h-full rounded-[10px] border-none outline-none pl-10"
//                     />
//                     <i className="fa-solid fa-magnifying-glass absolute left-[10px] top-[10px]"></i>
//                 </div>
//                 <div className="action flex items-center  gap-x-[30px]">
//                     {user ? (
//                         <Link
//                             to=""
//                             className="signin relative flex flex-col items-center  justify-center w-[130px] max-w-[130px] px-2 py-1  bg-[#ffffff33] rounded-[10px] group"
//                         >


//                             <span className="text-sm text-white">{user.name}</span>
//                             <button
//                                 className="bg-[#6666] text-[#fff] px-4 py-2 hover:opacity-2"
//                                 onClick={() => onHandleLogout()}
//                             >
//                                 Đăng xuất
//                             </button>
//                         </Link>
//                     ) : (
//                         <Link
//                             to="/signin"
//                             className="signin flex flex-col items-center justify-center bg-[#ffffff33] px-2 py-4 rounded-[10px]"
//                         >
//                             <i className="fa-regular fa-user text-white"></i>

//                             <span className="text-sm text-white">Đăng nhập</span>
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
