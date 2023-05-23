class BoundaryInfo {
  constructor() {
    (this.id = null),
      (this.triangle = {}),
      (this.boundary = {
        wall: {
          selected: true,
          nearWallZeroV: { selected: true },
          nearWallV: { selected: false },
          wallV: {
            selected: false,
            normalV: {
              selected: false,
              value: null,
            },
            tangentialV: {
              selected: false,
              value: null,
            },
            cartesianV: {
              selected: false,
              Xvalue: null,
              Yvalue: null,
              Zvalue: null,
            },
          },
          adiabatic: { selected: true },
          constantST: {
            selected: false,
            temperature: null,
          },
          ambientT: {
            selected: false,
            highT: {
              selected: false,
              value: null,
              radiative: {
                selected: false,
                value: null,
              },
            },
            naturalV: {
              selected: false,
              value: null,
              convective: {
                selected: false,
                value: null,
              },
            },
            highV: {
              selected: false,
              value: null,
              convective: {
                selected: false,
                value: null,
              },
            },
          },
        },
        inflow: {
          selected: false,
          user: {
            selected: true,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          air: {
            selected: false,
            //설정값 따로
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          nitrogetn: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          waterVapor: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          carbonDioxide: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          argon: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          n2: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          o2: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          h2o: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          co2: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          ar: {
            selected: false,
            density: null,
            viscosity: null,
            cp: null,
            thermalC: null,
          },
          inflowP: {
            selected: true,
            inflowT: null,
            staticP: null,
            normalV: {
              selected: false,
              value: null,
            },
            cartesianV: {
              selected: false,
              Xvalue: null,
              Yvalue: null,
              Zvalue: null,
            },
          },
        },
        outflow: {
          selected: false,
          outflowP: {
            selected: true,
            staticP: null,
            normalSV: {
              selected: false,
              value: null,
            },
            cartesianV: {
              selected: false,
              Xvalue: null,
              Yvalue: null,
              Zvalue: null,
            },
          },
        },
        farField: { selected: false },
        symmetry: { selected: false },
      });
  }

  storeBType(wall, inflow, outflow, farField, symmetry) {
    this.boundary.wall.selected = wall;
    this.boundary.inflow.selected = inflow;
    this.boundary.outflow.selected = outflow;
    this.boundary.farField.selected = farField;
    this.boundary.symmetry.selected = symmetry;
  }

  storeWallVelocity(nearWallZeroV, nearWallV, wallV) {
    this.boundary.wall.nearWallZeroV.selected = nearWallZeroV;
    this.boundary.wall.nearWallV.selected = nearWallV;
    this.boundary.wall.wallV.selected = wallV;
  }

  storeWallTemperature(adiabatic, ambientT, constantST) {
    this.boundary.wall.adiabatic.selected = adiabatic;
    this.boundary.wall.ambientT.selected = ambientT;
    this.boundary.wall.constantST.selected = constantST;
  }

  storeBoundarySetValues(id, value) {
    if (id === "wallV-nv") {
      this.boundary.wall.wallV.normalV.value = value;
    } else if (id === "wallV-tv") {
      this.boundary.wall.wallV.tangentialV.value = value;
    } else if (id === "wallV-cv-x") {
      this.boundary.wall.wallV.cartesianV.Xvalue = value;
    } else if (id === "wallV-cv-y") {
      this.boundary.wall.wallV.cartesianV.Yvalue = value;
    } else if (id === "wallV-cv-z") {
      this.boundary.wall.wallV.cartesianV.Zvalue = value;
    } else if (id === "ambientT-highT") {
      this.boundary.wall.ambientT.highT.value = value;
    } else if (id === "highT-radiative") {
      this.boundary.wall.ambientT.highT.radiative.value = value;
    } else if (id === "ambientT-naturalV") {
      this.boundary.wall.ambientT.naturalV.value = value;
    } else if (id === "naturalV-convective") {
      this.boundary.wall.ambientT.naturalV.convective.value = value;
    } else if (id === "ambientT-highV") {
      this.boundary.wall.ambientT.highV.value = value;
    } else if (id === "highV-convective") {
      this.boundary.wall.ambientT.highV.convective.value = value;
    } else if (id === "constantST-t") {
      this.boundary.wall.constantST.temperature = value;
    } else if (id === "fluidUser-density") {
      this.boundary.inflow.user.density = value;
    } else if (id === "fluidUser-viscosity") {
      this.boundary.inflow.user.viscosity = value;
    } else if (id === "fluidUser-cp") {
      this.boundary.inflow.user.cp = value;
    } else if (id === "fluidUser-thermal") {
      this.boundary.inflow.user.thermalC = value;
    } else if (id === "inflowP-inflowT") {
      this.boundary.inflow.inflowP.inflowT = value;
    } else if (id === "inflowP-sp") {
      this.boundary.inflow.inflowP.staticP = value;
    } else if (id === "inflowP-nv") {
      this.boundary.inflow.inflowP.normalV.value = value;
    } else if (id === "inflowP-cv-x") {
      this.boundary.inflow.inflowP.cartesianV.Xvalue = value;
    } else if (id === "inflowP-cv-y") {
      this.boundary.inflow.inflowP.cartesianV.Yvalue = value;
    } else if (id === "inflowP-cv-z") {
      this.boundary.inflow.inflowP.cartesianV.Zvalue = value;
    } else if (id === "outflowP-sp") {
      this.boundary.outflow.outflowP.staticP = value;
    } else if (id === "outflowP-nsv") {
      this.boundary.outflow.outflowP.normalSV.value = value;
    } else if (id === "outflowP-cv-x") {
      this.boundary.outflow.outflowP.cartesianV.Xvalue = value;
    } else if (id === "outflowP-cv-y") {
      this.boundary.outflow.outflowP.cartesianV.Yvalue = value;
    } else if (id === "outflowP-cv-z") {
      this.boundary.outflow.outflowP.cartesianV.Zvalue = value;
    }
  }

  getId() {
    return this.id;
  }

  getInfo() {
    return {
      boundary: this.boundary,
    };
  }
}

export default BoundaryInfo;
