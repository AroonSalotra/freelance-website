import React, { useEffect, useState } from "react";
import Link from "next/link";


const Quote = () => {
    const [sitePrice, setSitePrice] = useState<number>(0)
    const [stylePrice, setStylePrice] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [formLevel, setFormLevel] = useState<string | undefined>("form-level-1")

    useEffect(() => {

        if (stylePrice > 0) {
            setFormLevel("form-level-3")
        } else if (sitePrice > 0) {
            setFormLevel("form-level-2")
        }

    }, [sitePrice, stylePrice])


    const handleChange = (
        event: React.FormEvent<HTMLInputElement>,
        param: React.Dispatch<React.SetStateAction<number>>
    ) => {
        const { value } = event.target as HTMLInputElement
        param(JSON.parse(value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (sitePrice !== 0 && stylePrice !== 0) {
            setShowModal(current => !current)
            setIsSubmitted(current => true)
        }
    }

    return (
        <div className="h-full pt-12">
            <h1 className="text-5xl title-2 tracking-wider py-3 mb-4 px-2 w-fit mx-auto rounded-lg">
                Get a quote</h1>
            {isSubmitted ? <>

                <div className="mb-8">

                    <h1 className="pb-4">Thank you for your submission</h1>

                    <Link className="p-2 bg-blue-300 rounded-lg hover:bg-blue-400"
                        href={"/"}>
                        Back to home
                    </Link>

                </div>

            </> :
                <>
                    <form className={`flex flex-col gap-12 overflow-hidden w-screen mx-auto sm:w-fit sm:py-4 sm:px-8 bg-slate-100 transition-[height] ${formLevel}`}
                        action="" onSubmit={handleSubmit}>

                        <fieldset className="flex flex-col gap-4 sm:block">

                            <legend>Website Type</legend>

                            <input
                                type="radio"
                                name="type"
                                id="commerce"
                                value={40}
                                onChange={(e) => handleChange(e, setSitePrice)} />

                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="commerce">E-Commerce</label>

                            <input
                                type="radio"
                                name="type"
                                id="resource"
                                value={20}
                                onChange={(e) => handleChange(e, setSitePrice)} />


                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="resource">Resource</label>

                            <input
                                type="radio"
                                name="type"
                                id="game"
                                value={30}
                                onChange={(e) => handleChange(e, setSitePrice)} />


                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="game">Online Game</label>


                        </fieldset>

                        <fieldset className="flex flex-col gap-4 sm:block">

                            <legend>Base Style</legend>

                            <input
                                type="radio"
                                name="style"
                                id="modern"
                                value={15}
                                onChange={(e) => handleChange(e, setStylePrice)} />

                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="modern">Modern</label>

                            <input
                                type="radio"
                                name="style"
                                id="classic"
                                value={10}
                                onChange={(e) => handleChange(e, setStylePrice)} />

                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="classic">Classic</label>

                            <input
                                type="radio"
                                name="style"
                                id="abstract"
                                value={10}
                                onChange={(e) => handleChange(e, setStylePrice)} />

                            <label className="bg-blue-200 p-2 mx-2 rounded-lg hover:bg-blue-400"
                                htmlFor="abstract">Abstract</label>

                        </fieldset>

                        <fieldset className="flex flex-col gap-4 py-4 mx-auto">

                            {/* <div class="grid grid-rows-[200px_minmax(900px,_1fr)_100px]"> */}

                            <legend>Optional Extras</legend>

                            <label htmlFor="animations" className="checkbox">
                                <input type="checkbox" name="" id="animations" />Animations
                            </label>

                            <label htmlFor="responsivity" className="checkbox">
                                <input type="checkbox" name="" id="responsivity" />Mobile Support
                            </label>

                            <label htmlFor="adsense" className="checkbox">
                                <input type="checkbox" name="" id="adsense" />Google Adsense
                            </label>

                            <label htmlFor="socialmedia" className="checkbox">
                                <input type="checkbox" name="" id="socialmedia" />Social Media Post
                            </label>
                        </fieldset>

                        <button className="bg-blue-400 w-fit mx-auto p-2 px-4 rounded-md">
                            Send Request</button>

                    </form>


                    <h3 className="border-t-2 border-black w-fit mx-auto bg-slate-100 p-2 rounded-lg mt-8">
                        Est. Price:
                        <span className="text-4xl p-4 pointer-events-none">
                            ??{sitePrice + stylePrice}</span>
                    </h3>

                    <p className="text-sm text-center mx-auto text-slate-500 pt-4 italic mb-8">
                        One time purchase does not come with scheduled website maintenence and upgrade availablity, if you would like scheduled updating - please use a monthly plan instead.
                    </p>
                </>}

            <div id="modal"
                className={`bg-slate-100 w-screen absolute p-8 border-t-[1rem] border-blue-500 sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-20rem] sm:left-[50%] sm:w-fit shadow-lg shadow-black ${showModal ? "modal-show" : "modal-hide"}`}>

                <h1>Your request has been sent!</h1>

                <button className="bg-blue-500 px-2 py-1 rounded-lg mt-8"
                    onClick={() => setShowModal(!showModal)}>
                    Continue</button>
            </div>

        </div>
    );
}

export default Quote;