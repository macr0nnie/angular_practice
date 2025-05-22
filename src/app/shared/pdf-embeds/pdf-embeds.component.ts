import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-embeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-embeds.component.html',
  styleUrl: './pdf-embeds.component.css'
})
export class PdfEmbedsComponent {
  @Input() PDF_URL: string = "";
  safePdfUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.safePdfUrl = this.PDF_URL
      ? this.sanitizer.bypassSecurityTrustResourceUrl(this.PDF_URL)
      : null;
  }
}