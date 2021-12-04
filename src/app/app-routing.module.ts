import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalle-personaje/:id',
    loadChildren: () => import('./pages/detalle-personaje/detalle-personaje.module').then( m => m.DetallePersonajePageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./pages/tiempo/tiempo.module').then( m => m.TiempoPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'conversor-divisa',
    loadChildren: () => import('./pages/conversor-divisa/conversor-divisa.module').then( m => m.ConversorDivisaPageModule)
  },
  {
    path: 'musicos',
    loadChildren: () => import('./pages/musicos/musicos.module').then( m => m.MusicosPageModule)
  },
  {
    path: 'detalle-musico',
    redirectTo: 'home'
  },
  {
    path: 'detalle-musico/:id',
    loadChildren: () => import('./pages/detalle-musico/detalle-musico.module').then( m => m.DetalleMusicoPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
