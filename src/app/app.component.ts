import { Component, ElementRef, HostListener } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(overlayContainer: OverlayContainer, private _yo: ElementRef) {
    //  overlayContainer.getContainerElement().classList.add('packtil-dark-theme');
  }
  innerWidth;
  mode = "";
  dark: boolean;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 768) {
      this.mode = "side";
    } else {
      this.mode = "push";
    }
    console.log(this.mode);
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 768) {
      this.mode = "side";
    } else {
      this.mode = "push";
    }
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
