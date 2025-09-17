import React, { useState } from "react";

const TeamTutorial = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="app" data-v-app="">
      <div>
        <div data-v-1dea78b6="" className="container pt48">
          <div
            data-v-cdb55647=""
            data-v-1dea78b6=""
            className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar"
          >
            <div className="van-nav-bar__content">
              <div className="van-nav-bar__left van-haptics-feedback">
                <svg
                  data-v-cdb55647=""
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-v-cdb55647=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                    fill="#9399A6"
                  ></path>
                </svg>
              </div>
              <div className="van-nav-bar__title van-ellipsis">
                <span data-v-cdb55647="">tutorial72</span>
              </div>
              <div className="van-nav-bar__right van-haptics-feedback">
                <div
                  data-v-9b133d13=""
                  data-v-cdb55647=""
                  className="x-row x-row-between x-row-middle"
                >
                  <div
                    data-v-9b133d13=""
                    className="right x-row x-row-middle-center"
                  >
                    <img
                      data-v-9b133d13=""
                      className="refresh"
                      src="https://arbpay.me/assets/refresh-4be8557e.svg"
                    />
                    <i data-v-9b133d13="" className="line"></i>
                    <img
                      data-v-9b133d13=""
                      className="close"
                      src="https://arbpay.me/assets/close-51d692b1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Tutorials with open/close */}
          <div data-v-fcb15ae9="" className="sellTutorial">
            <div data-v-fcb15ae9="" className="van-collapse van-hairline--top-bottom">
              {/* First section */}
              <div data-v-fcb15ae9="" className="van-collapse-item">
                <div
                  className={`van-cell van-cell--clickable van-collapse-item__title ${
                    openIndex === 0 ? "van-collapse-item__title--expanded" : ""
                  }`}
                  role="button"
                  tabIndex="0"
                  aria-expanded={openIndex === 0}
                  onClick={() => toggleSection(0)}
                >
                  <div className="van-cell__title">
                    <div data-v-fcb15ae9="" className="tit">
                      tutorial70
                    </div>
                  </div>
                  <i className="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>

                {openIndex === 0 && (
                  <div className="van-collapse-item__wrapper">
                    <div className="van-collapse-item__content">
                      {/* ✅ आपकी पूरी tutorial70 content यहाँ जस का तस रहेगा */}
                      <p>tutorial75</p>
                      <div
                        data-v-fcb15ae9=""
                        className="van-image"
                        style={{ width: "213px" }}
                      >
                        <img
                          src="https://arbpay.me/assets/step1-d3e04b1d.png"
                          className="van-image__img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Second section */}
              <div
                data-v-fcb15ae9=""
                className="van-collapse-item van-collapse-item--border"
              >
                <div
                  className={`van-cell van-cell--clickable van-collapse-item__title ${
                    openIndex === 1 ? "van-collapse-item__title--expanded" : ""
                  }`}
                  role="button"
                  tabIndex="0"
                  aria-expanded={openIndex === 1}
                  onClick={() => toggleSection(1)}
                >
                  <div className="van-cell__title">
                    <div data-v-fcb15ae9="" className="tit">
                      tutorial71
                    </div>
                  </div>
                  <i className="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
                </div>

                {openIndex === 1 && (
                  <div className="van-collapse-item__wrapper">
                    <div className="van-collapse-item__content">
                      {/* ✅ tutorial71 content जस का तस */}
                      <p>tutorial95</p>
                      <div
                        data-v-fcb15ae9=""
                        className="van-image"
                        style={{ width: "213px" }}
                      >
                        <img
                          src="https://arbpay.me/assets/step13-29af1fbd.png"
                          className="van-image__img"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Videos */}
            <video data-v-fcb15ae9="" controls className="noShow">
              <source
                data-v-fcb15ae9=""
                src="https://video.arbpay.me/video/TeamTutorialInvitation.mp4"
                type="video/mp4"
              />
            </video>
            <video data-v-fcb15ae9="" controls className="noShow">
              <source
                data-v-fcb15ae9=""
                src="https://video.arbpay.me/video/TeamTutorialRegister.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTutorial;
