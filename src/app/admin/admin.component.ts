import { Component } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService]
})
export class AdminComponent {
  constructor(private itemService: ItemService) { }

  submitForm(
    name: string,
    price: number,
    description: string,
    photo: string
  ) {
    var newItem: Item = new Item(name, price, description, photo);
    this.itemService.addItem(newItem);
  }
}
