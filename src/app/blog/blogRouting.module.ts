import { AuthService } from 'src/app/auth/auth.service';
import { BlogEditPostComponent } from './blog-edit-post/blog-edit-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreatePostComponent } from './blog-create-post/blog-create-post.component';



const routes: Routes = [

  {path:'', component: BlogComponent, children:[
    {path:'', redirectTo:'posts', pathMatch:'full'},
    {path:'posts', component: BlogListComponent},
    {path:'addPost', component: BlogCreatePostComponent, canActivate:[AuthService]},
    {path:'post/:id', component: BlogPostComponent},
    {path:'post/:id/edit', component: BlogEditPostComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class blogRoutingModule { }
