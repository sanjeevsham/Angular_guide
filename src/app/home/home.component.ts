import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    componentsCardData = [{
        title: 'Data Binding',
        description: 'Master the flow of data: Interpolation, Property, Event, and Two-Way binding.',
        icon: '⇄',
        path: '/data-binding',
        variant: 'binding'
    }, {
        title: 'Signals',
        description: 'Experience the new era of fine-grained reactivity and state management.',
        icon: '⚡',
        path: '/signal',
        variant: 'signal'
    }, {
        title: 'Lifecycle Hooks',
        description: 'Master the flow of data: Interpolation, Property, Event, and Two-Way binding.',
        icon: '↻',
        path: '/lifecycle-hooks',
        variant: 'lifecycle'
    }, {
        title: 'Routing',
        description: 'Navigate through pages, manage parameters, guards, and nested routes.',
        icon: '🛣️',
        path: '/routing',
        variant: 'routing'
    }]
}
