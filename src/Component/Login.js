import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const formData = new FormData();
            formData.append("mobile", mobile);
            formData.append("password", password);

            const response = await axios.post(`${BASE_URL}/login`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            localStorage.setItem("token", response.data.token);
            navigate("/")
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 3000,
                style: {
                    marginTop: "32px"
                },
            });
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message;
            toast.error(errMsg, { position: "top-center", autoClose: 3000, });

            console.error("Login failed:", errMsg);
        }
        finally {
            setLoading(false)
        }
    };


    return (
        <div id="app" data-v-app="" style={{ height: '100vh' }}>
            <div>
                <div data-v-1144f57f="" className="x-login">
                    <div data-v-1144f57f="" className="x-login-header x-row x-row-middle x-flew-end pt30">
                        <div data-v-1144f57f="" className="x-login-lang x-row x-row-middle-center">
                            <div data-v-3dda0faf="" data-v-1144f57f="" className="x-lang x-row x-row-middle-center"><span
                                className="van-popover__wrapper">
                                <div data-v-3dda0faf="" className="x-row x-row-middle-center box"><img data-v-3dda0faf=""
                                    src="https://arbpay.me/assets/lang-d8031c6f.svg" className="icon mr5" /> English</div>
                            </span></div>
                        </div>
                    </div>
                    <div data-v-1144f57f="" className="x-content">
                        <h2 data-v-1144f57f="" className="sub">Account Login</h2>
                    </div>
                    <div data-v-1144f57f="" className="x-from pr20 pl20">
                        <div data-v-90b6c219="" data-v-1144f57f="" className="x-from-item"><label data-v-90b6c219=""
                            className="x-row x-row-middle">Phone</label>
                            <div data-v-90b6c219="" className="phone-email">
                                <div className="icon " data-v-90b6c219=""> </div><input data-v-90b6c219="" className="x-input" type="text"
                                    value={mobile} onChange={(e) => setMobile(e.target.value)}

                                    placeholder="Please enter your mobile."
                                />
                            </div>
                        </div>
                        <div data-v-1144f57f="" className="x-from-item">
                            <div data-v-1144f57f="" className="x-row x-row-between"><label data-v-1144f57f=""
                                className="x-row x-row-middle">Password</label>
                                <div data-v-1144f57f="" className="forgot" onClick={() => navigate("/forget-password")} style={{ cursor: "pointer" }}>Forgot Password？</div>
                            </div>
                            <div data-v-1144f57f="" className="pwd">
                                <input data-v-1144f57f="" className="x-input" type={showPassword ? "text" : "password"} // toggle type

                                    placeholder="Please enter your login password." maxlength="32" value={password} onChange={(e) => setPassword(e.target.value)}
                                />


                                {!showPassword && (


                                    <span data-v-1144f57f="" className="eye" onClick={() => setShowPassword(true)}
                                    ></span>

                                )}



                                {/* Show crossed eye when password is visible */}
                                {showPassword && (
                                    <span
                                        data-v-1144f57f=""
                                        className="eye avtive"
                                        onClick={() => setShowPassword(false)}
                                        style={{ cursor: "pointer" }}
                                    >

                                    </span>
                                )}

                            </div>
                        </div>
                        <div data-v-1144f57f="" className="mt50 mb10">
                            <button data-v-1144f57f="" type="button"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="van-button van-button--primary van-button--normal van-button--block btn x-btn">
                                <div className="van-button__content"><span className="van-button__text">{loading ? "Loging..." : "Log In"}</span>
                                </div>

                            </button>

                            <button data-v-1144f57f="" type="button"
                                className="van-button van-button--default van-button--normal van-button--block mt25 btn x-btn-plain">
                                <div className="van-button__content"><span className="van-button__text">Customer
                                    Service</span></div>
                            </button></div>

                        <div data-v-1144f57f="" className="x-row fz16 mt32">
                            <p data-v-1144f57f="" className="txt">No Account？</p><span data-v-1144f57f=""
                                className="tip x-row x-row-middle fz16" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>Register Now <img data-v-1144f57f="" className="back"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE8SURBVHgB7ZTNTcMwGIbtpEhQBynZICMwAjnwd2MDRqAb0A2aDaATlBPBySEwQboB2cAOlBPgDzugqETEPz310EdKZD1SvvezYxuhHVsHp+SlKcjM1pvw+gIEnoNAE56Tki3C0OQ3gmXBVHYM8qlYFsYmrwMPhjyQCfaRWpIaxF4SXfBa550D2mL08BJjcYsA8T8hA/4/PF1AdPZ2DwglbSfeR8VycqTzzgFtsdP3JYgvVYxjQNUrJVc63wcjS1i2H2PPL+UwBg8n0cnqSeetZ9Dh++FvSxx9jmqjdwlgRXAsp6q6RGrtu5894J0CmvzgGgsoux0j117nnQIaOr4B8FI5XK5vxyHvREPJTJ1aRsnd+tUw5K1RH/FivGiLPAapyTuj7pmfDoOpjTcx6gsA/Czf8+h8ldr4HdvPNw7W/OaFUywGAAAAAElFTkSuQmCC" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
