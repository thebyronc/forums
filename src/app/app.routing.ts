import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ForumComponent } from './forum/forum.component';
import { PostDetailComponent }   from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
