import { useState } from 'react';
import { Appbar, Front, Summarize, Login ,Profile} from "./components/ManagePages.js";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider } from "@pangeacyber/react-auth";

function App() {
   const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const LOGIN_URL =import.meta.env.LOGIN_URL || "";
  const CLIENT_TOKEN = import.meta.env.CLIENT_TOKEN || "";
  const PANGEA_DOMAIN =import.meta.env.PANGEA_DOMAIN || "";

  const authConfig = {
    clientToken: CLIENT_TOKEN,
    domain: PANGEA_DOMAIN,
  };

  return (
    <>


      <AuthProvider
        config={authConfig}

        cookieOptions={{
          useCookie: true,
          cookieName: "pangea-sample"
        }}
        // onLogin={handleLogin}
        loginUrl={LOGIN_URL}
        useStrictStateCheck={false}
      >
        <Appbar></Appbar>

        <Routes>
          <Route path="/" element={<Front />} ></Route>
          <Route path="/Summarize" element={<Summarize />} ></Route>
          <Route path="/profile" element={<Profile />}> </Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>
      </AuthProvider>


    </>
  )
}

export default App;
