import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  isWorkExperoenceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private rendered: Renderer2) {
    this.titleService.setTitle("Farouk DOUH - Resume")
   }

  ngOnInit(): void {
  }

  downloadFile(){
    const link = this.rendered.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/cv_Farouk_DOUH.pdf');
    link.setAttribute('download', 'cv_Farouk_DOUH.pdf');
    link.click();
    link.remove();
  }

}
