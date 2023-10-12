import { useEffect, useState } from 'react';
import { useRef } from 'react';
import SubMenu from './SubMenu';
import { motion } from 'framer-motion';

// * React icons
import { SiDiscogs } from 'react-icons/si';
import { BiLineChart } from 'react-icons/bi';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '15rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: 'Top Mr.Siro',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/9/9/b/c99bf88aef66142cc293fd4c705afec8.jpg',
      // menus: ['auth', 'app settings', 'stroage', 'hosting'],
    },
    {
      name: 'v-Indie Lofi',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/4/1/0/d4102fa4bbfb9714e4dcf73a7eda23bd.jpg',
      // menus: ['dashboard', 'realtime', 'events'],
    },
    {
      name: 'v-Indie Lofi 2',
      img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/4/1/0/d4102fa4bbfb9714e4dcf73a7eda23bd.jpg',
      // menus: ['dashboard', 'realtime', 'events'],
    },
  ];

  return (
    <div className="h-screen sticky top-0">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[1000] bg-black/50 ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className="bg-[hsla(0,0%,100%,0.05)] text-[#a0a0a0] shadow-xl z-[1000] max-w-[16rem] w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3">
          <img src="https://i.ibb.co/J3nN6nN/logo.png" width={180} alt="" />
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink to={'/'} className="link">
                <SiDiscogs size={23} className="min-w-max" />
                Khám phá
              </NavLink>
            </li>
            <li>
              <NavLink to={'/authentication'} className="link">
                <BiLineChart size={23} className="min-w-max" />
                Bảng Xếp Hạng
              </NavLink>
            </li>
            <li>
              <NavLink to={'/stroage'} className="link">
                <MdOutlineLibraryMusic size={23} className="min-w-max" />
                Thư Viện
              </NavLink>
            </li>

            {(open || isTabletMid) && (
              <div className="border-y py-5 border-slate-300 ">
                <span className="pl-3 text-white inline-block mb-2">
                  Play List
                </span>
                {subMenusList?.map(menu => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>
          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
