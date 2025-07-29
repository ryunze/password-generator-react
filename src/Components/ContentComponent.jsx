import { useState } from "react"

export default function ContentComponent() {

    const [password, setPassword] = useState(); 
    const [passwordLength, setPasswordLength] = useState(8)
    
    const generatePassword = function (length = 8) {
        let result = '';    
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charsLength = characters.length;

        for (let i = 0; i < charsLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charsLength));
        }

        return result.substring(0, length);
    }
    
    const handleGeneratePassword = function() {
        let generatedPassword = generatePassword(passwordLength)
        setPassword(generatedPassword)
    }   

    const handlePasswordLength = function (event) {
        setPasswordLength(event.target.value)
        setPassword(generatePassword(passwordLength))
    }

    return (
        <div className="mt-17">
            <div className="flex w-full">
                <div className="w-1/2 text-white pe-4">
                    <h2 className="text-6xl leading-15 mb-7">Buat Password yang unik agar akunmu tetap aman.</h2>
                    <p>Generator sederhana untuk mempermudah dan menjaga <br/> keamanan akun online kamu.</p>
                </div>
                <div className="w-1/2 bg-white p-6 rounded-xl shadow">

                    <form className="mb-4">
                        <label htmlFor="passwordRange" className="block mb-2">Panjang <span className="text-blue-500 font-bold">{passwordLength}</span> karakter</label>
                        <input type="range" id="passwordRange" className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" min="8" value={passwordLength} onChange={handlePasswordLength} max="128"/>
                    </form>

                    <div className="w-full">
                        <p className="mb-4">Hasil Generate</p>
                        <div className="text-center border border-gray-300 rounded py-6 px-4 mb-5 text-wrap">
                            <h4 className="text-2xl w-full wrap-break-word">{ password }</h4>
                        </div>
                        <button onClick={handleGeneratePassword} className="w-full bg-blue-700 py-3 text-white rounded hover:bg-blue-800 transition duration-250 ease-in-out">Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}