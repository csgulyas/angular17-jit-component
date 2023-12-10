import { AfterViewInit, Component, ViewChild, ViewContainerRef, ɵglobal } from '@angular/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzSwitchModule],
  template: `
    <h2>Expected</h2>
    <nz-switch></nz-switch> {{ text }}
    <h2>Actual</h2>
    <ng-container #container></ng-container>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  text = new Date().toLocaleTimeString();

  ngAfterViewInit(): void {
    const html = `<nz-switch></nz-switch> {{ text }}`;
    const parent = this;
    
    import('@angular/compiler').then((compiler) => {
      compiler.publishFacade(ɵglobal); // Publish to global so its visible

      const dynamicComponent = Component({template: html, jit: true, standalone: true, imports: [NzSwitchModule]})(class { text = parent.text;});
      this.container.createComponent(dynamicComponent);
    });
  }
}
