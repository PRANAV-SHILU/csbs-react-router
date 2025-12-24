import { useEffect, useState } from "react";
export default function V59() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    setLoading(true);
    let url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response);
    setLoading(false);
  }

  return (
    <section>
      <h2>V59 - Routes and pages for user list and Add user</h2>
      <table cellSpacing="25px">
        <thead>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
        </tr>
        </thead>
        <tbody>
        {!isLoading ? (
          usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))
        ) : (
          <h1>Loading data...</h1>
        )}
        </tbody>
      </table>
    </section>
  );
}
