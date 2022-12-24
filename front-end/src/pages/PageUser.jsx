import Account from "../components/Account";
import Header from "../components/Header";
import axios from "axios";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName } from "../feature/loginSlice";

const PageUser = () => {
  const dispatch = useDispatch();
  const editedNameStore = useSelector((state) => state.login.editedName);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",

        {},
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(updateFirstName(res.data.body.firstName));
        dispatch(updateLastName(res.data.body.lastName));
      })
      .catch((error) => console.log("erreur dans l'API page User", error));
  }, [dispatch]);

  return (
    <main className={editedNameStore ? "main bg-light" : "main bg-dark"}>
      <Header />
      <Account />
    </main>
  );
};

export default PageUser;
