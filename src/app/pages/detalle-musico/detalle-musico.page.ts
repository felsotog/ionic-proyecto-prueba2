import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-detalle-musico',
  templateUrl: './detalle-musico.page.html',
  styleUrls: ['./detalle-musico.page.scss'],
})
export class DetalleMusicoPage implements OnInit {

  editForm : FormGroup;
  id : any;

  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getMusico(this.id).then(res => {
      this.editForm.setValue({
        nombre: res['nombre'],
        apellido: res['apellido'],
        rut: res['rut'],
        edad: res['edad'],
        direccion: res['direccion'],
        telefono: res['telefono'],
        email: res['email'],
        gradoAcademico: res['gradoAcademico'],
        instrumento: res['instrumento'],
        fotografia: res['fotografia']
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      rut: [''],
      edad: [''],
      direccion: [''],
      telefono: [''],
      email: [''],
      gradoAcademico: [''],
      instrumento: [''],
      fotografia: ['']
    });
  }

  updateMusico() {
    this.db.updateMusico(this.id, this.editForm.value).then((res) => {
      console.log(res)
      this.router.navigate(['/musicos']);
    });
  }


}
