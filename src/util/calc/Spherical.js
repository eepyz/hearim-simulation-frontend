import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";

class Spherical {
  constructor(radius, phi = 0, theta = 0) {
    this.radius = radius;
    this.phi = phi; // polar angle
    this.theta = theta; // azimuthal angle

    return this;
  }

  set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;

    return this;
  }

  copy(other) {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;

    return this;
  }

  // restrict phi to be betwee EPS and PI-EPS
  makeSafe() {
    const EPS = 0.000001;
    this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));

    return this;
  }

  setFromVector3(v) {
    return this.setFromCartesianCoords(v.x, v.y, v.z);
  }

  setFromCartesianCoords(x, y, z) {
    this.radius = Math.sqrt(x * x + y * y + z * z);

    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.acos(z / this.radius);
      this.phi = this.vangletan2(x / this.radius, y / this.radius);
    }

    return this;
  }

  clone() {
    return new this.constructor().copy(this);
  }

  vangletan2(x, y) {
    if (y >= 0.0) {
      return Math.atan2(y, x);
    } else {
      return Math.atan2(y, x) + 2.0 * Math.PI;
    }
  }

  getVector3(thetaD, phiD) {
    let thetaR = degToRad(thetaD);
    let phiR = degToRad(phiD);
    let x = this.radius * Math.sin(thetaR) * Math.cos(phiR);
    let y = this.radius * Math.sin(thetaR) * Math.sin(phiR);
    let z = this.radius * Math.cos(thetaR);

    return new THREE.Vector3(x, y, z);
  }

  indicatorInside(thetaD, phiD) {
    let thetaR = degToRad(thetaD);
    let phiR = degToRad(phiD);
    let x = this.radius * Math.sin(thetaR) * Math.cos(phiR);
    let y = this.radius * Math.sin(thetaR) * Math.sin(phiR);
    let z = this.radius * Math.cos(thetaR);

    return new THREE.Vector3(x, y, z);
  }
}

export default Spherical;
