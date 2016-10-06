import { Component } from '@angular/core';
import any = jasmine.any;

@Component({
    selector: 'line-chart-demo',
    template:`
   <div class="container-fluid ">
   <div class="row">
   <div class="col-md-6">
    <base-chart class="chart"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></base-chart>
                
    <base-chart class="chart"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></base-chart>   
    
    <base-chart class="chart"
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></base-chart>np
  </div>
  <div class="col-md-6" style="margin-bottom: 10px;">
    <table class="table table-responsive table-condensed">
      <tr>
        <th *ngFor="let label of lineChartLabels"></th>
      </tr>
      <tr *ngFor="let d of lineChartData">
        <td *ngFor="let label of lineChartLabels; let j=index"></td>
      </tr>
    </table>
    <button id= "button1"(click)="randomize()">CLICK</button>
  </div>
</div>
   </div>`
})
export class LineChartDemoComponent {


      // lineChart
    public lineChartData:Array<any> = [
        {data: [80,72,84,86,88,100,82,84,65,88,90,92,74,70,72,74,76,78,70,72,74,76,78,70,82,54], label: 'Series A'}

    ];
    public lineChartLabels:Array<any> = [0,2,4,6,8,10,12,14,16,18,20,22,24,0,2,4,6,8,10,12,14,16,18,20,22,24];
    public lineChartOptions:any = {
        animation: false,
        responsive: true
    };

   ngOnInit()
  {
      console.log("ngAfterViewInit called");

      setInterval(()=>document.getElementById("button1").click(),1000);
  }



    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    public randomize():void {

        let _lineChartData:Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
         }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}

