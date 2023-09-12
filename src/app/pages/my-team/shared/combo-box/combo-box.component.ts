import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})

export class ComboBoxComponent implements OnInit{

  faChevronDown = faChevronDown

  selectedGame: any;
  @Input() options: any[] = [];

  ngOnInit(): void {
  }

}
