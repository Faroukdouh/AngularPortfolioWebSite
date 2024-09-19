import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  isCollapsed: boolean = true;
  faltering: boolean = false;
  tags : Tag[] = []; 
  // typeScript : boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Farouk DOUH - Portfolio")
   }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.tags = this.projectService.getAllTags();
  }

  filter(){
    let filterTags : Tag[] = [];

    this.tags.forEach( (tag) => {
      if(tag.filtering){
        filterTags.push(tag);
        this.faltering = true;
      }
    })
      
    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilters(){
    this.tags.forEach( tag => { tag.filtering = false; });
    this.faltering = false;
    this.projects = this.projectService.getProjects();
  }

  getTagsByCatg(categorie : string){
    return this.projectService.getTagsByCatg(categorie);
  }

}
