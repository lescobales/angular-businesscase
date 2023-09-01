import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from './guard/auth/auth.guard';
import {AccountComponent} from './view/account/account.component';
import {CollectionAddComponent} from './view/collection-add/collection-add.component';
import {CollectionEditComponent} from './view/collection-edit/collection-edit.component';
import {CollectionListComponent} from './view/collection-list/collection-list.component';
import {GalleryComponent} from './view/gallery/gallery.component';
import {HomeComponent} from './view/home/home.component';
import {InscriptionComponent} from './view/inscription/inscription.component';
import {LoginComponent} from './view/login/login.component';
import {NftAddComponent} from './view/nft-add/nft-add.component';
import {NftEditComponent} from './view/nft-edit/nft-edit.component';
import {NftListComponent} from './view/nft-list/nft-list.component';
import {UserEditComponent} from './view/user-edit/user-edit.component';
import {UserListComponent} from './view/user-list/user-list.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'home', component: HomeComponent},
	{path: 'user-list', component: UserListComponent},
	{path: 'collection-list', component: CollectionListComponent},
	{path: 'nft-list', component: NftListComponent},
	{path: 'login', component: LoginComponent},
	{path: 'inscription', component: InscriptionComponent},
	{
		path: 'user', canActivate: [authGuard], children: [
			{path: 'account', component: AccountComponent},
			{path: 'gallery', component: GalleryComponent},
			{path: 'edit-nft', component: NftEditComponent},
			{path: 'add-nft', component: NftAddComponent},
			{path: 'edit-collection', component: CollectionEditComponent},
			{path: 'add-collection', component: CollectionAddComponent},
			{path: 'edit-user', component: UserEditComponent}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
