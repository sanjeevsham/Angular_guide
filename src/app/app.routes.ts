import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SignalComponent } from './signal/signal.component';
import { LifecycleHooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { HomeComponent } from './home/home.component';
import { adminGuard } from './routing-demo/guards/admin.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'signal', component: SignalComponent },
    {
        path: 'routing',
        loadComponent: () => import('./routing-demo/routing-demo.component').then(m => m.RoutingDemoComponent),
        children: [
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
            {
                path: 'basic',
                loadComponent: () => import('./routing-demo/pages/basic/basic.component').then(m => m.BasicComponent)
            },
            {
                path: 'user/:id',
                loadComponent: () => import('./routing-demo/pages/user-profile/user-profile.component').then(m => m.UserProfileComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./routing-demo/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    {
                        path: 'overview',
                        loadComponent: () => import('./routing-demo/pages/dashboard/dashboard-pages.component').then(m => m.DashboardOverviewComponent)
                    },
                    {
                        path: 'settings',
                        loadComponent: () => import('./routing-demo/pages/dashboard/dashboard-pages.component').then(m => m.DashboardSettingsComponent)
                    }
                ]
            },
            {
                path: 'admin',
                loadComponent: () => import('./routing-demo/pages/admin/admin.component').then(m => m.AdminComponent),
                canActivate: [adminGuard]
            }
        ]
    }
];
