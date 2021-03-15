import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

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
    title: 'Projectos',
    path: '/projects',
    icon: <RiIcons.RiComputerLine className="icon" />
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
