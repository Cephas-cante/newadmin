import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./css/styles.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {AuthContext} from "./context/AuthContext";
import {
  BrowserRouter,
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom'
import { productInput, userInputs } from "./formSource";
import { hotelColumns, userColumns, roomColumns } from "./datablesource";
import NewHotel from "./pages/new/NewHotel";
import NewRoom from "./pages/new/NewRoom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if (!user){
      return <Navigate to="/login" />
    }
    return children;
  } 
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={
            <ProtectedRoute>
              <Home />
              </ProtectedRoute>
            } />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={
            <ProtectedRoute>
              <List columns={userColumns} />
              </ProtectedRoute>} />
              <Route path=":userId" element={
              <ProtectedRoute>
                <Single/>
              </ProtectedRoute>
            } />
              <Route path="new" element={
                <ProtectedRoute>
              <New inputs={ userInputs } title="Add new User" />
              </ProtectedRoute>
              }
               />
            </Route>
            <Route path="hotels">
              <Route index element={ 
              <ProtectedRoute>
                <List columns={hotelColumns}/>
                </ProtectedRoute>
                } />
              <Route path=":productId" element={
              <ProtectedRoute>
                <Single/>
              </ProtectedRoute>} />
              <Route path="new" element={
              <ProtectedRoute>
                <NewHotel/>               
                </ProtectedRoute>
              } 
                />
            </Route>
            <Route path="rooms">
              <Route index element={ 
              <ProtectedRoute>
                <List columns={roomColumns}/>
                </ProtectedRoute>
                } />
              <Route path=":productId" element={
              <ProtectedRoute>
                <Single/>
              </ProtectedRoute>} />
              <Route path="new" element={
              <ProtectedRoute>
                <NewRoom />               
                </ProtectedRoute>
              } 
                />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
