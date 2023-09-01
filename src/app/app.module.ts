import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './view/home/home.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { CollectionListComponent } from './view/collection-list/collection-list.component';
import { NftListComponent } from './view/nft-list/nft-list.component';
import { NftDetailsComponent } from './view/nft-details/nft-details.component';
import { LoginComponent } from './view/login/login.component';
import { InscriptionComponent } from './view/inscription/inscription.component';
import { AccountComponent } from './view/account/account.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { NftEditComponent } from './view/nft-edit/nft-edit.component';
import { NftAddComponent } from './view/nft-add/nft-add.component';
import { CollectionAddComponent } from './view/collection-add/collection-add.component';
import { CollectionEditComponent } from './view/collection-edit/collection-edit.component';
import { UserEditComponent } from './view/user-edit/user-edit.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import { CardComponent } from './component/card/card.component';
import { NftFormComponent } from './component/nft-form/nft-form.component';
import { CollectionFormComponent } from './component/collection-form/collection-form.component';
import { SearchComponent } from './component/search/search.component';
import { PaginatorComponent } from './component/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    CollectionListComponent,
    NftListComponent,
    NftDetailsComponent,
    LoginComponent,
    InscriptionComponent,
    AccountComponent,
    GalleryComponent,
    NftEditComponent,
    NftAddComponent,
    CollectionAddComponent,
    CollectionEditComponent,
    UserEditComponent,
    HeaderComponent,
    FooterComponent,
    AccountFormComponent,
    CardComponent,
    NftFormComponent,
    CollectionFormComponent,
    SearchComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
