import axios from 'axios'
export function ajax (url, data) {
    let _data = Object.assign({}, data, {
        api_type: 1,
    })
    let opt = formData(_data)
    return axios.post(url, opt).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function formData (data) {
    let arr = [];
    for (let it in data) {
        arr.push(encodeURIComponent(it) + "=" + encodeURIComponent(data[it]))
    }
    return arr.join("&")
}
