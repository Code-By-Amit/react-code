import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

 const handleGoBack = () => {
    navigate(-1);
 }

  if (error.status === 404) {
    return (
      <section className="flex justify-center items-center flex-col gap-3 min-h-screen">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
               The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" className="bg-red-600 text-white  px-3 py-2 rounded-md"> Go Back To HomePage </NavLink>
        <button className="px-3 py-2 rounded-md text-white bg-red-600" onClick={handleGoBack}>Go Back</button>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist</h1>;
};