import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Przeglądaj',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tablica',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Eksploruj',
        path: '/browse/explore',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Autoryzacja',
    icon: <FaIcons.FaLock />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Logowanie',
        path: '/auth',
        icon: <FaIcons.FaKey />,
      },
    ]
  },
  {
    title: 'Ja',
    icon: <FaIcons.FaAddressCard />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mój profil',
        path: '/profile',
        icon: <FaIcons.FaUserAlt />,
      },
      {
        title: 'Moje posty',
        path: '/profile',
        icon: <FaIcons.FaWalking />,
      },
      {
        title: 'Moje statystyki',
        path: '/profile',
        icon: <FaIcons.FaWalking />,
      },
    ]
  },
  {
    title: 'Panel administratora',
    icon: <FaIcons.FaServer />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Sprawdź bycie administratorem',
        path: '/checkAdmin',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'O stronie',
    icon: <FaIcons.FaInfoCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Informacje',
        path: '/about',
        icon: <FaIcons.FaInfo />
      },
    ]
  },
];
