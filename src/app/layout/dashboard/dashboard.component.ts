import { Movie } from './../../model/movie';
import { BaseRestService } from "./../../shared/services/base-rest.service";
import { Component, OnInit } from "@angular/core";
import { Year, Years } from "src/app/model/year";
import { StudioWinner, StudioWinners } from "src/app/model/studioWinners";
import { Interval } from "src/app/model/interval";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    multipleWinners: Year[] = [];
    top3: StudioWinner[];
    interval: Interval;
    yearFilter: number;
    movies: Movie[]= [];

    constructor(private baseRestService: BaseRestService) {}

    ngOnInit() {
        this.loadMultipleWinner();
        this.loadTop3();
        this.loadInterval();
    }
    filterWithYear(year: number){
        const param = "?winner=true&year="+year;
        this.baseRestService.getter("", param).subscribe((data: Movie[]) => {
            this.movies = data;
        });
    }
    loadInterval() {
        const param = "?projection=max-min-win-interval-for-producers";
        this.baseRestService.getter("", param).subscribe((data: Interval) => {
            this.interval = data;
        });
    }
    loadTop3() {
        const param = "?projection=studios-with-win-count";
        this.baseRestService
            .getter("", param)
            .subscribe((data: StudioWinners) => {
                this.top3 = data.studios;
            });
    }

    loadMultipleWinner() {
        const param = "?projection=years-with-multiple-winners";
        this.baseRestService.getter("", param).subscribe((data: Years) => {
            this.multipleWinners = data.years;
        });
    }
}
