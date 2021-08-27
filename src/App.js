import { Fragment } from "react";

import { Header } from "../src/components/Header/Header";
import { NewsList } from "../src/components/NewsList/NewsList";
 
import './App.css';

const App = () => {
    return (
        <Fragment>
            <Header />
            <NewsList />
        </Fragment>
    )
}
export  { App }