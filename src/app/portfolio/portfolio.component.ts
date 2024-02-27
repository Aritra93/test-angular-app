import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgFor } from '@angular/common';
import { ProjectServiceService } from '../_services/project-service.service';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [ProjectCardComponent, NgFor]
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectServiceService){
    this.titleService.setTitle('Aritra Dey - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

}
