import lorenz from '../assets/lorenz.png';
import julia from '../assets/julia.png';
import reaction from '../assets/reaction.png';
import gravity from '../assets/gravity.png';
import flock from '../assets/flock.png';
import chladni from '../assets/chladni.png';

export const art = { lorenz, julia, reaction, gravity, flock, chladni };
export const posters = [
  { id: 'lorenz', image: lorenz, name: '蝴蝶效应', method: 'Lorenz attractor' },
  { id: 'julia', image: julia, name: '无穷边界', method: 'Julia set' },
  { id: 'reaction', image: reaction, name: '图灵花园', method: 'Gray–Scott model' },
  { id: 'gravity', image: gravity, name: '引力织机', method: 'Particle field' },
  { id: 'flock', image: flock, name: '群体之舞', method: 'Boids' },
  { id: 'chladni', image: chladni, name: '声音的形状', method: 'Nodal patterns' },
];
