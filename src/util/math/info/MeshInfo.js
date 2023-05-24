import * as THREE from "three";
import { radToDeg } from "three/src/math/MathUtils";

class Vertex {
  constructor(point, normal, index) {
    this.point = point;
    this.normal = normal;
    this.index = index;
  }
}

class HalfEdge {
  constructor(n1, n2) {
    this.nodes = { tail: n1, head: n2 };
    this.twin = null;
    this.triangle = null;
  }
}

class Triangle {
  constructor() {
    this.abc = {};
    this.vertex = {};
    this.edge = [];
    this.normal = null;
    this.prev = null;
    this.next = null;
    this.triIndex = 0;
    this.twin = [];
  }
}

class MeshInfo {
  constructor(STLgeometry) {
    this.STLgeometry = STLgeometry; //original geometry
    this.surface = {};

    this.geoVertex = [];
    this.vertex = [];

    this.triangles = {};
    this.indices = [];

    this.first = null;
    this.final = null;

    this.edges = {};

    this.currentTriVertex = { a: null, b: null, c: null };

    this.arrowMesh = null;

    this.init();
  }

  init() {
    this.storeGeoInfo();
    // console.log(this);
  }

  storeGeoInfo() {
    const positionAttribute = this.STLgeometry.getAttribute("position");
    const normalAttribute = this.STLgeometry.getAttribute("normal");
    let vertexMap = {};
    let geoVertexMap = {};

    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3();
      const normal = new THREE.Vector3();

      vertex.fromBufferAttribute(positionAttribute, i);
      normal.fromBufferAttribute(normalAttribute, i);

      const { x, y, z } = vertex;

      const key = [vertex.x, vertex.y, vertex.z];

      let currentGeoVertex = new Vertex(vertex, normal, this.geoVertex.length);

      if (!(key in vertexMap)) {
        this.indices.push(this.vertex.length);
        vertexMap[key] = this.vertex.length;
        this.vertex.push(new Vertex(vertex, normal, this.vertex.length));
      } else {
        this.indices.push(vertexMap[key]);
      }

      if (!(key in geoVertexMap)) {
        geoVertexMap[key] = {};
        geoVertexMap[key][this.geoVertex.length] = currentGeoVertex;
      } else {
        geoVertexMap[key][this.geoVertex.length] = currentGeoVertex;
      }
      this.geoVertex.push(currentGeoVertex);
      this.storeGeoTriangles(currentGeoVertex);

      if (i === positionAttribute.count - 1) {
        vertexMap = {};
        geoVertexMap = {};
      }
    }
  }

  applyMatrix(matrix, vertex) {
    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    return function (matrix) {
      position.x = vertex.x;
      position.y = vertex.y;
      position.z = vertex.z;

      // rotation.x = vertex.x * 2 * Math.PI;
      // rotation.y = vertex.y * 2 * Math.PI;
      // rotation.z = vertex.z * 2 * Math.PI;

      quaternion.setFromEuler(rotation);

      scale.x = scale.y = scale.z = Math.random() * 1;

      matrix.compose(position, quaternion, scale);
    };
  }

  storeGeoTriangles(geoVertex) {
    let vertexIndex = geoVertex.index;

    if (vertexIndex % 3 === 0) {
      this.currentTriVertex.a = geoVertex;
    }

    if (vertexIndex % 3 === 1) {
      this.currentTriVertex.b = geoVertex;
    }

    if (vertexIndex % 3 === 2) {
      this.currentTriVertex.c = geoVertex;

      let face = new Triangle();

      if (this.first === null) {
        this.first = face;
      } else {
        this.final.next = this.first;
      }

      face.prev = this.final;
      face.next = this.first;
      this.first.prev = this.final;
      this.final = face;

      let aa = this.currentTriVertex.a;
      let bb = this.currentTriVertex.b;
      let cc = this.currentTriVertex.c;

      let h0 = new HalfEdge(aa, bb);

      let h1 = new HalfEdge(bb, cc);

      let h2 = new HalfEdge(cc, aa);

      face.abc = { a: aa.index, b: bb.index, c: cc.index };

      face.vertex = {
        a: this.currentTriVertex.a,
        b: this.currentTriVertex.b,
        c: this.currentTriVertex.c,
      };

      if (face.prev !== null) {
        face.triIndex = face.prev.triIndex + 1;
      }

      let va = this.currentTriVertex.a.point;
      let vb = this.currentTriVertex.b.point;
      let vc = this.currentTriVertex.c.point;

      const ab = [va.x, va.y, va.z, vb.x, vb.y, vb.z];
      const bc = [vb.x, vb.y, vb.z, vc.x, vc.y, vc.z];
      const ca = [vc.x, vc.y, vc.z, va.x, va.y, va.z];

      const ba = [vb.x, vb.y, vb.z, va.x, va.y, va.z];
      const cb = [vc.x, vc.y, vc.z, vb.x, vb.y, vb.z];
      const ac = [va.x, va.y, va.z, vc.x, vc.y, vc.z];

      const vaKey = [va.x, va.y, va.z];
      const vbKey = [vb.x, vb.y, vb.z];
      const vcKey = [vc.x, vc.y, vc.z];

      this.edges[ab] = {};
      this.edges[bc] = {};
      this.edges[ca] = {};

      this.edges[ab] = h0;
      this.edges[bc] = h1;
      this.edges[ca] = h2;

      this.edges[ab].triangle = face;
      this.edges[bc].triangle = face;
      this.edges[ca].triangle = face;

      face.edge.push(this.edges[ab], this.edges[bc], this.edges[ca]);

      let a = this.currentTriVertex.a.index;
      let b = this.currentTriVertex.b.index;
      let c = this.currentTriVertex.c.index;

      this.triangles[[a, b, c]] = face;

      let normalVector = new THREE.Vector3();
      new THREE.Triangle(
        new THREE.Vector3(va.x, va.y, va.z),
        new THREE.Vector3(vb.x, vb.y, vb.z),
        new THREE.Vector3(vc.x, vc.y, vc.z)
      ).getNormal(normalVector);

      face.normal = normalVector;

      if (ba in this.edges) {
        this.edges[ab].twin = this.edges[ba];
        this.edges[ab].triangle.twin.push(this.edges[ba].triangle);
        this.edges[ba].triangle.twin.push(this.edges[ab].triangle);
      }

      if (cb in this.edges) {
        this.edges[bc].twin = this.edges[cb];
        this.edges[bc].triangle.twin.push(this.edges[cb].triangle);
        this.edges[cb].triangle.twin.push(this.edges[bc].triangle);
      }

      if (ac in this.edges) {
        this.edges[ca].twin = this.edges[ac];
        this.edges[ca].triangle.twin.push(this.edges[ac].triangle);
        this.edges[ac].triangle.twin.push(this.edges[ca].triangle);
      }

      this.currentTriVertex = { a: null, b: null, c: null };
    }
    // return this;
  }

  makeInstancedArrow(matrix) {
    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    return function (matrix) {
      position.x = Math.random() * 40 - 20;
      position.y = Math.random() * 40 - 20;
      position.z = Math.random() * 40 - 20;

      rotation.x = Math.random() * 2 * Math.PI;
      rotation.y = Math.random() * 2 * Math.PI;
      rotation.z = Math.random() * 2 * Math.PI;

      quaternion.setFromEuler(rotation);

      scale.x = scale.y = scale.z = Math.random() * 1;

      matrix.compose(position, quaternion, scale);
    };
  }

  getTriangle(a, b, c) {
    return this.triangles[[a, b, c]];
  }

  getTwinTriangle(a, b, c) {
    return this.triangles[[a, b, c]].twin;
  }

  getAngleBetween(n1, n2) {
    let angle = Math.round(radToDeg(n1.angleTo(n2)) / 10) * 10;
    return angle;
  }
}
export default MeshInfo;
