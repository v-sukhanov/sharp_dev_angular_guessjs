import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
	},
	{
		path: 'one',
		loadChildren: () => import('./modules/one/one.module').then(m => m.OneModule)
	},
	{
		path: 'two',
		loadChildren: () => import('./modules/two/two.module').then(m => m.TwoModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
