import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MyTeamViewModule } from './pages/my-team/feature/my-team-view/my-team-view.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyTeamViewModule,
    FontAwesomeModule
  ],
  providers: [ PokemonApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
