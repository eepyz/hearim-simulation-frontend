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
        selected: true,
        value: "",
      },
      tangentialV: {
        selected: false,
        value: "",
      },
      cartesianV: {
        selected: false,
        Xvalue: "",
        Yvalue: "",
        Zvalue: "",
      },
    },
    adiabatic: { selected: true },
    constantST: {
      selected: false,
      temperature: "",
    },
    ambientT: {
      selected: false,
      highT: {
        selected: true,
        value: "",
        radiative: {
          selected: false,
          value: "",
        },
      },
      naturalV: {
        selected: false,
        value: "",
        convective: {
          selected: false,
          value: "",
        },
      },
      highV: {
        selected: false,
        value: "",
        convective: {
          selected: false,
          value: "",
        },
      },
    },
  },
  inflow: {
    selected: false,
    user: {
      selected: true,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    air: {
      selected: false,
      //설정값 따로
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    nitrogetn: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    waterVapor: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    carbonDioxide: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    argon: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    n2: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    o2: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    h2o: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    co2: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    ar: {
      selected: false,
      density: "",
      viscosity: "",
      cp: "",
      thermalC: "",
    },
    inflowP: {
      selected: true,
      inflowT: "",
      staticP: "",
      normalV: {
        selected: true,
        value: "",
      },
      cartesianV: {
        selected: false,
        Xvalue: "",
        Yvalue: "",
        Zvalue: "",
      },
    },
  },
  outflow: {
    selected: false,
    outflowP: {
      selected: true,
      staticP: "",
      normalSV: {
        selected: true,
        value: "",
      },
      cartesianV: {
        selected: false,
        Xvalue: "",
        Yvalue: "",
        Zvalue: "",
      },
    },
  },
  farField: { selected: false },
  symmetry: { selected: false },
};
export default Boundary;
