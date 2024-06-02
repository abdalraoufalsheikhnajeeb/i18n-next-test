// 'use client';

// import { useState } from 'react';
// import { type getDictionary } from '../../../get-dictionary';

// export default function Counter({ dic }: { dic: Awaited<ReturnType<typeof getDictionary>> }) {
// 	const [count, setCount] = useState(0);
// 	return (
// 		<p>
// 			This component is rendered on client:
// 			<button onClick={() => setCount((n) => n - 1)}>{dic?.decrement}</button>
// 			{count}
// 			<button onClick={() => setCount((n) => n + 1)}>{dic?.increment}</button>
// 		</p>
// 	);
// }
