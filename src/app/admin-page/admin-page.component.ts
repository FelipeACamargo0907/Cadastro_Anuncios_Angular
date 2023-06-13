import { Component } from '@angular/core';
import { AdminPage } from '../adminpage';
import { AdminPageService } from '../admin-page.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  AdminPage: AdminPage[] = [];
  isEditing: boolean = false;
  formGroupAdmin: FormGroup;
  isChecked: boolean = false; 
  opcaoSelecionada: any;

  constructor(private adminPageService: AdminPageService,
    private formBuilder: FormBuilder) {
    this.formGroupAdmin = formBuilder.group({
      id: [''],
      titulo: [''],
      preco: [''],
      descricao: [''],
      validade: [''],
      isChecked: ['',[Validators.required]],
      image :[''],
      status: ['', Validators.required]
      
    
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
 
 
   save (){
   this.isChecked = true;
   if (this.formGroupAdmin.valid)
   {
    if (this.isEditing)
    {
      this.adminPageService.update(this.formGroupAdmin.value).subscribe(
        {
          next: () => {
            this.loadVeiculo();
            this.formGroupAdmin.reset();
            this.isEditing = false;
            this.isChecked = false;
          }
        }
      )
    }
    else{
    this.adminPageService.save(this.formGroupAdmin.value).subscribe(
      {
        next : data => {
          this.AdminPage.push(data)
          this.formGroupAdmin.reset();
          this.isChecked = false;

        }
      }
    );
  }
}

   }
   
   edit (adminPage : AdminPage){
      this.formGroupAdmin.setValue(adminPage);
      this.isEditing = true;
 
   }
 
   delete (adminPage : AdminPage){
     this.adminPageService.delete(adminPage).subscribe({
       next : () => this.loadVeiculo()
     })
 
 }
   clean (){
   this.formGroupAdmin.reset();
   this.isEditing = false;
   }
   
}
