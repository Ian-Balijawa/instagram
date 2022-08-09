import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/header";

export default function NotFound() {
  const history = useHistory();
  useEffect(() => {
    document.title = "Not Found - Instagram";

    setTimeout(() => {
      history.push("/dashboard");
    }, 5000);
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
