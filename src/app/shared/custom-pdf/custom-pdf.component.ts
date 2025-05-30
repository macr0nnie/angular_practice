import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-custom-pdf',
  imports: [],
  templateUrl: './custom-pdf.component.html',
  styleUrl: './custom-pdf.component.css'
})
export class CustomPdfComponent {
  @Input() pdfUrl: string ='';
  
  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = this.pdfUrl.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
