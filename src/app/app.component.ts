import { Component, ElementRef } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(overlayContainer: OverlayContainer, private _yo: ElementRef) {
    //  overlayContainer.getContainerElement().classList.add('packtil-dark-theme');
  }

  dark: boolean;
  ngOnInit() {
    if (localStorage.getItem("dark") == "true") {
      this.dark = true;
      this._yo.nativeElement.classList.add("packtil-dark-theme");
    } else {
      this.dark = false;
    }
  }

  cambioTema() {
    this.dark = !this.dark;
    if (this.dark) {
      this._yo.nativeElement.classList.add("packtil-dark-theme");
      localStorage.setItem("dark", "true");
    } else {
      this._yo.nativeElement.classList.remove("packtil-dark-theme");
      localStorage.setItem("dark", "false");
    }
  }
}
