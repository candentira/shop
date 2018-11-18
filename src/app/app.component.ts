import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("appTitle") title: ElementRef;

  ngAfterViewInit() {
    this.title.nativeElement.textContent = "Test Shop App";
  }
}
