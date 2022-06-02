import axios from '.'  //import axios from './index'

export function getLists(pageNo,pageSize){  //分页列表数据
    //return axios.get('/home/p/1/10');
    return axios({
        method:'get',
        url:`/home/page/${pageNo}/${pageSize}`
    })
}


export function getTotal(){  //所有列表的数据
    return axios({
        method:'get',
        url:`/home`
    })
}

export function getDetail(data){  //详情页数据
    return axios({
        method:'get',
        url:`/detail`,
        params:data
    })
}