import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'items/:id',
    component: DetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
