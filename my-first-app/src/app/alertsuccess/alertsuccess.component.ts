import { Component, OnInit } from '@angular/core';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alertsuccess',
  templateUrl: './alertsuccess.component.html',
  styleUrls: ['./alertsuccess.component.css']
})
export class AlertsuccessComponent implements OnInit {
  faExclamation = faExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
