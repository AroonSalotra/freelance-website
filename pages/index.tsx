import { useEffect, useState } from "react"
import { Dancing_Script } from "@next/font/google"

const fontStylistic = Dancing_Script({ subsets: ["latin"] })


export default function Home() {

  const [index, setIndex] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("time")
      if (index === 100) {
        setIndex(index => 0)
      } else if (index === 0) {
        setIndex(index => -100)
      } else setIndex(index => 100)
    }, 1000)

    return () => clearInterval(interval)
  }, [index])


  return (
    <div className="pt-60">

      <h1 className="text-8xl">Design</h1>
      <p className="text-2xl py-4">With no compromise</p>


      <div className="overflow-hidden max-w-screen w-[25rem] m-auto">

        <ul className="flex justify-center gap-60 text-3xl overflow-visible transition-all duration-750 text-4xl"
          style={{ transform: `translateX(${index}%)` }}>

          <li>Modern</li>
          <li className={fontStylistic.className}>Stylistic</li>
          <li id="functional">Functional</li>
          
        </ul>

      </div>


    </div>
  )
}
