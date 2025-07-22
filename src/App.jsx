import { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import UserList from './Components/userlist/UserList';
import NewUserForm from './Components/newuser/NewUserForm';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
    setShowModal(false); 
  };
  const closeModal = (e) => {
    if (e.target.classList.contains('overlay') || e.key === 'Escape') {
      setShowModal(false);
    }
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {users.length === 0 && !showModal && (
          <div className="create-user-placeholder">
            <h2>No user:</h2>
          </div>
        )}
        <div className="user-list">
          <UserList users={users} deleteUser={deleteUser} />
        </div>
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
    </div>
  );
}

export default App;
