function showAll() {
    document.getElementById('mainContent').innerHTML =
        `
            <table class="mainList">
                <tr class="header">
                    <th>Dato</th>                    
                    <th>Beskrivelse</th>                    
                    <th>Antall påmeldte</th>                    
                </tr>
                <tr>
                    <td>1.12.2018</td>
                    <td>Juleting</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>24.12.2018</td>
                    <td>Julaften</td>
                    <td>25</td>
                </tr>
            </table>


        `;
}