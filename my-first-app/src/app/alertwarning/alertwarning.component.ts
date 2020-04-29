import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alertwarning',
  templateUrl: './alertwarning.component.html',
  styleUrls: ['./alertwarning.component.css']
})
export class AlertwarningComponent implements OnInit {
  faExclamationTriangle = faExclamationTriangle;

  constructor() { }

  ngOnInit(): void {
  }

}
