// —————————————————————————
// Interfaceで表現
// —————————————————————————

interface Bread {
  calories: number
}
interface Bread {
  type: string
}
const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// —————————————————————————
// 型エイリアスで表現
// —————————————————————————

type MaboDofu = {
  calories: number
  spicyLevel: number
}
type Rice = {
  calories: number
  gram: number
}
type MaboDon = MaboDofu & Rice // 交差型(union)
const mabodon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// —————————————————————————
// インターフェースの継承
// —————————————————————————

interface Book {
  page: number
  title: string
}
interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}
const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

// —————————————————————————
// インターフェースで型エイリアスを継承
// —————————————————————————

type BookType = {
  page: number
  title: string
}
interface Handbook extends BookType {
  theme: string
}
const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}