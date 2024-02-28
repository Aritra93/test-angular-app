import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ModalComponent } from '../modal/modal.component';
import { NgFor, NgIf } from '@angular/common';
import { ProjectServiceService } from '../_services/project-service.service';
import { ModalService } from '../_services/modal.service';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [ProjectCardComponent, NgFor, NgIf, ModalComponent]
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectServiceService, public modalService: ModalService){
    this.titleService.setTitle('Aritra Dey - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  project_details = {} as Project;
  receiveModalData($event: Project){
    this.modalService.showModal = true;
    this.project_details = $event;
  }

}
