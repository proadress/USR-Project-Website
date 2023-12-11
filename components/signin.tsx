// pages/login.tsx
import React, { useState } from 'react';

const Signin: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // 在這裡處理登入邏輯，可以使用 API 請求或其他方式
        console.log('Username:', username);
        console.log('Password:', password);
        // 處理登入邏輯，例如發送 API 請求，然後導航到下一個頁面
    };

    return (
        <div className={'min-h-screen flex items-center justify-center'}>
            <div className={'max-w-md w-full p-6 dark:bg-gray-900 rounded-3xl shadow-md dark:text-white'}>
                <h1 className={'text-2xl font-semibold mb-4'}>Login</h1>
                <form>
                    <div className="mb-4">
                        <label className={'block dark:text-gray-300 text-gray-700 text-sm font-bold mb-2'}>
                            Username:
                            <input
                                type="mail"
                                className={'mt-1 p-2 w-full border rounded-md dark:bg-gray-700 '}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className={'block dark:text-gray-300 text-gray-700 text-sm font-bold mb-2'}>
                            Password:
                            <input
                                type="password"
                                className={'mt-1 p-2 w-full border rounded-md dark:bg-gray-700'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className={'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 p-3 rounded-md'}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div >
    );
};

export default Signin;
