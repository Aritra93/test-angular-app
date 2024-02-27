import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  projects: Project[] = [
    {id: 0, name: 'Sample Angular portfolio', summary: 'Angular based personal portfolio', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', projectLink: '//www.github.com', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: []},
    {id: 1, name: 'Sample Python API repository', summary: 'Rest API using python', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', projectLink: '//www.github.com', tags: [Tag.PYTHON], pictures: []},
    {id: 2, name: 'Facial Recognition', summary: 'Facial features representation', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', projectLink: '//www.github.com', tags: [Tag.PYTHON, Tag.PYTORCH, Tag.OPENCV], pictures: []},
    {id: 3, name: 'Brain Tumor Segmentation', summary: 'Tumor segmentation using Brain MRI', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', projectLink: '//www.github.com', tags: [Tag.OPENCV, Tag.PYTORCH, Tag.PYTHON], pictures: []}
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
