import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserSlice";
  
const Update = () => {
	const { id } = useParams();
	const users = useSelector((state) => state.users);
	const existingUser = users.filter((f) => f.id == id);
	const { name, email, State, age } = existingUser[0];
	const [uname, setName] = useState(name);
	const [uemail, setEmail] = useState(email);
	const [ustate, setState] = useState(State);
	const [uage, setAge] = useState(age);
 
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(
			updateUser({ 
				id: id,
				name: uname,
				email: uemail,
				State: ustate,
				age: uage,
			})
		);
navigate('/') 
	};
	return (
		<div>
			<div className="d-flex w-100 vh-100 justify-content-center align-items-center ">
				<div className="w-50 border bg-dark shadow rounded text-white p-5">
					<h3>Update User</h3>
					<form onSubmit={handleUpdate}>
						<div class="mb-3">
							<label htmlFor="name"> Name:</label>
							<input
								type="text"
								name="name"
								value={uname}
								onChange={(e) => setName(e.target.value)}
								class="form-control"
								placeholder="enter name"
							/>
						</div>
						<div class="mb-3">
							<label htmlFor="email" class="form-label">
								Email Address:
							</label>
							<input
								type="email"
								name="email"
								value={uemail}
								class="form-control"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="enter email"
							/>
						</div>
						<div class="mb-3">
							<label htmlFor="state" class="form-label">
								State:
							</label>
							<input
								type="text"
								name="State"
								value={ustate}
								onChange={(e) => setState(e.target.value)}
								class="form-control"
								placeholder="enter state"
							/>
						</div>
						<div class="mb-3">
							<label htmlFor="age" class="form-label">
								Age
							</label>
							<input
								type="text"
								name="age"
								value={uage}
								onChange={(e) => setAge(e.target.value)}
								class="form-control"
								placeholder="enter age"
							/>
						</div>

						<button class="btn btn-danger">Update</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Update;
