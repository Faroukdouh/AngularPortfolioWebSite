import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: "Management and Monitoring System of Tourist Activities", pictures: ["../../assets/at.png"], projectLink: "", summary: "Fullstack web application", description: "This system aims to standardize and centralize data on tourism activities from various institutional organizations.", tags: [Tag.JAVA, Tag.JavaEE, Tag.RESTApi, Tag.JSF, Tag.PostgreSQL, Tag.Keycloak, Tag.Liquibase, Tag.Git, Tag.ScrumMethod] },
    { id: 1, name: "Management and Monitoring System of Craft Activities", pictures: ["../../assets/artsn.png"], projectLink: "", summary: "Fullstack web application", description: "This system aims to standardize and centralize data on craft activities from various institutional organizations.", tags: [Tag.JAVA, Tag.JavaEE, Tag.RESTApi, Tag.JSF, Tag.PostgreSQL, Tag.Keycloak, Tag.Liquibase, Tag.Git, Tag.ScrumMethod] },
    { id: 2, name: "Portfolio", pictures: ["../../assets/Image1.png", "../../assets/Image2.png", "../../assets/Image3.png"], projectLink: "https://github.com/Faroukdouh/AngularPortfolioWebSite", summary: "Front-end project", description: "Front-end project", tags: [Tag.TYPESCIPT, Tag.ANGULAR, Tag.HTMLCSS, Tag.Bootstrap] },
    { id: 3, name: "Design and implementation of a Computerized Maintenance Management System", pictures: ["../../assets/gmao.png", "../../assets/gmao2.png"], projectLink: "", summary: "Desktop application", description: "As a final-year Master's student, I completed an internship at ELIT. As part of a two-person team, I contributed to the design and implementation of a Computerized Maintenance Management System (CMMS) in connected/disconnected mode with data synchronization.", tags: [Tag.JAVA, Tag.SpringBoot, Tag.RESTApi, Tag.JavaFx, Tag.MySQL] },
    { id: 4, name: "Employee manager application", pictures: ["../../assets/mang1.png", "../../assets/mng2.png"], projectLink: "https://github.com/Faroukdouh/employeemanagerBack", summary: "Fullstack web application", description: "This CRUD application for employee management allows users to add, view, edit, and delete employee information. Designed to practice and enhance my skills in Angular and Spring Boot, it offers a complete experience in full-stack web application development.", tags: [Tag.JAVA, Tag.SpringBoot, Tag.RESTApi, Tag.TYPESCIPT, Tag.ANGULAR] },
    { id: 5, name: "Simple authentication system using basic auth and JWT", pictures: ["../../assets/springSecurity.png"], projectLink: "https://github.com/Faroukdouh/springSecurity", summary: "Back-end project for user registration, login, logout, generating token", description: "Back-end project for user registration, login, logout, generating token", tags: [Tag.JAVA, Tag.SpringBoot, Tag.RESTApi, Tag.MySQL] },
    { id: 6, name: "Management final year projects for Master's students", pictures: ["../../assets/l3.png", "../../assets/l33.png"], projectLink: "", summary: "Fullstack web application", description: "As a final-year Bachelor's student and a member of a two-person team, I participated in the design and implementation of a web application for managing final year projects (P.F.E) for Master's students within the computer science department.", tags: [Tag.PHP, Tag.HTMLCSS, Tag.Bootstrap, Tag.MySQL] },
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    let project = this.projects.find(p => p.id === id);
    return project;
  }

  getProjectByFilter(filterTags: Tag[]) {
    let filterProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filterProjects.push(project);
      }
    });

    return filterProjects;
  }

  getAllTags(): Tag[] {
    return [
      Tag.JAVA,
      Tag.JavaFx,
      Tag.JavaEE,
      Tag.SpringBoot,
      Tag.HTMLCSS,
      Tag.JSF,
      Tag.PrimeFaces,
      Tag.Bootstrap,
      Tag.ANGULAR,
      Tag.TYPESCIPT,
      Tag.JAVASCRIPT,
      Tag.PHP,
      Tag.UML,
      Tag.Git,
      Tag.ScrumMethod
    ];
  }



  getTagsByCatg(categori: string): Tag[] {
    switch (categori.toLowerCase()) {
      case 'languages':
        return [
          Tag.JAVA,
          Tag.TYPESCIPT,
          Tag.JAVASCRIPT,
          Tag.PHP
        ];

      case 'frameworks':
        return [
          Tag.JavaFx,
          Tag.JavaEE,
          Tag.SpringBoot,
          Tag.HTMLCSS,
          Tag.JSF,
          Tag.PrimeFaces,
          Tag.Bootstrap,
          Tag.ANGULAR,
        ];

      case 'tools':
        return [
          Tag.Git,
          Tag.Liquibase,
        ];

      case 'methodologies':
        return [
          Tag.UML,
          Tag.ScrumMethod
        ];

      case 'databases':
        return [
          Tag.PostgreSQL,   
          Tag.MySQL,        
        ];
      case 'security':
        return [
          Tag.Keycloak,     
          Tag.RESTApi      
        ];

      default:
        return [];
    }


  }



}
