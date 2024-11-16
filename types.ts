// 各ネストされたオブジェクトを個別の型として定義
export type E = {
  f: string;
  g: number;
};

export type H = {
  i: string;
  j: number;
};

export type K = {
  l: string;
  m: number;
};

export type N = {
  o: string;
  p: number;
};

export type Q = {
  r: string;
  s: number;
};

// メインの型定義
export type A = {
  a: string;
  b: number;
  c: boolean;
  d: string[];
  e: E;
  h: H;
  k: K;
  n: N;
  q: Q;
};
