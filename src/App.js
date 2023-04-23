import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { FirebaseProvider } from './context/firebaseContext';

function App() {
  return (
    <>
      <FirebaseProvider>
        <Header />
        <Outlet />
      </FirebaseProvider>
    </>
  );
}

export default App;
