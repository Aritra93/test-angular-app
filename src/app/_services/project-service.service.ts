import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  projects: Project[] = [
    {id: 0, name: 'Angular portfolio', summary: 'Angular 17 based personal portfolio website', description: 'This project has been developed using Angular 17 and deployed on Github Pages. This project describes my current and past projects and the skillset I have gained.', projectLink: 'https://github.com/Aritra93/test-angular-app', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
    {id: 1, name: 'Python API repository', summary: 'Rest API using Python and Flask', description: 'This project develops custom APIs using Python and Flask web framework. Some of the APIs developed are consumed by Angular 17 portfolio project. The APIs are hosted on Render.', projectLink: 'https://github.com/Aritra93/pyhton-api-respository', tags: [Tag.PYTHON, Tag.FLASK], pictures: []},
    {id: 2, name: 'Facial Recognition', summary: 'Facial features representation', description: 'This project is currently in developing phase. This project aims to learn a common representation from different facial poses. A common represenatation from varied facial poses denotes its the same person.', projectLink: 'https://github.com/Aritra93', tags: [Tag.PYTHON, Tag.PYTORCH, Tag.OPENCV], pictures: []},
    {id: 3, name: 'Brain Tumor Segmentation', summary: 'Tumor segmentation using Brain MRI', description: 'As part of coursework project for Data Mining, worked on locating and segmenting tumors in Brain MRI scans using UNET with skip connection architecture', projectLink: 'https://github.com/Aritra93', tags: [Tag.OPENCV, Tag.PYTORCH, Tag.PYTHON], pictures: []}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number) : Project{
    let proj = this.projects.find(proj => proj.id === id);

    if(proj === undefined){
      throw new TypeError('There is no project that matches the id: '+id);

    }
    return proj;

  }
}
