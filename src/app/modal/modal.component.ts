import { Component, Input, OnInit} from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  @Input() proj_details = {} as Project
  
  constructor(public modalService: ModalService){}

  ngOnInit(): void {
    
  }

  closeModal(){
    this.modalService.showModal = false
  }

}
