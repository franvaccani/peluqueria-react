import { Link } from 'react-router-dom'
import { useState } from 'react'

export default () => {

    const [state, setState] = useState(false)

    
    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Nosotros", path: "/Nosotros" },
        { title: "Servicio", path: "/Servicio" },
        { title: "Galeria", path: "/Galeria" },
        { title: "Contacto", path: "/Contacto" }
    ];

    return (
        <nav className="bg-[#1c1c1c] p-4 w-full md:static md:text-sm md:border-none sm:border-none ">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div className="md:hidden flex gap-2">
                        <button className="text-gray-500"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                        <span className='block sm:hidden text-gray-400 font-semibold'>MENU</span>
                    </div>
                </div>

                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-10 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-300 hover:text-white">
                                        <Link to={item.path} className="block text-base">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}