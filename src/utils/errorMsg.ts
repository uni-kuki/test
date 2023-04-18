/**
 * @Description 封装错误响应码
 * @Date 2023/4/10 周一 10:08
 * @Author Tang-J-L
 */
import { ERROR_CODE } from './constans'

export const errorMsg = ( code : string | number ) : string => {
    let message = '未知错误'
    switch( code ) {
        case ERROR_CODE:
            message = '错误的请求'
            break
        case 401:
            message = '未授权，请重新登录'
            break
        case '403':
            message = '拒绝访问'
            break
        case '404':
            message = '请求错误,未找到该资源'
            break
        case '405':
            message = '请求方法未允许'
            break
        case '408':
            message = '请求超时'
            break
        case '500':
            message = '服务器端出错'
            break
        case '501':
            message = '网络未实现'
            break
        case '502':
            message = '网络错误'
            break
        case '503':
            message = '服务不可用'
            break
        case '504':
            message = '网络超时'
            break
        case '505':
            message = 'http版本不支持该请求'
            break
        default:
            message = `其他连接错误 --${ code }`
    }
    return message
}
