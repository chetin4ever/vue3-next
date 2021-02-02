export default function(next, store) {
  console.log(store.state.isloggedIn)
  if (!store.state.isloggedIn) {
    next("/")
    store.commit("setLoginModal", true)
  } else {
    next()
  }
}
