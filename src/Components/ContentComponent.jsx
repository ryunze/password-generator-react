export default function ContentComponent() {

    const handleGeneratePassword = function() {
        alert("Generated")
    }

    return (
        <div className="mt-17">
            <div className="flex w-full">
                <div className="w-1/2 text-white pe-4">
                    <h2 className="text-6xl leading-15 mb-7">Buat Password yang unik agar akunmu tetap aman.</h2>
                    <p>Generator sederhana untuk mempermudah dan menjaga <br/> keamanan akun online kamu.</p>
                </div>
                <div className="w-1/2 bg-white p-6 rounded-xl shadow">
                    <div className="w-full">
                        <p className="mb-4">Hasil Generate</p>
                        <div className="text-center border border-gray-300 rounded py-6 mb-5">
                            <h4 className="text-2xl">jah8098321hjk</h4>
                        </div>
                        <button onClick={handleGeneratePassword} className="w-full bg-blue-700 py-3 text-white rounded hover:bg-blue-800 transition duration-250 ease-in-out">Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}