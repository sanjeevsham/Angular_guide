import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SignalComponent } from './signal/signal.component';
import { LifecycleHooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'signal', component: SignalComponent }
];
