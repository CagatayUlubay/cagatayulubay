import {SessionProvider} from "next-auth/react"
import {Component, ComponentProps, useState} from "react"
import './_app.scss'
import {Breadcrumb, Layout, Menu} from "antd";
import useSWRMutation from "swr/mutation";
import poster from "../lib/poster";
import {useRouter} from "next/router";
import Link from "next/link";
import routing from "../config/routes"
import MenuItems from "../components/MenuItems";

const {
  Content,
  Footer,
  Sider,
} = Layout;

type Props = {
  Component: any,
  pageProps: ComponentProps<any>
}

export const App:React.FC<Props> = ({
  Component,
  pageProps: { session, ...pageProps}
}:Props) => {
  const router = useRouter()
  const currentRoute = routing.find((routeEntry) => routeEntry.route === router.pathname)
  const {trigger} = useSWRMutation('/api/users', poster)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [newUserCreated, setNewUserCreated] = useState<boolean>(false)

  if (session) {
    if (!newUserCreated) {
      trigger({username: session.user?.name})
      setNewUserCreated(true)
    }
  }

  return (
    <SessionProvider session={session}>
      <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div>{`{LOGO}`}</div>
          <MenuItems/>
        </Sider>
        <Layout className={"site-layout"}>
          <Content style={{ margin: '0 16px'}}>
            <Breadcrumb style={{ margin: '16px 0'}}>
              <Breadcrumb.Item>
                <Link href={'/'}>Übersicht</Link>
              </Breadcrumb.Item>
              {currentRoute &&
                (
                  <>{currentRoute.items}</>
                )
              }
            </Breadcrumb>
            <Component {...pageProps}/>
          </Content>
          <Footer style={{}}>
            <Link href={'/imprint'}>Impressum</Link>
            <div>Cagatay Ulubay &copy; 2023</div>
          </Footer>
        </Layout>
      </Layout>
    </SessionProvider>
  )
}

export default App