import { useCallback, useState } from "react";

import UsersPageLayout from "../components/Layout";

import { users as usersList } from "../mock";

const UsersPageContainer = () => {
  const [users, setUsers] = useState(usersList);

  const handleRemove = useCallback((id) => {
    setUsers((state) => {
      const copy = [...state];

      const itemIndexToRemove = copy.findIndex((user) => user.id === id);

      copy.splice(itemIndexToRemove, 1);

      return copy;
    });
  }, []);

  return <UsersPageLayout usersList={users} handleRemove={handleRemove} />;
};

export default UsersPageContainer;
