import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import RecipeCardsArea from './RecipeCardsArea';
import Header from './Header';
import Footer from './Footer';

function App() {
    const [currentCategory, setCurrentCategory] = useState(null);

    return (
        <div className="App">
            <Header />
            <CategoryTabs onCategoryChange={category => setCurrentCategory(category)} />
            <RecipeCardsArea currentCategory={currentCategory} />
            <Footer />
        </div>
    );
}

export default App;

