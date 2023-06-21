import * as THREE from "three";
import { Vector3 } from "three";

//oneMesh
class STLExporter {
  parse(meshInfoList, currentBoundary, options = {}) {
    options = Object.assign(
      {
        binary: false,
      },
      options
    );

    const binary = options.binary;

    let output = "";
    let surfaceIndices = [];
    let len = meshInfoList.length;
    let meshInfo;

    for (let i = 0; i < len; i++) {
      let triangles = 0;
      let offset = 80; // skip header

      if (binary === true) {
        const bufferLength = triangles * 2 + triangles * 3 * 4 * 4 + 80 + 4;
        const arrayBuffer = new ArrayBuffer(bufferLength);
        output = new DataView(arrayBuffer);
        output.setUint32(offset, triangles, true);
        offset += 4;
      } else {
        output += "solid exported mesh " + i + "\n";
      }

      //other faces
      meshInfo = meshInfoList[i];
      let il = meshInfo.indices.length;
      triangles += il / 3;
      for (let j = 0; j < il / 3; j++) {
        const a = meshInfo.indices[3 * j];
        const b = meshInfo.indices[3 * j + 1];
        const c = meshInfo.indices[3 * j + 2];

        if (currentBoundary.meshNum === i && j in currentBoundary.triangle) {
          output += "";
          surfaceIndices.push(a, b, c);
        } else {
          writeFace(a, b, c);
        }
      }

      if (binary === false) {
        output += "endsolid exported\n";
      }
    }

    let triangles = 0;
    let offset = 80; // skip header

    if (binary === true) {
      const bufferLength = triangles * 2 + triangles * 3 * 4 * 4 + 80 + 4;
      const arrayBuffer = new ArrayBuffer(bufferLength);
      output = new DataView(arrayBuffer);
      output.setUint32(offset, triangles, true);
      offset += 4;
    } else {
      output += "solid exported surface" + "\n";
    }
    //CurrentSurface
    meshInfo = meshInfoList[currentBoundary.meshNum - 1];
    let sl = surfaceIndices.length;

    triangles += sl / 3;

    for (let j = 0; j < sl / 3; j++) {
      const a = surfaceIndices[3 * j];
      const b = surfaceIndices[3 * j + 1];
      const c = surfaceIndices[3 * j + 2];
      writeFace(a, b, c);
    }
    if (binary === false) {
      output += "endsolid exported\n";
    }

    function writeFace(a, b, c) {
      // let triangles
      let vA = meshInfo.vertex[a].point;
      let vB = meshInfo.vertex[b].point;
      let vC = meshInfo.vertex[c].point;

      writeNormal(vA, vB, vC);

      writeVertex(vA);
      writeVertex(vB);
      writeVertex(vC);

      if (binary === true) {
        output.setUint16(offset, 0, true);
        offset += 2;
      } else {
        output += "\t\tendloop\n";
        output += "\tendfacet\n";
      }
    }

    function writeNormal(vA, vB, vC) {
      //Calculate Face Normal
      let normal = new THREE.Vector3();
      new THREE.Triangle(
        new THREE.Vector3(vA.x, vA.y, vA.z),
        new THREE.Vector3(vB.x, vB.y, vB.z),
        new THREE.Vector3(vC.x, vC.y, vC.z)
      ).getNormal(normal);

      if (binary === true) {
        output.setFloat32(offset, x, true);
        offset += 4;
        output.setFloat32(offset, y, true);
        offset += 4;
        output.setFloat32(offset, z, true);
        offset += 4;
      } else {
        output +=
          "\tfacet normal " + normal.x + " " + normal.y + " " + normal.z + "\n";
        output += "\t\touter loop\n";
      }
    }

    function writeVertex(vertex) {
      if (binary === true) {
        output.setFloat32(offset, vertex.x, true);
        offset += 4;
        output.setFloat32(offset, vertex.y, true);
        offset += 4;
        output.setFloat32(offset, vertex.z, true);
        offset += 4;
      } else {
        output +=
          "\t\t\tvertex " + vertex.x + " " + vertex.y + " " + vertex.z + "\n";
      }
    }
    return output;
  }
}

export { STLExporter };
