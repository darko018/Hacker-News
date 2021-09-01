import { Fragment } from "react";

import Header from "./Header/Header";
import { NewsList } from "./NewsList/NewsList";
 
import './App.css';

const App = () => {
    return (
        <Fragment>
            <Header />
            <NewsList />
        </Fragment>
    )
}
export default App;
