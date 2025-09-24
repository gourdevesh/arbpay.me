import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { showError, showSuccess } from "./utils/toastHelper";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [conform, setConform] = useState("")
    const [cooldown, setCooldown] = useState(0);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
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
        if (!email) {
            showError("Please enter your email");
            return;
        }

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

        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("otp", code);
            formData.append("password", password);
            formData.append("confirm_password", conform);
            const response = await axios.post(`${BASE_URL}/password-reset`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            showSuccess(response.data.message || "Verification email sent!"
            );
            navigate("/login")
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
                    <div data-v-3d2f95de="" className="x-register">
                        <header data-v-ef93820a="" data-v-3d2f95de="" className="header x-tc">
                            <div
                                data-v-ef93820a=""
                                className="brack"
                                onClick={() => navigate(-1)}
                                style={{ cursor: "pointer" }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && navigate(-1)}
                            />
                            <div data-v-ef93820a="">Forgot Password</div>
                            <div data-v-ef93820a="" className="header-lang x-row x-row-middle-center">
                                <div data-v-3dda0faf="" data-v-ef93820a="" className="x-lang x-row x-row-middle-center"><span
                                    className="van-popover__wrapper">
                                    <div data-v-3dda0faf="" className="x-row x-row-middle-center box"><img
                                        data-v-3dda0faf="" src="https://arbpay.me/assets/lang-d8031c6f.svg"
                                        className="icon mr5" /> English</div>
                                </span></div>
                            </div>
                        </header>
                        <div data-v-3d2f95de="" className="x-from pr20 pl20">
                            <div data-v-90b6c219="" data-v-3d2f95de="" className="x-from-item"><label data-v-90b6c219=""
                                className="">Email</label>
                                <div data-v-90b6c219="" className="email-number">
                                    <div className="icon x-row x-row-middle" data-v-90b6c219=""><svg width="32" className="mr12"
                                        height="5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        data-v-90b6c219="">


                                    </svg>  </div><input data-v-90b6c219="" className="x-input" type="email"
                                        placeholder="Please enter your  Email." value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div data-v-9e71ad3c="" data-v-3d2f95de="" className="x-send mb10" titleshow="false"><label
                                data-v-9e71ad3c="" className="x-send-lab">Verification Code</label>
                                <div data-v-9e71ad3c="" className="x-send-box"><input data-v-9e71ad3c="" value={code} onChange={(e) => setCode(e.target.value)} className="x-input input"
                                    type="text" placeholder="Enter Verification Code" maxlength="6"
                                />
                                    <div
                                        data-v-9e71ad3c=""
                                        className={`btn action ${cooldown > 0 ? "disabled" : ""}`}
                                        onClick={cooldown > 0 || isLoading ? null : handleVerifyEmail}
                                        style={{
                                            cursor: cooldown > 0 || isLoading ? "not-allowed" : "pointer",
                                            pointerEvents: cooldown > 0 || isLoading ? "none" : "auto",
                                            opacity: cooldown > 0 || isLoading ? 0.6 : 1,
                                        }}
                                    >
                                        {isLoading
                                            ? "Sending..."
                                            : cooldown > 0
                                                ? `Wait ${cooldown}s`
                                                : "Send"}
                                    </div>


                                </div>

                            </div>
                            <div data-v-3d2f95de="" className="x-from-item"><label data-v-3d2f95de=""
                                className="x-row x-row-middle">New Login Password</label>
                                <div data-v-3d2f95de="" className="pwd"><input data-v-3d2f95de="" className="x-input"
                                    type="password" placeholder="New Login Password" value={password} onChange={(e) => setPassword(e.target.value)} maxlength="32" /><span
                                        data-v-3d2f95de="" className="eye"></span></div>
                            </div>
                            <div data-v-3d2f95de="" className="x-from-item"><label data-v-3d2f95de=""
                                className="x-row x-row-middle">Confirm Password</label>
                                <div data-v-3d2f95de="" className="pwd"><input data-v-3d2f95de="" className="x-input"
                                    type="password" placeholder="Please enter the confirmation password." value={conform} onChange={(e) => setConform(e.target.value)}
                                    maxlength="32" /><span data-v-3d2f95de="" className="eye"></span></div>
                            </div>
                        </div>
                        <div data-v-3d2f95de="" className="mt20 pl15 pr15">
                            {/* <div data-v-3d2f95de="" className="x-row x-row-middle mb56 read">
                                <div data-v-3d2f95de="" role="checkbox" className="van-checkbox" tabindex="0"
                                    aria-checked="false">
                                    <div className="van-checkbox__icon van-checkbox__icon--round"><i
                                        className="van-badge__wrapper van-icon van-icon-success"></i>
                                    </div><span className="van-checkbox__label">I have agreed to and read</span>
                                </div><span data-v-3d2f95de="">the 《User Agreement》</span>
                            </div> */}
                            <button data-v-3d2f95de="" type="button" onClick={handleSubmit} disabled={loading}
                                className="van-button van-button--default van-button--normal van-button--block x-btn btn">
                                <div className="van-button__content"><span className="van-button__text" >          {loading ? "Loading..." : "Confirm"}
                                </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
