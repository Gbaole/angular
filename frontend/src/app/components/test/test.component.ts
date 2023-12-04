import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  authorKey: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the authorKey from the route parameters
    this.route.params.subscribe(params => {
      this.authorKey = params['id'];
      // Perform any other initialization logic with the authorKey if needed
    });
  }
}
