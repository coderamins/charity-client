import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react"; // Import necessary icons
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toAbsolouteUrl } from "../helpers/absolouteUrl";
import Captcha from "../components/Captcha";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState(false);
    const [generatedCaptcha, setGeneratedCaptcha] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCaptchaChange = (captchaCode) => {
        setGeneratedCaptcha(captchaCode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // بررسی کپچا
        if (captchaInput !== generatedCaptcha) {
            setCaptchaError(true);
            return;
        }

        // ادامه پردازش فرم
        alert("فرم ارسال شد");
    };

    return (
        <div className="flex h-screen">
            {/* بخش سمت چپ - پیام انگیزشی و تصویر */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-blue-100 p-10 relative">
                {/* پس‌زمینه عکس */}
                <div className="absolute inset-0">
                    <img
                        src={toAbsolouteUrl('/charity-backg.png')}
                        className="object-cover w-full h-full opacity-5"
                        alt="Background"
                    />
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-gray-700 mb-4 text-center">ورود به پنل مدیریت موسسه خیریه طه</h3>
                    <p className="text-gray-600 text-center mb-6">
                        با ورود به حساب کاربری خود، می‌توانید کمک‌های خود را مدیریت کنید و در کارهای خیر مشارکت داشته باشید.
                    </p>
                </div>
            </div>

            {/* بخش سمت راست - فرم ورود */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10">
                <img src={toAbsolouteUrl('/taha-logo.png')} alt="Logo" className="w-15 h-15 mr-2 mb-5" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">ورود به حساب</h2>
                <form className="w-full max-w-sm">
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">نام کاربری</label>
                        <div className="flex items-center">
                            <User className="absolute left-3 text-gray-500" />
                            <input
                                type="email"
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="نام کاربری خود را وارد کنید"
                            />
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700">کلمه عبور</label>
                        <div className="flex items-center">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="کلمه عبور خود را وارد کنید"
                            />
                            <div
                                onClick={togglePasswordVisibility}
                                className="absolute left-3 cursor-pointer text-gray-500"
                            >
                                {passwordVisible ? <EyeOff /> : <Eye />}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">کد امنیتی</label>
                        <Captcha onChange={handleCaptchaChange} />
                        <input
                            type="text"
                            className="w-full p-3 mt-2 border border-gray-200 rounded-lg"
                            placeholder="کد امنیتی را وارد کنید"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                        />
                        {captchaError && (
                            <p className="text-red-500 text-sm mt-2">کد امنیتی صحیح نیست!</p>
                        )}
                    </div>


                    <button className="w-full bg-gray-100 !bg-gray-100 text-gray-600 py-3 rounded-lg hover:!bg-blue-100 transition">
                        ورود</button>

                </form>
                <p className="absolute bottom-4 text-gray-600 mb-4">
                    کلمه عبور را فراموش کردید؟ <a href="#" className="text-blue-500">بازیابی کلمه عبور</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
