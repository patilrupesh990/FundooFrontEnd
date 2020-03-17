import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchlabel'
})
export class SearchlabelPipe implements PipeTransform {

  transform(value: any, name:string): any {
    if(name===""){
      value;
    }
    const labelsArray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let label:string=value[i].title;
      if(label.startsWith(name)){
        labelsArray.push(value[i]);
      }
    }
    return labelsArray;
  }


}
