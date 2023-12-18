// Home.js
import React from 'react';
import CategoryTabs from './CategoryTabs';
import RecipeCardsArea from './RecipeCardsArea';

const Home = ({ setCurrentCategory, currentCategory }) => {
    return (
        <>
            <CategoryTabs onCategoryChange={category => setCurrentCategory(category)} />
            <RecipeCardsArea currentCategory={currentCategory} />
        </>
    );
};

export default Home;
