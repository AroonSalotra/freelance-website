import { useEffect, useState } from "react"
import { Dancing_Script } from "@next/font/google"
import { BsArrowDownCircle } from "react-icons/bs"
import Image from "next/image"
import BGImage from "../public/bg-home.png"
import Link from "next/link"
import { GrUserWorker } from "react-icons/gr"
import { MdPayment } from "react-icons/md"
import { BsFillPencilFill } from "react-icons/bs"
import Work from "../data/work-data.json"

const fontStylistic = Dancing_Script({ subsets: ["latin"] })


export default function Home() {

  const [index, setIndex] = useState(90)

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
      <section className="pt-60 home">

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

        <button className="text-6xl py-20 hover:text-cyan-700">
          <BsArrowDownCircle />
        </button>

      </section>

      <div className="border-b-[1rem] border-cyan-200" />

      <section className="flex flex-col gap-40 info">

        <h1 className="text-3xl py-10"> Your website, your way</h1>

        <div className="animate-expand">
          <ul className="px-0 flex flex-col justify-between text-2xl sm:px-20 sm:flex-row">
            <li className="border-2 rounded-lg border-gray-400 p-2 bg-amber-400">
              Design to your demands <GrUserWorker className="m-auto" /></li>
            <li className="border-2 rounded-lg border-gray-400 p-2 bg-cyan-400">
              Maintain website <MdPayment className="m-auto" /></li>
            <li className="border-2 rounded-lg border-gray-400 p-2 bg-red-400">
              Payment upon completion <BsFillPencilFill className="m-auto" /></li>
          </ul>
        </div>

        <button className="rounded-full border-2 border-black p-2 px-4 text-2xl w-60 m-auto">
          <Link href={"/work"} />
          See our work
        </button>

      </section>

      <section className="flex flex-col sm:grid grid-cols-2 gap-8">
        {Work.map(({ title, imgUrl }) => {
          return <div key={title}
            className="flex flex-col text-left text-2xl">
            <h1>{title}</h1>
            <Image
              src={imgUrl}
              width={512}
              height={512}
              alt=""
            />
          </div>
        })}

      </section>

    </>
  )
}
