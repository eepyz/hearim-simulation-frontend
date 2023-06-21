// import { STLExporter } from "three/addons/exporters/STLExporter.js";
import { STLExporter } from "./STLExporter";

let exporter = new STLExporter();

const link = document.createElement("a");
link.style.display = "none";
document.body.appendChild(link);

class Exporter {
  constructor() {}
  save(blob, filename) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  saveString(text, filename) {
    this.save(new Blob([text], { type: "text/plain" }), filename);
  }

  saveArrayBuffer(buffer, filename) {
    this.save(
      new Blob([buffer], { type: "application/octet-stream" }),
      filename
    );
  }

  toASCIISTL(meshInfoList, currentBoundary) {
    const result = exporter.parse(meshInfoList, currentBoundary);
    this.saveString(result, "exportASCII.stl");
  }

  toBinarySTL(meshInfo) {
    const result = exporter.parse(meshInfo, { binary: true });
    this.saveArrayBuffer(result, "exportBinary.stl");
  }
}

export { Exporter };
