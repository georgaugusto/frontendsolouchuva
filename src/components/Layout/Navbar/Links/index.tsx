import {
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiPlantLine, RiHistoryLine } from 'react-icons/ri';

export const links = [
  {
    to: '/dashboard',
    icon: <HiOutlineHome />,
    label: 'Página Inicial',
    roles: ['user'],
  },
  {
    to: '',
    icon: <HiOutlineUserGroup />,
    label: 'Usuários',
    roles: ['gamemaster'],
    subLinks: [
      {
        to: '/users/list',
        label: 'Listagem de Usuário',
      },
    ],
  },
  {
    to: '/history',
    icon: <RiHistoryLine />,
    label: 'Histórico',
    roles: ['gamemaster'],
  },
  {
    to: '/cult',
    icon: <RiPlantLine />,
    label: 'Culturas',
    roles: ['user'],
  },
  {
    to: '/config',
    icon: <HiOutlineCog />,
    label: 'Configuração',
    roles: ['user'],
  },
];
