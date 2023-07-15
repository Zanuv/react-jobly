import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

function AppRoutes({ login, signup }) {
	console.debug(
		"AppRoutes",
		`login=${typeof login}`,
		`signup=${typeof signup}`
	);

	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<LoginForm login={login} />} />
			<Route path="/signup" element={<SignupForm signup={signup} />} />
			<Route
				path="/companies"
				element={
					<PrivateRoute>
						<CompanyList />
					</PrivateRoute>
				}
			/>
			<Route
				path="/jobs"
				element={
					<PrivateRoute>
						<JobList />
					</PrivateRoute>
				}
			/>
			<Route
				path="/companies/:handle"
				element={
					<PrivateRoute>
						<CompanyDetail />
					</PrivateRoute>
				}
			/>
			<Route
				path="/profile"
				element={
					<PrivateRoute>
						<ProfileForm />
					</PrivateRoute>
				}
			/>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default AppRoutes;
