import { Injectable } from '@angular/core';
import { ICause } from './shared/interfaces/cause';
import { HttpClient} from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

  causes: ICause[];

  constructor (private http: HttpClient) { }

  loadCauses() {
    this.http.get<ICause[]>('http://localhost:3000/causes')
    .subscribe(causes => {
      this.causes = causes})
  }
}
