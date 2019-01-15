<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div id="counter"></div>
    <script>
        var list = [1, 2, 3, 4, 5, 6, 7];

        function makeList(length, startValue, stepValue) {
            return Array.from(Array(length).keys())
                .map(i => startValue + i * stepValue);
        }

        function htmlTableFromListOfNumbers(numbers) {
            const columnsPerRow = Math.ceil(Math.sqrt(numbers.length));
            const html = numbers.map(n => n % columnsPerRow === 0
                ? `<\/tr><tr><td>${n}<\/td>`
                : `<td>${n}<\/td>`);
            return `<table><tr>${html}</tr></table>`;
        }

        var makeListAndCreateHtmlTable = (length, startValue, stepValue) =>
             htmlTableFromListOfNumbers(makeList(length, startValue, stepValue));
        
        //function makeListAndCreateHtmlTable(length, startValue, stepValue) {
        //    return htmlTableFromListOfNumbers(makeList(length, startValue, stepValue));
        //}

        document.getElementById('counter').innerHTML =
            makeListAndCreateHtmlTable(10, 7, 13);


    </script>
</body>
</html>
