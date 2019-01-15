// Eksempel på funksjon som ikke er pure, fordi den har side-effekter - og fordi
// den ikke gir samme output hver gang du kaller den med samme input. 
    var counter = 0;

    function count() {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }

    function countOne(number) {
        return number + 1;
    }
