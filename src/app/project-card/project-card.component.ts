import { Component, Input, Output } from '@angular/core';
import { Project } from '../models/project';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../_services/modal.service';
import { ProjectServiceService } from '../_services/project-service.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, ModalComponent, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  project_details = {} as Project;

  @Output() modalEvent = new EventEmitter<Project>();

  constructor(public modalService: ModalService, public projectService: ProjectServiceService){

  }

  openModal(id: number){
    this.project_details = this.projectService.GetProjectById(id);
    this.modalEvent.emit(this.project_details);
  }

  /*openModal(id: number){
    this.modalService.showModal = true
    this.project_details = this.projectService.GetProjectById(id);
    console.log(this.project_details.name);
  }*/

  closeModal(){
    this.modalService.showModal = false
  }
}
