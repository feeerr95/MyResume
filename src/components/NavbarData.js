import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const NavbarData = [
  {
    title: 'Perfil',
    path: '/profile',
    icon: <FaIcons.FaUser className="icon" />
  },
  {
    title: 'Educacion',
    path: '/education',
    icon: <FaIcons.FaUniversity className="icon" />
  },
  {
    title: 'Contacto',
    path: '/contact',
    icon: <IoIcons.IoIosPaper className="icon" />
  },
  {
    title: 'Resumen',
    path: '/resume',
    icon: <FaIcons.FaCartPlus className="icon" />
  }
];
