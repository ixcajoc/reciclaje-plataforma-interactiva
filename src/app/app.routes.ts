import { Routes } from '@angular/router';
import HomeComponent from './componentes/home/home.component';
import PunoComponent from './componentes/puno/puno.component';
import { PdosComponent } from './componentes/pdos/pdos.component';
import PdragComponent from './componentes/pdrag/pdrag.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: "puno",
        component: PunoComponent,
        title: 'puno',
    },
    {
        path: "pdos",
        component: PdosComponent,
        title: 'Pdos',
    },
    {
        path: "pdrag",
        component: PdragComponent,
        title: 'pgrag',
    },
    // {
    //     path: "details/:id",
    //     component: DetailsComponent,
    //     title: 'Home Datails',
    // },
];
