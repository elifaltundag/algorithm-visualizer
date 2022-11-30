import React from 'react';

import Navbar from './app/components/global/Navbar';
import BubbleSort from './app/pages/BubbleSort';

import "./design/globals/app_boilerplate.scss";
import "./design/globals/layout.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <BubbleSort />
        </div>
    );
}

export default App;