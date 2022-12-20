import { useEffect, useRef, useState } from "react"
import { Dancing_Script } from "@next/font/google"
import { BsArrowDownCircle } from "react-icons/bs"
import Image from "next/image"
import BGImage from "../public/bg-home.png"
import Link from "next/link"
import { GrUserWorker } from "react-icons/gr"
import { MdPayment } from "react-icons/md"
import { BsFillPencilFill } from "react-icons/bs"
import Work from "../data/work-data.json"
import { useInView } from "react-intersection-observer"

const fontStylistic = Dancing_Script({ subsets: ["latin"] })

export default function Home() {

  const [index, setIndex] = useState(90)

  const { ref: refQuote, inView: observerBtn } = useInView({ triggerOnce: true })
  const { ref: refWork, inView: observerWork } = useInView({ triggerOnce: false, threshold: 0.3 })

  const handleClick = () => {
    // return refWork.current?.scrollIntoView()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 90) {
        setIndex(index => 45)
      } else if (index === 0) {
        setIndex(index => 90)
      } else setIndex(index => 0)
    }, 4000)

    return () => clearInterval(interval)
  }, [index])


  return (
    <>
      <section className="pt-60 home border-b-8">

        <h1 className="text-8xl">Design</h1>
        <p className="text-2xl py-4">With no compromise</p>

        <div className="overflow-hidden h-20 m-auto">

          <ul className="flex flex-col gap-40 justify-center text-3xl overflow-visible transition-[transform] duration-750 ease-out text-4xl"
            style={{ transform: `translateY(-${index}%)` }}>

            <li>Modern</li>
            <li className={fontStylistic.className}>Stylistic</li>
            <li id="functional"
              className="w-fit px-2 mx-auto">
              Functional</li>

          </ul>

        </div>

        <button onClick={handleClick}
          className="text-6xl py-20 hover:text-cyan-700">
          <BsArrowDownCircle />
        </button>

      </section>

      <div />

      {/* <section className="flex flex-col gap-20 pb-20 info border-b-8 container animate-fadeUp">

        <h1 className="text-3xl pt-12">
          <span className="font-semibold">Your</span> website,
          <span className="font-semibold"> your </span> way</h1>

        <div className="animate-fade">
          <ul className="px-0 flex flex-col justify-between text-2xl sm:px-20 sm:flex-row">
            <li className="rounded-sm border-gray-400 p-2 shadow-sm shadow-black">
              Design to your demands <BsFillPencilFill className="m-auto" /></li>
            <li className="rounded-sm border-gray-400 p-2 shadow-sm shadow-black">
              Mobile responsive <GrUserWorker className="m-auto" /></li>
            <li className="rounded-sm border-gray-400 p-2 shadow-sm shadow-black">
              Payment upon completion <MdPayment className="m-auto" /></li>
          </ul>
        </div>

      </section> */}

      <section className="animate-stretch">
        <h1 className="text-7xl font-serif py-12">Start your business today</h1>
        <dl className="font-semibold max-w-3xl m-auto text-left">
          <dt>TITLE</dt>
          <dd className="pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
          <dt>TITLE</dt>
          <dd className="pb-10">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
          <dt>TITLE</dt>
          <dd className="pb-10">Amet nisl purus in mollis nunc sed id semper risus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Suspendisse faucibus interdum posuere lorem.</dd>
        </dl>
      </section>

      <section ref={refWork}
        className={`flex flex-col lg:flex-row justify-center items-stretch  rounded-lg px-4 py-40 
        ${observerWork ? "animate-fadeSide" : "opacity-0"} `}>

        <div className="border-l-8 border-black p-12 lg:w-3/12 text-3xl">
          {/* <h2 className="font-semibold">Create with no limits</h2> */}

          <ul className="list-square flex text-left flex-col gap-4 lg:pt-[40%]">
            <li>Search optimisation</li>
            <li>Mobile friendly</li>
            <li>Secure connection</li>
          </ul>
        </div>

        <div className="">
          {/* <h2 className="text-3xl py-8 ">What we do</h2> */}

          <div className="flex flex-col transition-opacity sm:grid grid-cols-2">

            {Work.map(({ title, imgUrl, body }) => {
              return <div key={title}
                className="flex flex-col text-left text-2xl items-center">
                <h1 className="pl-4 font-semibold">{title}</h1>


                <Image
                  src={imgUrl}
                  width={512}
                  height={512}
                  alt={`${title} example`}
                />

              </div>
            })}
          </div>
        </div>
      </section>

      <div className={observerBtn ? "py-20 animate-fadeUp" : ""} ref={refQuote}>
        <button className="btn !text-4xl">
          Get a quote
        </button>
      </div>

    </>
  )
}
