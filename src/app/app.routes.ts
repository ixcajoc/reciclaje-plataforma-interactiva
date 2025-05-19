import { Routes } from '@angular/router';
import HomeComponent from './componentes/home/home.component';
import { PdosComponent } from './componentes/pdos/pdos.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
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
