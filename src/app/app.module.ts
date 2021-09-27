import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertService } from './shared/services/alert.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        ToastrModule.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [ AlertService ],
    bootstrap: [AppComponent]

})
export class AppModule {}
