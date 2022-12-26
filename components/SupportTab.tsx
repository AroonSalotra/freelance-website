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

            <div className="flex justify-between bg-slate-100 p-4">
                <p>{title}</p>

                <button onClick={() => setShowSupportTab(!showSupportTab)}>
                    <FiArrowRight
                        className={`text-2xl transition-transform hidden
                        ${showSupportTab ? "rotate-90" : ""} sm:flex`} />
                </button>

            </div>

            <p className={`w-fit px-6 text-left bg-slate-100 transition-opacity
            ${showSupportTab ? "sm:opacity-1" : "sm:opacity-0"}`}>
                {body}
            </p>

        </div>
    );
}

export default SupportTab;