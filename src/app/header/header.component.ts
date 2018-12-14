import { Component } from '@angular/core';

@Component({
  selector: 'head-tag',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// authentication carried out and authorization JSON populated
export class HeaderComponent {
  title = 'head';
}
