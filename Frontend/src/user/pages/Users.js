import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tyler Widdison",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
      places: 3,
    },
    {
      id: 'u2',
      name: 'Max Shwartz',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Trier-Blick-vom_Weishaus.JPG',
      places: 5,
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
