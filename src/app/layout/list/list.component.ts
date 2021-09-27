import { Filter } from './../../model/filter';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseRestService } from 'src/app/shared/services/base-rest.service';
import { routerTransition } from 'src/app/router.animations';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()]
})
export class ListComponent implements OnInit {

    loading = true;
    yearFilter;
    winnerFilter;
    total: number;
    page: number = 0;
    pageSize = 20;
    result: Filter;
    totPag: number;

    constructor(
        private restService: BaseRestService,
       ) { }


    ngOnInit(){
        this.filter();
    }


    go(page){
        this.page = page -1;
        this.filter();
    }

    filterYear(){
        this.page = 0;
        this.filter();
    }

    filter(){
        this.loading = true;
        let param = `?page=${this.page}&size=${this.pageSize}`;
        if(this.yearFilter){
            param = param+'&year='+this.yearFilter;
        }
        if(this.winnerFilter && this.winnerFilter !== "null"){
            param = param+'&winner='+this.winnerFilter;
        }
        this.restService.getter("", param).subscribe((data: Filter) => {
            this.loading = false;
            this.result = data;
            this.total = data.totalElements;
            this.totPag = 9;
        });

    }



}
