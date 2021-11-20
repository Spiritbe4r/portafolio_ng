import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, Subject } from 'rxjs';
import { Projects } from 'src/interfaces/Projects';

@Injectable({
  providedIn: 'root'
})
export class CvCardenasService {
  BASE_URL:string=`${environment.DATA_SERVICE_URL}`

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  servicios: any[] = [];
  blog: any[] = [];
  projects:Projects[]=[];
  projectSubject=new Subject<Projects[]>();

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarServicios();
    this.CargarBlog();
    this.CargarProject();
  }
 




  emitProjects(): void{
    this.projectSubject.next(this.projects);
  }

  private CargarProfesional(){
    this.http.get(this.BASE_URL+'/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get(this.BASE_URL+'/Educacion.json')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
    });
  }

  CargarTestimonio(){
    this.http.get(this.BASE_URL+'/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
    });
  }

  private CargarServicios(){
    this.http.get(this.BASE_URL+'/Servicios.json')
      .subscribe((resp: any[]) => {
        this.servicios = resp;
        console.log(resp);
    });
  }

  private CargarExperiencia(){
    this.http.get(this.BASE_URL+'/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
    });
  }

  private CargarBlog(){
    this.http.get(this.BASE_URL+'/Blog.json')
      .subscribe((resp: any[]) => {
        this.blog = resp;
        console.log(resp);
    });
  }


  CargarProject():Observable<Projects>{
    return this.http.get<Projects>(this.BASE_URL+'/Projects.json')
      
  }

  

  
}
