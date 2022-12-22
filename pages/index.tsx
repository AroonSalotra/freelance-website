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
import { AiFillLock, AiFillClockCircle, AiFillMobile } from "react-icons/ai"
import TableBlock from "../components/TableBlock"

const fontStylistic = Dancing_Script({ subsets: ["latin"] })

export default function Home() {

  const [index, setIndex] = useState(90)

  const { ref: refQuote, inView: observerBtn } = useInView({ triggerOnce: false })
  const { ref: refWork, inView: observerWork } = useInView({ triggerOnce: false })
  const { ref: refPrice, inView: observerPrice } = useInView({ triggerOnce: false })

  const handleClick = () => {
    // return refWork.current?.scrollIntoView()
  }

  const handleSubmit = (e: React.FormEvent) => {
    return e.preventDefault()
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

      <section className="animate-stretch bg-gray-100 border-b-8 py-20">
        <h1 className="text-7xl font-serif pb-10">Start your business today</h1>
        <dl className="max-w-3xl m-auto text-left text-2xl">
          <dt>TITLE</dt>
          <dd className="p-4">Quick and seamless integration of your idea to the final product.</dd>
          <dt>TITLE</dt>
          <dd className="p-4">24/7 email customer support system.</dd>
          <dt>TITLE</dt>
          <dd className="p-4">Amet nisl purus in mollis nunc sed id semper risus. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Suspendisse faucibus interdum posuere lorem.</dd>
        </dl>
      </section>

      <section ref={refWork}
        className={`flex flex-col lg:flex-row justify-center items-stretch rounded-lg px-4 py-40 
        ${observerWork ? "animate-fadeSide" : "opacity-0"}`}>

        <div className="border-l-8 border-black p-12 lg:w-fit text-3xl">
          {/* <h2 className="font-semibold">Create with no limits</h2> */}

          <ul className="list-square flex text-left flex-col gap-4 lg:pt-[60%]">
            <li>Search optimisation</li>
            <li>Mobile friendly</li>
            <li>Secure connection</li>
          </ul>
        </div>


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

      </section>


      {/* <button className={observerBtn ? "py-20 animate-fadeUp" : ""} ref={refQuote}>
        <Link href={"/quote"} className="btn !text-5xl">
          Get Started
        </Link>
      </button> */}

      <section className="pb-20">
        <h2 className="text-2xl pb-10 border-t-8 pt-8">Select the best plan for you</h2>

        <table className="table-mobile sm:m-auto sm:justify-center text-left" ref={refPrice}>
          <tbody className={`border-2 p-1 rounded-lg rounded-b-none shadow-md shadow-black transition-all overflow-y-hidden
          ${observerPrice ? "animate-expand" : ""}`} >
            <tr className="pointer-events-none">
              <th />
              <th>
                <div className="flex flex-col items-center">
                  <h2 className={`font-normal bg-slate-200 p-1 px-2 sm:absolute sm:translate-y-[-2rem]
                  ${observerPrice ? "animate-fade" : ""}`}>
                    Most Popular</h2>
                  <h2 className="text-2xl">Beginner</h2>
                  <h2 className="font-normal">£<span className="text-2xl">6</span> monthly</h2>
                </div>
              </th>
              <th>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl">Advanced</h2>
                  <h2 className="font-normal">£<span className="text-2xl">9</span> monthly</h2>

                </div>

              </th>
              <th>
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl">Professional</h2>
                  <h2 className="font-normal">£<span className="text-2xl">12</span> monthly</h2>

                </div>
              </th>
            </tr>

            <tr>
              <td>Custom Domain</td>
              <TableBlock check={true} />
              <TableBlock check={true} />
              <TableBlock check={true} />
            </tr>
            <tr>
              <td>SSL Certificate</td>
              <TableBlock check={true} />
              <TableBlock check={true} />
              <TableBlock check={true} />

            </tr>
            <tr>
              <td>Maintenence</td>
              <TableBlock check={false} />
              <TableBlock check={true} />
              <TableBlock check={true} />
            </tr>
            <tr>
              <td>24/7 Customer Service</td>
              <TableBlock check={false} />
              <TableBlock check={false} />
              <TableBlock check={true} />
            </tr>

          </tbody>
        </table>
      </section>

    </>
  )
}
