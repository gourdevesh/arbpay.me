import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import { showError, showSuccess } from "../utils/toastHelper";
import axios from "axios";

const PaymentPwd = () => {
  const BASE_URL = process.env.REACT_APP_BASE_API_URL;
  const [password, setPassword] = useState('')
  const [conform, setConform] = useState('')
  const [isLoading, setIsLoading] = useState('')
  const [loading, setLoading] = useState('')
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()
  const { profile } = useContext(ProfileContext);
  const USER = profile?.USER || {};
  const email = USER.email

  const [cooldown, setCooldown] = useState(0);
  useEffect(() => {
    const savedTime = localStorage.getItem("verifyEmailCooldown");
    if (savedTime) {
      const remaining = Math.floor((new Date(savedTime) - new Date()) / 1000);
      if (remaining > 0) setCooldown(remaining);
    }
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            localStorage.removeItem("verifyEmailCooldown");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [cooldown]);

  const handleVerifyEmail = async () => {
   setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await axios.post(
        `${BASE_URL}/verify-email`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      showSuccess(response.data.message || "Verification email sent!");
      setCooldown(60);
      const endTime = new Date();
      endTime.setSeconds(endTime.getSeconds() + 60);
      localStorage.setItem("verifyEmailCooldown", endTime);
    } catch (error) {
      console.error(error);
      showError(error.response?.data?.message || "Failed to send verification email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true)
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("new_password", password);
      formData.append("otp", otp);
      const response = await axios.post(`${BASE_URL}/updateTransactionPassword`, formData, {
        headers: {
                    Authorization: `Bearer ${token}`,
                },
      });

      showSuccess(response.data.message || "Verification email sent!"
      );
      navigate("/main")
    } catch (error) {
      console.error(error);
      if (error.response?.data?.error) {
        const apiErrors = error.response.data.error;
        let messages = [];

        for (const key in apiErrors) {
          if (Array.isArray(apiErrors[key])) {
            messages.push(...apiErrors[key]);
          } else {
            messages.push(apiErrors[key]);
          }
        }

        showError(messages.join(", "));
      } else {
        showError(error.response?.data?.message || "Failed to reset password");
      }
    }
    finally {
      setLoading(false)
    }
  };


  return (
    <div id="app" data-v-app="">
      <div>
        <div data-v-1dea78b6="" className="container pt48">
          <div data-v-cdb55647="" data-v-1dea78b6=""
            className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
            <div className="van-nav-bar__content">
              <div onClick={() => navigate(-1)} className="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                  fill="#9399A6"></path>
              </svg></div>
              <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Security
                Verification</span></div>
              <div className="van-nav-bar__right van-haptics-feedback">
                <div data-v-7472f68c="" data-v-cdb55647="" className="x-row x-row-between x-row-middle">
                  <div data-v-7472f68c="" className="right x-row x-row-middle-center"><img data-v-7472f68c=""
                    className="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg" /><i
                      data-v-7472f68c="" className="line"></i><img data-v-7472f68c="" className="close"
                        src="https://arbpay.me/assets/close-51d692b1.svg" /></div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-ae4b1a15="" className="x-phone">
            <div data-v-ae4b1a15="" className="x-phone-content">
              <p data-v-ae4b1a15="">Send verification code to {USER?.email}</p>
              <div data-v-9e71ad3c="" data-v-ae4b1a15="" className="x-send item">
                <div data-v-9e71ad3c="" className={`x-send-box ${cooldown > 0 ? "disabled" : ""}`}
                ><input data-v-9e71ad3c="" className="x-input input"
                  type="text" placeholder="Enter Verification Code" value={otp} onChange={(e) => setOtp(e.target.value)} maxlength="6"
                  oninput="value=value.replace(/\D/g,'')" />
                  <div onClick={cooldown > 0 || isLoading ? null : handleVerifyEmail}
                    data-v-9e71ad3c="" className="btn action">{isLoading
                      ? "Sending..."
                      : cooldown > 0
                        ? `Wait ${cooldown}s`
                        : "Send"}</div>
                </div>
                <div data-v-3d2f95de="" style={{ marginTop: "10px" }} className="x-from-item"><label data-v-3d2f95de=""
                  className="x-row x-row-middle">Password</label>
                  <div data-v-3d2f95de="" className="pwd"><input data-v-3d2f95de="" className="x-input"
                    type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} maxlength="32" /><span
                      data-v-3d2f95de="" className="eye"></span></div>
                </div>
                <div data-v-3d2f95de="" style={{ marginTop: "10px" }} className="x-from-item"><label data-v-3d2f95de=""
                  className="x-row x-row-middle">Confirm Password</label>
                  <div data-v-3d2f95de="" className="pwd"><input data-v-3d2f95de="" className="x-input"
                    type="password" placeholder="Please enter the confirmation password." value={conform} onChange={(e) => setConform(e.target.value)}
                    maxlength="32" /><span data-v-3d2f95de="" className="eye"></span></div>
                </div>
                <p data-v-9e71ad3c="" className="x-send-tip">Can't receive the verification code?<span
                  data-v-9e71ad3c="">Customer Service</span></p>
              </div>
            </div><button data-v-ae4b1a15="" type="button" onClick={handleSubmit} disabled={loading}
              className="van-button van-button--default van-button--normal van-button--block x-btn mt56 x-phone-btn">
              <div className="van-button__content"><span className="van-button__text">{loading ? "saving..." : "save"}</span></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPwd;
