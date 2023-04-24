import React from "react"
import {DesktopOutlined, LoginOutlined, LogoutOutlined, RedEnvelopeOutlined} from "@ant-design/icons";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {Menu} from "antd";

const MenuItems:React.FC = () => {
  const {data: session} = useSession()
  const menuItems = [
    {
      key: 'home',
      icon: <DesktopOutlined/>,
      label: <Link href={'/'} >Übersicht</Link>
    },
    {
      key: 'imprint',
      icon: <RedEnvelopeOutlined />,
      label: <Link href={'/imprint'}>Impressum</Link>
    },
    {
      key: 'accountStatus',
      icon: session ? <LoginOutlined /> : <LogoutOutlined />,
      label: session ? 'Abmelden' : 'Anmelden',
      trigger: () => session ? signOut() : signIn()
    }
  ]

  return <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={['home']} items={menuItems} />
}

export default MenuItems