import React, { useState, useEffect } from "react";

const banners = [
  "https://oss.arbpay.me/vc-upload-1756352289001-14.jpg",
  "https://oss.arbpay.me/vc-upload-1755574558423-13.jpg",
  "https://arb-new-pay.oss-ap-southeast-1.aliyuncs.com/vc-upload-1714420019523-2.png",
  "https://arb-new-pay.oss-ap-southeast-1.aliyuncs.com/vc-upload-1714420019523-5.png",
  "https://oss.arbpay.me/vc-upload-1756309821773-29.jpg"
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={banners[currentIndex]}
        alt={`banner-${currentIndex}`}
        style={{ width: "100%", borderRadius: "10px", transition: "0.5s" }}
      />

     

      {/* Pagination dots */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "0 5px",
              borderRadius: "50%",
              background: currentIndex === index ? "#f5ba00" : "#ccc",
              cursor: "pointer"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
