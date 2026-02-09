import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-content">
      <h3>User Profile Component</h3>
      <p>This component demonstrates reading parameters from the URL.</p>
      
      <div class="user-card">
        <div class="avatar">👤</div>
        <div class="info">
          <h4>User ID: {{ userId }}</h4>
          <p>Loaded from route parameter: <code>:id</code></p>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page-content { animation: fadeIn 0.3s ease-in; }
    .user-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
      margin-top: 1rem;
    }
    .avatar { font-size: 3rem; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `]
})
export class UserProfileComponent implements OnInit {
    private route = inject(ActivatedRoute);
    userId: string | null = null;

    ngOnInit() {
        // Subscribe to paramMap to react to changes if the component is reused
        this.route.paramMap.subscribe(params => {
            this.userId = params.get('id');
        });
    }
}
