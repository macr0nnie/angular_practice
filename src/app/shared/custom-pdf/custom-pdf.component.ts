import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-custom-pdf',
  imports: [],
  templateUrl: './custom-pdf.component.html',
  styleUrl: './custom-pdf.component.css'
})
export class CustomPdfComponent {
  @Input() pdfUrl: string ='';

}
