import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <h3 style={{ color: "var(--primary)" }}>
        {err?.status ? `${err.status} : ${err.statusText}` : "404 Not Found"}
      </h3>
    </div>
  );
};

export default Error;
