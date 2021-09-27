import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';

@NgModule({

    imports: [
        FormsModule,
        CommonModule,
        ListRoutingModule,
        PaginationModule.forRoot()
    ],
    declarations: [ListComponent]
})
export class ListModule { }
