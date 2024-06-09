import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { PackageIndexLink } from '@ag108/ct-utils';

import { AlgebraState, AlgorithmState, ArithmeticState, CalculusState, ChainState, GeometryState, MatrixState } from '~/state';

const libraries: PackageLibraries = [
	{ name: 'chain', tabState: ChainState },
	{ name: 'arithmetic', tabState: ArithmeticState },
	{ name: 'geometry', tabState: GeometryState },
	{ name: 'algebra', tabState: AlgebraState },
	{ name: 'calculus', tabState: CalculusState },
	{ name: 'matrix', tabState: MatrixState },
	{ name: 'algorithm', tabState: AlgorithmState },
]

export const IndexMath = ({setTab}: {setTab: TabDispatchAction}) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>
				[<PackageIndexLink setTab={setTab} />] math libraries ({libraries.length}):
			</p>
			<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className='uppercase outline-none'>
							{i + 1}) [<span className='hover:underline cursor-pointer'>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
}

export { Chain, Arithmetic, Geometry, Algebra, Calculus, Matrix, Algorithm } from '~/libs'