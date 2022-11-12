import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InterINFO } from './interInfo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTrae();
    
    // this.postCreaUno();

    // this.getTraeUno();
  }

  getTrae(){
    let URL = environment.urlService // esta ruta esta en el archivo environment
    return this._http.get<InterINFO[]>(URL);
    
    // let tempObservable = this._http.get(URL);
    // tempObservable.subscribe(data => {
    //     console.log('::Trae Informacion GET/::')
    //     console.log(data)
    // })
  }
  // postCreaUno = () =>{
  //   let URL = `${environment.urlService}`// esta ruta esta en el archivo environment
  //   let tempObservable = this._http.post(URL,{title:'paso',descripcion:'paso'});
  //   tempObservable.subscribe(data => {
  //       console.log('::Crea uno POST/De uno::')
  //       console.log(data)
  //   })
  // }

  getTraeUno = (_id:string) =>{
    let URL = `${environment.urlService}/${_id}` // esta ruta esta en el archivo environment
    return this._http.get<InterINFO>(URL);
  }
}
