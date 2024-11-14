import { useEffect, useRef, useState } from "react";

export const useLoginValidation = ({username,password}) => {
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const initialLoad = useRef(false);
  const initialLoad2 = useRef(false);

  useEffect(() => {
    if (username.length < 8) {
      if (!initialLoad.current) initialLoad.current = true;
      else setErrorUsername("Username too short");
    } else setErrorUsername("");
  }, [username]);
  
  useEffect(() => {
    if (password.length < 8) {
      if (!initialLoad2.current) initialLoad2.current = true;
      else setErrorPassword("Password too short");
    } else setErrorPassword("");
  }, [password]);
  return {errorUsername,errorPassword};
};

