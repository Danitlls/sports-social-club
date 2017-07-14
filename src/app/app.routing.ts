import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { FieldHockeyComponent } from './field-hockey/field-hockey.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'field-hockey',
    component: FieldHockeyComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'edit-player',
    component: EditPlayerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
