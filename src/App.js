import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CategoryTabs from './CategoryTabs';
import RecipeCardsArea from './RecipeCardsArea';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
  return (
      <div className="App">
          <Header />
          <CategoryTabs />
          <RecipeCardsArea />
          <Footer />
      </div>
  );
}


export default App;
