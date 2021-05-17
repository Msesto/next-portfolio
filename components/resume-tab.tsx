// import DateFormatter from './date-formatter'
// import Link from 'next/link'
import React from "react"
import {FaAngleDown, FaTimes} from "react-icons/fa"

type Props = {
  title: string
  // date: string
  // excerpt: string
  sections: string[][]
}

const Tab = ({
  title,
  // date,
  // excerpt,
  sections,
}: Props) => {
  return (
    <section>
      <h3 className='m-2 mb-6 text-2xl'>{title}</h3>
      { sections.map((e, i) => 
        <Drop e={e} i={i} />
      )}
    </section>
  )
}

type DProps = {
  e: string[]
  i: number
}

const Drop = ({e, i}:DProps) => {
  const [useOpen, setOpen] = React.useState(false)
  return(
    <div className={ i%2 === 0 ? "bg-accent-1 rounded-lg" : ""}>
      <div className="flex justify-between p-2">
        <h3 className="text-4xl">{e[0]}</h3>
        <a className="mt-2" onClick={() => setOpen(!useOpen)}>
          {useOpen ? 
          <FaTimes className="text-3xl text-yellow-500"/>
          :
          <FaAngleDown className="text-3xl"/>
          } 
        </a>
      </div>
      {useOpen ? <p> {e[1]} </p> : null}
    </div>

  )
}

export default Tab