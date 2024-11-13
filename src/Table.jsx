import './mvp.css';

function Table({ headers, data }) {
    // Konstanten für die Mappings erstellen
    const headerCells = headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));

    const dataRows = data.map((row, rowIndex) => (
        <tr key={rowIndex}>
            {row.map((value, valueIndex) => (
                <td key={valueIndex}>{value}</td>
            ))}
        </tr>
    ));

    return (
        <table border="1">
            <thead>
            <tr>
                {headerCells}
            </tr>
            </thead>
            <tbody>
            {dataRows}
            </tbody>
        </table>
    );
}

export default Table;
