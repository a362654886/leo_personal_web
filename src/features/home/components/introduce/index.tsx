import BallModal from "@/components/BallModal";
import CanvasLoader from "@/components/CanvasLoader";
import { FC, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ImgBgModal from "@/components/ImgBgModal";
import moon from "@/assets/moon.png";
import Image from "next/image";

export const imageUrls = [
  "css.png",
  "html.png",
  "mongodb.png",
  "react.png",
  "redux.png",
  "typescript.png",
  "nodejs.png",
];

const Introduction: FC = () => {
  const getImgBgCanvas = () => {
    return (
      <div className="w-[40%] min-w-[300px] relative">
        <ImgBgModal />
        <Image
          src={moon}
          alt=""
          className="w-[370px] h-[370px] object-contain absolute top-12 bottom-0 left-0 right-0 mx-auto animate-[animate_2s_infinite_ease_alternate]"
        />
      </div>
    );
  };

  const getBallCanvas = (img: string, key: number) => {
    return (
      <div key={key}>
        <div key={key}>
          <Canvas
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <BallModal position={[0, 0, 0]} url={img} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-[80vh] pl-[50px] items-center">
      <div className="w-[60%] min-h-[600px]">
        <h3 className="text-white text-[35px]">{`Hi, I'm Leo Lu`}</h3>
        <p className="text-[#d766f5] text-[24px] font-bold  left-0">
          an experienced and results-driven full-stack developer, skilled in
          crafting effective websites and applications. A technically proficient
          problem-solver with a calm and focused demeanour. Seeking new
          challenges to further improve and grow with a leading company.
        </p>
        <div className="flex flex-wrap space-x-4">
          {imageUrls.map((item, index) => getBallCanvas(item, index))}
        </div>
      </div>
      {getImgBgCanvas()}
    </div>
  );
};
export default Introduction;
