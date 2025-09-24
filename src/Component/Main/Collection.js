import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate()
  const BASE_URL = process.env.REACT_APP_BASE_API_URL;
  const [walletaddress, setWalletAddress] = useState([])


  const fetchWalletAddress = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.get(`${BASE_URL}/wallet/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWalletAddress(response.data?.data);
    } catch (error) {
      console.error("Error fetching wallet address:", error);
    }
  };

  useEffect(() => {
    fetchWalletAddress();
  }, []);

  console.log("wallet", walletaddress)


  return (
    <div id="app" data-v-app="">
      <div>
        <div data-v-1dea78b6="" className="container pt48">
          <div data-v-cdb55647="" data-v-1dea78b6=""
            className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
            <div  className="van-nav-bar__content">
              <div onClick={()=>navigate(-1)} className="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                  fill="#9399A6"></path>
              </svg></div>
              <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Collection</span></div>
              <div className="van-nav-bar__right van-haptics-feedback">
                <div data-v-9b133d13="" data-v-cdb55647="" className="x-row x-row-between x-row-middle">
                  <div data-v-9b133d13="" className="right x-row x-row-middle-center"><img data-v-9b133d13=""
                    className="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg" /><i
                      data-v-9b133d13="" className="line"></i><img data-v-9b133d13="" className="close"
                        src="https://arbpay.me/assets/close-51d692b1.svg" /></div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-da446287="" data-v-1dea78b6="" className="x-collection">
            <div data-v-da446287="" className="x-collection-tab x-row x-row-between">
              <div data-v-da446287="" className="item active"><span data-v-da446287=""> USDT Wallet
              </span></div>
            </div>
            <div data-v-da446287="" className="x-collection-list">

              <div data-v-da446287="" role="feed" className="van-list" aria-busy="false">
                {walletaddress?.map((item, index) => (
                  <div
                    key={item?.id}
                    data-v-da446287=""
                    className={`item mb16 kyc ${index % 2 === 0 ? "bgairtel" : "bgphonepe"}`} id={item?.id}
                  >
                    <div data-v-da446287="">
                      <span data-v-da446287="" className="tag tag4">{item.status}</span>
                      <div data-v-da446287="" className="title mt15 pb5 x-row x-row-between x-row-middle">
                        <div data-v-da446287="" className="x-row x-row-middle">
                          <img
                            data-v-da446287=""
                            className="kycIcon mr12"
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Wallet Icon"
                          />
                          <div data-v-da446287="">
                            <div data-v-da446287="" className="number mt4" style={{ color: "white" }}>{item?.wallet_address}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}


                <div className="van-list__placeholder"></div>
              </div>
              <div data-v-da446287="" className="item add" onClick={() => navigate("/add-payment")} style={{ cursor: "pointer" }} >
                <div data-v-da446287="" className="icon x-row x-row-middle-center" ><i data-v-da446287=""
                  className="van-badge__wrapper van-icon van-icon-plus plus"
                  style={{ color: "rgb(255, 255, 255)" }}></i></div>
                <p data-v-da446287="" className="x-tc">Connect Wallet</p>
              </div>
            </div>
            <div data-v-058705f4="" data-v-da446287=""></div>
            <div data-v-167d7264="" data-v-da446287=""></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Collection;
