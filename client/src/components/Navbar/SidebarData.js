import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Browse',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Feed',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Explore',
        path: '/browse/explore',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Authorization',
    icon: <FaIcons.FaLock />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sign In',
        path: '/auth',
        icon: <FaIcons.FaKey />,
      },
      {
        title: 'Sign up',
        path: '/auth',
        icon: <FaIcons.FaKey />,
      },
    ]
  },
  {
    title: 'Me',
    icon: <FaIcons.FaAddressCard />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'My profile',
        path: '/profile',
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'My posts',
        path: '/profile',
        icon: <FaIcons.FaWalking />,
      },
    ]
  },
  {
    title: 'Admin panel',
    icon: <FaIcons.FaServer />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Stats',
        path: '/admin/stats',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Toggle admin mode',
        path: '/admin/toggle',
        icon: <FaIcons.FaToggleOn />
      }
    ]
  },
];
