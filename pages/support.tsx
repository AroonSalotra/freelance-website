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


            <h1 className="text-5xl font-semibold py-8 title-2">
                Support Center</h1>

            <h2 className="text-2xl">Cant find your solution below? </h2>

            <p className="text-[0.99rem] light italic">
                Request a ticket and we&apos;ll  get back to you</p>


            <form onSubmit={handleSubmit}
                className="flex justify-center pt-8 border-b-2 pb-12">


                <input className="w-96 p-4 rounded-full rounded-r-none bg-slate-100 text-[1.3rem] border-b-8"
                    type="search"
                    value={searchValue}
                    onChange={handleChangeSearch}
                    name=""
                    id=""
                    placeholder="What issue are you having?"
                />

                <button className="bg-slate-100 pr-4 rounded-r-full text-2xl border-b-8">
                    <BsSearch />
                </button>

            </form>


            <h2 className="pt-8 text-3xl bg-slate-200 font-semibold title-2">Common questions</h2>
            <div className="flex flex-col items-center place-items-center items-start gap-y-8 bg-slate-200 sm:grid md:grid-cols-3 pt-12 pb-20 2xl:px-80">
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