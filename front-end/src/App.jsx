import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListProperty from "./components/Property/ListProperty.jsx";
import AddProperty from "./components/Property/AddProperty.jsx";
import AddContract from "./components/Contract/AddContract.jsx";
import ListContract from "./components/Contract/ListContract.jsx";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<ListProperty />}/>
            <Route path={'/add-property'} element={<AddProperty />}/>
            <Route path={'/add-contract'} element={<AddContract />}/>
            <Route path={'/list-contract'} element={<ListContract />}/>
        </Routes>
    );
};

export default App;