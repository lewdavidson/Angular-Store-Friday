import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }


  getItems() {
    return this.items;
  }

  getItemById(itemId: string) {
    return this.database.object('items/' + itemId);
  }

  addItem(newItem: Item) {
    this.items.push(newItem);
  }

  updateItem(localUpdatedItem) {
    var itemEntryInFirebase = this.getItemById(localUpdatedItem.$key);
    itemEntryInFirebase.update({
      name: localUpdatedItem.name,
      price: localUpdatedItem.price,
      description: localUpdatedItem.description,
      photo: localUpdatedItem.photo});
  }

  deleteItem(localItemToDelete) {
    var itemEntryInFirebase = this.getItemById(localItemToDelete.$key);
    itemEntryInFirebase.remove();
  }
}
