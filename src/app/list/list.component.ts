import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  collection:any =[]
  constructor( private resto:RestoService) { }

  ngOnInit(): void {

    this.resto.getList().subscribe((result)=>{

      console.warn(result);
      this.collection = result
      


    })

   
  }
  delateResto(item: any){
    this.collection.splice(item-1,1)
    this.resto.delateResto(item).subscribe((result)=>{
      console.warn("results",result)

    })
      
  }

}
