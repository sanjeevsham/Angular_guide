import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <div class="dashboard-layout">
      <aside class="sidebar">
        <h4>Dashboard Menu</h4>
        <a routerLink="overview" routerLinkActive="active">Overview</a>
        <a routerLink="settings" routerLinkActive="active">Settings</a>
      </aside>
      
      <main class="dashboard-content">
        <h3>Dashboard Container</h3>
        <p>This component has its own <code>&lt;router-outlet&gt;</code> for child routes.</p>
        <hr>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
    styles: [`
    .dashboard-layout {
      display: flex;
      gap: 1rem;
      border: 1px dashed #aaa;
      padding: 1rem;
      margin-top: 1rem;
    }
    .sidebar {
      width: 200px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-right: 1px solid #eee;
      padding-right: 1rem;
    }
    .sidebar a {
      text-decoration: none;
      color: #555;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }
    .sidebar a.active {
      background: #e9ecef;
      color: #000;
      font-weight: bold;
    }
    .dashboard-content {
      flex: 1;
    }
  `]
})
export class DashboardComponent { }
