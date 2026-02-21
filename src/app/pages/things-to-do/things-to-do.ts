import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopFooterComponent } from '../../components/top-footer/top-footer';

@Component({
  selector: 'dd-things-to-do',
  imports: [RouterLink, TopFooterComponent],
  templateUrl: './things-to-do.html',
  styleUrl: './things-to-do.css',
})
export class ThingsToDo {}
