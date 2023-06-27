import { useEffect, useRef, useState, Fragment } from "react";

import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import styles from "../../../../assets/css/Simulation.module.css";

import GuiSettings from "./primary/GuiSettings";
import Model from "./primary/Model";
import Plane from "./primary/Plane";

const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 20000,
  position: [0, 13, 30],
};

const GUIView = () => {
  const [url, setUrl] = useState("/models/duct_matched_ascii.stl");
  // const [url, setUrl] = useState("/models/Manfold_solid_ascii.stl");
  const [stlGeometry, setGeometry] = useState(useLoader(STLLoader, url));

  const changeSTLfile = async (e) => {
    const loader = new STLLoader();
    const uploadFile = e.target.files[0];
    const fileReader = new FileReader();

    const readFile = () => {
      return new Promise((resolve, reject) => {
        fileReader.onload = function (e) {
          const target = e.target;
          let geometry = loader.parse(target.result);
          resolve(geometry);
          setGeometry(geometry);
        };

        fileReader.onerror = function (e) {
          reject(e);
        };
        fileReader.readAsArrayBuffer(uploadFile);
      });
    };

    try {
      await readFile();

      if (THREE.Cache) {
        THREE.Cache.clear();
      }
    } catch (error) {
      console.error(error);
    }
  };

  //view
  return (
    <Fragment>
      <Canvas camera={cameraConfig} raycaster shadows>
        <GuiSettings />
        <Model stlGeometry={stlGeometry} />
        {/* <Plane /> */}
      </Canvas>
      <div className={styles["file-change"]}>
        <button>
          <label htmlFor="stlfile">
            <span className={"material-symbols-outlined " + styles["icons"]}>
              folder_supervised
            </span>
          </label>
          <input type="file" onChange={changeSTLfile} id="stlfile" />
        </button>
      </div>
    </Fragment>
  );
};
export default GUIView;
