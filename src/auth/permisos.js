const menus = [
  {
    menu: 'User',
    activo: true,
    icon: 'fa-user',
    submenu: [
      {
        name: 'Dashboard',
        route: '/dashboard',
        role: ['SuperAdmin', 'President', 'Treasurer', 'Secretary', 'Member'],
      },
      {
        name: 'Profile',
        route: '/profile',
        role: ['SuperAdmin', 'President', 'Treasurer', 'Secretary', 'Member'],
      },
    ],
  },
  {
    menu: 'Treasurer',
    activo: true,
    icon: 'fa-wallet',
    submenu: [
      {
        name: 'Set fee',
        route: '/setfee',
        role: ['SuperAdmin', 'Treasurer'],
      },
      {
        name: 'Expenses',
        route: '/expenses',
        role: ['SuperAdmin', 'Treasurer'],
      },
    ],
  },
  {
    menu: 'Secretary',
    activo: true,
    icon: 'fa-pen',
    submenu: [
      {
        name: 'Meetings',
        route: '/meetings',
        role: ['Secretary'],
      },
      {
        name: 'Members',
        route: '/expenses',
        role: ['Secretary'],
      },
    ],
  },
];

export const getMenuByRole = rol => {
  const menuByRole = menus
    .filter(m => m.activo)
    .map(m => {
      return {
        ...m,
        submenu: m.submenu
          .filter(s => s.role.includes(rol))
          .map(s => {
            return { ...s, role: null };
          }),
      };
    });
  return menuByRole;
};
