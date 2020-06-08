export default {
  changeCounty (state, county) {
    state.county = county
    try {
      localStorage.county = county
    } catch (error) {
      console.log(error)
    }
  },
  numAdd (state, arr) {
    state.cateList[arr[1]].recommendNum = arr[0] + 1
  },
  numSub (state, newArr) {
    state.cateList[newArr[1]].recommendNum = newArr[0] - 1
  }
}
