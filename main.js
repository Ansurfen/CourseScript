const beisu = {
    beisumian: "color: rgb(203, 203, 203); position: absolute;top:18px;right: 147px;font-size: 13px;cursor:pointer;",
    tianjieparent: "background: rgba(0, 0, 0, 0.8);width: 35px;height: 100px;position: absolute;top:-100px;right: -5px; display: none;",
    tianjieparent1: "background: rgba(0, 0, 0, 0.8);width: 35px;height: 100px;position: absolute;top:-100px;right: -5px; display: block;",
    tiaojie: "width: 35px;height: 20px; line-height: 20px; display: block;",
    tiaojiedb: "width: 35px;height: 20px; line-height: 20px; display: block; background-color: rgb(141, 139, 139);"
}

const FINISH = 'ans-attach-ct ans-job-finished'

var onTimer = setInterval("judge()", 3000)

var set_v_style = function () {
    let page = document.querySelector('#iframe').contentDocument.querySelectorAll('p')
    let task_arr = []
    for (let i = 0; i < page.length; i++) {
        let isTask = document.querySelector('#iframe').contentDocument.querySelectorAll('p')[i].querySelectorAll('div')
        if (isTask.length < 1) {
            console.log(123);
        } else {
            task_arr.push(page[i])
        }
    }
    var flag2 = [], flag3 = [], flag4 = []
    for (let i = 0; i < task_arr.length; i++) {
        let count = task_arr[i].querySelector('iframe').contentDocument.querySelectorAll('.vjs-tech')
        let img_count = task_arr[i].querySelector('iframe').contentDocument.querySelectorAll('.imglook')
        if (count.length >= 1) {
            flag2.push(count)
            flag3.push(task_arr[i])
        }
        if (img_count.length >= 1) {
            flag4.push(task_arr[i])
        }
    }
    for (let i = 0; i < flag3.length; i++) {
        let flag = 1
        if (flag3[i].querySelector('iframe').contentDocument.querySelectorAll('.video-js')[0].querySelector('.vjs-control-bar').querySelectorAll('#two').length >= 1) {
            flag = 0
        }
        if (flag === 1) {
            flag3[i].querySelector('iframe').contentDocument.querySelectorAll('.video-js')[0].querySelector('.vjs-control-bar').insertAdjacentHTML('beforeend', '<div id="two">倍速</div>');
            flag3[i].querySelector('iframe').contentDocument.querySelectorAll('.video-js')[0].querySelector('.vjs-control-bar').querySelector('#two').insertAdjacentHTML('beforeend', '<div class="two0"><div id="two1">x2.00</div><div id="two2">x1.75</div><div id="two3">x1.50</div><div id="two4">x1.25</div><div id="two5">x1.00</div></div>');
            flag = 0
        }
        var ju = flag3[i].querySelector('iframe').contentDocument.querySelectorAll('.video-js')[0].querySelector('.vjs-control-bar').querySelector('#two')
        ju.onmousemove = function () {
            ju.querySelector('.two0').style.cssText = '' + beisu["tianjieparent1"] + ''
        }
        ju.onmouseout = function () {
            console.log('鼠标移出了');
            ju.querySelector('.two0').style.cssText = '' + beisu["tianjieparent"] + ''
        }
        var ju1 = flag2[i]
        flag3[i].querySelector('iframe').contentDocument.querySelectorAll('.video-js')[0].querySelector('.vjs-control-bar').querySelector('#two').style.cssText = '' + beisu["beisumian"] + ''
        ju.querySelector('.two0').style.cssText = '' + beisu["tianjieparent"] + ''
        let v = function (x) {
            console.log(ju1[0]);
            ju1[0].playbackRate = x
        }
        const _v = [2, 2, 1.75, 1.5, 1.25, 1]
        for (let i = 1; i <= 5; i++) {
            ju.querySelector('.two0').querySelector('#two' + i + '').onmousemove = function () {
                ju.querySelector('.two0').querySelector('#two' + i + '').style.cssText = '' + beisu["tiaojiedb"] + ''
            }
            ju.querySelector('.two0').querySelector('#two' + i + '').onmouseout = function () {
                ju.querySelector('.two0').querySelector('#two' + i + '').style.cssText = '' + beisu["tiaojie"] + ''
            }
            ju.querySelector('.two0').querySelector('#two' + i + '').style.cssText = '' + beisu["tiaojie"] + ''
            ju.querySelector('.two0').querySelector('#two' + i + '').onclick = function () {
                v(_v[i])
                flag2[i][0].playbackRate = _v[i]
            }
        }
    }
}

var getTask = function () {
    const v = "document.querySelector('#iframe').contentDocument.querySelectorAll('p')"
    let a = eval(v)
    let task_arr = []
    for (let i = 0; i < a.length; i++) {
        if (eval(v + "[i].querySelectorAll('div')").length < 1) {
            console.log(123);
        } else {
            task_arr.push(a[i])
        }
    }
    var video_arr = [], parent_video_arr = [], ppt_arr = []
    for (let i = 0; i < task_arr.length; i++) {
        let f = "task_arr[i].querySelector('iframe').contentDocument.querySelectorAll('{{object}}')"
        let count = eval(f.replace('{{object}}', '.vjs-tech'))
        let img_count = task_arr[i].querySelector('iframe').contentDocument.querySelectorAll('.imglook')
        if (count.length >= 1) {
            video_arr.push(count)
            parent_video_arr.push(task_arr[i])
        }
        if (img_count.length >= 1) {
            ppt_arr.push(task_arr[i])
        }
    }
    return [video_arr, parent_video_arr, ppt_arr]
}

