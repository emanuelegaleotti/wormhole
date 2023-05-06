import { Injectable } from '@angular/core'
import { AngularFirestore, DocumentData, DocumentReference } from '@angular/fire/compat/firestore'
import { map, Observable } from 'rxjs'
import { Film } from './film.model'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor (private readonly firestore: AngularFirestore) { }

  getFilms (): Observable<Film[]> {
    return this.firestore.collection(
      'films',
      ref => ref.orderBy('episode'))
      .snapshotChanges()
      .pipe(
        map((r) => r.map((fd: { [key: string]: any }) => {
          const f = fd['payload'].doc.data()
          return new Film(
            fd['payload'].doc.id,
            f['title'],
            f['episode']
          )
        }))
      )
  }
  setRating(id: string, v:number):Promise<DocumentReference>{
    return this.firestore.collection('films')
      .doc(id)
      .collection('ratings')
      .add({ rating: v })
  }
}
