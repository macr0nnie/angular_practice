import { Component, Input } from '@angular/core';
export interface OrgNode {
  name: string;
  children?: OrgNode[];
}

@Component({
  selector: 'app-custom-tree',
  imports: [],
  templateUrl: './custom-tree.component.html',
  styleUrl: './custom-tree.component.css'
})
export class CustomTreeComponent {
  @Input() data: OrgNode[] = [];
  @Input() level: number = 0;
  @Input() isLast: boolean = false;
  @Input() isFirst: boolean = false;
  @Input() isRoot: boolean = false;
  @Input() isChild: boolean = false;
  @Input() isParent: boolean = false;
  @Input() isLeaf: boolean = false;
  @Input() isExpanded: boolean = false;
  @Input() isCollapsed: boolean = false;
  @Input() isSelected: boolean = false;



}
