import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.userData.map((data) => {
          return (
            <li key={data.id}>
              {data.userName} ({data.userAge} years)
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UsersList;
