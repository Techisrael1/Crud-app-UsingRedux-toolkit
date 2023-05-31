import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./src/Redux/UserSlice";

const Home = () => {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteUser({ id: id }));
	};
	return (
		<div className="container">
			<h2>E-REGISTER APP</h2>
			<Link to="/create" className="btn btn-success my-3">
				Create +
			</Link>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Action</th>
						<th>State</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<tr key={i}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<Link
									to={`/update/${user.id}`}
									className="btn btn-sm btn-primary"
								>
									Edit
								</Link>
								<button
									className="btn btn-sm btn-danger ms-2"
									onClick={() => handleDelete(user.id)}
								 >
									Delete
								</button>
							</td>
							<td>{user.State}</td>
							<td>{user.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
