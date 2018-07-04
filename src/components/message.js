import notification from 'antd/lib/notification'
import 'antd/lib/notification/style/css'

export function message(msg, icon, decription) {
    return notification.open({
        className: 'antd/lib/notification/style/css',
        icon: icon,
        message: msg,
        description: decription
    })
}