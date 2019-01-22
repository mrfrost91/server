class App extends React.Component {
    render() {
        return (
            <div className="field">
                <div className="heroname"><h3></h3></div>
                <div className="container">
                    <div className="imgcontainer">
                        <div className="heroimg"><img /></div>
                        <div className="attrrow">
                            <div className="attrcol str">
                                <div className="attrimg"><img src="img/heroes/str.png" alt="Strength" /></div>
                                <div className="value str"></div>
                            </div>
                            <div className="attrcol agi">
                                <div className="attrimg"><img src="img/heroes/agi.png" alt="Agility" /></div>
                                <div className="value agi"></div>
                            </div>
                            <div className="attrcol int">
                                <div className="attrimg"><img src="img/heroes/int.png" alt="Intelligence" /></div>
                                <div className="value int"></div>
                            </div>
                        </div>
                    </div>
                    <div className="txtcontainer">
                        <div className="herotext"><p></p></div>
                    </div>
                </div>
            </div>
    );
    }
    }
    ReactDOM.render(
        <App/>
    , document.getElementById('content'));
