import './mvp.css';

function Table({ headers, data }) {
    return (
        <table border="1">
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((value, valueIndex) => (
                        <td key={valueIndex}>{value}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
