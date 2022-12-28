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
            {/* <h3 className="text-left uppercase">Problem</h3> */}


            <button onClick={() => setShowSupportTab(!showSupportTab)}
                className="flex justify-between py-4 shadow-md hover:shadow-lg bg-white">

                <p className="w-screen pl-4 text-left sm:w-[16.5rem] text-[18px] font-thin">{title}</p>

                <FiArrowRight
                    className={`text-2xl transition-transform hidden
                        ${showSupportTab ? "rotate-90" : ""} sm:flex`} />
            </button>


            <p className={`w-fit px-6 text-left transition-opacity font-light bg-gray-50
            ${showSupportTab ? "md:opacity-1" : "md:opacity-0"}`}>
                {body}
            </p>

        </div>
    );
}

export default SupportTab;