import React from 'react';

import UserList from '../components/UsersLists';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'max',
      image:
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      places: '3',
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
