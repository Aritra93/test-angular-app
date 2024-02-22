import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [ProjectCardComponent]
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular portfolio',
    summary: 'Angular based personal portfolio',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []
  };

  constructor(private titleService: Title){
    this.titleService.setTitle('Aritra Dey - Portfolio')
  }

}
