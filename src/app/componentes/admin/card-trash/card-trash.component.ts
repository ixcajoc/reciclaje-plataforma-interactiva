import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../services/api-service.service';

@Component({
  selector: 'app-card-trash',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './card-trash.component.html',
  styleUrl: './card-trash.component.css'
})
export class CardTrashComponent {
  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  @Input() ObjetoBasura!: any;

  confirmarEliminar() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta accion.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem();
      }
    });
  }

  deleteItem() {
    const itemId: string = this.ObjetoBasura._id;
    const categoryId: string = this.ObjetoBasura.category;

    this.apiService.deleteItem(categoryId, itemId).subscribe({
      next: (response) => {
        Swal.fire({
          title: "¡Eliminado!",
          text: "Item eliminado.",
          icon: "success"
        });
        // this.router.navigate(['/admin']);
        //actualizar la pagina para que ya no se muestre el objeto
        setTimeout(() => {
          window.location.reload();
        }, 2000);

      },
      error: (error) => {
        Swal.fire({
          title: "Algo salió mal",
          text: `Error: ${error}`,
          icon: "error"
        });
      }
    });
  }

}
