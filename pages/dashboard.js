import { useState } from "react"
export default function Dashboard() {
    const [claireIsLoggedIn, setClaireIsLoggedIn] = useState(false)
    const [input, setInput] = useState("")
    if (claireIsLoggedIn) {
        return (
            <section className="py-8 bg-blueGray-50">
                <div className="container px-4 mx-auto">
                    <div className="pt-14 px-8 pb-12 bg-white rounded-5xl">
                        <div className="flex flex-wrap mb-8 justify-between items-center">
                            <div className="w-full md:w-auto mb-10 md:mb-0">
                                <h3
                                    className="text-3xl font-heading font-medium leading-10"
                                    contentEditable="false"
                                >
                                    opal-and-tiny-cow
                                </h3>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="inline-block w-full min-w-max overflow-hidden">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th
                                                className="pb-8 text-sm text-body text-left text-opacity-40 font-heading font-semibold uppercase"
                                                contentEditable="false"
                                            >
                                                resources
                                            </th>
                                            <th
                                                className="pb-8 text-sm text-body text-opacity-40 font-heading font-semibold uppercase"
                                                contentEditable="false"
                                            >
                                                Username
                                            </th>
                                            <th
                                                className="pb-8 text-sm text-body text-opacity-40 font-heading font-semibold uppercase"
                                                contentEditable="false"
                                            >
                                                password
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-0">
                                                <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <h4
                                                                className="font-heading font-medium leading-4"
                                                                contentEditable="false"
                                                            >
                                                                Github
                                                            </h4>
                                                            <span
                                                                className="text-sm text-darkBlueGray-400 leading-3"
                                                                contentEditable="false"
                                                            >
                                                                Codebase
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        ask Ira for access
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100 rounded-tr-5xl rounded-br-5xl">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        **********
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0"></td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">
                                                <div className="flex items-center pl-8 pr-4 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <h4
                                                                className="font-heading font-medium leading-4"
                                                                contentEditable="false"
                                                            >
                                                                Vercel
                                                            </h4>
                                                            <span
                                                                className="text-sm text-darkBlueGray-400 leading-3"
                                                                contentEditable="false"
                                                            >
                                                                Hosting
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        opalandtinycow@gmail.com
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        <span style={{ backgroundColor: "rgb(251, 252, 253)" }}>
                                                            **********
                                                        </span>
                                                        <br />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">
                                                <div className="flex items-center pl-8 pr-4 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <h4
                                                                className="font-heading font-medium leading-4"
                                                                contentEditable="false"
                                                            >
                                                                Firebase
                                                            </h4>
                                                            <span
                                                                className="text-sm text-darkBlueGray-400 leading-3"
                                                                contentEditable="false"
                                                            >
                                                                Database
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        login with Google
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100 rounded-tr-5xl rounded-br-5xl">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        **********
                                                        <br />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">
                                                <div className="flex items-center pl-8 pr-4 h-20 bg-white rounded-tl-5xl rounded-bl-5xl">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <h4
                                                                className="font-heading font-medium leading-4"
                                                                contentEditable="false"
                                                            >
                                                                Google
                                                            </h4>
                                                            <span
                                                                className="text-sm text-darkBlueGray-400 leading-3"
                                                                contentEditable="false"
                                                            >
                                                                Main Account
                                                                <br />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        opalandtinycow@gmail.com
                                                        <br />
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0">
                                                <div className="flex items-center justify-center p-5 h-20 text-center bg-white">
                                                    <span
                                                        className="font-heading text-darkBlueGray-400"
                                                        contentEditable="false"
                                                    >
                                                        <span style={{ backgroundColor: "rgb(251, 252, 253)" }}>
                                                            **********
                                                        </span>
                                                        <br />
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-0"></td>
                                            <td className="p-0"></td>
                                        </tr>
                                        <tr>
                                            <td className="p-0"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-8 mx-auto text-center max-w-max" />
                    </div>
                </div>
            </section>

        )
    } else {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                if (input === "opal-and-tiny-cow") {

                    setClaireIsLoggedIn(true);
                }
            }} className="w-1/3">
                Enter the name of your project in lowercase letters with hyhens instead of spaces. <br />
                <br />
                something-like-this
                <input
                    className="w-full py-5 px-12 text-xl border-2 border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"></input>
                <button
                    className="inline-block py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    type="submit">Submit</button>
            </form>
        )
    }
}