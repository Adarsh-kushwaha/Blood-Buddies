import React from 'react'

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-red-400 to-red-600 min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
            <div className="max-w-lg mx-auto">
                <a href="/">
                    <h1 className="text-4xl font-bold text-white text-center">Login As Patient</h1>
                </a>
            </div>

            <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Blood Donation Journey</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col">
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                            <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-3 pb-3"/>
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                            <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-red-600 transition duration-500 px-3 pb-3"/>
                        </div>
                        <div className="flex justify-end">
                            <a href="/" className="text-sm text-red-600 hover:text-red-800 hover:underline mb-6">Forgot your password?</a>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                    </form>
                </section>
            </div>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">Don't have an account? <a href="/" class="font-bold hover:underline">Sign up</a>.</p>
            </div>

            <section className="max-w-lg mx-auto flex justify-center text-white">
                <a href="/" className="hover:underline">Return Back To Home Page</a>
                <span className="mx-3">•</span>
                <a href="/" className="hover:underline">Privacy</a>
            </section>
        </div>
    )
}

export default Login
