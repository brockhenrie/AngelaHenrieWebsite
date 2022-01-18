import { BlogDataService } from './blog-data.service';
import { BlogEditPostComponent } from './blog-edit-post/blog-edit-post.component';
import { BlogCreatePostComponent } from './blog-create-post/blog-create-post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { blogRoutingModule } from './blogRouting.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogPostComponent,
    BlogCreatePostComponent,
    BlogEditPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    blogRoutingModule
  ],
  exports: [
    BlogComponent,
    BlogListComponent,
    BlogPostComponent,
    BlogCreatePostComponent,
    BlogEditPostComponent
  ],
  providers: [
    BlogDataService
  ]
})
export class BlogModule { }
