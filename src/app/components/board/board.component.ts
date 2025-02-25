import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { Hexagon } from "../../models/hex";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrl: "./board.component.scss",
})
export class BoardComponent implements AfterViewInit {
  gridOptions = {};
  hexagons: Hexagon[] = [];
  selectedHex: Hexagon | null = null;

  ctx!: CanvasRenderingContext2D | null;
  constructor(private cd: ChangeDetectorRef) {}
  @ViewChild("board") board: ElementRef<HTMLCanvasElement> | undefined;

  ngAfterViewInit(): void {
    this.generateBoard();
  }

  generateBoard(): void {
    if (this.board) {
      this.ctx = this.board.nativeElement.getContext("2d");
      if (this.ctx) {
        const radius = 80;
        const rows = 10;
        const cols = 10;

        const height = Math.sqrt(2.4) * radius;
        const width = 2.4 * radius;

        const horizontalSpacing = width * 0.75;
        const verticalSpacing = height;

        const canvasWidth = cols * horizontalSpacing + width / 4;
        const canvasHeight = (rows + 0.5) * verticalSpacing;
        this.board.nativeElement.width = canvasWidth;
        this.board.nativeElement.height = canvasHeight;

        // Clear canvas
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Create and store hexagons
        this.hexagons = [];
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x =
              col * horizontalSpacing + ((row % 2) * horizontalSpacing) / 2;
            const y = row * height;
            const centerX = x + radius;
            const centerY = y + radius;

            this.hexagons.push({
              id: `${row}-${col}`,
              x: centerX,
              y: centerY,
              radius,
              selected: false,
              centerX,
              centerY,
            });
          }
        }

        this.drawHexagons();
      }
    }
  }

  private drawHexagons(): void {
    if (!this.ctx) return;

    // Clear canvas
    this.ctx.clearRect(
      0,
      0,
      this.board?.nativeElement.width || 0,
      this.board?.nativeElement.height || 0,
    );

    this.hexagons.forEach((hex) => {
      this.drawHexagon(hex);
    });
  }

  private drawHexagon(hex: Hexagon): void {
    if (!this.ctx) return;

    const angleOffset = Math.PI / 6;
    this.ctx.beginPath();

    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3 + angleOffset;
      const xPoint = hex.x + hex.radius * Math.cos(angle);
      const yPoint = hex.y + hex.radius * Math.sin(angle);

      if (i === 0) {
        this.ctx.moveTo(xPoint, yPoint);
      } else {
        this.ctx.lineTo(xPoint, yPoint);
      }
    }
    this.ctx.closePath();

    // Fill hexagon - different color if selected
    this.ctx.fillStyle = hex.selected ? "#a0a0ff" : "#f0f0f0";
    this.ctx.fill();

    // Draw border
    this.ctx.strokeStyle = hex.selected ? "#0000ff" : "#000000";
    this.ctx.lineWidth = hex.selected ? 2 : 1;
    this.ctx.stroke();

    // Draw hex ID
    this.ctx.fillStyle = "#000000";
    this.ctx.font = "12px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(hex.id, hex.x, hex.y);
  }

  onCanvasClick(event: MouseEvent): void {
    if (!this.board) return;

    const rect = this.board.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Find clicked hexagon
    const clickedHex = this.findClickedHexagon(x, y);

    if (clickedHex) {
      // Toggle selection
      if (this.selectedHex) {
        this.selectedHex.selected = false;
      }
      clickedHex.selected = !clickedHex.selected;
      this.selectedHex = clickedHex.selected ? clickedHex : null;

      console.log(`Clicked hex: ${clickedHex.id}`);
      this.drawHexagons();
    }
  }

  private findClickedHexagon(x: number, y: number): Hexagon | undefined {
    return this.hexagons.find((hex) => {
      const distance = Math.sqrt(
        Math.pow(x - hex.centerX, 2) + Math.pow(y - hex.centerY, 2),
      );
      return distance <= hex.radius;
    });
  }
}
