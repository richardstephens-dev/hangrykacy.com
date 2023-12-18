// App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';
import Home from './Home'; // Import the new Home component

function App() {
    const [currentCategory, setCurrentCategory] = useState(null);

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home setCurrentCategory={setCurrentCategory} currentCategory={currentCategory} />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;