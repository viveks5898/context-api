import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Profile />
      <h1>Login Handling using Context API</h1>

      <Login />
    </UserContextProvider>
  );
}

export default App;