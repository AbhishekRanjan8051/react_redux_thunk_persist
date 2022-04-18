import React from "react";

function List({ users }) {
  return (
    <div>
      <h2>User List</h2>
      <table border="1" style={{alignItems: 'center'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export { List };
