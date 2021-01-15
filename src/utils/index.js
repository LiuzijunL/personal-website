'use sitic'

class Utils {
    /**
     * 博客配置
     */
    static userInfo = {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
        nickName: 'Feibo'
    }
    /**
     * 复制文案
     * @param value
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