function loadJson(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(Error("Data didn't load successfully; error code:" + xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error("There was a network error."));
        };
        xhr.send();
    });
}

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {heroes: []}
    }

    componentWillMount() {
        loadJson("http://127.0.0.1:8080/items/").then((response) => {
            var jsonArray = JSON.parse(response);
            this.setState({heroes: jsonArray})
        }, function (Error) {
            console.log(Error);
        });

    }

    render() {
        var result = [];
        for (var i = 0; i < this.state.heroes.length; i++) {
            var hero = this.state.heroes[i];
            result.push(
                <div className="field" key={hero._id}>
                    <div className="heroname"><h3>{hero.name}</h3></div>
                    <div className="container">
                        <div className="imgcontainer">
                            <div className="heroimg"><img src={"img/heroes/" + hero.image}/></div>
                            <div className="attrrow">
                                <div className="attrcol str">
                                    <div className="attrimg"><img src="img/heroes/str.png" alt="Strength"/></div>
                                    <div className="value str">{hero.strength}</div>
                                </div>
                                <div className="attrcol agi">
                                    <div className="attrimg"><img src="img/heroes/agi.png" alt="Agility"/></div>
                                    <div className="value agi">{hero.agility}</div>
                                </div>
                                <div className="attrcol int">
                                    <div className="attrimg"><img src="img/heroes/int.png" alt="Intelligence"/></div>
                                    <div className="value int">{hero.intelligence}</div>
                                </div>
                            </div>
                        </div>
                        <div className="txtcontainer">
                            <div className="herotext"><p>{hero.description}</p></div>
                        </div>
                    </div>
                </div>
            )
        }
        if (!result.length) {
            result.push(
                <div key={"loading"}>Loading</div>
            )
        }
        return (
            result
        );
    }
}

ReactDOM.render(
    <Field />
    , document.getElementById('content')
);
