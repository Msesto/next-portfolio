/** @jsx jsx */
import { jsx } from "@emotion/react"
import Link from 'next/link'
import { slide as Menu } from "react-burger-menu"
import cn from 'classnames'
import { css } from "@emotion/css"

const padMe = css`
  padding : 0.5rem calc((100vw - 850px)/2);
  margin-left: 10px;
`

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const linkMe = css`
  color: #fff;
  padding: 0.25rem;
  margin: 0 0 0.5rem 0 0;

  &.current-page{
    border-bottom: 2px solid #ed8936;
   }
`

const Header = () => {
  return (
    <header className={cn`flex p-2 justify-between ${padMe}`}>
      <button className={cn`text-white text-4xl leading-tight`}><Link href="/"><p>MARTIN<strong>SESTO</strong></p></Link></button>
      <nav className={cn`sm:hidden md:inline m-auto mx-0`}>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/"> About </Link></button>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/projects"> Projects </Link></button>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/technologies"> Technologies </Link></button>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/resume"> Resume </Link></button>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/blog"> Blog </Link></button>
        <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/contact"> Contact </Link></button>
      </nav>
      {/* <div id="11" className={cn``}>
        <Menu className={cn``} styles={styles} width={'150px'} isOpen={true}>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/">About</Link></button>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/projects">Projects</Link></button>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/technologies">Technologies</Link></button>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/resume">Resume</Link></button>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/blog">Blog</Link></button>
          <button className={cn`m-1 text-base font-medium leading-tight ${linkMe}`}><Link href="/contact">Contact</Link></button>
        </Menu>
      </div> */}
    </header >
  )
}

export default Header
