import { Routes } from '@angular/router';
import HomeComponent from './componentes/home/home.component';
import { PdosComponent } from './componentes/pdos/pdos.component';
import PantallaInicioComponent from './componentes/pantalla-inicio/pantalla-inicio.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: "inicio",
        component: PantallaInicioComponent,
        title: 'Inicio',
    },
    {
        path: "pdos",
        component: PdosComponent,
        title: 'Pdos',
    },
    
    // {
    //     path: "details/:id",
    //     component: DetailsComponent,
    //     title: 'Home Datails',
    // },
];
