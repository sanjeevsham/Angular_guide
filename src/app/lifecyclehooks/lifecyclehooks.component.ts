import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LifecycleChildComponent } from './lifecycle-child.component';

@Component({
    selector: 'app-lifecycle-hooks',
    standalone: true,
    imports: [CommonModule, FormsModule, LifecycleChildComponent, RouterLink],
    templateUrl: './lifecyclehooks.component.html',
    styleUrl: './lifecyclehooks.component.scss'
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    // Demo State
    logs: string[] = [];
    targetInput: string = 'Initial Value';
    counter = signal(0);
    isDestroying = false;
    showChild = true;
    hooksitems = [{
        id: 1,
        name: 'ngOnChanges',
        description: 'Runs when input properties change.',
        note: 'Note: Since this is a top-level route component, we simulate inputs internally or via wrapper.'
    },
    {
        id: 2,
        name: 'ngOnInit',
        description: 'Runs once after the first ngOnChanges.',
        note: 'Good for initialization logic.'
    },
    {
        id: 3,
        name: 'ngDoCheck',
        description: 'Runs during every change detection run, allowing custom change detection.',
        note: ''
    },
    {
        id: 4,
        name: 'ngAfterContentInit',
        description: 'Runs after content (ng-content) is projected into the view.',
        note: ''
    },
    {
        id: 5,
        name: 'ngAfterContentChecked',
        description: 'Runs after content (ng-content) is projected into the view.',
        note: ''
    },
    {
        id: 6,
        name: 'ngAfterViewInit',
        description: 'Runs after the component\'s view (and child views) are fully initialized.',
        note: ''
    },
    {
        id: 7,
        name: 'ngAfterViewChecked',
        description: 'Runs after the component\'s view (and child views) are fully initialized.',
        note: ''
    },
    {
        id: 8,
        name: 'ngOnDestroy',
        description: 'Runs just before the component is destroyed. Perfect for cleanup (unsubscribe, etc).',
        note: ''
    }]
    constructor() {
        this.log('Constructor called');
    }

    // 1. ngOnChanges
    ngOnChanges(changes: SimpleChanges): void {
        this.log('ngOnChanges called', changes);
    }

    // 2. ngOnInit
    ngOnInit(): void {
        this.log('ngOnInit called');
        // Simulate API call
        setTimeout(() => {
            this.log('ngOnInit: Data "loaded" from API simulation');
        }, 1500);
    }

    // 3. ngDoCheck
    ngDoCheck(): void {
        this.log('ngDoCheck called');
    }

    // 4. ngAfterContentInit
    ngAfterContentInit(): void {
        this.log('ngAfterContentInit called');
    }

    // 5. ngAfterContentChecked
    ngAfterContentChecked(): void {
        this.log('ngAfterContentChecked called');
    }

    // 6. ngAfterViewInit
    ngAfterViewInit(): void {
        this.log('ngAfterViewInit called');
    }

    // 7. ngAfterViewChecked
    ngAfterViewChecked(): void {
        this.log('ngAfterViewChecked called');
    }

    // 8. ngOnDestroy
    ngOnDestroy(): void {
        this.isDestroying = true;
        this.log('ngOnDestroy called');
        console.warn('LifecycleHooksComponent destroyed!');
    }


    toggleChild() {
        this.showChild = !this.showChild;
    }

    onChildLog(message: string) {
        this.log(message, null, true);
    }

    // Helper
    private log(message: string, data?: any, isChild = false) {
        const timestamp = new Date().toLocaleTimeString();
        let prefix = isChild ? '' : '🧑 Parent: ';

        // Clean up message if it already has emoji
        if (message.includes('👶')) prefix = '';

        const logEntry = `[${timestamp}] ${prefix}${message} ${data ? JSON.stringify(data) : ''}`;
        this.logs.unshift(logEntry); // Add to top
        // Limit logs
        if (this.logs.length > 30) {
            this.logs.pop();
        }
        console.log(logEntry);
    }

    triggerChange() {
        this.counter.update(v => v + 1);
    }

    clearLogs() {
        this.logs = [];
    }
}
