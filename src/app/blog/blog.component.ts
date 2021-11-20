import { Component, OnInit } from '@angular/core';
import { CvCardenasService } from '../services/cvcardenas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public cv: CvCardenasService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit(): void {
  }

  getVideoIframe(url) {
    let video;
    let results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
