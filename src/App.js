import React, { useEffect, useState } from "react";
import AddUser from "./Components/AddUser";
import ErrorModal from "./Components/ErrorModal";
import UsersList from "./Components/UsersList";

function App() {
  const [arrData, setArrData] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const errorHandler = () => {
    setError(false);
  };
  const userHandler = (userData) => {
    setData(userData);
  };

  useEffect(() => {
    if (data) {
      if (
        /\d/.test(data.userName) === false &&
        data.userAge >= 0 &&
        data.userAge <= 150 &&
        data.userName.trim().length !== 0 &&
        data.userAge.trim().length !== 0
      ) {
        setArrData((prevArrData) => [...prevArrData, data]);
      } else {
        setError(true);
      }
    }
  }, [data]);

  if (error === false) {
    return (
      <section>
        <AddUser onAddUser={userHandler} />
        <UsersList userData={arrData} />
        {/* <ErrorModal /> */}
      </section>
    );
  }
  if (error === true) {
    return <ErrorModal onErrorHandler={errorHandler} />;
  }
}
export default App;
