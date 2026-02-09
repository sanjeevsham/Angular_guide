import { Component } from '@angular/core';

@Component({
    selector: 'app-admin',
    standalone: true,
    template: `
    <div class="admin-panel">
      <h3>🔐 Admin Panel</h3>
      <p>Welcome, Administrator! You have passed the guard check.</p>
    </div>
  `,
    styles: [`
    .admin-panel {
      background: #fff3cd;
      border: 1px solid #ffeeba;
      color: #856404;
      padding: 1rem;
      border-radius: 4px;
    }
  `]
})
export class AdminComponent { }
