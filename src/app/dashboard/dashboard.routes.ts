import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { DashboardComponent } from './dashboard.component';


export const dashBoardRoutes: Routes = [
    { path: '', component: EstadisticaComponent },
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'detalle', component: DetalleComponent },



];

@NgModule({
    imports: [
        //    CommonModule,
        RouterModule.forRoot(dashBoardRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {

}