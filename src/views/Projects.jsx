import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <nav>
        <ul>
          <li><NavLink to="/projects/games">See games</NavLink></li>
          <li><NavLink to="/projects/apps">See apps</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
