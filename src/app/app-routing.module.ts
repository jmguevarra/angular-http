import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FetchComponent } from "./firebase/fetch/fetch.component";


const routes = [
    { path: '', redirectTo: '/firebase/fetch', pathMatch: 'full'},
    { path: 'firebase/fetch', component: FetchComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting{

}