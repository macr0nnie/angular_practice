import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-embeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-embeds.component.html',
  styleUrl: './pdf-embeds.component.css',
})
export class PdfEmbedsComponent implements OnInit{
  @Input() PDF_URL: string = '';
  safePdfUrl: SafeResourceUrl | null = null;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.safePdfUrl = this.PDF_URL
      ? this.sanitizer.bypassSecurityTrustResourceUrl(this.PDF_URL)
      : null;
  }
  //ask
  ngOnInit(): void {
    //open the window with the pdf download link
    if (this.PDF_URL) {
      window.open(this.PDF_URL, '_blank');
  }
}
}
