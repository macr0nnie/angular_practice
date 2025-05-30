import { Routes } from '@angular/router';
import { PdfEmbedsComponent } from './shared/pdf-embeds/pdf-embeds.component';
import { MenuComponent } from './components/menu/menu.component';
import { TreeStructureComponent } from './components/tree-structure/tree-structure.component';
import { Component } from '@angular/core';
import { PdfListComponent } from './components/pdf-list/pdf-list.component';
import { EmployeesHomeComponent } from './components/employees-home/employees-home.component';
import { AdminOrgTreeComponent } from './features/admin-org-tree/admin-org-tree.component';

export const routes: Routes = [
  { path: 'pdf', component: PdfListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tree', component: TreeStructureComponent },
  { path: 'employees_home', component: EmployeesHomeComponent},
  {path:'admin', component: AdminOrgTreeComponent},
];
