import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges{
@Input() offset: number = 1
@Output() pageClicked: EventEmitter<number> = new EventEmitter<number>
nbPages: number = 10
pages: number[] = []

ngOnChanges(): void {
  let pages = new Array<number>(10)
  let dec = 0
  if(this.pages[this.nbPages - 1] > (this.offset * 10) / 2){
    dec = 5
  }

// create page of the paginator
for(let i = 0; i < this.nbPages; i++){
    pages[i] = this.offset + i + dec
}
this.pages = pages;
  
}
  onPageClick(value: number){
    this.pageClicked.emit(value)
  }
}
