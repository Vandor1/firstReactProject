import React from 'react';
import './homecss.css';
import Logo from "../../components/Logo/Logo";
import Card from "../../components/Card/Card";


function Home() {
    return(
        <div>
            <Card>
                <Logo />
            </Card>
        </div>
    );
}

export default Home;