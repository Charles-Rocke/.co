// components/BrandImage.js

import Brand from "../assets/Brand.jpg";

function BrandImage() {
  return (
    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
      <div
        className="h-[100dvh] w-full"
        style={{
          backgroundImage: `url(${Brand})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

export default BrandImage;
