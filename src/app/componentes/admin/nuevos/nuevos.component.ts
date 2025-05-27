import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api-service.service';
import { AlertService } from '../../../services/alert-service.service';

@Component({
  selector: 'app-nuevos',
  standalone: true,
  imports: [
     FormsModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './nuevos.component.html',
  styleUrl: './nuevos.component.css'
})
export class NuevosComponent {


  route: ActivatedRoute = inject(ActivatedRoute);
  itemBasura: any;
  
  
  newItemForm: FormGroup;
  
  constructor(
    // private authService:AuthService,
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private alertService: AlertService,

  ){
    this.newItemForm = this.fb.group({
      itemName: ['',Validators.required],
      imageUrl: ['',Validators.required],
      category: ['',Validators.required],
    }); 

  }

  // ngOnInit(){
  // }

  // prueba(){
  //   const newItem: any ={
  //     itemName: this.newItemForm.value.itemName??'',
  //     imageUrl: this.newItemForm.value.imageUrl??'',
  //     category: this.newItemForm.value.category??''

  //   }
  //   console.log(newItem);

  // }

  newItem(){
    const categoryId: string = this.newItemForm.value.category??'';
    const newItem: any ={
      itemName: this.newItemForm.value.itemName??'',
      imageUrl: this.newItemForm.value.imageUrl??'',
    }
    this.apiService.newItem(categoryId, newItem).subscribe({
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
