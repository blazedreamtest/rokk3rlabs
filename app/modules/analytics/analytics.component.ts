import { Component } from '@angular/core';

@Component({
    selector: 'rokk3rlabs-analytics',
    templateUrl: 'app/modules/templates/analytics/analytics.component.html'
})
export class AnalyticsComponent {
    constructor() {}
    graphStat:any[] = [
            {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
            {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
            {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
            {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
            {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
    ];
    graphOption:Object; 
    //Line Charts
    getlineGraphOption() {
        this.graphOption = {
            chart: {
                renderTo: 'lineChart'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Calle 85',
                data: [49,10,152,56,10]
            }, {
                name: 'Salitre plaza',
                data:  [82,89.5,25,76,50]
            }, {
                name: 'Parque 93',
                data:  [64,129,31,16,19]
            }, {
                name: 'Calle 80',
                data:  [12,10.5,96,96,29]
            }, {
                name: 'Centro',
                data: [40,90,78,16,19]
            }]
       };
    }
    
  //Bar Charts
  public ChartLabels:string[] = ['Calle 85', 'Salitre plaza', 'Parque 93','Calle 80','Centro'];
  public ChartData:number[] = [10, 8.5, 15,13.5,9];
  public ChartType:string = 'doughnut';
  public ChartOptions:any = {
        legend: {position: 'bottom'}
  }
  public PathsbarChartOptions:any = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize:10,
                },
                gridLines: {
                    display: false,
                    drawBorder:false,
                },
            }], 
            xAxes: [{
                ticks: {
                    fontSize:10,
                    maxRotation:0,
                },
                barThickness:30,
                gridLines: {
                    display: false,
                    drawBorder:false,
                },
            }],           
        },
        responsive: true,  
        legend: {display: false}
    };

  public PathsbarChartColors: any [] = [
        {
            backgroundColor: [
                'rgba(139, 185, 248, 1)',
                'rgba(139, 185, 248, 1)',
                'rgba(139, 185, 248, 1)',
                'rgba(139, 185, 248, 1)',
                'rgba(139, 185, 248, 1)'
                
            ],
            borderWidth: 0 
        }
  ];
  public barChartLabels:string[] = ['1', '2', '3', '4', '5'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [10,8.5,15,13.5,9], label: 'Zones'},
  ];
 


  //Line Charts
  public lineChartLabels:string[] = ['1', '2', '3', '4', '5'];
  public lineChartType:string = 'line';
  public lineChartLegend:boolean = true;
  public lineChartData:any[] = [
    {data: [49,10,152,56,10], label: 'Calle 85'},
    {data: [82,89.5,25,76,50], label: 'Salitre plaza'},
    {data: [64,129,31,16,19], label: 'Parque 93'},
    {data: [12,10.5,96,96,29], label: 'Calle 80'},
    {data: [40,90,78,16,19], label: 'Centro'},
  ];
  ngOnInit() {
     this.getlineGraphOption();
  }
}
