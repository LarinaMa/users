import users from "./database.js";
import Card from "./Card.jsx";
function App() {
  console.log(users);
  return (
    <div>
      <h1>User Profiles</h1>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
