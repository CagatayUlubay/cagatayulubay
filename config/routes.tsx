import {Breadcrumb, Layout, Menu} from "antd";
import {ReactNode} from "react";

type RouteProps = {
    route: string,
    items: ReactNode
}
const routing:RouteProps[] = [
    {
        route: '/imprint',
        items: <Breadcrumb.Item>Impressum</Breadcrumb.Item>
    },
    {
        route: '/_error',
        items: <Breadcrumb.Item>Fehler</Breadcrumb.Item>
    }
]

export default routing