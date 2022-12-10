import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet-model';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'wormhole-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = []
  isLoading: boolean = false
  currentPage: number = 1
  pages: number[] = []

  constructor(private palnetsServcice: PlanetsService) { }
  ngOnInit(): void {
    this.gePlanets()
  }
  gePlanets(): void {
    this.isLoading = true
    this.palnetsServcice.getPlanets(this.currentPage).subscribe(p => {
      this.planets = p.results
      this.isLoading = false
      this.pages = Array(p.count / 10).fill('').map((p, i) => i + 1)
    })
  }
  setPage(id: number): void {
    this.currentPage = id
    this.gePlanets()
  }
}
