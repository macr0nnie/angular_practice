import { Component, Input } from '@angular/core';
import { CustomTreeComponent } from '../../shared/custom-tree/custom-tree.component';
import { TreeNode } from '../../shared/custom-tree/custom-tree.component';

@Component({
  selector: 'app-tree-structure',
  imports: [CustomTreeComponent],
  templateUrl: './tree-structure.component.html',
  styleUrl: './tree-structure.component.css',
})

export class TreeStructureComponent {
  //please give me an array of the tree node
  treeData: TreeNode[] = [
    {
      name: 'Alice',
      title: 'CEO',
      children: [
        {
          name: 'Bob',
          title: 'CTO',
          children: [
            { name: 'Carol', title: 'Dev' },
            { name: 'Dave', title: 'DevOps' },
          ],
        },
        {
          name: 'Eve',
          title: 'CFO',
        },
      ],
    },
  ];
}
