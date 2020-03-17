import { Component, OnInit,Input,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: object[];
  // @ViewChild(TemplateRef) template: TemplateRef<any>;


  constructor() { }

  ngOnInit() {
  }

}