var hasTask = function (arr) {
    if (arr.length === 0) {
        return true
    }
    var status = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].querySelectorAll('.ans-attach-ct').length > 1) {
            let arrjoborpptdbl = arr[i].querySelectorAll('.ans-attach-ct')
            let arrjoborppt = []
            for (let i = 0; i < arrjoborpptdbl.length; i++) {
                if (arrjoborpptdbl[i].querySelectorAll('.ans-job-icon').length >= 1) {
                    arrjoborppt.push(arrjoborpptdbl[i])
                }
            }
            for (let j = 0; j < arrjoborppt.length; j++) {
                if (arrjoborppt[j].className != FINISH) {
                    if (arrjoborppt[j].querySelector('iframe').contentDocument.querySelectorAll('.imglook').length != 0) {
                        let a = arrjoborppt[j].querySelector('iframe').contentDocument.querySelector('.imglook').querySelector('iframe').contentDocument.querySelector('html')
                        a.scroll({ top: 100000, left: 0, behavior: 'smooth' });
                        status = false
                        break
                    }
                    if (arrjoborppt[j].querySelector('iframe').contentDocument.querySelectorAll('.vjs-tech').length >= 1) {
                        arrjoborppt[j].querySelector('iframe').contentDocument.querySelector('.vjs-tech').play()
                        arrjoborppt[j].querySelector('iframe').contentDocument.querySelector('.vjs-tech').volume = 0
                        set_v_style()
                        status = false
                        break
                    }
                }
            }
        }
        if (arr[i].querySelector('div').className != FINISH && arr[i].querySelectorAll('.ans-attach-ct').length < 2) {
            arr[i].querySelector('iframe').contentDocument.querySelector('.vjs-tech').play()
            arr[i].querySelector('iframe').contentDocument.querySelector('.vjs-tech').volume = 0
            set_v_style()
            status = false
            break
        }
    }
    return status
}

var hasPPT = function (imgnum) {
    if (imgnum.length === 0) {
        return true
    }
    var status = true
    for (let i = 0; i < imgnum.length; i++) {
        if (imgnum[i].querySelectorAll('.ans-attach-ct').length > 1) {
            if (imgnum[i].querySelectorAll('.ans-job-icon ').length < 1) {
                return true
            }
            let arrpptorjobdbl = imgnum[i].querySelectorAll('.ans-attach-ct')
            let arrpptorjob = []
            for (let i = 0; i < arrpptorjobdbl.length; i++) {
                if (arrpptorjobdbl[i].querySelectorAll('.ans-job-icon').length >= 1) {
                    arrpptorjob.push(arrpptorjobdbl[i])
                }
            }
            for (let j = 0; j < arrpptorjob.length; j++) {
                if (arrpptorjob[j].className != FINISH) {
                    if (arrpptorjob[j].querySelector('iframe').contentDocument.querySelectorAll('.imglook').length != 0) {
                        let a = arrpptorjob[j].querySelector('iframe').contentDocument.querySelector('.imglook').querySelector('iframe').contentDocument.querySelector('html')
                        a.scroll({ top: 100000, left: 0, behavior: 'smooth' });
                        status = false
                        break
                    }
                    if (arrpptorjob[j].querySelector('iframe').contentDocument.querySelectorAll('.vjs-tech').length >= 1) {
                        arrpptorjob[j].querySelector('iframe').contentDocument.querySelector('.vjs-tech').play()
                        arrpptorjob[j].querySelector('iframe').contentDocument.querySelector('.vjs-tech').volume = 0
                        set_v_style()
                        status = false
                        break
                    }
                }
            }
        }
        if (imgnum[i].querySelectorAll('.ans-attach-ct').length < 2) {
            if (imgnum[i].querySelectorAll('.ans-job-icon ').length < 1) {
                return true
            }
            if (imgnum[i].querySelector('div').className != FINISH) {
                let a = imgnum[i].querySelector('iframe').contentDocument.querySelector('.imglook').querySelector('iframe').contentDocument.querySelector('html')
                a.scroll({ top: 100000, left: 0, behavior: 'smooth' });
                status = false
                break
            }
        }
    }
    return true
}

var offTimer = function () {
    let flago = []
    for (let i = 0; i < document.querySelectorAll('.posCatalog_level').length; i++) {
        flago.push(document.querySelectorAll('.posCatalog_level')[i].querySelectorAll('.posCatalog_select'))
    }
    let co = flago[flago.length - 1]
    let doo = co[co.length - 1]
    doo.querySelector('span').title === document.querySelector('.prev_title').title ? function () { clearInterval(onTimer); console.log('视频任务点完成') } : null
}

function judge() {
    if (getTask()[2].length != 0) {
        let a = getTask()[2][0].querySelector('iframe').contentDocument.querySelector('.imglook').querySelector('iframe').contentDocument.querySelector('html')
        a.scroll({ top: 100000, left: 0, behavior: 'smooth' });
    }
    if (hasTask(getTask()[1]) && hasPPT(getTask()[2])) {
        document.querySelector('.jb_btn').click()
    }
}
