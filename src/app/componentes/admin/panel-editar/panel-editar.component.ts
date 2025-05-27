import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api-service.service';
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-panel-editar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './panel-editar.component.html',
  styleUrl: './panel-editar.component.css'
})
export class PanelEditarComponent {


  route: ActivatedRoute = inject(ActivatedRoute);
  itemBasura: any;
  
  
  editedItemForm: FormGroup;
  
  constructor(
    // private authService:AuthService,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService

  ){
    this.editedItemForm = this.fb.group({
      itemName: ['',Validators.required],
      imageUrl: ['',Validators.required],
    }); 

  }

  ngOnInit(){
    this.getUserByID();
    // this.loadItem();
  }

  getUserByID() {
  // const id = '6822d5cb89a21baf525ecf4e';
  const itemId = this.route.snapshot.params['itemId'];

  this.apiService.getItemByid(itemId).subscribe({
      next: (response)=> {
        this.itemBasura = response;

        this.editedItemForm.patchValue({
          itemName: this.itemBasura.itemName,
          imageUrl: this.itemBasura.imageUrl
        });

        // console.log(this.itemBasura)
      },
      error: (error) => {console.log(error)}
    });
  }

  updateData(){
    const editedItem: any ={
      itemName: this.editedItemForm.value.itemName??'',
      imageUrl: this.editedItemForm.value.imageUrl??'',
      
    }
    this.apiService.updateItem(this.itemBasura._id, editedItem).subscribe({
      next: (response)=> {
        // alert(`Felicidades: ${response}`)
        this.alertService.successAlert(response)
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        // alert(`Algo salio mal: ${error}`);
        this.alertService.wrongAlert(error)
      }
    });
    
  }


}
