// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { PresentationControls, Stage, useGLTF, useAnimations } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';

// const AnModel = () => {
// 	const [scrollPosition, setScrollPosition] = useState(0);
// 	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
// 	const Model = (props) => {
// 		const group = useRef();
// 		const { scene, animations } = useGLTF('/images/zero-model.glb');

// 		const { actions, names } = useAnimations(animations, group);

// 		useEffect(() => {
// 			if (scrollPosition >= 0 && scrollPosition < 700) {
// 				actions[names[0]]?.reset()?.fadeIn(0.5)?.play();
// 			}
// 			if (scrollPosition >= 700 && scrollPosition < 1400) {
// 				actions[names[1]]?.reset()?.fadeIn(0.5)?.play();
// 			}
// 			if (scrollPosition >= 1400 && scrollPosition < 2300) {
// 				actions[names[2]]?.reset()?.fadeIn(0.5)?.play();
// 			}
// 			if (scrollPosition >= 2300 && scrollPosition < 3000) {
// 				actions[names[3]]?.reset()?.fadeIn(0.5)?.play();
// 			}
// 			if (scrollPosition >= 3000) {
// 				actions[names[4]]?.reset()?.fadeIn(0.5)?.play();
// 			}
// 		});
// 		return (
// 			<group ref={group} dispose={null}>
// 				<primitive object={scene} {...props} />
// 			</group>
// 		);
// 	};

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setScrollPosition(window.scrollY);
// 		};
// 		window.addEventListener('scroll', handleScroll);
// 		return () => {
// 			window.removeEventListener('scroll', handleScroll);
// 		};
// 	}, [isMobile]);

// 	const marginStart = !isMobile
// 		? scrollPosition >= 300 && scrollPosition < 400
// 			? '10vw'
// 			: scrollPosition >= 400 && scrollPosition < 500
// 			? '20vw'
// 			: scrollPosition >= 500 && scrollPosition < 600
// 			? '30vw'
// 			: scrollPosition >= 600 && scrollPosition < 1800
// 			? '40vw'
// 			: scrollPosition >= 1800 && scrollPosition < 1900
// 			? '20vw'
// 			: scrollPosition >= 1900 && scrollPosition < 2000
// 			? '0vw'
// 			: scrollPosition >= 2000 && scrollPosition < 2100
// 			? '-20vw'
// 			: scrollPosition >= 2100 && scrollPosition < 2200
// 			? '-30vw'
// 			: scrollPosition >= 2200
// 			? '-40vw'
// 			: '0'
// 		: '0';

// 	return (
// 		<Canvas
// 			dpr={[1, 2]}
// 			shadows={false}
// 			camera={{ fov: 53, near: 1000000, far: 100, position: [0, 0.5, 5] }}
// 			style={{
// 				position: 'fixed',
// 				top: '0vh',
// 				width: '55vh',
// 				height: '120vh',
// 				marginInlineStart: marginStart,
// 				transition: '1.1s ease-in-out',
// 			}}>
// 			<PresentationControls speed={1.5} zoom={0.5} polar={[-0.1, -0.1]}>
// 				<Stage>
// 					<Model />
// 					<Environment preset='sunset'  />
// 				</Stage>
// 			</PresentationControls>
// 		</Canvas>
// 	);
// };

// export default AnModel;
