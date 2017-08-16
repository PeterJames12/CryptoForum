import { ElementRef, EventEmitter, OnInit } from "@angular/core";
export declare class ChartDirective implements OnInit {
    el: HTMLElement;
    w: any;
    data: any[];
    labels: any[];
    columnTypes: any[];
    options: any;
    chartType: any;
    isRole: boolean;
    roleData: any[];
    roles: any[];
    select: EventEmitter<{}>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    private prepareDataTable();
    private drawChart(dataTable, tempData);
    private selectChartType(dataTable);
}
