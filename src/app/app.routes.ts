import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { PostsComponent } from './components/posts/posts.component';
import { SavedpostsComponent } from './components/savedposts/savedposts.component';
import { ViewpostdetailsComponent } from './components/viewpostdetails/viewpostdetails.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'editProfile', component: EditprofileComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'savedPosts', component: SavedpostsComponent},
    {path: 'viewPostDetails', component: ViewpostdetailsComponent},
];
