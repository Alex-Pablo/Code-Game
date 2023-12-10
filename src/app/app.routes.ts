import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'game',
        pathMatch:'full'
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'game',
                component:GameComponent
            }
        ]
    }
];
