import React, { useContext } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, navigate to login form.
 */

function PrivateRoute({ exact, path, children }) {
	const { currentUser } = useContext(UserContext);
	const location = useLocation();

	console.debug(
		"PrivateRoute",
		"exact=",
		exact,
		"path=",
		path,
		"currentUser=",
		currentUser
	);

	if (!currentUser) {
		// if not logged in, navigate to login form
		return <Navigate to="/login" replace state={{ from: location }} />;
	}

	return <Route path={path}>{children}</Route>;
}

export default PrivateRoute;
