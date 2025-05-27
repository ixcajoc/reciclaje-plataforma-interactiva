import { Routes } from '@angular/router';
import HomeComponent from './componentes/home/home.component';
import { PdosComponent } from './componentes/pdos/pdos.component';
import PantallaInicioComponent from './componentes/pantalla-inicio/pantalla-inicio.component';
import PantallaDatosComponent from './componentes/pantalla-datos/pantalla-datos.component';
import { PantallaResumenComponent } from './componentes/pantalla-resumen/pantalla-resumen.component';
import { CardGameComponent } from './componentes/card-game/card-game.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { NuevosComponent } from './componentes/admin/nuevos/nuevos.component';
import { PanelCardsComponent } from './componentes/admin/panel-cards/panel-cards.component';
import { PanelEditarComponent } from './componentes/admin/panel-editar/panel-editar.component';

export const routes: Routes = [

    {
        path: '',
        component: PantallaInicioComponent,
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
    {
        path: "user",
        component: PantallaDatosComponent,
        title: 'User',
    },
    {
        path: "resumen",
        component: PantallaResumenComponent,
        title: 'Resumen',
    },
    {
        path: "memoria",
        component: CardGameComponent,
        title: 'MemoriaGame',
    },
    {
        path: "login",
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: "admin",
        component: AdminComponent,
        title: 'Admin',

        children:[
            {
                path: "nuevo",
                component: NuevosComponent,
                title: 'Nuevo Objeto',
            },
            {
                path: "editar/:itemId",
                component: PanelEditarComponent,
                title: 'Editar Objeto',
            },
            {
                path: "cards",
                component: PanelCardsComponent,
                title: 'Lista Objetos',
            },
            {
                path: '',
                redirectTo: 'cards',
                pathMatch: 'full',

            }
        ]
    },

    // {
    //     path: "admin",
    //     component: AdminComponent,
    //     title: 'Admin',
    // },
    // {
    //     path: "nuevo",
    //     component: NuevosComponent,
    //     title: 'Nuevo Objeto',
    // },

    
    // {
    //     path: "details/:id",
    //     component: DetailsComponent,
    //     title: 'Home Datails',
    // },
];
