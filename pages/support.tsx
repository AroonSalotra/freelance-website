import { FiArrowRight } from "react-icons/fi"
import React, { useState, Fragment } from "react"
import SupportTab from "../components/SupportTab"
import SupportData from "../data/support-data.json"
import { BsSearch } from "react-icons/bs"

const Support = () => {

    // console.log(SupportData)

    const [showSupportTab, setShowSupportTab] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState("")

    const handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
        // e.preventDefault()
        const { value } = e.target as HTMLInputElement
        setSearchValue(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchValue(s => "")

    }

    return (
        <div>
            <h1 className="text-5xl font-semibold py-8">Help Center</h1>



            <h2 className="text-2xl">Cant find your solution below? </h2>
            <p className="text-sm light">Request a ticket and we&apos;ll  get back to you</p>

            <form onSubmit={handleSubmit}
                className="flex justify-center pt-8">


                <input className="w-96 p-4 rounded-full rounded-r-none bg-slate-100 text-[1.3rem]"
                    type="search"
                    value={searchValue}
                    onChange={handleChangeSearch}
                    name=""
                    id=""
                    placeholder="What issue are you having?"
                />

                <button className="bg-slate-100 pr-4 rounded-r-full text-2xl">
                    <BsSearch />
                </button>

            </form>

            <h2 className="pt-20 text-3xl">Common questions</h2>
            <div className="flex flex-col items-center place-items-center items-start pb-12 gap-y-8 sm:grid md:grid-cols-3 pt-20 2xl:px-80">
                {SupportData.map(({ title, body, id }) => {
                    return <Fragment key={id}>
                        <SupportTab title={title} body={body} />
                    </Fragment>
                })}
            </div>

        </div>
    );
}

export default Support;