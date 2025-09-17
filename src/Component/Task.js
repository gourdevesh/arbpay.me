import React from "react";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate()
  return (
    <div id="app" data-v-app="">
    <div>
      <div data-v-2d042b53="" className="container">
        <div style={{paddingLeft:"1%"}} data-v-b0a7af40="" data-v-2d042b53="" className="navbar x-row x-row-middle x-row-between">
          <div data-v-b0a7af40="" className="x-row x-row-middle"><svg data-v-b0a7af40="" width="91" height="30"
              viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path data-v-b0a7af40=""
                d="M0.84 23.5L5.46 8.6H9.74L14.36 23.5H10.6L8.74 16.06C8.34 14.58 7.96 12.8 7.56 11.28H7.48C7.12 12.84 6.72 14.58 6.34 16.06L4.48 23.5H0.84ZM3.98 20.08V17.32H11.18V20.08H3.98ZM15.6031 23.5V8.6H21.0631C24.2431 8.6 26.8831 9.7 26.8831 13.3C26.8831 16.8 24.2431 18.26 21.0631 18.26H19.1831V23.5H15.6031ZM19.1831 15.44H20.7831C22.4831 15.44 23.4031 14.7 23.4031 13.3C23.4031 11.9 22.4831 11.44 20.7831 11.44H19.1831V15.44ZM23.6431 23.5L20.4231 17.34L22.8431 15L27.6431 23.5H23.6431Z"
                fill="#F0B90B"></path>
              <path data-v-b0a7af40=""
                d="M30.5866 23.5L27.8866 8.6H31.5266L32.4666 15.4C32.6666 16.96 32.8666 18.52 33.0666 20.12H33.1466C33.4266 18.52 33.7266 16.94 34.0266 15.4L35.5466 8.6H38.5666L40.1066 15.4C40.4066 16.92 40.6666 18.52 40.9666 20.12H41.0666C41.2466 18.52 41.4466 16.94 41.6266 15.4L42.6066 8.6H45.9866L43.4066 23.5H38.9066L37.5666 17.02C37.3266 15.88 37.1266 14.68 36.9866 13.56H36.9066C36.7066 14.68 36.5266 15.88 36.3066 17.02L35.0066 23.5H30.5866ZM49.8678 23.78C47.7678 23.78 46.4878 22.22 46.4878 20.32C46.4878 17.92 48.3678 16.62 52.8078 16.14C52.7278 15.22 52.2478 14.68 51.0878 14.68C50.1878 14.68 49.2478 15.04 48.1078 15.68L46.8678 13.34C48.3678 12.44 49.9878 11.84 51.7678 11.84C54.7078 11.84 56.3678 13.48 56.3678 17.04V23.5H53.4678L53.2278 22.36H53.1278C52.1878 23.2 51.1278 23.78 49.8678 23.78ZM51.0878 21.02C51.8078 21.02 52.2878 20.68 52.8078 20.12V18.3C50.5878 18.58 49.8678 19.24 49.8678 20.04C49.8678 20.7 50.3478 21.02 51.0878 21.02ZM62.0367 23.78C59.5967 23.78 58.7967 22.18 58.7967 19.8V7.52H62.3567V19.92C62.3567 20.68 62.6967 20.9 62.9767 20.9C63.0967 20.9 63.1767 20.9 63.3767 20.86L63.7967 23.48C63.4167 23.64 62.8367 23.78 62.0367 23.78ZM68.3573 23.78C65.9173 23.78 65.1173 22.18 65.1173 19.8V7.52H68.6773V19.92C68.6773 20.68 69.0173 20.9 69.2973 20.9C69.4173 20.9 69.4973 20.9 69.6973 20.86L70.1173 23.48C69.7373 23.64 69.1573 23.78 68.3573 23.78ZM76.598 23.78C73.318 23.78 70.798 21.58 70.798 17.8C70.798 14.12 73.458 11.84 76.198 11.84C79.478 11.84 81.078 14.22 81.078 17.32C81.078 17.96 80.998 18.58 80.918 18.86H74.238C74.558 20.42 75.638 21.06 77.078 21.06C77.898 21.06 78.658 20.82 79.478 20.34L80.658 22.48C79.478 23.32 77.918 23.78 76.598 23.78ZM74.178 16.52H78.058C78.058 15.4 77.558 14.56 76.258 14.56C75.278 14.56 74.418 15.18 74.178 16.52ZM87.1409 23.78C84.2809 23.78 83.1209 21.96 83.1209 19.28V14.9H81.5809V12.26L83.3409 12.12L83.7409 9.1H86.6809V12.12H89.3609V14.9H86.6809V19.24C86.6809 20.5 87.2809 21 88.1209 21C88.4809 21 88.8809 20.88 89.1609 20.78L89.7209 23.36C89.1209 23.54 88.3009 23.78 87.1409 23.78Z"
                fill="#29303A"></path>
            </svg></div>
          <div data-v-9b133d13="" data-v-b0a7af40="" className="x-row x-row-between x-row-middle">
            <div data-v-9b133d13="" className="right x-row x-row-middle-center"><img data-v-9b133d13="" className="refresh"
                src="https://arbpay.me/assets/refresh-4be8557e.svg"/><i data-v-9b133d13="" className="line"></i><img
                data-v-9b133d13="" className="close" src="https://arbpay.me/assets/close-51d692b1.svg"/></div>
          </div>
        </div>
        <div data-v-b2ff38b3="" data-v-2d042b53="" className="x-task main">
          <div data-v-0e593ec5="" data-v-b2ff38b3="" className="wrap">
            <div data-v-0e593ec5="" className="card-wrap master">
              <div data-v-0e593ec5="" className="head x-row x-row-between">
                <div  onClick={()=>navigate("/task-detail")} data-v-0e593ec5="" className="amount x-row x-row-middle"><span   data-v-0e593ec5="">Reward
                    Claimed</span>354 <span  data-v-0e593ec5="" className="x-row x-row-middle">ARB <svg data-v-0e593ec5=""
                      className="ml2" xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                      <path data-v-0e593ec5=""
                        d="M4.5 2.13397C5.16667 2.51888 5.16667 3.48113 4.5 3.86603L1.5 5.59808C0.833332 5.98298 -2.84205e-07 5.50185 -2.50556e-07 4.73205L-9.91352e-08 1.26795C-6.54861e-08 0.498148 0.833333 0.0170235 1.5 0.401924L4.5 2.13397Z"
                        fill="#1F262F"></path>
                    </svg></span></div>
                <div onClick={()=>navigate("/rule")} data-v-0e593ec5="" className="rule x-row x-row-middle">
                  <div data-v-0e593ec5="" className="van-image mr5" style={{ width: "16px" }} ><img
                      src="https://arbpay.me/assets/rule-395d6e92.svg" className="van-image__img"
                     style={{ objectFit: "cover" }}/></div> Rules
                </div>
              </div>
              <div data-v-0e593ec5="" style={{cursor:'pointer'}} className="card my-card" onClick={()=>navigate("/user-level")}>
                <div data-v-0e593ec5="" className="card-title">
                  <p data-v-0e593ec5="" className="x-row x-row-middle-center"><span data-v-0e593ec5="">Current
                      Level</span></p>
                </div>
                <div data-v-0e593ec5="" className="card-point">
                  <p data-v-0e593ec5="" className="current">LV6</p>
                  <div data-v-0e593ec5="" className="card-process">
                    <div data-v-0e593ec5="" className="x-row x-row-middle-center x-row-between">
                      <div data-v-0e593ec5="">LV6</div>
                      <div data-v-0e593ec5="">LV7</div>
                    </div><svg data-v-0e593ec5="" width="180" height="8" viewBox="0 0 180 8"
                      xmlns="http://www.w3.org/2000/svg" className="card-process-svg">
                      <defs>
                        <linearGradient id="linegrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: "var(--card-process-start)", stopOpacity: 1 }}></stop>
                          <stop offset="50%" style={{ stopColor: "var(--card-process-middle)", stopOpacity: 1 }}></stop>
                          <stop offset="100%" style={{ stopColor: "var(--card-process-end)", stopOpacity: 1 }}></stop>
                        </linearGradient>
                      </defs>
                      <rect x="0" y="0" width="100%" height="8" rx="4" ry="4" fill="url(#linegrad)"></rect>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop
  offset="0%"
  style={{ stopColor: "var(--process-start-color)", stopOpacity: 1 }}
/>
<stop
  offset="100%"
  style={{ stopColor: "var(--process-end-color)", stopOpacity: 1 }}
/>

                        </linearGradient>
                      </defs>
                      <rect x="0" y="0" width="91%" height="8" rx="4" ry="4" fill="url(#grad)">
                        <animate attributeName="width" from="0" to="91%" dur="0.5s" fill="freeze"></animate>
                      </rect>
                    </svg>
                  </div>
                </div><img data-v-0e593ec5="" src="https://arbpay.me/assets/master-dcd0589d.png" alt=""
                  className="card-badge"/>
                <div data-v-0e593ec5="" className="card-text">
                  <div data-v-0e593ec5="" className="text-item">
                    <div data-v-0e593ec5="" className="text-item-num">211900</div>
                    <div data-v-0e593ec5="" className="text-item-tip">Valid Trading Volume</div>
                  </div>
                  <div data-v-0e593ec5="" className="text-item-divider"></div>
                  <div data-v-0e593ec5="" className="text-item">
                    <div data-v-0e593ec5="" className="text-item-num">78</div>
                    <div data-v-0e593ec5="" className="text-item-tip">Successful Buy Count</div>
                  </div>
                  <div data-v-0e593ec5="" className="text-item-divider"></div>
                  <div data-v-0e593ec5="" className="text-item">
                    <div data-v-0e593ec5="" className="text-item-num">408</div>
                    <div data-v-0e593ec5="" className="text-item-tip">Successful Sell Count</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-0e593ec5="" className="tab" id="tab-scroll">
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_ordinary_got-5bd420e4.png" alt="" className="unsel"
                 style={{ filter: "opacity(45%)" }}/>
                <div data-v-0e593ec5="">LV0</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_bronze_got-e2eea60f.png" alt="" className="unsel"
                 style={{ filter: "opacity(45%)" }}/>
                <div data-v-0e593ec5="">LV1</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_silver_got-5bd5cb42.png" alt="" className="unsel"
                 style={{ filter: "opacity(50%)"}}/>
                <div data-v-0e593ec5="">LV2</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_gold_got-49f1587a.png" alt="" className="unsel"
                  style={{ filter: "opacity(55%)"}}/>
                <div data-v-0e593ec5="">LV3</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_platinum_got-f4f604ad.png" alt="" className="unsel"
                 style={{ filter: "opacity(50%)" }}/>
                <div data-v-0e593ec5="">LV4</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_diamond_got-e79b753e.png" alt="" className="unsel"
                 style={{ filter: "opacity(50%)" }}/>
                <div data-v-0e593ec5="">LV5</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_master_got-584f48c5.png" alt="" className="sel"
  style={{
    filter: `drop-shadow(rgb(255, 255, 255) 0px 0px 1.5px) drop-shadow(rgba(59, 183, 168, 0.4) 0px 4px 16px)`
  }}/>
                <div data-v-0e593ec5="">LV6</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_grandmaster_ungot-94d46d26.png" alt="" className="unsel"
                style={{ filter: "opacity(65%)" }}/>
                <div data-v-0e593ec5="">LV7</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_legend_ungot-e50a705a.png" alt="" className="unsel"
                style={{ filter: "opacity(65%)" }}/>
                <div data-v-0e593ec5="">LV8</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_mythic_ungot-670ba741.png" alt="" className="unsel"
                style={{ filter: "opacity(65%)" }}/>
                <div data-v-0e593ec5="">LV9</div>
              </div>
              <div data-v-0e593ec5="" className="tab-item"><img data-v-0e593ec5=""
                  src="https://arbpay.me/assets/tab_supreme_ungot-bf15ce1e.png" alt="" className="unsel"
                style={{ filter: "opacity(65%)" }}/>
                <div data-v-0e593ec5="">LV10</div>
              </div>
            </div>
          </div>
          <div data-v-647a71b6="" data-v-b2ff38b3="" className="x-task-day">
            <div data-v-647a71b6="" className="title x-row x-row-between">VIP Tasks <div data-v-647a71b6=""
                className="vip x-row x-row-middle"  onClick={()=>navigate("/VipTak")}  style={{cursor:'pointer'}} >
                  <img data-v-647a71b6=""className="mr5"
                  src="https://arbpay.me/assets/vip_icon-aa68ef7e.svg" alt=""/> VIP Zone<svg data-v-647a71b6=""
                  className="ml5" width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-647a71b6=""
                    d="M4.5 2.13397C5.16667 2.51888 5.16667 3.48113 4.5 3.86603L1.5 5.59808C0.833332 5.98298 -2.84205e-07 5.50185 -2.50556e-07 4.73205L-9.91352e-08 1.26795C-6.54861e-08 0.498148 0.833333 0.0170235 1.5 0.401924L4.5 2.13397Z"
                    fill="#F5BA00"></path>
                </svg></div>
            </div>
            <div data-v-647a71b6="" className="box">
              <div data-v-647a71b6="">
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 1/1 users and complete trades with a total amount of 500</p>
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+58 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-2"> Completed</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 3/3 users and complete trades with a total amount of 500</p>
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+128 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-2"> Completed</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 5/5 users and complete trades with a total amount of 500</p>
                    
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+138 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-2"> Completed</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 5/10 users and complete trades with a total amount of 500</p>
                    
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+348 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-0"> Invite Now</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 5/20 users and complete trades with a total amount of 500</p>
                    
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+728 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-0"> Invite Now</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 5/50 users and complete trades with a total amount of 500</p>
                    
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+2238 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-0"> Invite Now</div>
                </div>
                <div data-v-647a71b6="" className="x-row x-row-middle item">
                  <div data-v-647a71b6="" className="sub">
                    <p data-v-647a71b6="" className="">Invite 5/100 users and complete trades with a total amount of 500</p>
                    
                  </div>
                  <div data-v-647a71b6="" className="arb">
                    <div data-v-647a71b6="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-647a71b6="">+3948 ARB</span>
                  </div>
                  <div data-v-647a71b6="" className="btn x-row x-row-middle-center btn-0"> Invite Now</div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-513f8e7d="" data-v-b2ff38b3="" className="x-task-day">
            <div data-v-513f8e7d="" className="title">Daily Tasks</div>
            <div data-v-513f8e7d="" className="box">
              <div data-v-513f8e7d="" className="">
                <div data-v-513f8e7d="" className="x-row x-row-middle item">
                  <div data-v-513f8e7d="" className="sub">
                    <p data-v-513f8e7d="" className="">Buy <span>0</span>/1 times today</p>
                  </div>
                  <div data-v-513f8e7d="" className="arb">
                    <div data-v-513f8e7d="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-513f8e7d="">+1 ARB</span>
                  </div>
                  <div data-v-513f8e7d="" className="btn x-row x-row-middle-center btn-0">Buy now</div>
                </div>
                <div data-v-513f8e7d="" className="x-row x-row-middle item">
                  <div data-v-513f8e7d="" className="sub">
                    <p data-v-513f8e7d="" className="">Buy <span>0</span>/3 times today</p>
                  </div>
                  <div data-v-513f8e7d="" className="arb">
                    <div data-v-513f8e7d="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-513f8e7d="">+3 ARB</span>
                  </div>
                  <div data-v-513f8e7d="" className="btn x-row x-row-middle-center btn-0">Buy now</div>
                </div>
                <div data-v-513f8e7d="" className="x-row x-row-middle item">
                  <div data-v-513f8e7d="" className="sub">
                    <p data-v-513f8e7d="" className="">Buy <span>0</span>/5 times today</p>
                  </div>
                  <div data-v-513f8e7d="" className="arb">
                    <div data-v-513f8e7d="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-513f8e7d="">+5 ARB</span>
                  </div>
                  <div data-v-513f8e7d="" className="btn x-row x-row-middle-center btn-0">Buy now</div>
                </div>
                <div data-v-513f8e7d="" className="x-row x-row-middle item">
                  <div data-v-513f8e7d="" className="sub">
                    <p data-v-513f8e7d="" className="">Buy <span>0</span>/7 times today</p>
                  </div>
                  <div data-v-513f8e7d="" className="arb">
                    <div data-v-513f8e7d="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-513f8e7d="">+7 ARB</span>
                  </div>
                  <div data-v-513f8e7d="" className="btn x-row x-row-middle-center btn-0">Buy now</div>
                </div>
                <div data-v-513f8e7d="" className="x-row x-row-middle item">
                  <div data-v-513f8e7d="" className="sub">
                    <p data-v-513f8e7d="" className="">Buy <span>0</span>/10 times today</p>
                  </div>
                  <div data-v-513f8e7d="" className="arb">
                    <div data-v-513f8e7d="" className="van-image mr5" style={{ width: "18px" }}><img
                        src="https://arbpay.me/assets/gold-bf76e701.svg" className="van-image__img"
                       style={{ objectFit: "cover" }}/></div><span data-v-513f8e7d="">+10 ARB</span>
                  </div>
                  <div data-v-513f8e7d="" className="btn x-row x-row-middle-center btn-0">Buy now</div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-cae0cce9="" data-v-b2ff38b3="" className="x-task-user">
            <div data-v-cae0cce9="" className="title">Reward getting member</div>
            <div data-v-cae0cce9="" className="box">
              <div data-v-cae0cce9="" className="head x-row x-row-between x-row-middle">
                <div data-v-cae0cce9="" className="member x-tc">Member</div>
                <div data-v-cae0cce9="" className="type x-tl">Reward type</div>
                <div data-v-cae0cce9="" className="award x-tr">Reward amount</div>
              </div>
              <div data-v-cae0cce9="" className="swiper swiper-list swiper-initialized swiper-vertical swiper-list">
                <div className="swiper-wrapper" id="swiper-wrapper-1833df94d6e9310f4" aria-live="off"
                 style={{
  transitionDuration: "0ms",
  transform: "translate3d(0px, -221.6px, 0px)"
}}>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="2" role="group"
                    aria-label="3 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">797****077</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Selling guide</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="3" role="group"
                    aria-label="4 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">911****167</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Valid Transaction Task</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">58&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="4" role="group"
                    aria-label="5 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">914****409</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Valid Transaction Task</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide swiper-slide-prev item" data-swiper-slide-index="5"
                    role="group" aria-label="6 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">914****409</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Invite New Users</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide swiper-slide-active item" data-swiper-slide-index="6"
                    role="group" aria-label="7 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">954****369</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Successful Sell</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide swiper-slide-next item" data-swiper-slide-index="7"
                    role="group" aria-label="8 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">914****409</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Buying guide</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="8" role="group"
                    aria-label="9 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">903****233</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Valid Transaction Task</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">5&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="9" role="group"
                    aria-label="10 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">930****560</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Buying guide</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="10" role="group"
                    aria-label="11 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">798****305</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Real name verification</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">5&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="11" role="group"
                    aria-label="12 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">979****918</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Real name verification</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">7&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="12" role="group"
                    aria-label="13 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">894****331</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Selling guide</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="13" role="group"
                    aria-label="14 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">798****305</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Successful Sell</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">3&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="14" role="group"
                    aria-label="15 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">917****424</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Invite new users and trade</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="0" role="group"
                    aria-label="1 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">881****155</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Successful Buy</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                  <div data-v-cae0cce9="" className="swiper-slide item" data-swiper-slide-index="1" role="group"
                    aria-label="2 / 15" style={{ height: "55.4px" }}>
                    <div data-v-cae0cce9="" className="x-row x-row-between x-row-middle">
                      <div data-v-cae0cce9="" className="member van-ellipsis x-tc">955****291</div>
                      <div data-v-cae0cce9="" className="type van-ellipsis x-tc">Buying guide</div>
                      <div data-v-cae0cce9="" className="award van-ellipsis x-tr yellow">1&nbsp;ARB</div>
                    </div>
                  </div>
                </div><span className="swiper-notification" aria-live="assertive"
                  aria-atomic="true"></span>
              </div>
            </div>
          </div>
          <div data-v-9b42e670="" data-v-b2ff38b3="">
            <div data-v-167d7264="" data-v-9b42e670="" z-index="10000"></div>
          </div>
          <div data-v-167d7264="" data-v-b2ff38b3=""></div>
        </div>
        <div data-v-118c888b="" role="tablist"
          className="van-tabbar van-tabbar--fixed van-hairline--top-bottom van-safe-area-bottom tabbar">
          <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
            <div className="van-tabbar-item__text">
              <div onClick={()=>navigate("/")} data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/home-0e21c2c5.svg" className="img"/></div>
              <p data-v-118c888b="">Home</p>
            </div>
          </div>
          <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
            <div className="van-tabbar-item__text">
              <div onClick={()=>navigate("/order")}  data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/order-f99e3cb7.svg" className="img"/></div>
              <p data-v-118c888b="">Order</p>
            </div>
          </div>
          <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
            <div className="van-tabbar-item__text">
              <div data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/payment-4a3d3b4c.svg" className="img"/></div>
              <p data-v-118c888b=""></p>
            </div>
          </div>
          <div data-v-118c888b="" role="tab" className="van-tabbar-item van-tabbar-item--active" tabindex="0"
            aria-selected="true">
            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
            <div className="van-tabbar-item__text">
              <div data-v-118c888b="" className="icon x-row x-row-middle-center active"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/task-active-791bc7b0.svg" className="img active"/></div>
              <p data-v-118c888b="" onClick={()=>navigate("/task")}>Rewards</p>
            </div>
          </div>
          <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
            <div className="van-tabbar-item__text">
              <div onClick={()=>navigate("/main")} data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/user-b38ce39c.svg" className="img"/></div>
              <p data-v-118c888b="">My</p>
            </div>
          </div>
        </div>
        <div data-v-058705f4="" data-v-118c888b=""></div>
      </div>
    </div>
  </div>

  );
};

export default Task;
