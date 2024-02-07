import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlldataComponent } from './MyComponent/alldata/alldata.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { RagistrationComponent } from './MyComponent/ragistration/ragistration.component';
import { UpdateComponent } from './MyComponent/update/update.component';

const routes: Routes = [
  { path: "", component: AlldataComponent },
  { path: "about", component: AboutComponent },
  { path: "ragister", component: RagistrationComponent },
  { path: "alldata", component: AlldataComponent },
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
