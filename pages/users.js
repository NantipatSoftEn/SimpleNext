import fetch from "isomorphic-unfetch";
const Users = ({ firstName, lastName, nickName }) => {
  return (
    <div>
      {firstName} {lastName} {nickName}
    </div>
  );
};
Users.getInitialProps = async () => {
  const res = await fetch(`${process.env.API}/users/1`);
  const data = await res.json();

  return data.data;
};
export default Users;
