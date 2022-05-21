import React  from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const App = () => ( 
    <BrowserRouter>
        <Container maxwidth="lg">
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/auth" exact element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
 )

export default App;
