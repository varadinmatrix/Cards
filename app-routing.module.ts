import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
const routes: Routes = [
  {
  
  path : '',
  component : AppComponent,
  
  children : [
    {
      
      path : '',
      component : CardComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
