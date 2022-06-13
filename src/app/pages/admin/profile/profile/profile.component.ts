import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/models";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    id: 0,
    fullname: "",
    age: 0,
    avatar: "",
    position: "",
    about: "",
    cv: "",
  };
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.onGet();
  }

  onGet() {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
}
