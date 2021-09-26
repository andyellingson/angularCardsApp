import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicCardsContainerComponent } from './_components/dynamic-cards-container/dynamic-cards-container.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { CardComponent } from './_components/card/card.component'
import { DragDropModule } from '@angular/cdk/drag-drop'
import {ToolbarModule} from 'primeng/toolbar';
import { MessageModule } from 'primeng/message';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        DragDropModule,
        ToolbarModule,
        MessageModule,
        ToastModule,
        ButtonModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        CardComponent,
        DynamicCardsContainerComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }