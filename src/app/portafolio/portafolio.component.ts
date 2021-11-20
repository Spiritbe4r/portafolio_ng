import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Projects } from 'src/interfaces/Projects';
import { CvCardenasService } from '../services/cvcardenas.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  projects:Projects[]=[];
  projSub :Subscription;
  constructor(private cvService:CvCardenasService) { }

  ngOnInit(): void {
  this.cargar()
   
  }

 cargar(){
  this.cvService.CargarProject()
  .subscribe((resp:any)=>{
   
    this.projects = resp;
    console.log("prjectosssssssssssss",this.projects);
  
   
  },(error)=>{
    console.log(error)
  
  });
 }

}
