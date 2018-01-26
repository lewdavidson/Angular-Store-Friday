import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ItemService]
})
export class DetailsComponent implements OnInit {
  itemId: string;
  itemToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = urlParameters['id'];
    });
    this.itemToDisplay = this.itemService.getItemById(this.itemId);
  }

}
