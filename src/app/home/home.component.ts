import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { ProjectServiceService } from '../_services/project-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectServiceService){
    this.titleService.setTitle('Aritra Dey - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0)
  }

}
