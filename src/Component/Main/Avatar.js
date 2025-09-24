import axios from "axios";
import { useContext, useState } from "react";
import { showError, showSuccess } from "../utils/toastHelper";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";

const Avatar = () => {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate()
    const BASE_URL = process.env.REACT_APP_BASE_API_URL;
    const { fetchProfile } = useContext(ProfileContext);

    const avatars = [
        "https://arbpay.me/assets/1-6901b33e.jpg",
        "https://arbpay.me/assets/2-a925f3ab.jpg",
        "https://arbpay.me/assets/3-64322263.jpg",
        "https://arbpay.me/assets/4-6a5e107b.jpg",
        "https://arbpay.me/assets/5-87a7361c.jpg",
        "https://arbpay.me/assets/6-046d4025.jpg",
        "https://arbpay.me/assets/7-c57fda1c.jpg",
        "https://arbpay.me/assets/8-45e4ac0b.jpg",
        "https://arbpay.me/assets/9-5f0eaade.jpg",
        "https://arbpay.me/assets/10-69eb37db.jpg",
        "https://arbpay.me/assets/11-98ce0aee.jpg",
        "https://arbpay.me/assets/12-4a491bfc.jpg",
        "https://arbpay.me/assets/13-612c03af.jpg",
        "https://arbpay.me/assets/14-0ad0bf33.jpg",
        "https://arbpay.me/assets/15-a6a36eeb.jpg",
        "https://arbpay.me/assets/16-2328b02a.jpg",
    ];

    const urlToFile = async (url, filename) => {
        const res = await fetch(url);
        const blob = await res.blob();
        return new File([blob], filename, { type: blob.type });
    };

    const handleSave = async () => {
        if (!selected) {
            showError("Please select an avatar first!");
            return;
        }

        try {
            setLoading(true);
            const file = await urlToFile(selected, "avatar.png");

            const formData = new FormData();
            formData.append("profile_image", file);
            const response = await axios.post(
                `${BASE_URL}/profile/update-image`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            showSuccess(response?.data?.message || "Avatar updated successfully!");
            navigate("/main")
            fetchProfile()

        } catch (error) {
            console.error("Upload error:", error);
            showError("Failed to update avatar.");
        } finally {
            setLoading(false);
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
                            <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Change Avatar</span></div>
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
                    <div data-v-d47d827a="" className="x-avatar x-row x-flex-warp x-row-between">


                        {avatars.map((img, index) => (
                            <div
                                data-v-d47d827a=""
                                key={index}
                                className={`item ${selected === img ? "item acitve" : ""}`}
                                onClick={() => setSelected(img)}
                                style={{
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <img src={img} alt={`avatar-${index}`} data-v-d47d827a="" className="img" />
                            </div>
                        ))}

                        <button data-v-d47d827a=""
                            type="button"
                            onClick={handleSave}
                            disabled={loading || !selected}
                            style={{
                                backgroundColor: selected ? "#FAC10C" : "#737A87",
                                color: selected ? "black" : "white",
                                border: "none"

                            }}
                            className="van-button  van-button--block  mt14 x-avatar-btn"
                        >
                            <div className="van-button__content">   <span className="van-button__text">
                                {loading ? "Changing..." : "Save Changes"}
                            </span></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avatar
