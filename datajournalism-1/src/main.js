// Check [https://nagix.github.io/chartjs-plugin-datasource/] for more information on Datasource plugin configuration

Chart.plugins.register(ChartDataSource);

const krPplNetChartRender = document.getElementById('krPplNetChart').getContext("2d");
const krPplNetChart = new Chart(krPplNetChartRender, {
    type: 'line',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'bar',
            label: 'Live births (people)',
            yAxisID: 'ppl',
            order: 5,
            borderColor: 'rgba(46, 125, 50, 1)',
            backgroundColor: 'rgba(46, 125, 50, 1)',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Deaths (people)',
            yAxisID: 'ppl',
            order: 6,
            borderColor: 'rgba(255, 87, 34, 1)',
            backgroundColor: 'rgba(255, 87, 34, 1)',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Natural increase (people)',
            yAxisID: 'ppl',
            order: 4,
            borderColor: 'rgba(255, 255, 255, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'line',
            label: 'Natural increase rate, per 1,000 people (%)',
            yAxisID: 'ratio',
            order: 1,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 3,
        },{
            type: 'line',
            label: 'Crude birth rate, per 1,000 people (%)',
            yAxisID: 'ratio',
            order: 2,
            borderColor: 'rgba(46, 125, 50, 1)',
            borderWidth: 3,
        },{
            type: 'line',
            label: 'Crude death rate, per 1,000 people (%)',
            yAxisID: 'ratio',
            order: 3,
            borderColor: 'rgba(255, 87, 34, 1)',
            borderWidth: 3,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                id: 'year',
            },
            yAxes: [{
                id: 'ppl',
                scaleLabel: {
                    display: true,
                    labelString: 'people',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: true,
                position: 'left',
                },{
                id: 'ratio',
                scaleLabel: {
                    display: true,
                    labelString: 'percent(%)',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: false,
                position: 'right'
            }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_net_1970_2021.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});


const krPplMarriageChartRender = document.getElementById('krPplMarriageChart').getContext("2d");
const krPplMarriageChart = new Chart(krPplMarriageChartRender, {
    type: 'line',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'bar',
            label: 'Marriages (cases)',
            order: 4,
            borderColor: '#F9A825',
            backgroundColor: '#F9A825',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'line',
            label: 'Crude marriage rate, per 1,000 people (%)',
            yAxisID: 'ratio',
            order: 2,
            borderColor: '#F9A825',
            borderWidth: 3
        },{
            type: 'bar',
            label: 'Divorces (cases)',
            order: 5,
            borderColor: '#BA68C8',
            backgroundColor: '#BA68C8',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'line',
            label: 'Crude divorce rate, per 1,000 people (%)',
            yAxisID: 'ratio',
            order: 3,
            borderColor: '#9C27B0',
            borderWidth: 3
        },{
            type: 'line',
            label: 'Total fertility rate (%)',
            yAxisID: 'ratio',
            order: 1,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 3
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                id: 'cases',
                scaleLabel: {
                    display: true,
                    labelString: 'cases',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: true,
                },{
                id: 'ratio',
                scaleLabel: {
                    display: true,
                    labelString: 'percent(%)',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: false,
                position: 'right',
                }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_marriage_1970_2021.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});


const krPplLifeChartRender = document.getElementById('krPplLifeChart').getContext("2d");
const krPplLifeChart = new Chart(krPplLifeChartRender, {
    type: 'line',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'line',
            label: 'Life expectancy at birth - Total (age)',
            yAxisID: 'age',
            order: 1,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 3
        },{
            type: 'bar',
            label: 'Life expectancy at birth - Male (age)',
            yAxisID: 'age',
            order: 2,
            borderColor: '#3F51B5',
            backgroundColor: '#3F51B5',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Life expectancy at birth - Female (age)',
            yAxisID: 'age',
            order: 3,
            borderColor: '#E91E63',
            backgroundColor: '#E91E63',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                id: 'age',
                scaleLabel: {
                    display: true,
                    labelString: 'age',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: true,
                }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_life_expectancy_1970_2020.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});


const krPplProjTotalChartRender = document.getElementById('krPplProjTotalChart').getContext("2d");
const krPplProjTotalChart = new Chart(krPplProjTotalChartRender, {
    type: 'bar',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'bar',
            label: 'Total population (people) - High fertility',
            yAxisID: 'ppl',
            borderColor: '#689F38',
            backgroundColor: '#689F38',
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Total population (people) - Current-level fertility',
            yAxisID: 'ppl',
            borderColor: '#FBC02D',
            backgroundColor: '#FBC02D',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Total population (people) - Low fertility',
            yAxisID: 'ppl',
            borderColor: '#F57C00',
            backgroundColor: '#F57C00',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Total population (people) - Rapid population aging',
            yAxisID: 'ppl',
            borderColor: '#D32F2F',
            backgroundColor: '#D32F2F',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        },{
            type: 'bar',
            label: 'Total population (people) - Slow population aging',
            yAxisID: 'ppl',
            borderColor: '#00695C',
            backgroundColor: '#00695C',
            borderWidth: 2,
            maxBarThickness: 10,
            minBarThickness: 5,
            barThickness: 'flex'
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                id: 'ppl',
                scaleLabel: {
                    display: true,
                    labelString: 'people',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: true,
                }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_projection_total_population_2020_2070.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});


const krPplProjRateChartRender = document.getElementById('krPplProjRateChart').getContext("2d");
const krPplProjRateChart = new Chart(krPplProjRateChartRender, {
    type: 'line',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'line',
            label: 'Population increase rate (%) - High fertility',
            yAxisID: 'ratio',
            borderColor: '#689F38',
            borderWidth: 2,
            pointRadius: 2,
        },{
            type: 'line',
            label: 'Population increase rate (%) - Current-level fertility',
            yAxisID: 'ratio',
            borderColor: '#FBC02D',
            borderWidth: 2,
            pointRadius: 2,
        },{
            type: 'line',
            label: 'Population increase rate (%) - Low fertility',
            yAxisID: 'ratio',
            borderColor: '#F57C00',
            borderWidth: 2,
            pointRadius: 2,
        },{
            type: 'line',
            label: 'Population increase rate (%) - Rapid population aging',
            yAxisID: 'ratio',
            borderColor: '#D32F2F',
            borderWidth: 2,
            pointRadius: 2,
        },{
            type: 'line',
            label: 'Population increase rate (%) - Slow population aging',
            yAxisID: 'ratio',
            borderColor: '#00695C',
            borderWidth: 2,
            pointRadius: 2,
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                id: 'ratio',
                scaleLabel: {
                    display: true,
                    labelString: '%',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: false,
                }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_projection_increase_rate_2020_2070.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});


const krPplProjProdChartRender = document.getElementById('krPplProjProdChart').getContext("2d");
const krPplProjProdChart = new Chart(krPplProjProdChartRender, {
    type: 'line',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'line',
            label: 'Productive population (%) - High fertility',
            yAxisID: 'ratio',
            borderColor: '#689F38',
            backgroundColor: '#689F38',
            borderWidth: 2,
            pointRadius: 2, 
            order: 4
        },{
            type: 'line',
            label: 'Productive population (%) - Current-level fertility',
            yAxisID: 'ratio',
            borderColor: '#FBC02D',
            backgroundColor: '#FBC02D',
            borderWidth: 2,
            pointRadius: 2, 
            order: 3
        },{
            type: 'line',
            label: 'Productive population (%) - Low fertility',
            yAxisID: 'ratio',
            borderColor: '#F57C00',
            backgroundColor: '#F57C00',
            borderWidth: 2,
            pointRadius: 2, 
            order: 2
        },{
            type: 'line',
            label: 'Productive population (%) - Rapid population aging',
            yAxisID: 'ratio',
            borderColor: '#D32F2F',
            backgroundColor: '#D32F2F',
            borderWidth: 2,
            pointRadius: 2, 
            order: 1
        },{
            type: 'line',
            label: 'Productive population (%) - Slow population aging',
            yAxisID: 'ratio',
            borderColor: '#00695C',
            backgroundColor: '#00695C',
            borderWidth: 2,
            pointRadius: 2, 
            order: 5
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                id: 'ratio',
                scaleLabel: {
                    display: true,
                    labelString: '%',
                    fontColor: 'rgba(255, 255, 255, 1)',
                    fontSize: 15
                },
                beginAtZero: true,
                }]
        },
        legend: {
            labels: {
                fontSize: 15
            }
        },
        plugins: {
            datasource: {
                // Cross Origin Request(CORS) from local storage is prohibited, use live-server to run a hotload test server and load this CSV file via HTTP.
                url: './db/kr_population_projection_productive_population_2020_2070.csv',
                type: 'csv',
                rowMapping: 'dataset',
                datasetLabels: false,
                indexLabels: true
            }
        }
    }
});



// Stretch the headlines as scrolling down

window.onload = function(){
    const headlines = document.querySelector("#stretching-headlines");
    headlines.style["max-height"] = "22rem"             // Equivalent to Tailwind CSS 'h-96'
    headlines.style.transition = "max-height 3s ease-in";
}



// Lazy-load the charts using Intersection Observer API

const lazyloadOptions = {
    root: null,         // Browser viewport is the root
    rootMargin: '10px',
    threshold: 1,
}

const lazyloadObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
//        console.log(entry);                   // Reports the IO info
        if(entry.isIntersecting == true) {
            entry.target.style.transition = "0.7s all";
            entry.target.style.opacity = "1";
            lazyloadObserver.unobserve(entry.target);
        }
   })
}, lazyloadOptions);

lazyloadTargets = document.querySelectorAll('.lazyload-element');
lazyloadTargets.forEach(lazyloadTarget => lazyloadObserver.observe(lazyloadTarget));
