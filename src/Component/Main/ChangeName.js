import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../utils/toastHelper";
import { ProfileContext } from "../Context/ProfileContext";


const ChangeName = () => {
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    const { fetchProfile } = useContext(ProfileContext);
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const token = localStorage.getItem("token");

            const formData = new FormData();
            formData.append("name", name);
            const response = await axios.post(`${BASE_URL}/profile/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/main")
            showSuccess(response.data.message);
            fetchProfile()
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message;
            showError(errMsg, { position: "top-center", autoClose: 3000, });
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
                            <div className="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                    fill="#9399A6"></path>
                            </svg></div>
                            <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Change Nickname</span>
                            </div>
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
                    <div data-v-6fca2ec6="" className="x-page x-nickname">
                        <div data-v-6fca2ec6="" className="item"><label data-v-6fca2ec6="" className="lab">Change
                            Nickname</label><input data-v-6fca2ec6="" className="input mb16 mt24" type="text" maxlength="12"
                                placeholder="Please enter a nickname" value={name} onChange={(e) => setName(e.target.value)} /><span data-v-6fca2ec6="" className="tip">Please do not
                                    exceed 12 characters for the nickname</span></div>

                        <button data-v-6fca2ec6="" type="button" onClick={handleSubmit} disabled={loading}
                            className="van-button van-button--primary van-button--normal van-button--block mt56 x-btn x-nickname-btn">
                            <div className="van-button__content"><span className="van-button__text">{loading ? "saving..." : "save"}
                            </span></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangeName