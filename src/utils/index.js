'use sitic'
import * as dayjs from 'dayjs'

class Utils {
    /**
     * 
     * @param {*} value 
     * @param {*} format
     */
    static format (value, format = 'YYYY-MM-DD HH:mm:ss') {
        return dayjs(value).format(format)
    }
    /**
     * 复制文案
     * @param {*} value
     */
    static isCopy(value){
        let oInput = document.createElement('textarea')
        oInput.value = value
        document.body.appendChild(oInput)
        oInput.select()
        document.execCommand("Copy")
        oInput.style.display = 'none'
        document.body.removeChild(oInput)
        alert('复制内容成功')
    }

}

export default Utils