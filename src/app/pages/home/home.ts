import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopFooterComponent } from '../../components/top-footer/top-footer';
@Component({
  selector: 'dd-home',
  imports: [RouterLink, TopFooterComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // corregido: styleUrls en plural
})
export class Home implements AfterViewInit {
  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // Solo navegador

    const hero = this.el.nativeElement;

    const onScroll = () => {
      const offset = window.scrollY * 0.6; // intensidad parallax
      hero.style.setProperty('--parallax-offset', `${offset}px`);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}
