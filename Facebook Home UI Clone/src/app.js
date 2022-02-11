import { Navbar } from "./components/nav"
import { Sidebar } from "./components/sidebar"
import { Story } from "./components/story"
import { Post } from "./components/post"
import { Room } from "./components/room"
import { Alert } from "./components/alert"
import { Friends } from "./components/friends"
import { Sponsored } from "./components/sponsored"

function App() {
  return (
    <>
      <Navbar />
      <div className = "flex flex-row gap-4 h-full">
        <Sidebar />
        <div className = "flex flex-col items-center flex-grow gap-6">
          <Story />
          <Post />
          <Room />
          <Alert />
          <Friends />
        </div>
        <Sponsored />
      </div>
    </>
  )
}

export default App