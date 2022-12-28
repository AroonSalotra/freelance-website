import { useState } from "react"
import { FiArrowRight } from "react-icons/fi"

type TProps = {
    title: string,
    body: string
}


const SupportTab = ({ title, body }: TProps) => {

    const [showSupportTab, setShowSupportTab] = useState<boolean>(false)

    return (

        <div className={`overflow-hidden transition-[max-height] w-72`}>


            <button onClick={() => setShowSupportTab(!showSupportTab)}
                className="flex justify-between py-4 shadow-md w-full items-center hover:shadow-lg bg-white">

                <p className="w-fit pl-2 text-left h-12 sm:w-[16.5rem] text-[18px] font-thin">{title}</p>

                <FiArrowRight
                    className={`text-2xl transition-transform hidden
                        ${showSupportTab ? "rotate-90" : ""} sm:flex`} />
            </button>


            <p className={`w-fit h-52 px-6 py-4 text-left transition-opacity font-light bg-gray-50
            ${showSupportTab ? "opacity-1" : "opacity-0"}`}>
                {body}
            </p>

        </div>
    );
}

export default SupportTab;