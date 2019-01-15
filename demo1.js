    // Måte 1:
    function double1(number) {
        return number * 2;
    }

    // Måte 2:
    var double2 = function (number) {
        return number * 2;
    }

    // Måte 3:
    var double3 = number => number * 2;
    var a = double3(3);
    console.log(a);
