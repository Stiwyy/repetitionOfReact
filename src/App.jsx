import './mvp.css';
import Table from './Table';

function App() {
    const modelsHeader = ['id', 'model', 'type'];
    const modelsBody = [[1, 'Corsa', 'small'], [2, 'Astra', 'family'], [3, 'Mokka', 'SUV'], [4, 'Movano', 'transporter']];

    return (
        <>
            <div className="App">
                <h1>Modelle Tabelle</h1>
                <Table
                    headers={modelsHeader}
                    data={modelsBody}
                />
            </div>);
        </>
    )
}

export default App;
