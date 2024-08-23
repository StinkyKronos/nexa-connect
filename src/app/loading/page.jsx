import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Image src="/images/ripple.svg" alt="" width={128} height={128} />
    </div>
  );
};

export default LoadingPage;
