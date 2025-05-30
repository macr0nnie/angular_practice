import { Component } from '@angular/core';
import { CustomTreeComponent } from '../../shared/custom-tree/custom-tree.component';
import { TreeNode } from '../../shared/custom-tree/custom-tree.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-org-tree',
  imports: [CommonModule, CustomTreeComponent, FormsModule],
  templateUrl: './admin-org-tree.component.html',
  styleUrl: './admin-org-tree.component.css'
})
export class AdminOrgTreeComponent {

}
