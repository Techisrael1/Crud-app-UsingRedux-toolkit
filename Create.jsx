import React, { useState } from "react";
import { addUser } from "./src/Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [State, setState] = useState("");
	const [age, setAge] = useState("");
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addUser({
				id: users[users.length - 1].id + 1,
				name,
				email,
				State,
				age,
			})
		);
		navigate("/");
	};
	return (
		<div className="d-flex w-100 vh-100 justify-content-center align-items-center ">
			<div className="w-50 border bg-dark shadow rounded text-white p-5">
				<h3>Add New User</h3>
				<form onSubmit={handleSubmit}>
					<div class="mb-3">
						<label htmlFor="name"> Name:</label>
						<input
							type="text"
							name="name"
							class="form-control"
							placeholder="enter name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div class="mb-3">
						<label htmlFor="email" class="form-label">
							Email Address:
						</label>
						<input
							type="email"
							name="email"
							class="form-control"
							placeholder="enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div class="mb-3">
						<label htmlFor="state" class="form-label">
							State:
						</label>
						<input
							type="text"
							name="State"
							class="form-control"
							placeholder="enter state"
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
					<div class="mb-3">
						<label htmlFor="age" class="form-label">
							Age
						</label>
						<input
							type="text"
							name="age"
							class="form-control"
							placeholder="enter age"
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>

					<button class="btn btn-danger">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Create;
