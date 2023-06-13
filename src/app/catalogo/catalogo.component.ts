import { Component } from '@angular/core';
import { AdminPage } from '../adminpage';
import { FormBuilder } from '@angular/forms';
import { AdminPageService } from '../admin-page.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  AdminPage :  AdminPage[] = [];
  formGroupAdmin : any;

constructor(private adminPageService : AdminPageService,
  private formBuilder: FormBuilder) {
  this.formGroupAdmin = formBuilder.group({
    titulo: [''],
    preco: [''],
    descricao: [''],
    validade: [''],
    status: [''],
    
  });
}
ngOnInit(): void {
  this.loadVeiculo();
 }
 loadVeiculo() {
   this.adminPageService.getAdmin(). subscribe(
     {
       next : data => this.AdminPage = data
     }
   );
 }
}
