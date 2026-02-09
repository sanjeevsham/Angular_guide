import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-overview',
    standalone: true,
    template: `<p>📊 Overview Content: Charts and Graphs would go here.</p>`
})
export class DashboardOverviewComponent { }

@Component({
    selector: 'app-dashboard-settings',
    standalone: true,
    template: `<p>⚙️ Settings Content: User preferences would go here.</p>`
})
export class DashboardSettingsComponent { }
