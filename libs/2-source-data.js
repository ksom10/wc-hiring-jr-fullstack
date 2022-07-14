import _ from "lodash"

const ids = [
  'obj1',
  'obj2',
  'obj3',
  'obj4',
  'obj5'
]
const objs = {
  obj1: 'Data 1',
  obj2: 'Data 2',
  obj3: 'Data 3',
  obj4: 'Data 4',
  obj5: 'Data 5'
}
export default {
  getIds () {
    return new Promise(resolve => {
      setTimeout(() => resolve(ids), 1000)
    })
  },
  getText (id) {
    return new Promise(resolve => {
      setTimeout(() => resolve(objs[id]), 1000)
    })
  },
  getAnswer () {
    return _.toArray(objs)
  }
}