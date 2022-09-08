import "./assets/css/styles.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./Items";
import Cart from "./components/Cart";
import {useState} from "react";

function App() {
    // Basket
    const [basket, setBasket] = useState([]);

    // Add to basket
    const addItem = (churros) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === churros.id);
        if (exist) {
            setBasket(basket.map(item => item.id === churros.id ? {...exist, qty: exist.qty + 1} : item));
        } else {
            setBasket([...basket, {...churros, qty: 1}]);
        }
    };

    // Remove from basket
    const removeItem = (churros) => {
        // Check if the item exist or not
        const exist = basket.find((item) => item.id === churros.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== churros.id));
        } else {
            setBasket(basket.map(item => item.id === churros.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    return (
        <div className="App">
            <div>
                <Header name="Ghama Churros" basket={basket.length}/>
                <Menu name="Churros" desc="Churros saborosos feitos com massas fresquinhas
" menu={Items} addItem={addItem}/>
                <Cart items={basket} remove={removeItem}/>
            </div>
        </div>
    );
}

export default App;