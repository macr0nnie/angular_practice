import { Routes } from '@angular/router';
import { PdfEmbedsComponent } from './shared/pdf-embeds/pdf-embeds.component';
import { MenuComponent } from './components/menu/menu.component';
import { TreeStructureComponent } from './components/tree-structure/tree-structure.component';
import { Component } from '@angular/core';
import { PdfListComponent } from './components/pdf-list/pdf-list.component';

export const routes: Routes = [
  { path: 'pdf', component: PdfListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tree', component: TreeStructureComponent },
];
