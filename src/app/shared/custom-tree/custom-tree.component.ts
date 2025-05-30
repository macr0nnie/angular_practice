import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TreeNode {
  name: string;
  title: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-custom-tree',
  imports: [CommonModule],
  templateUrl: './custom-tree.component.html',
  styleUrl: './custom-tree.component.css',
})
export class CustomTreeComponent {
  @Input() data: TreeNode[] = [];
  //render data
  renderData(node: TreeNode): string {
    return `${node.name} - ${node.title}`;
  }
  
  selectedNode?: TreeNode;

setSelected(node: TreeNode) {
  this.selectedNode = node;
}
  //highlight node

  //search 

  //admin controlls
  //delete node
  //add node
  //edit node

  


}
