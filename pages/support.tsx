import { FiArrowRight } from "react-icons/fi"
import { useState, Fragment } from "react"
import SupportTab from "../components/SupportTab"
import SupportData from "../data/support-data.json"

const Support = () => {

    console.log(SupportData)

    const [showSupportTab, setShowSupportTab] = useState<boolean>(false)

    return (
        <div>
            <h1 className="text-5xl font-semibold pb-8">Help Center</h1>

            <div className="flex justify-center gap-20">
                {SupportData.map(({ title, body }) => {
                    return <Fragment key={title}>
                        <SupportTab title={title} body={body} />
                    </Fragment>
                })}
            </div>

        </div>
    );
}

export default Support;