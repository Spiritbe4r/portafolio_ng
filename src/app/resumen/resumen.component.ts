import { Component, OnInit } from '@angular/core';
import {  CvCardenasService } from '../services/cvcardenas.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvCardenasService) { }

  ngOnInit(): void {
  }

}
