import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: Firestore) {}

  listar(): Observable<any[]> {
    const ref = collection(this.firestore, 'produtos');
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }
}