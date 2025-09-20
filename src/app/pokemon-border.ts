import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getPokemonColor } from './pokemon.model';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true,
})
export class PokemonBorder {
  pokemonType = input.required<string>();
  private initialColor: string;

  constructor(private element: ElementRef) {
    this.initialColor = this.element.nativeElement.style.borderColor;
    this.element.nativeElement.style.borderWidth = '2px';
    this.element.nativeElement.style.transition = '0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    const color = getPokemonColor(this.pokemonType());
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLease() {
    const color = this.initialColor;
    this.setBorder(color);
  }

  private setBorder(color: string) {
    this.element.nativeElement.style.borderColor = color;
  }
}
