import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NftFormComponent } from 'src/app/component/nft-form/nft-form.component';
import { CollectionService } from 'src/app/service/collection/collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit{

	
	constructor(private colectionService: CollectionService,
		private route: ActivatedRoute){

	}

	ngOnInit(){
		const pseudo = this.route.snapshot.paramMap.get('pseudo')
	}

}
