import { useEffect, useState } from "react";

export default function useUser() {
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    setActiveUser({
      email: "johndoe@gmail.com",
      firstName: "john",
      id: 1,
      lastName: "doe",
      password: "12345",
    });
  }, []);

  return { activeUser, setActiveUser };
}
