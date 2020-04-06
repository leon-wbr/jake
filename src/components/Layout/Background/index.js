import React, { useState, useEffect, useRef } from 'react';

import './Background.scss';

import logo from 'assets/svg/Logo.svg';
import circleLightBlue from 'assets/svg/CircleSidebar_LightBlue.svg';
import circleDarkBlue from 'assets/svg/CircleSidebar_DarkBlue.svg';
import circlePink from 'assets/svg/CircleSidebar_Pink.svg';

const globalForce = 0;
const magnet = 5000;

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({});
  const [circleCSS, setCircleCSS] = useState({});

  const circleBig = useRef(null);
  const circleMedium = useRef(null);
  const circleSmall = useRef(null);

  // Initialize EventListener
  useEffect(() => {
    document.body.addEventListener('mousemove', checkMousePos);
  }, []);

  const checkMousePos = (e) => setMousePos({ x: e.screenX, y: e.screenY });

  // Set initial coordinates
  const getElemName = (elem) => elem.current.className.split("__")[1];

  useEffect(() => {
    setInitialPos({
      ...initialPos,
      [getElemName(circleBig)]: { x: circleBig.current.offsetLeft, y: circleBig.current.offsetTop },
      [getElemName(circleMedium)]: { x: circleMedium.current.offsetLeft, y: circleMedium.current.offsetTop },
      [getElemName(circleSmall)]: { x: circleSmall.current.offsetLeft, y: circleSmall.current.offsetTop },
    });
  }, [circleBig, circleMedium, circleSmall])

  // Adjust circles on every mouse position change
  useEffect(() => adjustCircles, [mousePos]);

  const adjustCircles = () => {
    setCircleCSS({
      [getElemName(circleBig)]: calculatePower(circleBig),
      [getElemName(circleMedium)]: calculatePower(circleMedium),
      [getElemName(circleSmall)]: calculatePower(circleSmall),
    });
  };

  const calculatePower = (elem) => {
    const elemName = getElemName(elem);
    if (!initialPos[elemName]) return;

    // Home
    const homeX = initialPos[elemName].x;
    const homeY = initialPos[elemName].y;

    // Coordinates
    const x0 = elem.current.offsetLeft;
    const y0 = elem.current.offsetTop;

    // Distance
    const distanceX = mousePos.x - x0;
    const distanceY = mousePos.y - y0;
    const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

    // Power
    const powerX = x0 - (distanceX / distance) * magnet / distance;
    const powerY = y0 - (distanceY / distance) * magnet / distance;

    // Force
    let forceX = (globalForce + (homeX - x0) / 2) / 2.1;
    let forceY = (globalForce + (homeY - y0) / 2) / 2.1;

    return { left: powerX + forceX, top: powerY + forceY };
  };

  return (
    <div className="Background">
      <img className="Background__Logo" src={logo} />
      <img className="Background__SideLightBlue" src={circleLightBlue} ref={circleBig} style={circleCSS['SideLightBlue']} />
      <img className="Background__SideDarkBlue" src={circleDarkBlue} ref={circleMedium} style={circleCSS['SideDarkBlue']} />
      <img className="Background__SidePink" src={circlePink} ref={circleSmall} style={circleCSS['SidePink']} />
    </div>
  );
};

export default Background;
