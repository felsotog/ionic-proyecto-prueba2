import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-musicos',
  templateUrl: './musicos.page.html',
  styleUrls: ['./musicos.page.scss'],
})
export class MusicosPage implements OnInit {

  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res)
      {
        this.db.fetchMusicos().subscribe(item => {
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
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
    })
  }

  storeData() {
    this.db.addMusico(
      this.mainForm.value.nombre,
      this.mainForm.value.apellido,
      this.mainForm.value.rut,
      this.mainForm.value.edad,
      this.mainForm.value.direccion,
      this.mainForm.value.telefono,
      this.mainForm.value.email,
      this.mainForm.value.gradoAcademico,
      this.mainForm.value.instrumento,
      this.mainForm.value.fotografia
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteMusico(id) {
    this.db.deleteMusico(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Musico eliminado',
        duration: 3000
      });
      toast.present()
    })
  }




}
