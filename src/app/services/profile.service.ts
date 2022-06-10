import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../models';

const apiUrl = 'http://localhost:3000/profile';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile>(apiUrl);
  }

  updateProfile(profile: Profile) {
    return this.http.patch<Profile>(`${apiUrl}`, profile);
  }
}
