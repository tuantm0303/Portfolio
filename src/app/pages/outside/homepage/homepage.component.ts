import { Component, OnInit } from '@angular/core';
import { Profile, Project } from 'src/app/models';
import { ProfileService } from 'src/app/services/profile.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  profile: Profile = {
    id: 0,
    fullname: '',
    age: 0,
    position: '',
    about: '',
    cv: '',
  };

  projects!: Project[];

  constructor(
    private profileService: ProfileService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll() {
    // profile
    this.profileService.getProfile().subscribe((data_profile) => {
      this.profile = data_profile;
    });

    //projects
    this.projectService.getProjectLimit(1, 3).subscribe((data_projects) => {
      this.projects = data_projects;
    });
  }
}
