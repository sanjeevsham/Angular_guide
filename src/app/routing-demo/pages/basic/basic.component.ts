import { Component } from '@angular/core';

@Component({
    selector: 'app-basic',
    standalone: true,
    template: `
    <div class="page-content">
      <h3>Basic Route Component</h3>
      <p>This is a standard component loaded via a simple route path.</p>
      <p>Notice the URL is just <code>/routing/basic</code>.</p>
    </div>
  `,
    styles: [`
    .page-content { animation: fadeIn 0.3s ease-in; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `]
})
export class BasicComponent { }
