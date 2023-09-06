import { Component, Input, OnInit } from '@angular/core';
import { Type } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit{

  @Input() type: Type | undefined;

  ngOnInit(){



  }

  checkColor(type: string){
    console.log("aa")
  }

}
