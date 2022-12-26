import { useState } from "react"
import { FiArrowRight } from "react-icons/fi"

type TProps = {
    title: string,
    body: string
}


const SupportTab = ({ title, body }: TProps) => {

    const [showSupportTab, setShowSupportTab] = useState<boolean>(false)

    return (

        <div className={`p-4 bg-slate-100 w-fit overflow-hidden transition-[height] w-76
        ${showSupportTab ? "h-60" : "h-12"}`}>
            {/* <h3 className="text-left uppercase">Problem</h3> */}
            <div className="flex items-center gap-12">
                <p>{title}</p>

                <button onClick={() => setShowSupportTab(!showSupportTab)}>
                    <FiArrowRight
                        className={`text-2xl transition-transform
                        ${showSupportTab ? "rotate-90" : ""}`} />
                </button>

            </div>

            <p className="w-60 pt-8 text-left">
                {body}
            </p>

        </div>
    );
}

export default SupportTab;