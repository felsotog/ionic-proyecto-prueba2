import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetalleMusico } from './detalle-musico';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  musicoList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlporter: SQLitePorter
  ) { 
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'musico.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.storage = db;
        this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchMusicos(): Observable<DetalleMusico[]> {
    return this.musicoList.asObservable();
  }

  getFakeData() {
    this.httpClient.get(
      'assets/script.sql',{responseType: 'text'}
    ).subscribe(data => {
      this.sqlporter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getMusicos();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  //CRUD

  //Obtener la lista de...
  getMusicos(){
    return this.storage.executeSql('SELECT * FROM musico',[]).then(res => {
      let items: DetalleMusico[] = [];
      if(res.rows.length > 0)
      {
        for(var i=0; i < res.rows.length; i++)
        {
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            rut: res.rows.item(i).rut,
            edad: res.rows.item(i).edad,
            direccion: res.rows.item(i).direccion,
            telefono: res.rows.item(i).telefono,
            email: res.rows.item(i).email,
            gradoAcademico: res.rows.item(i).gradoAcademico,
            instrumento: res.rows.item(i).instrumento,
            fotografia: res.rows.item(i).fotografia
          });
        }
      }
      this.musicoList.next(items);
    });
  }

  //agregar objetos a la bd
  addMusico(nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia){
    let data =[nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia];
    return this.storage.executeSql('INSERT INTO musico (nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia) VALUES (?,?,?,?,?,?,?,?,?,?)',data)
    .then(res => {
      this.getMusicos();
    });
  }

  //obtener un musico
  getMusico(id): Promise<DetalleMusico> {
    return this.storage.executeSql('SELECT * FROM musico WHERE ID = ?',[id])
    .then(res => {
      return {
        id: res.rows.item(0).id,
        nombre: res.rows.item(0).nombre,
        apellido: res.rows.item(0).apellido,
        rut: res.rows.item(0).rut,
        edad: res.rows.item(0).edad,
        direccion: res.rows.item(0).direccion,
        telefono: res.rows.item(0).telefono,
        email: res.rows.item(0).email,
        gradoAcademico: res.rows.item(0).gradoAcademico,
        instrumento: res.rows.item(0).instrumento,
        fotografia: res.rows.item(0).fotografia
      }
    });
  }

  //actualizar
  updateMusico(id, musico:DetalleMusico){
    let data = [musico.nombre, musico.apellido, musico.rut, musico.edad, musico.direccion, musico.telefono, musico.email, musico.gradoAcademico, musico.instrumento, musico.fotografia];
    return this.storage.executeSql(`UPDATE musico SET nombre = ?, apellido = ?, rut = ?, edad = ?, direccion = ?, telefono = ?, email = ?, gradoAcademico = ?, instrumento = ?, fotografia = ? WHERE id = ${id}`,data)
    .then(_ => {
      this.getMusicos();
    });
  }

  //eliminar
  deleteMusico(id) {
    return this.storage.executeSql('DELETE FROM musico WHERE id = ?',[id])
    .then(_ => {
      this.getMusicos()
    });
  }



}
