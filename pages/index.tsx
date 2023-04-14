import useSWR from "swr"
import useSWRMutation from "swr/mutation"
import fetcher from "../lib/fetcher"
import poster from "../lib/poster"
import {users} from "@prisma/client"
import {signIn, signOut, useSession} from "next-auth/react";
import type {MenuProps} from 'antd'
import {Layout, Menu, theme, Breadcrumb} from 'antd';
import {useState} from "react";
import {DesktopOutlined, LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;

let newUserCreated = false

type MenuItem = Required<MenuProps>

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as unknown as MenuItem
}

let items: ItemType[] = [
  {
    key: 'home',
    icon: <DesktopOutlined/>,
    label: 'Übersicht'
  },
]

export const Index:React.FC = () => {
  const {data, error, isLoading} = useSWR('/api/users', fetcher)
  const {trigger} = useSWRMutation('/api/users', poster)
  const {data: session} = useSession()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  if (error) return <div>Error..</div>

  if (session) {
    if (!newUserCreated) {
      trigger({username: session.user?.name})
      console.log(session, session.user?.name)
      newUserCreated = true
    }

    items.push(
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Abmelden',
        onClick: () => {signOut()}
      }
    )
  } else {
    items.push(
      {
        key: 'login',
        icon: <LoginOutlined />,
        label: 'Anmelden',
        onClick: () => {signIn()}
      }
    )
  }

  return (
    <>
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div>{`{LOGO}`}</div>
          <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={['home']} items={items} />
        </Sider>
        <Layout className={"site-layout"}>
          <Content style={{ margin: '0 16px'}}>
            <Breadcrumb style={{ margin: '16px 0'}}>
              <Breadcrumb.Item>Start</Breadcrumb.Item>
              <Breadcrumb.Item>Übersicht</Breadcrumb.Item>
            </Breadcrumb>
            <div>
            {session && (
              <>
                Herzlich willkommen <strong><Link href={`https://www.instagram.com/${session.user?.name}`}>@{session.user?.name}</Link></strong>!

                <h1>Teilnehmende Nutzer</h1>
                {isLoading && (
                  <div>Lade Liste...</div>
                )}
                {data && data.map((user:users) => {
                  return <Link href={`https://www.instagram.com/${user.name}`} target={'_blank'}>@{user.name}</Link>
                })}
              </>
            )}
              {!session && (
                <>
                  Melden dich an, um fortzufahren!
                </>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Index