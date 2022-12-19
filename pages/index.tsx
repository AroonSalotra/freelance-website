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
  // const { ref, inView, entry } = useInView()
  const { ref: refQuote, inView: observerBtn } = useInView()
  const { ref: refWork, inView: observerWork } = useInView()
  const { ref: refTest, inView: observerTest } = useInView()

  const handleClick = () => {
    // return refWork.current?.scrollIntoView()
  }

  useEffect(() => {
    console.log(observerWork)
  }, [observerWork])

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("time")
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

      <section className="flex flex-col gap-20 pb-20 info border-b-8 container py-60">

        <h1 className="text-3xl pt-4">
          <span className="font-semibold">Your</span> website,
          <span className="font-semibold"> your </span>
          way</h1>

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

      </section>

      <section ref={refWork}
        className={`container ${observerWork ? "animate-fadeUp" : ""}`}>
        <h2 className="text-3xl py-8">Some of our work</h2>

        <div
          className="flex flex-col sm:grid grid-cols-2">

          {Work.map(({ title, imgUrl }) => {
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

      </section>

      <div className={observerBtn ? "py-20 animate-fadeUp" : ""} ref={refQuote}>
        <button className="btn !text-4xl">
          Get a quote
        </button>
      </div>

      <div className={observerTest ? "animate-fadeUp" : ""} ref={refTest}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </>
  )
}
