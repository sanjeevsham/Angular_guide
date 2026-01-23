import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lifecycle-child',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="child-component">
      <h3>Child Component</h3>
      <p><strong>Input Value:</strong> {{ inputValue }}</p>
      <div class="content-projection">
        <h4>Projected Content:</h4>
        <ng-content></ng-content>
      </div>
    </div>
  `,
    styles: [`
    .child-component {
      background: #e3f2fd;
      border: 1px solid #90caf9;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
    }
    .content-projection {
      margin-top: 0.5rem;
      padding: 0.5rem;
      background: rgba(255,255,255,0.5);
      border-radius: 4px;
    }
    h3 { margin-top: 0; color: #1565c0; }
  `]
})
export class LifecycleChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() inputValue: string = '';
    @Output() logEvent = new EventEmitter<string>();

    private log(hook: string) {
        this.logEvent.emit(`👶 Child: ${hook}`);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.log(`ngOnChanges (inputValue: ${changes['inputValue'].currentValue})`);
    }

    ngOnInit() { this.log('ngOnInit'); }
    ngDoCheck() { this.log('ngDoCheck'); }
    ngAfterContentInit() { this.log('ngAfterContentInit'); }
    ngAfterContentChecked() { this.log('ngAfterContentChecked'); }
    ngAfterViewInit() { this.log('ngAfterViewInit'); }
    ngAfterViewChecked() { this.log('ngAfterViewChecked'); }
    ngOnDestroy() { this.log('ngOnDestroy'); }
}
