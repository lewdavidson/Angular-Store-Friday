import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemService]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) { }

 items: FirebaseListObservable<any[]>;
 currentRoute: string = this.router.url;

 ngOnInit() {
   this.items = this.itemService.getItems();
  }
goToDetailPage(item) {
  this.router.navigate(['items', item.$key]);
}

}
