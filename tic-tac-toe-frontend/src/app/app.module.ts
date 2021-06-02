import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent, BoardComponent } from './components';
import { GameComponent, HomeComponent } from './pages';
import { ApiService } from './services';
@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BoardComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ToastrModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
