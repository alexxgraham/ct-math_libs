import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';

import { PackageLinks, MathIndexState  } from '@ag108/ct-utils';

const PKG_NAME = 'math';

export const Chain = ({setTab}:{setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['and', 'not', 'or', 'xor']} pkgName={PKG_NAME} libName='image' backTab={MathIndexState} setTab={setTab} />;
}
export const Arithmetic = ({setTab}:{setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['basic', 'fraction', 'decimal', 'conversion']} pkgName={PKG_NAME} libName='arithmetic' backTab={MathIndexState} setTab={setTab} />;
};
export const Geometry = ({setTab}:{setTab: TabDispatchAction}) =>  {
	return <PackageLinks modules={['distance', 'perimeter', 'area', 'volume', 'radius', 'circumference']} pkgName={PKG_NAME} libName='geometry' backTab={MathIndexState} setTab={setTab} />;
};
export const Algebra = ({setTab}:{setTab: TabDispatchAction}) =>  {
	return <PackageLinks modules={['mean', 'median', 'mode', 'expression', 'equation']} pkgName={PKG_NAME} libName='algebra' backTab={MathIndexState} setTab={setTab} />;
};
export const Algorithm = ({setTab}:{setTab: TabDispatchAction}) =>  {
	return <PackageLinks modules={['']} pkgName={PKG_NAME} libName='algorithm' backTab={MathIndexState} setTab={setTab} />;
};
export const Calculus = ({setTab}:{setTab: TabDispatchAction}) =>  {
	return <PackageLinks modules={['']} pkgName={PKG_NAME} libName='calculus' backTab={MathIndexState} setTab={setTab} />;
};
export const Matrix = ({setTab}:{setTab: TabDispatchAction}) =>  {
	return <PackageLinks modules={['']} pkgName={PKG_NAME} libName='matrix' backTab={MathIndexState} setTab={setTab} />;
};
