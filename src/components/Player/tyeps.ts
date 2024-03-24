export type TPosition ={
    position: 'gk' | 'df' | 'md' | 'fd' | 'dm' | 'am';
  }
export type TPlayer = {
    id: number,
    name: string,
    team:string,
    salary: number,
    postion: string
  }