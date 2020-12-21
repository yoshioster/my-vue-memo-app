import Memo from "./Memo"

const LOCALSTRAGE_KEY = 'memos'

export default class Memos {

  private list: Memo[]

  private nextId = 1

  constructor() {
    let list: Memo[]
    if (LOCALSTRAGE_KEY in localStorage) {
      list = JSON.parse(localStorage.getItem(LOCALSTRAGE_KEY) as string)
      const memoList: Memo[] = []
      list.forEach((memo: Memo) => {
        this.nextId = (this.nextId < memo.id) ? memo.id : this.nextId
        memoList.push(new Memo(memo.id, memo.title, memo.body))
      })
      this.list = memoList
    } else {
      this.list = []
    }
  }

  public getList() {
    return this.list
  }

  public getMemo(id: number) {
    const memo = this.list.find(memo => memo.id === id)
    return memo ? memo : this.getNewMemo()
  }

  public getNewMemo() {
    return new Memo(this.nextId, '', '')
  }

  public addMemo(memo: Memo) {
    this.list.push(memo)
    this.nextId++
    localStorage.setItem(LOCALSTRAGE_KEY, JSON.stringify(this.list))
  }
}