document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('dataTable');
    const ctx = document.getElementById('chartCanvas').getContext('2d');

   
    const exampleData = [
        [5, 20, 32, 14, 75],
        [6, 2, 1, 18, 10],
        [44, 68, 99, 11, 15],
        [8, 17, 56, 42, 23],
        [33, 22, 48, 28, 25]
    ];

    
    exampleData.forEach((row, rowIndex) => {
        const tr = table.insertRow();
        row.forEach(cellData => {
            const td = tr.insertCell();
            td.textContent = cellData;
        });
        tr.addEventListener('click', () => {
            updateChart(row);
        });
    });

   
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Data',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

   
    function updateChart(data) {
        chart.data.datasets[0].data = data;
        chart.update();
    }
});
