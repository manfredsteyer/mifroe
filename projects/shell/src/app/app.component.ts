import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('microfrontend', { static: true })
  private microfrontend;

  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'http://localhost:4201/microfrontend-es2015.js';
    this.microfrontend.nativeElement.appendChild(script);

    const microfrontend = document.createElement('microfrontend');
    this.microfrontend.nativeElement.appendChild(microfrontend);
  }
}
