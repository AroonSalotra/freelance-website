import { useEffect, useState } from "react"
import { Dancing_Script } from "@next/font/google"

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
    <div className="pt-60">

      <h1 className="text-8xl">Design</h1>
      <p className="text-2xl py-4">With no compromise</p>


      <div className="overflow-hidden h-20 m-auto">

        <ul className="flex flex-col gap-40 justify-center text-3xl overflow-visible transition-[transform] duration-750 ease-out text-4xl"
          style={{ transform: `translateY(-${index}%)` }}
        >

          <li>Modern</li>
          <li className={fontStylistic.className}>Stylistic</li>
          <li id="functional"
            className="w-fit px-2 mx-auto">
            Functional</li>

        </ul>

      </div>

      {/* <h1>{index.toString()}</h1> */}


    </div>
  )
}
