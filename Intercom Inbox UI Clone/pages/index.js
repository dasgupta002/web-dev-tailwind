import Sidebar from './components/sidebar'
import Settings from './components/settings'
import Chats from './components/chats'
import Inbox from './components/inbox'
import Tags from './components/tags'

export default function Home() {
  return (
    <div className = "flex flex-row bg-gray-200 h-screen">
      <Sidebar />
      <Settings />
      <Chats />
      <Inbox />
      <Tags />
    </div>
  )
}