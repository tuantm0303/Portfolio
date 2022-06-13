import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "src/app/models";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-profile-form",
  templateUrl: "./profile-form.component.html",
  styleUrls: ["./profile-form.component.css"],
})
export class ProfileFormComponent implements OnInit {
  profile: Profile = {
    id: 0,
    fullname: "",
    age: 0,
    avatar: "",
    position: "",
    about: "",
    cv: "",
  };
  constructor(private profileService: ProfileService, private route: Router) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  submitForm() {
    this.profileService.updateProfile(this.profile).subscribe((data) => {
      this.route.navigateByUrl("admin/profile");
    });
  }
}
