import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="routing-container">
      <header>
        <h2>Angular Routing Concepts</h2>
        <p>Explore different routing strategies below:</p>
      </header>
      
      <nav class="demo-nav">
        <a routerLink="basic" routerLinkActive="active">Basic Route</a>
        <a routerLink="user/123" routerLinkActive="active">Route Params (User 123)</a>
        <a routerLink="dashboard" routerLinkActive="active">Nested Routes (Dashboard)</a>
        <a routerLink="admin" routerLinkActive="active">Guarded Route</a>
      </nav>

      <div class="demo-content">
        <router-outlet></router-outlet>
      </div>
      
      <div class="back-link">
        <a routerLink="/">← Back to Home</a>
      </div>
    </div>
  `,
  styles: [`
    .routing-container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      font-family: 'Inter', sans-serif;
    }
    header {
      margin-bottom: 2rem;
      text-align: center;
    }
    .demo-nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    .demo-nav a {
      padding: 0.5rem 1rem;
      background: #f0f0f0;
      border-radius: 4px;
      text-decoration: none;
      color: #333;
      transition: all 0.2s;
    }
    .demo-nav a.active {
      background: #007bff;
      color: white;
    }
    .demo-nav a:hover:not(.active) {
      background: #e0e0e0;
    }
    .demo-content {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 2rem;
      min-height: 200px;
      background: #fff;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    .back-link {
        margin-top: 2rem;
        text-align: center;
    }
  `]
})
export class RoutingDemoComponent {}
