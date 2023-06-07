const Boundary = {
  id: null,
  triangle: {},
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
};
export default Boundary;
