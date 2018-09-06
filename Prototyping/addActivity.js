function addActivity() {
    document.getElementById('mainContent').innerHTML =
        `
            <table>
                <tr>
                    <td>Dato</td>
                    <td><input id="aktivitetDato" type="date"/></td>
                </tr>
                <tr>
                    <td>Beskrivelse</td>
                    <td><input id="aktivitetBeskrivelse" type="text"/></td>
                </tr>
            </table>
            <button onclick="registrerNyAktivitet()">Registrér</button>

        `;
}

function registrerNyAktivitet() {
    var dato = document.getElementById('aktivitetDato').value;
    var beskrivelse = document.getElementById('aktivitetBeskrivelse').value;

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
                <tr>
                    <td>${dato}</td>
                    <td>${beskrivelse}</td>
                    <td>25</td>
                </tr>
            </table>


        `;

}
