import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome className="icon" />
  },
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
    icon: <AiIcons.AiOutlineMail className="icon" />
  },
  {
    title: 'Resumen',
    path: '/resume',
    icon: <FaIcons.FaRegListAlt className="icon" />
  }
];
