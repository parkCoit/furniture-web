import { Main } from "@/components/common/Main";
import * as THREE from "three";

export interface MainPageProps {}

const ThreePage = (props: MainPageProps) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  return <div className="p-4"></div>;
};

export default ThreePage;
