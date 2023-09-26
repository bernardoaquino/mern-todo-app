/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { TodoPage } from "./pages/TodoPage";
import "./App.css";

// Create context with an initial value
export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  const [token] = useContext(TokenContext);
  return token ? element : <Navigate to="/login" />;
};

function App() {
  // Initialize the context value with useState
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
        <Routes>
          {/* Define route elements outside JSX */}
          <Route path="/" element={<ProtectedRoute element={<TodoPage />} />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
