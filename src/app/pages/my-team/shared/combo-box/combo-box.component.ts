import { Component, Input, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})

export class ComboBoxComponent implements OnInit{

  faChevronDown = faChevronDown

  // // @Input() option: Select[] = [];
  // @Input() options: Select[] = [
  //   {
  //     text: '',
  //       value: ""
  //   }
  // ];

  ngOnInit(): void {
  }

}
