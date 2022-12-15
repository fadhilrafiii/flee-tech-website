import ArrowDownIcon from "components/icons/arrow-down";
import LinkButton from "components/link-button";
import { useRef } from "react";

const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex flex-col w-full min-h-screen justify-center items-center">
      <div className="h-100-parent">
        <video
          poster="/images/video-callback.jpg"
          ref={videoRef}
          className="h-full w-full object-cover"
          loop
          autoPlay
          playsInline
          preload="metadata"
          muted
        >
          <source src="videos/landing.mp4#t=0.5" type="video/mp4" />
          Your browser does not support video
        </video>
      </div>
      <div className="h-100-parent bg-black bg-opacity-30" />
      <div className="relative w-full p-6 lg:p-10 flex-grow flex flex-col justify-center items-center lg:items-start min-h-[400px]">
        <h1
          style={{ lineHeight: 1.3 }}
          className="text-white text-5xl md:text-6xl text-center lg:text-left capitalize md:max-w-[758px] my-auto pt-[50px]"
        >
          We solve problem for design & develop software to increase your
          business value
        </h1>
      </div>
      <div className="relative hidden md:flex flex-wrap z-10">
        <div className="flex-grow p-10 blur-22-white-10 basis-[40%] min-w-[360px] lg:min-w-[450px] w-full">
          <h3 className="text-white text-3xl mb-14">
            Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus ut
            morbi egestas.
          </h3>
          <LinkButton href="/">Lorem ipsum dolor</LinkButton>
        </div>
        <div className="flex-grow flex basis-[60%] w-full">
          <div className="flex flex-col">
            <div className="flex-grow p-5 blur-22-white-10 text-white text-2xl">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="p-5 text-white text-2xl blur-5-white-10">
              <LinkButton href="/" className="mb-4">
                Lorem ipsum dolor
              </LinkButton>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow p-5 blur-22-white-10 text-white text-2xl">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="p-5 text-white text-2xl blur-5-white-10">
              <LinkButton href="/" className="mb-4">
                Lorem ipsum dolor
              </LinkButton>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow p-5 blur-22-white-10 text-white text-2xl">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="p-5 text-white text-2xl blur-5-white-10">
              <LinkButton href="/" className="mb-4">
                Lorem ipsum dolor
              </LinkButton>
              <div>
                Lorem ipsum dolor sit amet consectetur. Vitae ultrices cursus{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="inset-x-center bottom-0 m-auto inline-block md:hidden p-4">
        <ArrowDownIcon size={24} />
      </span>
    </div>
  );
};

export default Landing;
