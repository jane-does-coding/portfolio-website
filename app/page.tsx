import Image from "next/image";
import { Content } from "./components/Content/Content";
import Scene2 from "./components/Hero Section/Scene2";
import Parallax from "./components/ParallaxScroll/Parallax";

export default function Home() {
  return (
    <h1 className="text-[5rem]">
      <Scene2 />
      <Parallax />
    </h1>
  );
}
