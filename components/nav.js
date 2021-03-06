import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const links = [
  { href: '#', label: 'Products' , icons: 'bx bx-store nav__icon'},
  { href: '#', label: 'Purchase Order' , icons: 'bx bx-cart nav__icon'},
  { href: '/catagory', label: 'Stock Records' , icons: 'bx bx-trending-up nav__icon'},
  { href: '/employee', label: 'Users' , icons: 'bx bx-user nav__icon'},
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}-${link.icons}`
  return link
})

export default function Nav (){
  const router = useRouter();
  return (
    <div class="l-navbar" id="nav-bar">
    <nav class="nav">
      <div>
        <div class="nav__list">
          <a href="/" class={router.pathname == "/" ? "nav__link active" : "nav__link"} >
            <i class='bx bx-grid-alt nav__icon' ></i>
            <span class="nav__name">Dashboard</span>
          </a>

          {links.map(({ key, href, label,icons }) => (
            <a key={key} href={href} class={router.pathname == href ? "nav__link active" : "nav__link"}>
              <i class={icons}></i>
              <span class="nav__name"> {label} </span>
            </a>
          ))}
        </div>
      </div>

      <a href="#" class="nav__link">
        <i class='bx bx-log-out nav__icon' ></i>
        <span class="nav__name">Log Out</span>
      </a>
    </nav>
  </div>
  );
};