export function verificaToken(){
    const token = localStorage.getItem('Token')
    if(token) {
        return true
    } else {
        return false
    }
}