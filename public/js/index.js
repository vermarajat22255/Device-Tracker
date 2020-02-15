google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Countries', 'Number of Request'],
        ['UK', 1000],
        ['US', 2070],
        ['PK', 660],
        ['CN', 1530],
        ['AR', 780],
        ['Others', 2030]
    ]);

    var options = {
        title: 'Requests from Countries',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

function validateIp(inputText) {
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (inputText.value.match(ipformat)) {
        document.form.search_bar.focus();
        return true;
    } else {
        alert("You have entered an invalid IP address!");
        document.form.search_bar.focus();
        event.preventDefault();
        return false;
    }
}